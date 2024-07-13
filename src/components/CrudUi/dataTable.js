import React from "react";

const DataTable = ({ data, onEdit, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Books</th>
        <th>Author</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.author}</td>
          <td>
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => onDelete(item._id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataTable;
