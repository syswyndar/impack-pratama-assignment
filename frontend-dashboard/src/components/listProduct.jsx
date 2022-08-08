import React from "react";
import { useNavigate } from "react-router-dom";

const ListProduct = ({
  code_produk,
  nama_produk,
  deskripsi_produk,
  harga_produk,
  uom,
  id,
  harga,
  openModal,
}) => {
  const navigate = useNavigate();
  const toEditPage = () => {
    navigate(`/products/${nama_produk}/edit`, {
      state: {
        id,
        code_produk,
        nama_produk,
        deskripsi_produk,
        harga,
        uom,
      },
    });
  };
  return (
    <>
      {/* {JSON.stringify(data)} */}
      <tr className="whitespace-nowrap">
        <td className="px-6 py-4 text-sm text-gray-500">{code_produk}</td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-500 truncate">{nama_produk}</div>
        </td>
        <td className="px-6 py-4 w-full">
          <div className="text-sm text-gray-500 w-full truncate">
            {deskripsi_produk}
          </div>
        </td>
        <td className="px-6 py-4 text-sm text-gray-500">
          {harga_produk} / {uom}
        </td>
        <td className="px-6 py-4 flex gap-2">
          <button
            className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full"
            onClick={() => toEditPage()}
          >
            Edit
          </button>
          <button
            className="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full"
            onClick={openModal}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ListProduct;
