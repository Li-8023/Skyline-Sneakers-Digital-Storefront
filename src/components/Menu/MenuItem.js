import { useContext, useState } from "react";
import { CartContext } from "../AppContext";
import toast from "react-hot-toast";

export default function MenuItem(menuItem) {
  const { image, name, description, basePrice, sizes } = menuItem;
  const { addToCart } = useContext(CartContext);
  const [showPopUp, setShowPopUp] = useState(false);
  function handleAddToCartButtonClick() {
    if (sizes.length === 0) {
      addToCart(menuItem);
      toast.success("Added to cart!");
    } else {
      setShowPopUp(true);
    }
  }

  return (
    <>
    {showPopUp && (
      <div className="fixed inset-0 bg-black/80"></div>
    )}
      <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
        <div className="text-center">
          <img
            src={image}
            className="max-h-auto max-h-24 block mx-auto"
            alt="pizza"
          />
        </div>
        <h4 className="font-semibold text-xl my-3">{name}</h4>
        <p className="text-gray-500 text-sm line-clamp-1">{description}</p>
        <button
          type="button"
          onClick={handleAddToCartButtonClick}
          className="mt-4 bg-primary text-white rounded-full px-8 py-2"
        >
          Add to cart ${basePrice}
        </button>
      </div>
    </>
  );
}
