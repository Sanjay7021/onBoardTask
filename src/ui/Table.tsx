// import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { IDynamicTable, tableColumns } from "../constant/types";
import { TextField,MenuItem } from "@mui/material";
/*
    props would be the 
    colonms [],
    data [],
    isEditable boolean  
*/

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export const Table1: React.FC<IDynamicTable> = ({
  columns,
  data,
  isEditable,
  register,
  errors,
  tableType,
}) => {
  // console.log(errors);
  return (
    <TableContainer>
      <Table sx={{ minWidth: 850, minHeight: 100 }}>
        <TableHead>
          <TableRow>
            {columns.map((column: tableColumns) => (
              <TableCell
                key={column.title}
                style={{
                  // maxWidth: column!.maxWidth,
                  fontWeight: "bold",
                  backgroundColor: "gray",
                }}
              >
                {column.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ marginTop: "20px" }}>
          {data && isEditable == false
            ? data?.map((row: any, index: any) => (
                <TableRow key={index}>
                  {columns.map((column: any, index: number) => {
                    return (
                      <TableCell key={index}>{row[column.field]}</TableCell>
                    );
                  })}
                </TableRow>
              ))
            : ""}

          {isEditable &&
            data?.map((row: any, index: any) => {
              // console.log(row["value"].toLowerCase() == "carrier");
              return (
                <TableRow key={index}>
                  <TableCell>{row.value}</TableCell>
                  {columns.map((col: any) => {
                    if (col.field != "value") {
                      // console.log("carrie", row["value"] == "Carrier");
                      let isError = !!errors?.[tableType]?.[index]?.[col.field];
                      console.log(isError)
                      return row["value"] == "Carrier" ? (
                        <>
                        <TableCell>

                        <TextField
                          id="standard-select-currency"
                          select
                          fullWidth
                          defaultValue="EUR"
                          // helperText=""
                          variant="standard"
                          {...register(`${tableType}.${index}.${col.field}`, {
                            required: `${col.title} is required `,
                          })}
                        >
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        <br />
                        {errors?.[tableType]?.[index]?.[col.field] && (
                          <span style={{ color: "red" }}>
                            {
                              errors?.[tableType]?.[index]?.[col.field]
                                ?.message
                            }
                          </span>
                        )}
                        </TableCell>
                        </>
                      ) : (
                        <TableCell>
                          {" "}
                          <TextField
                            error={isError}
                            fullWidth
                            type={col.type}
                            id={col.field}
                            variant="standard"
                            defaultValue={row[col.field]} // Use col.field
                            {...register(`${tableType}.${index}.${col.field}`, {
                              required: `${col.title} is required `,
                            })}
                          />
                          <br />
                          {errors?.[tableType]?.[index]?.[col.field] && (
                            <span style={{ color: "red" }}>
                              {
                                errors?.[tableType]?.[index]?.[col.field]
                                  ?.message
                              }
                            </span>
                          )}
                        </TableCell>
                      );
                    }
                  })}
                </TableRow>
              );
            })}

          {!data.length && (
            <TableRow className="TableRow">
              <TableCell colSpan={5} className="TableCell">
                <Typography align="center" className="noDataText">
                  Data not found.
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
