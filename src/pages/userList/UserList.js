import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

export default function UserList() {
  const {people, removePerson} = useGlobalContext();

  
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => removePerson(params.row.id)}
            />
          </>
        );
      },
    },
    {
      field: 'button',
      width: 250,
      renderHeader: () => {
        return <>
          <Link to="/newUser">
            <button className="userAddButton">Create New User</button>
          </Link>
        </>
      }
    }
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={people}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}