// components/ItemTable.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemRequest,
  fetchItemsRequest,
} from "../appRedux/actions/Books";
import EditItemForm from "./EditItemForm";

const BooksTable = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.items);
  const [selectedItem, setSelectedItem] = React.useState(null);

  React.useEffect(() => {
    dispatch(fetchItemsRequest());
  }, [dispatch]);

  const handleEdit = (item) => {
    setSelectedItem(item);
  };

  const handleDelete = (itemId) => {
    dispatch(deleteItemRequest(itemId));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Item List</h1>
      {selectedItem && (
        <EditItemForm item={selectedItem} setSelectedItem={setSelectedItem} />
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
