import Delete from "@/components/icons/Delete";
import Add from "@/components/icons/Add";
import ChevronDown from "@/components/icons/ChevronDown";
import ChevronUp from "@/components/icons/ChevronUp";
import { useState } from "react";

export default function MenuItemPriceProps({
  addLabel,
  name,
  props,
  setProps,
}) {
  const [isOpen, setIsOpen] = useState(false);
  function addProp() {
    setProps((oldProps) => {
      return [...oldProps, { name: "", price: 0 }];
    });
  }

  function editProp(ev, index, prop) {
    const newValue = ev.target.value;
    setProps((prevSizes) => {
      const newSizes = [...prevSizes];

      newSizes[index][prop] = newValue;
      return newSizes;
    });
  }

  function removeProp(indexToRemove) {
    setProps((prev) => prev.filter((v, index) => index !== indexToRemove));
  }

  return (
    <div className="bg-gray-200 p-2 rounded-md mb-2">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
        className="inline-flex p-1 border-0 justify-start"
      >
        {isOpen && <ChevronUp />}
        {!isOpen && <ChevronDown />}
        <span>{name}</span>
        <span>({props?.length})</span>
      </button>
      <div className={isOpen ? "block" : "hidden"}>
        {props?.length > 0 &&
          props.map((size, index) => (
            <div className="flex items-end gap-1">
              <div>
                <label>Size</label>
                <input
                  type="text"
                  placeholder="Size name"
                  value={size.name}
                  onChange={(ev) => editProp(ev, index, "name")}
                />
              </div>
              <div>
                <label>Size price</label>
                <input
                  type="text"
                  placeholder="Size price "
                  value={size.price}
                  onChange={(ev) => editProp(ev, index, "price")}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="mb-2 border-0 px-2"
                  onClick={() => removeProp(index)}
                >
                  <Delete />
                </button>
              </div>
            </div>
          ))}
        <button
          type="button"
          onClick={addProp}
          className="bg-white items-center"
        >
          <Add />
          <span>{addLabel}</span>
        </button>
      </div>
    </div>
  );
}
