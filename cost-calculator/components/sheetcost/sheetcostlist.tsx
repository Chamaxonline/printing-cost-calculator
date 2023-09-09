import SheetCost from "@/model/sheetcost";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

interface SheetCostListProps {
    costs: SheetCost[];
  }

const SheetCostList: React.FC<SheetCostListProps> = ({ costs }) => {
   
    return(
      
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                   <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sheet Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>             
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {costs.map((sheet) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={sheet.id}
              >
                <td className="px-6 py-4">{sheet.sheetName}</td>
                <td className="px-6 py-4">{sheet.price}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
        
    )
}


export default SheetCostList