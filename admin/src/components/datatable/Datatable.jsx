import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { roomColumns, hotelColumns } from "../../datatablesource";

const Datatable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState("");
  const { data, loading, error } = useFetch(`/${path}`);

  let isRoom;

  if (`${path}` === "rooms") {
    isRoom = true;
  } else {
    isRoom = false;
  }

  useEffect(() => {
    setList(data);
  }, [data]);

  // console.log("hotelColumns", useFetch('/hotels'));
  console.log("DATA", data);

  const handleDelete = async (id) => {
    console.log("Delete Hotel", `${path}`, `${id}`);
    try {
      await axios.delete(`/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };

  const handleRoomDelete = async (roomId, hotelId) => {
    console.log("Delete Room", `${path}`, `${roomId}`);
    try {
      await axios.delete(`/${path}/${roomId}/${hotelId}`);
      setList(list.filter((item) => item._id !== roomId));
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${path}/update`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              // onClick={() => handleDelete(params.row._id)}
              onClick={() =>
                isRoom
                  ? handleRoomDelete(params.row._id, "62dd144065c77ecaa65c353b")
                  : handleDelete(params.row._id)
              }
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};


export default Datatable;
