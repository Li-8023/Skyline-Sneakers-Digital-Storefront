"use client";
import { CartContext, cartProductPrice } from "@/components/AppContext";
import SectionHeaders from "@/components/Layout/SectionHeaders";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Delete from "@/components/icons/Delete";
import AddressInputs from "../../components/Layout/AddressInputs";
import { useProfile } from "../../components/UseProfile";

export default function CartPage() {
  const { cartProducts, removeCartProduct } = useContext(CartContext);
  const [address, setAddress] = useState({});
  const { data: profileData } = useProfile();

  useEffect(() => {
    if (profileData?.city) {
      const { phone, streetAddress, city, postalCode, country } = profileData;
      const addressFromProfile = {
        phone,
        streetAddress,
        city,
        postalCode,
        country,
      };
      setAddress(addressFromProfile);
    }
  }, [profileData]);

  let total = 0;

  for (const p of cartProducts) {
    total += cartProductPrice(p);
  }

  function handleAddressChange(propName, value) {
    setAddress((prevAddress) => ({ ...prevAddress, [propName]: value }));
  }
  return (
    <section className="mt-8">
      <div className="text-center">
        <SectionHeaders mainHeader="Cart" />
      </div>

      <div className="mt-8 grid gap-8 grid-cols-2">
        <div>
          {cartProducts?.length === 0 && (
            <div>No products in your shopping cart </div>
          )}
          {cartProducts?.length > 0 &&
            cartProducts.map((product, index) => (
              <div className="flex gap-4 mb-2 border-b py-2 items-center">
                <div className="w-24">
                  <Image
                    src={product.image}
                    width={240}
                    height={240}
                    alt={""}
                  />
                </div>
                <div className="grow">
                  <h3 className="font-semibold">{product.name} </h3>
                  {product.size && (
                    <div className="text-gray-500 text-sm">
                      Size: <span>{product.size.name}</span>
                    </div>
                  )}
                </div>
                <div className="text-lg font-semibold">
                  ${new Intl.NumberFormat().format(cartProductPrice(product))}
                </div>
                <div className="ml-2">
                  <button
                    type="button"
                    onClick={() => removeCartProduct(index)}
                    className="border-0 p-2"
                  >
                    <Delete />
                  </button>
                </div>
              </div>
            ))}
          <div className="py-2 text-right pr-16">
            <span className="text-gray-500">Subtotal:</span>
            <span className="text-lg font-semibold pl-2">
              ${new Intl.NumberFormat().format(total)}
            </span>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2>Checkout</h2>
          <form>
            <AddressInputs
              addressProps={address}
              setAddressProp={handleAddressChange}
            />
            <button type="submit">
              Pay ${new Intl.NumberFormat().format(total)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
