"use client";
import { CartContext, cartProductPrice } from "@/components/AppContext";
import SectionHeaders from "@/components/Layout/SectionHeaders";
import { useContext } from "react";
import Image from "next/image";
import Delete from "@/components/icons/Delete";

export default function CartPage() {
  const { cartProducts, removeCartProduct } = useContext(CartContext);
  return (
    <section className="mt-8">
      <div className="text-center">
        <SectionHeaders mainHeader="Cart" />
      </div>

      <div className="mt-4 grid gap-4 grid-cols-2">
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
        </div>
        <div>right</div>
      </div>
    </section>
  );
}
