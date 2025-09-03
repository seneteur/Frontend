import { useState, useEffect } from "react";
import axios from "axios";

export const Casino = () => {
  const [fruits, setFruits] = useState<string[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api")
      .then((res) => {
        setFruits(res.data); // On stocke les données reçues
      })
      .catch((err) => console.error(err));
  }, []);

  return (
   <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
  <table className="w-full text-left table-auto min-w-max text-slate-800 table-rowdashed">
    <thead>
      <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
        <th className="p-4">
          <p className="text-3xl leading-none font-normal">
            Numero
          </p>
        </th>
        <th className="p-4">
           <p className="text-3xl">
             Fruits
           </p>
        </th>
       
      </tr>
    </thead>
    <tbody>
       {  fruits.map((fruit, index) =>(
          <tr  key={index} className="hover:bg-slate-50">
            <td className="p-4">
              <p className=" font-bold text-3xl">
                {index + 1}
              </p>
            </td>
            <td className="p-4">
              <p className="text-3xl">
                {fruit}
              </p>
            </td>
          </tr>
       ))
     }
    </tbody>
  </table>
</div>
  );
};

export default Casino;




