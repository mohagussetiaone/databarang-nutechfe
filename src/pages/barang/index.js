import { useState, useEffect } from "react";
import barang from "../utils/data";
import { useDispatch } from "react-redux";
import { GetBarangRequest } from "../../redux/action/barangAction";
import Add from "./Create";
import Delete from "./Delete";
import Edit from "./Edit";
import Pagination from "./Pagination";
import JWTButton from "./JWTButton";
import Layout from "@/components/layouts";

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState(barang);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.filter((item) => item.nama.toLowerCase().includes(search)).slice(indexOfFirstRecord, indexOfLastRecord);
  const pages = Math.ceil(data.length / recordsPerPage);

  useEffect(() => {
    dispatch(GetBarangRequest(barang));
  }, []);

  return (
    <>
      <Layout>
        <div className="App">
          <div className="container w-[1000px]">
            <p className="text-2xl mb-4 top-0">Data Barang PT Nutech Integrasi</p>
            <div className="search">
              <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Cari Nama" />
              <Add data={data} setData={setData} />
            </div>
            <table className="table-data">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Harga Beli</th>
                  <th>Harga Jual</th>
                  <th>Stok</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((item, index) => (
                  <tr key={index}>
                    <td>{item.nama}</td>
                    <td>{item.hargaBeli}</td>
                    <td>{item.hargaJual}</td>
                    <td>{item.stok}</td>
                    <td>
                      <img src={item.image} alt="Images" width={125} />
                    </td>
                    <td>
                      <Edit data={data} setData={setData} store={item} hargaBeli={item.hargaBeli} hargaJual={item.hargaJual} stok={item.stok} nama={item.nama} />
                      <Delete data={data} setData={setData} nama={item.nama} />
                      <JWTButton store={item} nama={item.nama}></JWTButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
