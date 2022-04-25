import * as React from 'react';
import './datatable.scss';
import {
  productColumns,
  productRows,
  userColumns,
  userRows,
} from '../../data/datatablesource';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

type DataTableProps = {
  tableType: string;
};

const Datatable = ({ tableType }: DataTableProps) => {
  const [data, setData] = React.useState([]);
  const handleDelete = (id: number) => {
    setData(data.filter(item => item.id !== id));
  };
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: params => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: 'none' }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  React.useEffect(() => {
    if (tableType === 'users') {
      setData(userRows);
    } else {
      setData(productRows);
    }
  });
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {tableType === 'users' ? 'Add New User' : 'Add New Product'}
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={
          tableType === 'users'
            ? userColumns.concat(actionColumn)
            : productColumns.concat(actionColumn)
        }
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
