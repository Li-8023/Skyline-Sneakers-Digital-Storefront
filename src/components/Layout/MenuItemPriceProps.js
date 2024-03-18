import Delete from "@/components/icons/Delete";
import Add from "@/components/icons/Add";

export default function MenuItemPriceProps({
  addLabel,
  name,
  props,
  setProps,
}) {
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
      <div className="flex gap-1">
        <div>
          <button type="button" className="inline-flex p-1">
            Toggle
          </button>
        </div>
        <h3 className=" grow text-gray-700">{name}</h3>
      </div>
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
      <button type="button" onClick={addProp} className="bg-white items-center">
        <Add />
        <span>{addLabel}</span>
      </button>
    </div>
  );
}
