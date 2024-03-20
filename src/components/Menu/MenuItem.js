import { useContext, useState } from "react";
import { CartContext } from "../AppContext";
import toast from "react-hot-toast";
import MenuItemTile from "@/components/Menu/MenuItemTile";
import Image from "next/image";

export default function MenuItem(menuItem) {
  const { image, name, description, basePrice, sizes } = menuItem;
  const { addToCart } = useContext(CartContext);
  const [showPopUp, setShowPopUp] = useState(false);

  const [selectedSize, setSelectedSize] = useState(sizes?.[0] || null);
  function handleAddToCartButtonClick() {
    
    if (sizes.length > 0 && !showPopUp) {
      setShowPopUp(true);
      return;
    } 

    addToCart(menuItem, selectedSize);
    setShowPopUp(false);
    toast.success("Added to cart!");
  }

  let selectedPrice = basePrice;
  if (selectedSize) {
    selectedPrice = selectedSize.price;
  }

  return (
    <>
      {showPopUp && (
        <div
          onClick={() => setShowPopUp(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
        >
          <div
            onClick={(ev) => ev.stopPropagation()}
            className=" max-w-md bg-white p-2 rounded-lg my-8"
          >
            <div
              className="overflow-y-scroll p-2"
              style={{ maxHeight: "calc(100vh - 100px)" }}
            >
              <Image
                src={image}
                alt={name}
                width={300}
                height={200}
                className="mx-auto"
              />
              <h2 className="text-lg font-bold text-center mb-2">{name}</h2>
              <p className="text-center text-gray-500 text-sm mb-2">
                {description}
              </p>
              {sizes?.length > 0 && (
                <div className="p-2">
                  <h3 className="mb-1 text-center text-gray-700">
                    Choose your size
                  </h3>
                  {sizes.map((size) => (
                    <label className="flex items-center gap-2 mb-2 p-4 rounded-md border">
                      <input
                        type="radio"
                        name="size"
                        onClick={() => setSelectedSize(size)}
                        checked={selectedSize?.name === size.name}
                      />
                      <span className="font-bold"> {size.name}</span> $
                      {new Intl.NumberFormat().format(size.price)}
                    </label>
                  ))}
                </div>
              )}
              <button
                className="bg-primary text-white sticky bottom-2"
                type="button"
                onClick={handleAddToCartButtonClick}
              >
                Add to cart ${new Intl.NumberFormat().format(selectedPrice)}
              </button>
              <button onClick={() => setShowPopUp(false)} className="mt-2">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <MenuItemTile onAddToCart={handleAddToCartButtonClick} {...menuItem} />
    </>
  );
}
