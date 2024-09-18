import "./App.css";

import * as React from "react";
import { useTable } from "react-table";




function App() {
  const data = React.useMemo(() => tableData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "ANESTHETIC",
        accessor: "anesthetic",
      },
      {
        Header: "BREAST SCREENING",
        accessor: "breast_screening",
      },
      {
        Header: "CARDIOLOGY",
        accessor: "cardiology",
      },
      {
        Header: "EAR NOSE THROAT(ENT)",
        accessor: "ent",
      },
      {
        Header: "ELDERLY SERVICES DEPARTMENT",
        accessor: "eds",
      },
      {
        Header : "GASTROENTEROLOGY",
        accessor : "gastroenterology",

      },
      {
        Header : "GENERAL SURGERY",
        accessor : "general_surgery",

      },
      {
        Header : "GYNECOLOGY",
        accessor : "gynecology",
      },
      {
        Header : "HEMATOLOGY",
        accessor : "hematology"
      },
      {
        Header : "NEONATAL UNIT",
        accessor : "neonatal_unit"
      },
      {
        Header : "NEUROLOGY",
        accessor : "neurology"
      },
      {
        Header : "NUTRITION AND DIETETICS",
        accessor : "nutrition_and_dietetics"
        
      },
      {
        Header : "OBSTETRICS AND GYNECOLOGY UNITS",
        accessor : "obstetrics_and_gynecology_units"
      },
      {
        Header : "ONCOLOGY",
        accessor : "oncology"
      },
      {
        Header : "OPHTHALMOLOGY",
        accessor : "opthalmology"
      },
      {
        Header : "ORTHOPEDICS",
        accessor : "orthopedics"
      },
      {
        Header : "PHYSIOTHERAPY",
        accessor : "physiotherapy"
      },
      {
        Header : "RENAL UNIT",
        accessor : "renal_unit"
      },
      {
        Header : "SEXUAL HEALTH",
        accessor : "sexual_health"
      },
      {
        Header : "UROLOGY",
        accessor : "urology"
      }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

const tableData = [
  {
    "DATE":"7\/1\/2011",
    "ANC":139,
    "DENTAL":114,
    "ENT":146,
    "EYS":127,
    "GYANEE":103,
    "MEDICINE":797,
    "ORTHO":162,
    "PEADS":247,
    "SKIN":158,
    "SURGERY":111,
    "TOTAL":2104
  },
  {
    "DATE":"7\/2\/2011",
    "ANC":0,
    "DENTAL":89,
    "ENT":113,
    "EYS":89,
    "GYANEE":63,
    "MEDICINE":622,
    "ORTHO":103,
    "PEADS":0,
    "SKIN":237,
    "SURGERY":146,
    "TOTAL":1462
  },
  {
    "DATE":"7\/3\/2011",
    "ANC":0,
    "DENTAL":0,
    "ENT":0,
    "EYS":0,
    "GYANEE":0,
    "MEDICINE":0,
    "ORTHO":0,
    "PEADS":0,
    "SKIN":0,
    "SURGERY":0,
    "TOTAL":0
  },
  {
    "DATE":"7\/4\/2011",
    "ANC":162,
    "DENTAL":98,
    "ENT":146,
    "EYS":113,
    "GYANEE":66,
    "MEDICINE":827,
    "ORTHO":237,
    "PEADS":316,
    "SKIN":228,
    "SURGERY":113,
    "TOTAL":2306
  },
  {
    "DATE":"7\/5\/2011",
    "ANC":0,
    "DENTAL":101,
    "ENT":163,
    "EYS":127,
    "GYANEE":58,
    "MEDICINE":646,
    "ORTHO":203,
    "PEADS":298,
    "SKIN":241,
    "SURGERY":147,
    "TOTAL":1984
  },
  {
    "DATE":"7\/6\/2011",
    "ANC":0,
    "DENTAL":76,
    "ENT":127,
    "EYS":66,
    "GYANEE":93,
    "MEDICINE":632,
    "ORTHO":196,
    "PEADS":411,
    "SKIN":207,
    "SURGERY":163,
    "TOTAL":1971
  },
  {
    "DATE":"7\/7\/2011",
    "ANC":142,
    "DENTAL":78,
    "ENT":143,
    "EYS":89,
    "GYANEE":87,
    "MEDICINE":458,
    "ORTHO":219,
    "PEADS":246,
    "SKIN":219,
    "SURGERY":148,
    "TOTAL":1829
  },
  {
    "DATE":"7\/8\/2011",
    "ANC":162,
    "DENTAL":62,
    "ENT":128,
    "EYS":92,
    "GYANEE":66,
    "MEDICINE":444,
    "ORTHO":217,
    "PEADS":288,
    "SKIN":217,
    "SURGERY":158,
    "TOTAL":1834
  },
  {
    "DATE":"7\/9\/2011",
    "ANC":0,
    "DENTAL":89,
    "ENT":112,
    "EYS":113,
    "GYANEE":68,
    "MEDICINE":682,
    "ORTHO":189,
    "PEADS":263,
    "SKIN":203,
    "SURGERY":127,
    "TOTAL":1846
  },
  {
    "DATE":"7\/10\/2011",
    "ANC":0,
    "DENTAL":0,
    "ENT":0,
    "EYS":0,
    "GYANEE":0,
    "MEDICINE":0,
    "ORTHO":0,
    "PEADS":0,
    "SKIN":0,
    "SURGERY":0,
    "TOTAL":0
  },
  {
    "DATE":"7\/11\/2011",
    "ANC":243,
    "DENTAL":99,
    "ENT":127,
    "EYS":117,
    "GYANEE":56,
    "MEDICINE":238,
    "ORTHO":246,
    "PEADS":347,
    "SKIN":203,
    "SURGERY":119,
    "TOTAL":1795
  },
  {
    "DATE":"7\/12\/2011",
    "ANC":0,
    "DENTAL":62,
    "ENT":132,
    "EYS":136,
    "GYANEE":96,
    "MEDICINE":650,
    "ORTHO":258,
    "PEADS":303,
    "SKIN":208,
    "SURGERY":146,
    "TOTAL":1991
  },
  {
    "DATE":"7\/13\/2011",
    "ANC":0,
    "DENTAL":113,
    "ENT":142,
    "EYS":113,
    "GYANEE":77,
    "MEDICINE":634,
    "ORTHO":201,
    "PEADS":346,
    "SKIN":267,
    "SURGERY":132,
    "TOTAL":2025
  },
  {
    "DATE":"7\/14\/2011",
    "ANC":239,
    "DENTAL":58,
    "ENT":156,
    "EYS":102,
    "GYANEE":63,
    "MEDICINE":535,
    "ORTHO":213,
    "PEADS":287,
    "SKIN":213,
    "SURGERY":136,
    "TOTAL":2002
  },
  {
    "DATE":"7\/15\/2011",
    "ANC":216,
    "DENTAL":69,
    "ENT":162,
    "EYS":98,
    "GYANEE":79,
    "MEDICINE":362,
    "ORTHO":178,
    "PEADS":256,
    "SKIN":265,
    "SURGERY":119,
    "TOTAL":1804
  },
  {
    "DATE":"7\/16\/2011",
    "ANC":0,
    "DENTAL":73,
    "ENT":148,
    "EYS":76,
    "GYANEE":63,
    "MEDICINE":392,
    "ORTHO":232,
    "PEADS":275,
    "SKIN":274,
    "SURGERY":146,
    "TOTAL":1679
  },
  {
    "DATE":"7\/17\/2011",
    "ANC":0,
    "DENTAL":0,
    "ENT":0,
    "EYS":0,
    "GYANEE":0,
    "MEDICINE":0,
    "ORTHO":0,
    "PEADS":0,
    "SKIN":0,
    "SURGERY":0,
    "TOTAL":0
  },
  {
    "DATE":"7\/18\/2011",
    "ANC":209,
    "DENTAL":121,
    "ENT":163,
    "EYS":121,
    "GYANEE":101,
    "MEDICINE":264,
    "ORTHO":247,
    "PEADS":336,
    "SKIN":211,
    "SURGERY":158,
    "TOTAL":1931
  },
  {
    "DATE":"7\/19\/2011",
    "ANC":0,
    "DENTAL":111,
    "ENT":142,
    "EYS":117,
    "GYANEE":87,
    "MEDICINE":737,
    "ORTHO":258,
    "PEADS":248,
    "SKIN":246,
    "SURGERY":136,
    "TOTAL":2082
  },
  {
    "DATE":"7\/20\/2011",
    "ANC":0,
    "DENTAL":119,
    "ENT":106,
    "EYS":136,
    "GYANEE":73,
    "MEDICINE":827,
    "ORTHO":319,
    "PEADS":263,
    "SKIN":198,
    "SURGERY":127,
    "TOTAL":2168
  },
  {
    "DATE":"7\/21\/2011",
    "ANC":236,
    "DENTAL":102,
    "ENT":114,
    "EYS":87,
    "GYANEE":83,
    "MEDICINE":779,
    "ORTHO":203,
    "PEADS":278,
    "SKIN":203,
    "SURGERY":66,
    "TOTAL":2151
  },
  {
    "DATE":"7\/22\/2011",
    "ANC":219,
    "DENTAL":98,
    "ENT":123,
    "EYS":142,
    "GYANEE":78,
    "MEDICINE":698,
    "ORTHO":246,
    "PEADS":263,
    "SKIN":147,
    "SURGERY":98,
    "TOTAL":2112
  },
  {
    "DATE":"7\/23\/2011",
    "ANC":0,
    "DENTAL":131,
    "ENT":0,
    "EYS":93,
    "GYANEE":87,
    "MEDICINE":887,
    "ORTHO":213,
    "PEADS":246,
    "SKIN":189,
    "SURGERY":114,
    "TOTAL":1960
  },
  {
    "DATE":"7\/24\/2011",
    "ANC":0,
    "DENTAL":0,
    "ENT":0,
    "EYS":0,
    "GYANEE":0,
    "MEDICINE":0,
    "ORTHO":0,
    "PEADS":0,
    "SKIN":0,
    "SURGERY":0,
    "TOTAL":0
  },
  {
    "DATE":"7\/25\/2011",
    "ANC":216,
    "DENTAL":137,
    "ENT":146,
    "EYS":113,
    "GYANEE":63,
    "MEDICINE":709,
    "ORTHO":258,
    "PEADS":313,
    "SKIN":169,
    "SURGERY":69,
    "TOTAL":2193
  },
  {
    "DATE":"7\/26\/2011",
    "ANC":0,
    "DENTAL":121,
    "ENT":103,
    "EYS":107,
    "GYANEE":83,
    "MEDICINE":871,
    "ORTHO":237,
    "PEADS":327,
    "SKIN":201,
    "SURGERY":78,
    "TOTAL":2128
  },
  {
    "DATE":"7\/27\/2011",
    "ANC":0,
    "DENTAL":112,
    "ENT":109,
    "EYS":116,
    "GYANEE":66,
    "MEDICINE":797,
    "ORTHO":246,
    "PEADS":232,
    "SKIN":198,
    "SURGERY":96,
    "TOTAL":1972
  },
  {
    "DATE":"7\/28\/2011",
    "ANC":201,
    "DENTAL":119,
    "ENT":137,
    "EYS":127,
    "GYANEE":63,
    "MEDICINE":850,
    "ORTHO":176,
    "PEADS":286,
    "SKIN":164,
    "SURGERY":86,
    "TOTAL":2209
  },
  {
    "DATE":"7\/29\/2011",
    "ANC":187,
    "DENTAL":136,
    "ENT":123,
    "EYS":113,
    "GYANEE":87,
    "MEDICINE":643,
    "ORTHO":173,
    "PEADS":263,
    "SKIN":169,
    "SURGERY":136,
    "TOTAL":2030
  },
  {
    "DATE":"7\/30\/2011",
    "ANC":0,
    "DENTAL":147,
    "ENT":118,
    "EYS":111,
    "GYANEE":86,
    "MEDICINE":713,
    "ORTHO":201,
    "PEADS":258,
    "SKIN":171,
    "SURGERY":146,
    "TOTAL":1951
  },
  {
    "DATE":"7\/31\/2011",
    "ANC":0,
    "DENTAL":0,
    "ENT":0,
    "EYS":0,
    "GYANEE":0,
    "MEDICINE":0,
    "ORTHO":0,
    "PEADS":0,
    "SKIN":0,
    "SURGERY":0,
    "TOTAL":0
  },
  {
    "DATE":"TOTAL",
    "ANC":2571,
    "DENTAL":2635,
    "ENT":3329,
    "EYS":2841,
    "GYANEE":1995,
    "MEDICINE":16694,
    "ORTHO":5631,
    "PEADS":7196,
    "SKIN":5406,
    "SURGERY":3221,
    "TOTAL":51519
  }
];
