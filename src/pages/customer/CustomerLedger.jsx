import React, { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";


const medicines = [
  {
    id: "#DP0796",
    date: "10 Feb 2020",
    debit: 9877,
    credit: 0,
    balance: 987,
  },
  {
    id: "#DP8567",
    date: "12 Jun 2020",
    debit: 0,
    credit: 9757,
    balance: 923,
  },
  {
    id: "#DP1092",
    date: "09 May 2020",
    debit: 6768,
    credit: 9776,
    balance: 0,
  },
];

const CustomerLedger = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

  return (
    <div className="p-6 bg-white shadow-md rounded-md overflow-x-auto">
      <h2 className="text-2xl font-bold mb-2 text-gray-500">{t("CustomerLedger.CustomerLedger")}</h2>

      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder={t("CustomerLedger.Search")}
          className="border p-2 rounded-md focus:outline-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div>
          <label
            htmlFor=""
            className="me-2 text-gray-400 text-xs font-extralight"
          >
            {t("CustomerLedger.ChooseStartDate")}
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
            {t("CustomerLedger.ChooseEndDate")}
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
                {t("CustomerLedger.ID")}
              </td>
              <td className="p-3 text-left text-gray-400 font-light text-[13px]">
                {t("CustomerLedger.Date")}
              </td>
              <td className="p-3 text-left text-gray-400 font-light text-[13px]">
                {t("CustomerLedger.Debit")}
              </td>
              <td className="p-3 text-left text-gray-400 font-light text-[13px]">
                {t("CustomerLedger.Credit")}
              </td>
              <td className="p-3 text-left text-gray-400 font-light text-[13px]">
                {t("CustomerLedger.Balance")}
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
            {t("CustomerLedger.RowsPerPage")}
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
            {t("CustomerLedger.Previous")}
          </button>

          <span className="text-gray-400 font-light text-[13px]">
            {t("CustomerLedger.Page")} {currentPage} {t("CustomerLedger.Of")} {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-3 py-1 border rounded-md text-gray-400 font-light text-[13px]"
            disabled={currentPage === totalPages}
          >
            {t("CustomerLedger.Next")}
          </button>
        </div>
      </div>
    </div>
  );
};
export default CustomerLedger;
