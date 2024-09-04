import DataTable from "react-data-table-component";
import { useState } from "react";
export default function TableComponent() {
  const [columns, setColumns] = useState([
    {
      name: "Full Name",
      selector: (row) => row.fullName,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Room",
      selector: (row) => row.room,
    },
  ]);

  const [data, setData] = useState([
    {
      id: 1,
      fullName: "Beetlejuice  Don",
      email: "test@gmail.com",
      room: "2344",
    },

    {
      id: 2,
      fullName: "Beetlejuice don",
      email: "test@gmail.com",
      room: "2344",
    },

    {
      id: 3,
      fullName: "Beetlejuice Don Son",
      email: "test@gmail.com",
      room: "2344",
    },

    {
      id: 4,
      fullName: "Beetlejuice John Don",
      email: "test@gmail.com",
      room: "2344",
    },
  ]);

  const customStyles = {
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        backgroundColor: "#ddd",
      },
    },
  };
  return (
    <div className="visitor-logs">
      <h2>Today's Visitors</h2>
      <DataTable columns={columns} data={data} customStyles={customStyles} />
    </div>
  );
}
