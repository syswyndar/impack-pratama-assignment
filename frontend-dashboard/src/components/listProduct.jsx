import React from "react";

const ListProduct = ({
  code_produk,
  nama_produk,
  deskripsi_produk,
  harga_produk,
  openModal,
}) => {
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
        <td className="px-6 py-4 text-sm text-gray-500">{harga_produk}</td>
        <td className="px-6 py-4 flex gap-2">
          <a
            href="#"
            className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full"
          >
            Edit
          </a>
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
