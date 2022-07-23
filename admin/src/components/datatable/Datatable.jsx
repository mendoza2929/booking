import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Datatable = ({columns}) => {
<<<<<<< HEAD

  const location = useLocation()
=======
  const location = useLocation();
>>>>>>> 790cba32fdeffb92d6debc5381e1e33d6a8f2d32
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState("");
  const { data, loading, error } = useFetch(`/${path}`);

<<<<<<< HEAD
    const [list,setList] = useState("");

  
    const {data, loading, error} = useFetch(`/${path}`)
 

      useEffect(()=>{
        setList(data);
      }, [data])

      const handleDelete = async (id) => {
        try {
          await axios.delete(`/${path}/${id}`);
          setList(list.filter((item) => item._id !== id));
        } catch (err) {}
      };
=======
  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };
>>>>>>> 790cba32fdeffb92d6debc5381e1e33d6a8f2d32

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
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
<<<<<<< HEAD
     
=======
        {path}
>>>>>>> 790cba32fdeffb92d6debc5381e1e33d6a8f2d32
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