import React, { useState, useEffect } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import axios from "axios";

const AddMedicine = () => {
  const [setBarcode] = useState("");
  const [openScanner, setOpenScanner] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [medicine, setMedicine] = useState({
    medicine_name: "",
    price: "",
    quantity: "",
    in_stock_date: "",
    weight: "",
    generic_name: "",
    barcode_number: "",
    expire_date: "",
    status: "active",
    category: "tablet",
    medicine_detail: "",
  });

  const [token, setToken] = useState(localStorage.getItem("authToken") || ""); // ✅ Fix token state

  useEffect(() => {
    const userToken = localStorage.getItem("authToken");

    if (userToken) {
      console.log("Fetched Token from login:", userToken); // Debugging
      setToken(userToken); // ✅ Set token in state
    } else {
      alert("You are not logged in!");
    }
  }, []);

  const handleChange = (e) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Ensure token exists before submitting
    if (!token) {
      alert("User is not authenticated! Please log in.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/medicines/create",
        medicine,
        {
          headers: {
            Authorization: `Bearer ${token.trim()}`, // ✅ Include token
            "Content-Type": "application/json",
          },
        }
      );

      alert("Medicine added successfully!");
      console.log(response.data);
    } catch (error) {
      console.error(
        "Error adding medicine:",
        error.response?.data || error.message
      );
      alert(
        `Failed to add medicine: ${
          error.response?.data?.message || "Unknown error"
        }`
      );
    }
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <div className="p-4 bg-white rounded-md shadow-md w-full max-w-6xl mx-auto">
        <div className="mb-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-lg font-semibold">Add Medicine</h1>
            <p className="text-gray-600">
              You can add a medicine by filling this form.
            </p>
          </div>
          <button
            type="button"
            onClick={toggleForm}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Add Supplier
          </button>
        </div>
        {isFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 relative">
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={toggleForm}
              >
                &times;
              </button>
              <h2 className="text-xl font-bold ">Add Supplier</h2>
              <p className="text-gray-500 mb-4">
                The supplier must be fill all this field.
              </p>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Supplier Name"
                  className="bg-slate-200 px-2 py-2 rounded-md shadow-md focus:shadow-none focus:outline-green-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Pharmacy Name"
                  className="bg-slate-200 px-2 py-2 rounded-md shadow-md focus:shadow-none focus:outline-green-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="bg-slate-200 px-2 py-2 rounded-md shadow-md focus:shadow-none focus:outline-green-500"
                  required
                />
                <input
                  type="file"
                  className="bg-slate-200 px-2 py-2 rounded-md shadow-md focus:shadow-none focus:outline-green-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Invoice ID"
                  className="bg-slate-200 px-2 py-2 rounded-md shadow-md focus:shadow-none focus:outline-green-500"
                  required
                />
                <input
                  type="date"
                  className="bg-slate-200 px-2 py-2 rounded-md shadow-md focus:shadow-none focus:outline-green-500"
                  required
                />
                <div className="col-span-1 md:col-span-2 flex justify-end space-x-3">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-4 py-2 rounded-md"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="bg-red-600 text-white px-4 py-2 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                Madicine name
              </label>

              <input
                type="text"
                name="medicine_name"
                placeholder="Medicine Name"
                value={medicine.medicine_name}
                onChange={handleChange}
                className="bg-slate-200 px-2 py-2 rounded-md shadow-md focus:shadow-none focus:outline-green-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                Price
              </label>

              <input
                type="text"
                placeholder="Price"
                name="price"
                value={medicine.price}
                onChange={handleChange}
                className="bg-slate-200 px-2 py-2 rounded-md shadow-md focus:shadow-none focus:outline-green-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                Quantity
              </label>

              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                onChange={handleChange}
                value={medicine.quantity}
                className="bg-slate-200 px-2 py-2 rounded-md shadow-md focus:shadow-none focus:outline-green-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                In Stock Date
              </label>

              <input
                type="date"
                name="in_stock_date"
                onChange={handleChange}
                value={medicine.in_stock_date}
                className="bg-slate-200 px-2 py-2 rounded-md shadow-md focus:shadow-none focus:outline-green-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                Weight
              </label>

              <input
                type="text"
                placeholder="Weight"
                name="weight"
                value={medicine.weight}
                onChange={handleChange}
                className="bg-slate-200 px-2 py-2 rounded-md shadow-md focus:shadow-none focus:outline-green-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                Generic Name
              </label>

              <input
                type="text"
                name="generic_name"
                onChange={handleChange}
                placeholder="Generic Name"
                value={medicine.generic_name}
                className="bg-slate-200 px-2 py-2 rounded-md shadow-md focus:shadow-none focus:outline-green-500"
                required
              />
            </div>

            <div className="flex z-0 flex-col">
              <label htmlFor="barcode" className="mb-2">
                Barcode Scan
              </label>

              <div className="bg-slate-200 z-10  rounded-sm shadow-md px-6 py-2 focus:border-none outline-none cursor-pointer relative">
                <input
                  required
                  id="barcode"
                  type="text"
                  value={medicine.barcode_number}
                  name="barcode_number"
                  onChange={((e) => setBarcode(e.target.value), handleChange)}
                  placeholder="Scan or enter barcode"
                  className="bg-transparent  focus:outline-none "
                />
                <button
                  onClick={() => setOpenScanner(true)}
                  style={{
                    marginLeft: "-40px",
                    padding: "10px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    position: "absolute",
                    right: "5px",
                    top: "-5px",
                  }}
                >
                  <img
                    src="https://img.icons8.com/ios/50/barcode.png"
                    alt="Scan"
                    width="30px"
                  />
                </button>
              </div>

              {openScanner && (
                <div
                  style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.5)", // Dark overlay
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1000,
                  }}
                >
                  <div
                    style={{
                      background: "white",

                      borderRadius: "10px",
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <h1 className="mb-4 font-semibold">Scan Barcode</h1>
                    <BarcodeScannerComponent
                      width={500}
                      onUpdate={(err, result) => {
                        if (result) {
                          setBarcode(result.text);
                          setOpenScanner(false);
                        }
                      }}
                    />
                    <button
                      onClick={() => setOpenScanner(false)}
                      className="text-red-600 py-4 "
                    >
                      Close Scanner
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                Expire Date
              </label>

              <input
                type="date"
                name="expire_date"
                className="bg-slate-200 px-2 py-2 rounded-md shadow-md focus:shadow-none focus:outline-green-500"
                required
                value={medicine.expire_date}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                Status
              </label>

              <select
                className="bg-slate-200 px-2 py-2 rounded-md shadow-md focus:shadow-none focus:outline-green-500 "
                onChange={handleChange}
                required
                value={medicine.status}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                Cateogry
              </label>

              <select
                className=" bg-slate-200 px-2 py-2 rounded-md shadow-md focus:shadow-none focus:outline-green-500"
                onChange={handleChange}
                value={medicine.category}
                required
              >
                <option>Select Category</option>
                <option value="tablet">Tablet</option>
                <option value="syrup">Syrup</option>
                <option value="vitamin">Vitamin</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="mb-2">
                Medicine Information
              </label>
              <textarea
                placeholder="Medicine Details"
                name="medicine_detail"
                onChange={handleChange}
                value={medicine.medicine_detail}
                required
                className=" h-24 bg-slate-200 px-2 py-2 rounded-md shadow-md focus:shadow-none focus:outline-green-500"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-md w-full md:w-auto shadow-md active:shadow-none"
            >
              Add Medicine
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddMedicine;
