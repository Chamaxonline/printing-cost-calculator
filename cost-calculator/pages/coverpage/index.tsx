import { MyPage } from "@/components/common/types";

const PatientPage: MyPage = () => {
  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
             Cover Page Price Calculator
            </h2>
            <p className="text-gray-500 mb-6">
              
            </p>
            <form>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Cover Page Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="lastName">Qty</label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Qty"
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label
                          htmlFor="default"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Paper
                        </label>
                        <select
                          id="default"
                          className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option defaultValue="">Choose a Paper</option>
                          <option value="1">60 blank</option>
                          <option value="2">70 blank</option>
                          <option value="3">80 blank</option>
                          <option value="4">100 blank</option>
                          <option value="5">120 blank</option>
                          <option value="6">100 AP</option>
                          <option value="7">120 AP</option>
                          <option value="8">150 AP</option>
                          <option value="9">230 AB</option>
                          <option value="10">260 AB</option>
                          <option value="12">250 BB</option>
                          <option value="13">300 BB</option>
                        </select>
                      </div>

                      <div className="md:col-span-5">
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
                      <div className="md:col-span-5">
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

                      <div className="md:col-span-5">
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
                      <div className="md:col-span-5">
                      <div className="relative">
    <input type="text" id="disabled_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled />
    <label htmlFor="disabled_filled" className="absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Job New Total</label>
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
