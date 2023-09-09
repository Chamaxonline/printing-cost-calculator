import { MyPage } from "@/components/common/types";
import firebase from "firebase/app";
import "firebase/database";
import db from "../../lib/firebase";
import { getDatabase, ref, push, remove, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import SheetCostList from "@/components/sheetcost/sheetcostlist";
import SheetCost from "@/model/sheetcost";

const PatientPage: MyPage = () => {
  const [sheetName, setSheet] = useState("");
  const [price, setPrice] = useState("");
  const id = uuidv4();
  


  const sheet = {
    id,
    sheetName,
    price,
  };
 
  const [sheets, setSheets] = useState<SheetCost[]>([]);
  
    useEffect(() => {
      // Fetch the vehicle data from Firebase
      const fetchData = async () => {
        const database = getDatabase();
        const dataRef = ref(database, "path/to/sheetcost");
  
        try {
          onValue(dataRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
              // Convert the data object into an array
            const costs =  Object.entries(data).map(([key, value]) => ({
                id: key,
                ...value,
              }));
              setSheets(costs);
            } else {
              // Handle the case when there is no data
              setSheets([]);
            }
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const database = db;
    const dataRef = ref(database, "path/to/sheetcost");

    push(dataRef, sheet)
      .then(() => {
        toast.success("Data saved successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        toast.error("Failed to save data.", {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.error(error);
      });
    // Reset the form fields
    resetFields;
  };
  const resetFields = () => {
    setSheet("");
    setPrice("");
  };
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Sheet Cost</h2>
          <p className="text-gray-500 mb-6">Enter Sheet Details here.</p>
          <SheetCostList costs={sheets}/>
          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                 <div className="text-gray-600">
                    <p className="font-medium text-lg">Sheet Cost</p>
                    <p>Please fill out all the fields.</p>
                  </div> 

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="sheetName">Sheet Name</label>
                      <input
                        type="text"
                        name="sheetName"
                        id="sheetName"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={sheetName}
                        onChange={(e) => setSheet(e.target.value)}
                        placeholder="Sheet Name"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="price">Price</label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Price"
                      />
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
  );
};
export default PatientPage;
PatientPage.Layout = "Main";
