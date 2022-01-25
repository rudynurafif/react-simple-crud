import React from "react";
import {Table} from 'react-bootstrap'

const Tabel = ({ foods, editData, hapusData }) => {
  return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Makanan</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th className="text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food, i) => {
            return (
              <tr key={i}>
              <td>{i + 1 }</td>
              <td>{food.nama}</td>
              <td>{food.deskripsi}</td>
              <td>Rp. {food.harga}</td>
              <td className="text-center">
                <button className="btn btn-warning me-2" onClick={() => editData(food.id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => hapusData(food.id)}>Hapus</button>
              </td>
            </tr>
            )
          })}
        </tbody>
      </Table>
  );
};

export default Tabel;
