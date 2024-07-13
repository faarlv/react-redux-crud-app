import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import DataTable from "../../components/CrudUi/dataTable";
import DataForm from "../../components/CrudUi/dataForm";
import IntlMessages from "util/IntlMessages";
import "../../styles/crudStyle.less";
import {
  fetchBooks,
  updateBook,
  deleteBook,
  addBook,
} from "../../appRedux/actions/bookActions";

const SamplePage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleSave = (item) => {
    if (currentItem) {
      dispatch(updateBook(item));
      setCurrentItem(null);
    } else {
      dispatch(addBook(item));
    }
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
  };

  const handleDelete = (_id) => {
    dispatch(deleteBook(_id));
  };

  return (
    <div>
      <h2 className="title gx-mb-4">
        <IntlMessages id="crud.judul" />
      </h2>

      <DataForm currentItem={currentItem} onSave={handleSave} />
      <DataTable data={books} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default SamplePage;
