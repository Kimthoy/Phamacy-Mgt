import { useState } from "react";
import React from "react";
import { useTranslation } from "../../hooks/useTranslation";

const AddCustomer = () => {
  const { t } = useTranslation();
  //check amount input
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    // Regex to allow only double (floating-point) numbers
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };
  return (
    <>
      <div className="p-4 bg-white rounded-md shadow-md w-full max-w-6xl mx-auto">
        <div className="mb-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-lg font-semibold">{t("InsertCustomer.AddCustomer")}</h1>
            <p className="text-gray-600">
              {t("InsertCustomer.AddCustomer-Description")}
            </p>
          </div>
        </div>

        {/* onSubmit={handleSubmit} */}
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                {t("InsertCustomer.CustomerName")}
              </label>

              <input
                type="text"
                name="name"
                placeholder={t("InsertCustomer.Name")}
                // value={medicine.medicine_name}
                // onChange={handleChange}
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2 font-medium ">
                {t("InsertCustomer.EnterPhone")}
              </label>

              <input
                type="text"
                placeholder={t("InsertCustomer.Phone")}
                name="phone"
                // value={medicine.price}
                // onChange={handleChange}
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                {t("InsertCustomer.EnterEmail")}
              </label>

              <input
                type="text"
                placeholder={t("InsertCustomer.Email")}
                name="email"
                // value={medicine.price}
                // onChange={handleChange}
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                {t("InsertCustomer.EnterAddress")}
              </label>

              <input
                type="text"
                placeholder={t("InsertCustomer.Address")}
                name="address"
                // value={medicine.price}
                // onChange={handleChange}
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                {t("InsertCustomer.PurchasedItem")}
              </label>

              <input
                type="text"
                placeholder={t("InsertCustomer.Item")}
                name="item"
                // value={medicine.weight}
                // onChange={handleChange}
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                {t("InsertCustomer.PurchasedQuantity")}
              </label>

              <input
                type="text"
                name="quantity"
                // onChange={handleChange}
                // value={medicine.generic_name}
                placeholder={t("InsertCustomer.Quantity")}
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="amount" className="mb-2">
                {t("InsertCustomer.PurchasedAmount")}
              </label>

              <input
                type="text"
                name="amount"
                value={amount}
                onChange={handleChange}
                placeholder={t("InsertCustomer.Amount")}
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                {t("InsertCustomer.Status")}
              </label>

              <select
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                // onChange={handleChange}
                // value={medicine.status}
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <div className="flex flex-col ">
              <label htmlFor="" className="mb-2">
                {t("InsertCustomer.EnterCustomerDetails")}
              </label>
              <textarea
                placeholder={t("InsertCustomer.CustomerDetails")}
                name="customer_detail"
                // onChange={handleChange}
                // value={medicine.medicine_detail}
                required
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-md w-full md:w-auto shadow-md active:shadow-none"
            >
              {t("InsertCustomer.AddCustomerButton")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddCustomer;
