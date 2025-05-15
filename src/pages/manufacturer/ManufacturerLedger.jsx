import React, { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";

const medicines = [
  {
    id: "#DP0796",
    date: "10 Feb 2020",
    pey_term: "	On Delivery",
    debit: 9877,
    credit: 0,
    balance: 987,
  },
  {
    id: "#DP8567",
    date: "12 Jun 2020",
    pey_term: "	After Dispatch",
    debit: 0,
    credit: 9757,
    balance: 923,
  },
  {
    id: "#DP1092",
    date: "09 May 2020",
    pey_term: "	Final Settlement",
    debit: 6768,
    credit: 9776,
    balance: 0,
  },
];

const ManufacturerLedger = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const filteredMedicines = medicines.filter((med) => {
    const matchesSearch = med.id
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesDate =
      (!startDate || new Date(med.date) >= new Date(startDate)) &&
      (!endDate || new Date(med.date) <= new Date(endDate));
    return matchesSearch && matchesDate;
  });

  const totalPages = Math.ceil(filteredMedicines.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const selectedMedicines = filteredMedicines.slice(
    startIndex,
    startIndex + rowsPerPage
  );
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <div className="p-6 bg-white shadow-md rounded-md overflow-x-auto">
      <h2 className="text-2xl font-bold mb-2 text-gray-500">
        {t("ManufacturerLedger.ManufacturerLedger")}
      </h2>
      <button
        type="button"
        onClick={toggleForm}
        className="border hover:border-emerald-400 hover:text-emerald-400 text-gray-400 px-4 py-2 rounded-md  transition float-end"
      >
        {t("ManufacturerLedger.AddManufacturerLedgerButton")}
      </button>
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 relative">
            <h2 className="text-xl font-bold ">{t("ManufacturerLedger.AddManufacturerLedgerList")}</h2>
            <p className="text-gray-500 mb-4">
              {t("ManufacturerLedger.AddManufacturerLedgerList-Description")}
            </p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                <div className="flex flex-col">
                  <label htmlFor="" className="mb-2">
                    {t("ManufacturerLedger.EnterDate")}
                  </label>

                  <input
                    type="date"
                    name="date"
                    placeholder={t("ManufacturerLedger.Date")}
                    // value={medicine.medicine_name}
                    // onChange={handleChange}
                    className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="mb-2 font-medium ">
                    {t("ManufacturerLedger.EnterCredit")}
                  </label>

                  <input
                    type="number"
                    placeholder={t("ManufacturerLedger.Credit")}
                    name="Credit"
                    // value={medicine.price}
                    // onChange={handleChange}
                    className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="" className="mb-2 font-medium ">
                    {t("ManufacturerLedger.EnterDebit")}
                  </label>

                  <input
                    type="number"
                    placeholder={t("ManufacturerLedger.Debit")}
                    name="debit"
                    // value={medicine.price}
                    // onChange={handleChange}
                    className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="" className="mb-2">
                    {t("ManufacturerLedger.EnterBalance")}
                  </label>

                  <input
                    type="number"
                    placeholder={t("ManufacturerLedger.Balance")}
                    name="balance"
                    // value={medicine.price}
                    // onChange={handleChange}
                    className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="mb-2">
                    {t("ManufacturerLedger.EnterDescription")}
                  </label>

                  <textarea
                    type="text"
                    placeholder={t("ManufacturerLedger.Description")}
                    name="description"
                    // value={medicine.price}
                    // onChange={handleChange}
                    className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-emerald-400 text-white px-2 py-2 mt-5 rounded-md w-full md:w-auto shadow-md active:shadow-none"
                >
                  {t("ManufacturerLedger.AddLedgerButton")}
                </button>
                <button
                  type="button"
                  onClick={toggleForm}
                  className=" text-gray-400 px-4 py-2 rounded-md"
                >
                  {t("ManufacturerLedger.CancelButton")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder={t("ManufacturerLedger.Search")}
          className="border p-2 rounded-md focus:outline-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div>
          <label
            htmlFor=""
            className="me-2 text-gray-400 text-xs font-extralight"
          >
            {t("ManufacturerLedger.ChooseStartDate")}
          </label>
          <input
            type="date"
            className="border p-2 rounded-md focus:outline-green-500"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor=""
            className="me-2 text-gray-400 text-xs font-extralight"
          >
            {t("ManufacturerLedger.ChooseEndDate")}
          </label>
          <input
            type="date"
            className="border p-2 rounded-md focus:outline-green-500"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse bg-white shadow-md rounded-lg">
          <thead className="border">
            <tr>
              <td className="p-3 text-left text-gray-400 font-light text-[13px]">
                {t("ManufacturerLedger.InvoiceID")}
              </td>
              <td className="p-3 text-left text-gray-400 font-light text-[13px]">
                {t("ManufacturerLedger.ShowDate")}
              </td>
              <td className="p-3 text-left text-gray-400 font-light text-[13px]">
                {t("ManufacturerLedger.PaymentTerm")}
              </td>
              <td className="p-3 text-left text-gray-400 font-light text-[13px]">
                {t("ManufacturerLedger.ShowDebit")}
              </td>
              <td className="p-3 text-left text-gray-400 font-light text-[13px]">
                {t("ManufacturerLedger.ShowCredit")}
              </td>
              <td className="p-3 text-left text-gray-400 font-light text-[13px]">
                {t("ManufacturerLedger.ShowBalance")}
              </td>
            </tr>
          </thead>
          <tbody className="border">
            {selectedMedicines.map((med, index) => {
              return (
                <tr key={index} className="border text-sm sm:text-base ">
                  <td className="p-3 text-[13px]  text-green-400 cursor-pointer hover:underline ">
                    {med.id}
                  </td>
                  <td className="p-3 text-[13px] text-gray-400">{med.date}</td>
                  <td className="p-3 text-[13px] text-gray-400">
                    {med.pey_term}
                  </td>
                  <td className="p-3 text-[13px] text-gray-400">{med.debit}</td>
                  <td className="p-3 text-[13px] text-gray-400">
                    {med.credit}
                  </td>
                  <td className="p-3 text-[13px] text-gray-400">
                    {med.balance}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-wrap items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 font-light text-[13px]">
            {t("ManufacturerLedger.RowsPerPage")}
          </span>
          <select
            className="border p-2 rounded-md"
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(parseInt(e.target.value, 10));
              setCurrentPage(1);
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-1 border rounded-md text-gray-400 font-light text-[13px]"
            disabled={currentPage === 1}
          >
            {t("ManufacturerLedger.Previous")}
          </button>

          <span className="text-gray-400 font-light text-[13px]">
            {t("ManufacturerLedger.Pages")} {currentPage} {t("ManufacturerLedger.Of")} {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-3 py-1 border rounded-md text-gray-400 font-light text-[13px]"
            disabled={currentPage === totalPages}
          >
            {t("ManufacturerLedger.Next")}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ManufacturerLedger;
