import EditableImage from "@/components/Layout/EditableImage";
import { useState } from "react";
import MenuItemPriceProps from "@/components/Layout/MenuItemPriceProps";

export default function MenuItemForm({ onSubmit, menuItem }) {
  const [name, setName] = useState(menuItem?.name || "");
  const [basePrice, setBasePrice] = useState(menuItem?.basePrice || "");
  const [description, setDescription] = useState(menuItem?.description || "");
  const [image, setImage] = useState(menuItem?.image || "");
  const [sizes, setSizes] = useState(menuItem?.sizes || []);

  return (
    <form
      onSubmit={(ev) =>
        onSubmit(ev, { image, name, description, basePrice, sizes })
      }
      className="mt-8 max-w-md mx-auto"
    >
      <div
        className="grid items-start gap-4 gap-2"
        style={{ gridTemplateColumns: ".3fr .7fr" }}
      >
        <div>
          <EditableImage link={image} setLink={setImage} />
        </div>
        <div className="grow">
          <label>Item name</label>
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          ></input>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          ></input>
          <label>Base price</label>
          <input
            type="text"
            value={basePrice}
            onChange={(ev) => setBasePrice(ev.target.value)}
          ></input>
          <MenuItemPriceProps
            name={"Sizes"}
            addLabel={"Add item size"}
            props={sizes}
            setProps={setSizes}
          />
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  );
}
