import React from "react";
import "../../styling/Table.css";
const A3Table = () => {
  return (
    <div className="a3-table">
      <table>
        <thead>
            
          <tr>
            <th>
                 
            <tr className="info">رقم الطالب</tr>
               <tr>رقم القومي</tr>
               </th>
               <th>
                 
                 <tr className="info">الرقم الجلوس</tr>
                    <tr>اسم الطالب</tr>
                    </th>
            <th >
             <tr style={ {display:"flex",justifyContent:"center"}}>coulmn 1</tr>
              <tr>
                <th className="child">Column 2</th>
                <th  className="child">Column 3</th>
                <th  className="child">Column 4</th>
                <th  className="child">Column 5</th>
              </tr>
            </th>
            <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>coulmn 1</tr>
              <tr>
                <th className="child">Column 2</th>
                <th  className="child">Column 3</th>
                <th  className="child">Column 4</th>
                <th  className="child">Column 5</th>
              </tr>
            </th>
            <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>coulmn 1</tr>
              <tr>
                <th className="child">Column 2</th>
                <th  className="child">Column 3</th>
                <th  className="child">Column 4</th>
                <th  className="child">Column 5</th>
              </tr>
            </th>
            <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>coulmn 1</tr>
              <tr>
                <th className="child">Column 2</th>
                <th  className="child">Column 3</th>
                <th  className="child">Column 4</th>
                <th  className="child">Column 5</th>
              </tr>
            </th>
            <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>coulmn 1</tr>
              <tr>
                <th className="child">Column 2</th>
                <th  className="child">Column 3</th>
                <th  className="child">Column 4</th>
                <th  className="child">Column 5</th>
              </tr>
            </th>
            <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>coulmn 1</tr>
              <tr>
                <th className="child">Column 2</th>
                <th  className="child">Column 3</th>
                <th  className="child">Column 4</th>
                <th  className="child">Column 5</th>
              </tr>
            </th>
             <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>coulmn 1</tr>
              <tr>
                <th className="child">Column 2</th>
                <th  className="child">Column 3</th>
                <th  className="child">Column 4</th>
                <th  className="child">Column 5</th>
              </tr>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tdTable">
                <tr className="info">الرقم القومي</tr>
               <tr>الاسم</tr>
            </td>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
            <td>Data 7</td>
          </tr>
          {/* Add additional table rows and data */}
        </tbody>
      </table>
    </div>
  );
};

export default A3Table;
