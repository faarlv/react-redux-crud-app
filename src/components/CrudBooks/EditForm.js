// components/EditItemForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateItemRequest } from "../appRedux/actions/Books";

const EditItemForm = ({ item, setSelectedItem }) => {
  const [name, setName] = useState(item.name);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateItemRequest({ ...item, name }));
    setSelectedItem(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Item</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        required
      />
      <button type="submit">Save</button>
      <button type="button" onClick={() => setSelectedItem(null)}>
        Cancel
      </button>
    </form>
  );
};

export default EditItemForm;
