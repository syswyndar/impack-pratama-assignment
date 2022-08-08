import React from "react";
import { convertCurrency } from "../helpers/convertCurrency";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getProduct } from "../store/actionCreator/product";

const DeleteModal = ({ hideModal, data, handleDelete }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   const handleDelete = (e, id) => {
  //     e.preventDefault();
  //     dispatch(deleteProduct(id)).then(() => {
  //       dispatch(getProduct());
  //       navigate("/");
  //       hideModal(false);
  //     });
  //   };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Are you sure to delete this product?
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-gray-400 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={hideModal}
              >
                <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {JSON.stringify(data)}
              </p> */}
              <ul className="w-full flex flex-col gap-3">
                <li className="w-full flex text-gray-500 text-sm gap-3">
                  <div className="w-1/2 flex justify-between">
                    <h5 className="font-bold text-sm text-gray-600">
                      Code Produk
                    </h5>
                    <span>:</span>
                  </div>
                  <div className="w-1/2">{data.code_produk}</div>
                </li>
                <li className="w-full flex text-gray-500 text-sm gap-3">
                  <div className="w-1/2 flex justify-between">
                    <h5 className="font-bold text-sm text-gray-600">
                      Nama Produk
                    </h5>
                    <span>:</span>
                  </div>
                  <div className="w-1/2">{data.nama_produk}</div>
                </li>
                <li className="w-full flex text-gray-500 text-sm gap-3">
                  <div className="w-1/2 flex justify-between">
                    <h5 className="font-bold text-sm text-gray-600">
                      Deskripsi Produk
                    </h5>
                    <span>:</span>
                  </div>
                  <div className="w-1/2">{data.deskripsi_produk}</div>
                </li>
                <li className="w-full flex text-gray-500 text-sm gap-3">
                  <div className="w-1/2 flex justify-between">
                    <h5 className="font-bold text-sm text-gray-600">
                      Harga Produk
                    </h5>
                    <span>:</span>
                  </div>
                  <div className="w-1/2">
                    {convertCurrency(data.harga_produk)} / {data.uom}
                  </div>
                </li>
              </ul>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-white bg-blue-500 rounded hover:bg-blue-600 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={hideModal}
              >
                No
              </button>
              <button
                className="text-red-500 hover:text-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none mr-1 mb-1 transition-all duration-150"
                type="button"
                onClick={handleDelete}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default DeleteModal;
