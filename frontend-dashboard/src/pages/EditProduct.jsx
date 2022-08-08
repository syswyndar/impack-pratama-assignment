import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { GetUom } from "../store/actionCreator/uom";
import { editProduct } from "../store/actionCreator/product";
import { useNavigate, useLocation } from "react-router-dom";

const EditProduct = () => {
  const { products, uom, error, loading } = useSelector(
    (store) => store.products
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [inputForm, setInputForm] = useState({
    code_produk: "",
    nama_produk: "",
    deskripsi_produk: "",
    harga_produk: 0,
    uom: "",
  });

  useEffect(() => {
    const {
      code_produk,
      nama_produk,
      deskripsi_produk,
      harga_produk,
      uom,
      harga,
    } = location.state;
    dispatch(GetUom());
    setInputForm({
      code_produk,
      nama_produk,
      deskripsi_produk,
      harga_produk: harga,
      uom,
    });
  }, []);

  const handleInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputForm, "ini input form");
    dispatch(editProduct(location.state.id, inputForm)).then(() => {
      navigate("/products");
    });
  };
  return (
    <>
      <div className="w-full h-full bg-white py-5 px-5 rounded-sm">
        <div className="flex justify-between items-center mb-10 px-3">
          <div className="flex gap-3 text-slate-700 items-center">
            <FontAwesomeIcon icon={faCubes} className="text-2xl" />
            <h1 className="text-2xl font-semibold text-slate-700">
              Edit Product
            </h1>
          </div>
        </div>

        {/* form */}
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-6 flex gap-5 w-full">
              <div className="w-1/2">
                <label
                  htmlFor="nama_produk"
                  className="block mb-2 text-sm text-gray-600 font-bold"
                >
                  Nama Produk
                </label>
                <input
                  type="text"
                  name="nama_produk"
                  placeholder="Nama Produk"
                  value={inputForm.nama_produk}
                  required
                  onChange={(e) => handleInput(e)}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="code_produk"
                  className="block mb-2 text-sm text-gray-600 font-bold"
                >
                  Kode Produk
                </label>
                <input
                  type="text"
                  name="code_produk"
                  placeholder="Code Produk"
                  value={inputForm.code_produk}
                  required
                  onChange={(e) => handleInput(e)}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
            </div>
            <div className="mb-6 flex w-full">
              <div className="w-6/12">
                <label
                  htmlFor="harga_produk"
                  className="text-sm text-gray-600 font-bold"
                >
                  Harga Product
                </label>
                <input
                  type="number"
                  name="harga_produk"
                  placeholder="Rp. 12345"
                  value={inputForm.harga_produk}
                  required
                  onChange={(e) => handleInput(e)}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div className="w-1/12 flex justify-center items-end">
                <span className="text-2xl px-3 py-2 text-gray-600"> / </span>
              </div>
              <div className="w-5/12">
                <label
                  htmlFor="uom"
                  className="block mb-2 text-sm text-gray-600 font-bold"
                >
                  Satuan
                </label>
                <select
                  id="countries"
                  name="uom"
                  onChange={(e) => handleInput(e)}
                  className="border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5"
                >
                  {/* <option>Choose a measurement</option> */}
                  {uom?.length > 0 &&
                    uom.map((item) => {
                      if (inputForm.uom === item) {
                        return (
                          <option selected key={item} value={item}>
                            {item}
                          </option>
                        );
                      } else {
                        return (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        );
                      }
                    })}
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="deskripsi_produk"
                className="block mb-2 text-sm text-gray-600 font-bold"
              >
                Deskripsi Produk
              </label>

              <textarea
                rows="10"
                name="deskripsi_produk"
                placeholder="Deskripsi Product"
                onChange={(e) => handleInput(e)}
                value={inputForm.deskripsi_produk}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                required
              ></textarea>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
