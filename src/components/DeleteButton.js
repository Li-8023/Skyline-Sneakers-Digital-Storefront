import { useState } from "react";

export default function DeleteButton({ label, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);
  if (showConfirm) {
    return (
      <div className="items-center h-full inset-0 justify-center flex fixed bg-black/50">
        <div className="bg-white p-4 rounded-lg">
          <div>Are you sure you want to delete this item?</div>
          <div className="flex gap-2 mt-1">
            <button type="button" onClick={() => setShowConfirm(false)}>
              Cancel
            </button>
            <button
              type="button"
              className="bg-primary text-white"
              onClick={() => {onDelete(); setShowConfirm(false)}}
            >
              Yes,&nbsp;delete!
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <button type="button" onClick={() => setShowConfirm(true)}>
      {label}
    </button>
  );
}
