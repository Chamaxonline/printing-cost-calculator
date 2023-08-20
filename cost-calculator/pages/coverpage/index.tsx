import { MyPage } from "@/components/common/types";
import DropdownComponent from "@/components/ui/DropdownComponent";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface PaperOption {
  label: string;
  value: string;
}

const PatientPage: MyPage = () => {
  const [formData, setFormData] = useState({
    qty: 0,
    totalSheets: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const options: PaperOption[] = [
    { label: "60 blank", value: "1" },
    { label: "70 blank", value: "2" },
    { label: "80 blank", value: "3" },
    { label: "100 blank", value: "4" },
    { label: "120 blank", value: "5" },
    { label: "100 AP", value: "6" },
    { label: "120 AP", value: "7" },
    { label: "150 AP", value: "8" },
    { label: "230 AB", value: "9" },
    { label: "250 AB", value: "10" },
    { label: "260 AB", value: "11" },
    { label: "300 AB", value: "12" },
  ];

  const [selectedPaperValue, setSelectedValue] = useState(options[0].value);
  const [inputQty, setInputQtyValue] = useState("");
  const [totalSheets, setResultValue] = useState("");
  const [costofSheet, setCostofSheet] = useState<string | undefined>(undefined);
  const [totalPaperCost, setTotalPaperCost] = useState();

  // Calculate the result value whenever inputValue or selectedValue changes
  useEffect(() => {
    if (formData.qty != null || formData.qty != "") {
      if (parseInt(selectedPaperValue) === 250) {
        setResultValue((formData.qty / 3 + 5).toString());
      } else {
        setResultValue((formData.qty / 4 + 5).toString());
      }
    }
  }, [formData.qty, selectedPaperValue]);

  // Event handler for the onChange event of the dropdown
  const handlePaperChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you can perform any action with the form data, like sending it to the server
    try {
      //const data = await submitFormData(formData);

      toast.success("Data saved successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error("Failed to save data.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.error("An error occurred while submitting the form:", error);
    }
  };

  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              Cover Page Price Calculator
            </h2>
            <p className="text-gray-500 mb-6"></p>
            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Cover Page Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-2">
                        <label
                          htmlFor="lastName"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Qty
                        </label>
                        <input
                          type="text"
                          name="qty"
                          id="qty"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Qty"
                          value={formData.qty}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label
                          htmlFor="paper"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Paper
                        </label>
                        <DropdownComponent
                          options={options}
                          value={selectedPaperValue}
                          placeholder="Choose a Paper"
                          onChange={handlePaperChange}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label
                          htmlFor="default"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Color
                        </label>
                        <select
                          id="default"
                          className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option defaultValue="">Choose a Color</option>
                          <option value="1">One Color</option>
                          <option value="2">Two Color</option>
                          <option value="3">Four Color</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label
                          htmlFor="default"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Color Changes
                        </label>
                        <select
                          id="default"
                          className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option defaultValue="">Choose a Color Change</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                          <option value="5">Five</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label
                          htmlFor="default"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Laminate
                        </label>
                        <select
                          id="default"
                          className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option defaultValue="0">No</option>
                          <option value="1">Gloss</option>
                          <option value="2">Matt</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label
                          htmlFor="lastName"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Total Sheets
                        </label>
                        <input
                          type="text"
                          name="totalSheets"
                          id="totalSheets"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="0"
                          value={totalSheets}
                          disabled
                        />
                      </div>
                      <div className="md:col-span-5">
                        <div className="relative">
                         
                          <label
                            htmlFor="disabled_filled"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Job Total
                          </label>
                          <input
                            type="text"
                            id="disabled_filled"
                            className="h-10 border mt-1 rounded px-4 w-50 bg-gray-50"
                            placeholder=" "
                            disabled
                          />
                        </div>
</div>
<div className="md:col-span-5">
                        <div className="relative">
                         
                         <label
                           htmlFor="disabled_filled"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                           >
                           Unit Price
                         </label>
                         <input
                           type="text"
                           id="disabled_filled"
                           className="h-10 border mt-1 rounded px-4 w-50 bg-gray-50"
                           placeholder=" "
                           disabled
                         />
                       </div>
                      </div>

                      <div className="md:col-span-5">
                        <div className="relative">
                         
                         <label
                           htmlFor="disabled_filled"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                           >
                           Discount
                         </label>
                         <input
                           type="text"
                           id="disabled_filled"
                           className="h-10 border mt-1 rounded px-4 w-50 bg-gray-50"
                           placeholder=" "
                           
                         />
                       </div>
                      </div>
                      <div className="md:col-span-5">
                        <div className="relative">
                         
                         <label
                           htmlFor="disabled_filled"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                           >
                           Job Total New
                         </label>
                         <input
                           type="text"
                           id="disabled_filled"
                           className="h-10 border mt-1 rounded px-4 w-50 bg-gray-50"
                           placeholder=" "
                           disabled
                         />
                       </div>
                      </div>
                      <div className="md:col-span-5">
                        <div className="relative">
                         
                         <label
                           htmlFor="disabled_filled"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                           >
                           Unit Price New
                         </label>
                         <input
                           type="text"
                           id="disabled_filled"
                           className="h-10 border mt-1 rounded px-4 w-50 bg-gray-50"
                           placeholder=" "
                           disabled
                         />
                       </div>
                      </div>
                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default PatientPage;
PatientPage.Layout = "Main";
