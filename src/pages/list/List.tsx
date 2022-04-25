import * as React from 'react';
import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';

type ListProps = {
  tableType: string;
};

const List = ({ tableType }: ListProps) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable tableType={tableType} />
      </div>
    </div>
  );
};

export default List;
