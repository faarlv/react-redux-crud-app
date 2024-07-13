import React from "react";
import { useState } from "react";

import DataTable from "../../components/CrudUi/dataTable";
import DataForm from "../../components/CrudUi/dataForm";
import IntlMessages from "util/IntlMessages";
import "../../styles/crudStyle.less";

const SamplePage = () => {
  const [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  const handleSave = (item) => {
    if (currentItem) {
      setData(data.map((d) => (d.id === item.id ? item : d)));
      setCurrentItem(null);
    } else {
      setData([...data, item]);
    }
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
  };

  const handleDelete = (id) => {
    setData(data.filter((d) => d.id !== id));
  };

  return (
    <div>
      <h2 className="title gx-mb-4">
        <IntlMessages id="crud.judul" />
      </h2>

      <DataForm currentItem={currentItem} onSave={handleSave} />
      <DataTable data={data} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default SamplePage;
