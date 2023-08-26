import { MyPage } from "@/components/common/types";
import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid"; 

  

const PatientPage: MyPage = () => {

  const [sheetName, setSheet] = useState("");
    const [price, setPrice] = useState("");
    const id = uuidv4();
    
    const sheet = {
      id,
      sheetName,
      price,  
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 
    
      e.preventDefault();
      // Here, you can perform any action with the form data, like sending it to the server
      try {
       
  
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
    return(
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              Register Patient
            </h2>
            <p className="text-gray-500 mb-6">
              Enter Your Patient Details here.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Vehicle Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          name="sheetName"
                          id="sheetName"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={sheetName}
                          onChange={(e)=> setSheet(e.target.value)}
                          placeholder="Sheet Name"
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={price}
                          onChange={(e)=> setPrice(e.target.value)}
                          placeholder="Last Name"
                        />
                      </div>                  
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
export default PatientPage;
PatientPage.Layout = "Main";


