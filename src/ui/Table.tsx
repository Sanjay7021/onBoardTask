// import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IDynamicTable } from "../constant/types";
/*
    props would be the 
    colonms [],
    data [],
    isEditable boolean  
*/

export const Table1: React.FC<IDynamicTable> = ({
  columns,
  data,
  isEditable,
  register,
  errors,
}) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column: any) => (
              <TableCell
                key={column.title}
                style={{
                  maxWidth: column.maxWidth,
                  fontWeight: "bold",
                  backgroundColor: "whitesmoke",
                }}
              >
                {column.title}
              </TableCell>
            ))}
            {/* <TableCell></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody sx={{ marginTop: "20px" }}>
          {data && isEditable == false
            ? data?.map((row: any, index: any) => (
                <TableRow key={index}>
                  {columns.map((column: any, index: number) => {
                    return <TableCell>{row[column.field]}</TableCell>;
                  })}
                </TableRow>
              ))
            : ""}

          {isEditable &&
            data?.map((row: any, index: any) => (
              <TableRow key={index}>
                <TableCell>{row.value}</TableCell>
                {/* {
                                        columns.map((column: any, index: number) => {
                                            if (column.field != 'value') {
                                                return (
                                                    <TableCell> <input
                                                        type="date"
                                                        id="startDate"
                                                        placeholder="Start Date"
                                                        {...register("startDate", {
                                                            value: row.startDate,
                                                            required: "StartDate is required ",
                                                        })}
                                                    /><br />
                                                        {errors.startDate && <span style={{ color: 'red' }}>{errors.startDate.message}</span>}
                                                    </TableCell>
                                                )
                                            }
                                        })
                                    } */}
                <TableCell>
                  {" "}
                  <input
                    type="date"
                    id="startDate"
                    placeholder="Start Date"
                    {...register(`startDate${index}`, {
                      value: row.startDate,
                      required: "StartDate is required ",
                    })}
                  />
                  <br />
                  {errors.startDate && (
                    <span style={{ color: "red" }}>
                      {errors.startDate.message}
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  {" "}
                  <input
                    type="date"
                    id="endDate"
                    placeholder="End Date"
                    {...register("endDate", {
                      // value: row.endDate,
                      required: "EndDate is required ",
                    })}
                  />
                  <br />
                  {errors.endDate && (
                    <span style={{ color: "red" }}>
                      {errors.endDate.message}
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  {" "}
                  <input
                    type="number"
                    id="rate"
                    placeholder="Rate/Day"
                    {...register(`rate${index}`, {
                      value: row.rate,
                      required: "Rate/Day is required ",
                    })}
                  />
                  <br />
                  {errors[`rate${index}`] && (
                    <span style={{ color: "red" }}>{errors[`rate${index}`].message}</span>
                  )}
                </TableCell>
                <TableCell>
                  {" "}
                  <input
                    type="number"
                    id="total"
                    placeholder="Total"
                    {...register("total", {
                      // value: row.total,
                      required: "Total is required ",
                    })}
                  />
                  <br />
                  {errors.total && (
                    <span style={{ color: "red" }}>{errors.total.message}</span>
                  )}
                </TableCell>
              </TableRow>
            ))}

          {/* {!bookRecords.items.length && (
                    <TableRow className="TableRow">
                        <TableCell colSpan={5} className="TableCell">
                            <Typography align="center" className="noDataText">
                                No Books
                            </Typography>
                        </TableCell>
                    </TableRow>
                )} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// import { useState } from "react";
// // import "./styles.css";
// import MaterialTable from "material-table";
// // import DeleteIcon from "@material-ui/icons/Delete";
// // import SearchIcon from "@material-ui/icons/Search";
// // import SaveIcon from "@material-ui/icons/Save";
// // import { Button } from "@material-ui/core";

// export function Table() {
//   const empList = [
//     {
//       id: 1,
//       name: "Neeraj",
//       email: "neeraj@gmail.com",
//       phone: 9876543210,
//       city: "Bangalore"
//     },
//     {
//       id: 2,
//       name: "Raj",
//       email: "raj@gmail.com",
//       phone: 9812345678,
//       city: "Chennai"
//     },
//     {
//       id: 3,
//       name: "David",
//       email: "david342@gmail.com",
//       phone: 7896536289,
//       city: "Jaipur"
//     },
//     {
//       id: 4,
//       name: "Vikas",
//       email: "vikas75@gmail.com",
//       phone: 9087654321,
//       city: "Hyderabad"
//     }
//   ];

//   const [data, setData] = useState(empList);

//   const columns = [
//     { title: "ID", field: "id" },
//     { title: "Name", field: "name" },
//     { title: "Email", field: "email" },
//     { title: "Phone Number", field: "phone" },
//     { title: "City", field: "city" }
//   ];

//   return (
//     <div className="App">
//       <h1>Material-Table Demo</h1>

//       <div style={{ maxWidth: "100%", paddingTop: "12px" }}>
//         <MaterialTable title="Employee Data" data={data} columns={columns} />
//       </div>
//     </div>
//   );
// }
