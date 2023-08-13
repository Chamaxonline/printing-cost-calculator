import { MyPage } from "@/components/common/types";
import { toast } from "react-toastify";

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
const PatientPage: MyPage = () => {
    return(
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
        </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        </>
    );

}
export default PatientPage;
PatientPage.Layout = "Main";