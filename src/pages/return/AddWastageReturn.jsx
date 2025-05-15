import { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";


const AddWastageReturn = () => {
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
            <h1 className="text-lg font-semibold">{t("AddWastageReturn.AddWastageReturn")}</h1>
            <p className="text-gray-600">
              {t("AddWastageReturn.AddWastageReturn-Description")}
            </p>
          </div>
        </div>

        {/* onSubmit={handleSubmit} */}
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                {t("AddWastageReturn.EnterCustomerName")}
              </label>

              <input
                type="text"
                name="customer"
                placeholder={t("AddWastageReturn.CustomerName")}
                // value={medicine.medicine_name}
                // onChange={handleChange}
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2 font-medium ">
                {t("AddWastageReturn.EnterSeller")}
              </label>

              <input
                type="text"
                placeholder={t("AddWastageReturn.Seller")}
                name="seller"
                // value={medicine.price}
                // onChange={handleChange}
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                {t("AddWastageReturn.EnterEmail")}
              </label>

              <input
                type="text"
                placeholder={t("AddWastageReturn.Email")}
                name="email"
                // value={medicine.price}
                // onChange={handleChange}
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                {t("AddWastageReturn.EnterProductName")}
              </label>

              <input
                type="text"
                placeholder={t("AddWastageReturn.ProductName")}
                name="productname"
                // value={medicine.price}
                // onChange={handleChange}
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                {t("AddWastageReturn.EnterGenericName")}
              </label>

              <input
                type="text"
                placeholder={t("AddWastageReturn.GenericName")}
                name="genericname"
                // value={medicine.weight}
                // onChange={handleChange}
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                {t("AddWastageReturn.EnterCategory")}
              </label>

              <select
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                // onChange={handleChange}
                // value={medicine.status}
                required
              >
                <option value="tablet">Tablet</option>
                <option value="syrub">Syrub</option>
                <option value="vitamin">Vitamin</option>
                <option value="inhealer">Inhealer</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                {t("AddWastageReturn.EnterInvoiceNo")}
              </label>

              <input
                type="text"
                name="invoiceno"
                // onChange={handleChange}
                // value={medicine.generic_name}
                placeholder={t("AddWastageReturn.InvoiceNo")}
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="amount" className="mb-2">
                {t("AddWastageReturn.EnterAmount")}
              </label>

              <input
                type="text"
                name="amount"
                value={amount}
                onChange={handleChange}
                placeholder={t("AddWastageReturn.Amount")}
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                {t("AddWastageReturn.EnterReason")}
              </label>

              <select
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                // onChange={handleChange}
                // value={medicine.status}
                required
              >
                <option value="Worng Medication<">{t("AddWastageReturn.ReasonWrongMedicine")}</option>
                <option value="Worng Dispensing<">{t("AddWastageReturn.ReasonWorngDispensing")}</option>
                <option value="Subsidence Symptoms">{t("AddWastageReturn.ReasonSubsidenceSymptoms")}</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                {t("AddWastageReturn.EnterQuantity")}
              </label>

              <input
                type="number"
                name="quantity"
                // onChange={handleChange}
                // value={medicine.generic_name}
                placeholder={t("AddWastageReturn.Quantity")}
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                {t("AddWastageReturn.EnterDate")}
              </label>

              <input
                type="date"
                name="date"
                // onChange={handleChange}
                // value={medicine.generic_name}
                placeholder=  {t("AddWastageReturn.Date")}
                className="border border-gray-400   px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                {t("AddWastageReturn.EnterStatus")}
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
                {t("AddWastageReturn.EnterDescription")}
              </label>
              <textarea
                placeholder={t("AddWastageReturn.Description")}
                name="description"
                // onChange={handleChange}
                // value={medicine.medicine_detail}
                required
                className="border border-gray-400 w-[580px] h-[200px]  px-2 text-sm py-2 rounded-[4px] font-light   focus:outline-green-400  focus:border-green-700 focus:placeholder:text-green-400"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-md w-full md:w-auto shadow-md active:shadow-none"
            >
              {t("AddWastageReturn.AddWastageReturnButton")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddWastageReturn;
