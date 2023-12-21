import React from 'react';
import { Link } from 'react-router-dom';

const PesananTable = () => {
  const tableData = [
    { id: 2033091291920-0, name: 'John Doe', age: 'Tanah', city: 'Details' },
    { id: 2033091291920-1, name: 'Jane Smith', age: 'Rumah', city: 'Details' },
    { id: 2033091291920-2, name: 'Bob Johnson', age: 'ruko', city: 'Details' },
    { id: 2033091291920-3, name: 'Alice Williams', age: 'rumah dan tanah', city: 'Details' },
    { id: 2033091291920-4, name: 'Charlie Brown', age: 'ruko', city: 'Details' },
    { id: 2033091291920-5, name: 'Diana Miller', age: 'kebun', city: 'Details' },
    { id: 2033091291920-6, name: 'Elijah Davis', age: 'rumah dan tanah', city: 'Details' },
    { id: 2033091291920-7, name: 'Fiona Wilson', age: 'ruko', city: 'Details' },
    { id: 2033091291920-8, name: 'Gary Lee', age: 'rumah', city: 'Details' },
    { id: 2033091291920-9, name: 'Hannah Martin', age: 'kebun', city: 'Details' },
    { id: 2033091291920-10, name: 'Isaac Clark', age: 'rumah dan tanah', city: 'Details' },
  ];

  return (
    <table className="table border mt-5">
      <thead>
        <tr className="table-header-row">
          <th>Nama Katagori</th>
          <th>Nama Pemohon</th>
          <th>Jenis Property</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={item.id} className={index === 0 ? 'highlighted-row' : ''}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>
              {/* Tambahkan link ke halaman detail di sini */}
              <Link to={`/details/${item.id}`}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PesananTable;
