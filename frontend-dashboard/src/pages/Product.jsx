import React, { useEffect, useState } from "react";
import ListProduct from "../components/listProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { getProduct, deleteProduct } from "../store/actionCreator/product";
import { useDispatch, useSelector } from "react-redux";
import { convertCurrency } from "../helpers/convertCurrency";
import DeleteModal from "../components/deleteModal";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, error, loading } = useSelector((store) => store.products);
  const [deleteModal, setDeleteModal] = useState(false);
  const [dataDelete, setDataDelete] = useState(null);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const handleDelete = (e, value, item) => {
    e.preventDefault();
    setDataDelete(item);
    setDeleteModal(value);
  };

  const handleDeleteProduct = (e, id) => {
    e.preventDefault();
    dispatch(deleteProduct(id)).then(() => {
      dispatch(getProduct());
      setDeleteModal(false);
    });
  };
  return (
    <>
      <div className="w-full h-full bg-white py-5 px-5 rounded-sm">
        <div className="flex justify-between items-center mb-10 px-3">
          <div className="flex gap-3 text-slate-700 items-center">
            <FontAwesomeIcon icon={faCubes} className="text-2xl" />
            <h1 className="text-2xl font-semibold text-slate-700">Product</h1>
          </div>
          <div>
            <Link to="/products/create">
              <button className="rounded-md bg-blue-700 px-3 py-2 text-white border-0 hover:bg-blue-900 transition ease-in delay-200">
                Create Product
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full">
          {products?.length > 0 ? (
            <div className="border-b border-gray-200 shadow-md">
              <table className="divide-y divide-gray-300 w-full table-fixed">
                <thead className="bg-gray-50">
                  <tr className="text-left">
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Code Produk
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">Nama</th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Deskripsi
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">Harga</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                  {products?.length > 0 &&
                    products.map((item) => {
                      return (
                        <ListProduct
                          key={item.id}
                          id={item.id}
                          code_produk={item.code_produk}
                          nama_produk={item.nama_produk}
                          deskripsi_produk={item.deskripsi_produk}
                          harga_produk={convertCurrency(item.harga_produk)}
                          harga={item.harga_produk}
                          uom={item.uom}
                          openModal={(e) => handleDelete(e, true, item)}
                        />
                      );
                    })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="px-5">
              <h4 className="text-sm text-blue-500">Product Still Empty...</h4>
            </div>
          )}
        </div>
        {deleteModal && (
          <DeleteModal
            hideModal={(e) => handleDelete(e, false)}
            handleDelete={(e) => handleDeleteProduct(e, dataDelete.id)}
            data={dataDelete}
          />
        )}
      </div>
    </>
  );
};

export default Product;
