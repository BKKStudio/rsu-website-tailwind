export default function InternationalsTable() {
    return (
      <div>
        <table className="w-full text-center">
          <thead className="bg-gray-700 text-white">
            <tr className="border ">
              <th className="border p-3">คณะ/วิทยาลัย</th>
              <th className="border max-md:p-3 max-md:text-sm">รหัส</th>
              <th className="border max-md:p-3 max-md:text-sm">สาขา</th>
            </tr>
          </thead>
          <tbody className="">
          <tr className="border bg-gray-200">
              <td className="border p-3 max-md:p-3 max-md:text-sm" rowspan="5">
              International College
              </td>
              <th className="border p-3 max-md:p-3 max-md:text-sm">1156</th>
              <td className="border p-3 max-md:p-3 max-md:text-sm">	Civil Engineering</td>
            </tr>
            <tr className="border  bg-gray-200">
              <td className="border p-3 max-md:p-3 max-md:text-sm">1515</td>
              <td className="border p-3 max-md:p-3 max-md:text-sm">International Business</td>
            </tr>
            <tr className="border  bg-gray-200">
              <td className="border p-3 max-md:p-3 max-md:text-sm">1516</td>
              <td className="border p-3 max-md:p-3 max-md:text-sm">	Information and Communication Technology</td>
            </tr>
            <tr className="border  bg-gray-200">
              <td className="border p-3 max-md:p-3 max-md:text-sm">1517</td>
              <td className="border p-3 max-md:p-3 max-md:text-sm">Communications Arts</td>
            </tr>
            <tr className="border  bg-gray-200">
              <td className="border p-3 max-md:p-3 max-md:text-sm">1521</td>
              <td className="border p-3 max-md:p-3 max-md:text-sm">International Hospitality and Management</td>
            </tr>
  
  

            <tr className="border ">
              <td className="border p-3 text-md max-md:p-3 max-md:text-sm">INSTITUTE OF DIPLOMACY AND INTERNATIONAL STUDIES</td>
              <th className="border p-3 max-md:p-3 max-md:text-sm" rowspan="1">
              3001
              </th>
              <td className="border p-3 max-md:p-3 max-md:text-sm">International Relations and Development</td>
            </tr>


            <tr className="border bg-gray-200">
              <td className="border p-3 max-md:p-3 max-md:text-sm" rowspan="3">
              INTERNATIONAL CHINESE COLLEGE (ระบบเหมาจ่าย)
              </td>
              <th className="border p-3 max-md:p-3 max-md:text-sm">3205</th>
              <td className="border p-3 max-md:p-3 max-md:text-sm">	Finance and Invesment</td>
            </tr>
            <tr className="border  bg-gray-200">
              <td className="border p-3 max-md:p-3 max-md:text-sm">3206</td>
              <td className="border p-3 max-md:p-3 max-md:text-sm">	International Business Management</td>
            </tr>
            <tr className="border  bg-gray-200">
              <td className="border p-3 max-md:p-3 max-md:text-sm">1522</td>
              <td className="border p-3 max-md:p-3 max-md:text-sm">	Communication Arts</td>
            </tr>
  
           
  
  
          </tbody>
        </table>
      </div>
    );
  }
  