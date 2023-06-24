import React, { useState } from "react";

function Listitem({ Data, handleDelete, handleUpdate }) {
    // trạng thái chỉnh sửa
  const [editing, setEditing] = useState(false);
  //chứa giá trị được chỉnh sửa
  const [editedValue, setEditedValue] = useState(Data.name);
  //trạng thái đã được cập nhật.
  const [updated, setUpdated] = useState(false);

  const onDelete = () => {
    handleDelete(Data.id);
  };

  const startEditing = () => {
    setEditing(true);
    setUpdated(false);
  };

  const finishEditing = () => {
    handleUpdate(editedValue, Data.id);
    setEditing(false);
    setUpdated(true);
  };

  // khi giá trị thay đổi.lấy giá trị mới và cập nhật giá trị editedValue 
  const handleInputChange = (event) => {
    setEditedValue(event.target.value);
  };

  return (
    <li>
      {editing ? (
        <>
          <input className="inpuTextUpdate"  type="text" value={editedValue} onChange={handleInputChange} />
          <span className="update" onClick={finishEditing}>
            {updated ? "Updated" : "Update"}
          </span>
        </>
      ) : (
        <>
          {Data.name}
          <span className="close" onClick={onDelete}>
            ×
          </span>
          <span className="edit" onClick={startEditing}>
            Edit
          </span>
        </>
      )}
    </li>
  );
}

export default Listitem;
