import { useState } from "react";
<<<<<<< HEAD
import { useTranslation } from "../../hooks/useTranslation";
import { useTheme } from "../../context/ThemeContext";

const AddCustomer = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  // Check amount input
=======
import React from "react";
import { useTranslation } from "../../hooks/useTranslation";

const AddCustomer = () => {
  const { t } = useTranslation();
  //check amount input
>>>>>>> 81b16dff066a757a4c18d8311ce5af0e248854b7
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    // Regex to allow only double (floating-point) numbers
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  return (
<<<<<<< HEAD
    <div className="p-4 bg-white dark:bg-gray-900 rounded-md shadow-md dark:shadow-gray-800 w-full max-w-6xl mx-auto">
      <div className="mb-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {t("add-customer.AddCustomer")}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {t("add-customer.AddCustomerDesc")}
          </p>
        </div>
      </div>

      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="mb-2 text-gray-700 dark:text-gray-300"
            >
              {t("add-customer.Name")}
            </label>
            <input
              type="text"
              name="name"
              placeholder={t("add-customer.NamePlaceholder")}
              className="border border-gray-400 dark:border-gray-600 px-2 text-sm py-2 rounded-[4px] font-light focus:outline-green-400 focus:border-green-700 focus:placeholder:text-green-400 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="mb-2 font-medium text-gray-700 dark:text-gray-300"
            >
              {t("add-customer.Phone")}
            </label>
            <input
              type="text"
              placeholder={t("add-customer.PhonePlaceholder")}
              name="phone"
              className="border border-gray-400 dark:border-gray-600 px-2 text-sm py-2 rounded-[4px] font-light focus:outline-green-400 focus:border-green-700 focus:placeholder:text-green-400 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 text-gray-700 dark:text-gray-300"
            >
              {t("add-customer.Email")}
            </label>
            <input
              type="text"
              placeholder={t("add-customer.EmailPlaceholder")}
              name="email"
              className="border border-gray-400 dark:border-gray-600 px-2 text-sm py-2 rounded-[4px] font-light focus:outline-green-400 focus:border-green-700 focus:placeholder:text-green-400 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="address"
              className="mb-2 text-gray-700 dark:text-gray-300"
            >
              {t("add-customer.Address")}
            </label>
            <input
              type="text"
              placeholder={t("add-customer.AddressPlaceholder")}
              name="address"
              className="border border-gray-400 dark:border-gray-600 px-2 text-sm py-2 rounded-[4px] font-light focus纲绿-400 focus:border-green-700 focus:placeholder:text-green-400 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="item"
              className="mb-2 text-gray-700 dark:text-gray-300"
            >
              {t("add-customer.PurchasedItem")}
            </label>
            <input
              type="text"
              placeholder={t("add-customer.PurchasedItemPlaceholder")}
              name="item"
              className="border border-gray-400 dark:border-gray-600 px-2 text-sm py-2 rounded-[4px] font-light focus:outline-green-400 focus:border-green-700 focus:placeholder:text-green-400 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="quantity"
              className="mb-2 text-gray-700 dark:text-gray-300"
            >
              {t("add-customer.PurchasedQuantity")}
            </label>
            <input
              type="text"
              name="quantity"
              placeholder={t("add-customer.PurchasedQuantityPlaceholder")}
              className="border border-gray-400 dark:border-gray-600 px-2 text-sm py-2 rounded-[4px] font-light focus:outline-green-400 focus:border-green-700 focus:placeholder:text-green-400 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="amount"
              className="mb-2 text-gray-700 dark:text-gray-300"
            >
              {t("add-customer.Amount")}
            </label>
            <input
              type="text"
              name="amount"
              value={amount}
              onChange={handleChange}
              placeholder={t("add-customer.AmountPlaceholder")}
              className="border border-gray-400 dark:border-gray-600 px-2 text-sm py-2 rounded-[4px] font-light focus:outline-green-400 focus:border-green-700 focus:placeholder:text-green-400 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="status"
              className="mb-2 text-gray-700 dark:text-gray-300"
            >
              {t("add-customer.Status")}
            </label>
            <select
              name="status"
              className="border border-gray-400 dark:border-gray-600 px-2 text-sm py-2 rounded-[4px] font-light focus:outline-green-400 focus:border-green-700 dark:bg-gray-700 dark:text-gray-200"
              required
            >
              <option value="active">{t("add-customer.StatusActive")}</option>
              <option value="inactive">
                {t("add-customer.StatusInactive")}
              </option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="customer_detail"
              className="mb-2 text-gray-700 dark:text-gray-300"
            >
              {t("add-customer.CustomerDetails")}
            </label>
            <textarea
              placeholder={t("add-customer.CustomerDetailsPlaceholder")}
              name="customer_detail"
              required
              className="border border-gray-400 dark:border-gray-600 px-2 text-sm py-2 rounded-[4px] font-light focus:outline-green-400 focus:border-green-700 focus:placeholder:text-green-400 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
            ></textarea>
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-green-500 dark:bg-green-600 text-white px-6 py-3 rounded-md w-full md:w-auto shadow-md active:shadow-none hover:bg-green-600 dark:hover:bg-green-500"
          >
            {t("add-customer.ButtonAddCustomer")}
          </button>
        </div>
      </form>
    </div>
=======
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
>>>>>>> 81b16dff066a757a4c18d8311ce5af0e248854b7
  );
};

export default AddCustomer;
