import { useState } from "react";
import { Table1 } from "../ui/Table";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import { Button } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import { IFormType } from "../constant/types";
// import { tableData } from "../constant/types";

export default function Invoice() {
  const [isEditable, setIsEditable] = useState(false);

  const columns = [
    { title: "Value", field: "value", type: "text" },
    { title: "Start Date", field: "startDate", type: "date" },
    { title: "End Date", field: "endDate", type: "date" },
    {
      title: "Rate",
      field: "rate",
      type: "number",
    },
    {
      title: "Total",
      field: "total",
      type: "number",
    },
  ];

  const extractedDataTableColumns = [
    {
      id: 1,
      title: "Value",
      field: "value",
      type: "text",
    },
    {
      id: 2,
      title: "From Invoice",
      field: "fromInvoice",
      type: "text",
    },
  ];

  const freePeriodTableColumns = [
    {
      id: 1,
      title: "Value",
      field: "value",
      type: "text",
    },
    {
      id: 2,
      title: "Start Date",
      field: "StartDate",
      type: "date",
    },
    {
      id: 3,
      title: "End Date",
      field: "EndDate",
      type: "date",
    },
  ];

  const freePeriodTable = [
    {
      value: "Invoice",
      StartDate: "2024-01-07",
      EndDate: "2024-02-12",
    },
  ];

  const extractedDataTable = [
    {
      value: "Container Number",
      fromInvoice: "HLDHJD 240000",
    },
    {
      value: "Bill Lading",
      fromInvoice: "HLDHJD 240000",
    },
    {
      value: "Carrier",
      fromInvoice: "HLDHJD 240000",
    },
    {
      value: "Total Fees",
      fromInvoice: "HLDHJD 240000",
    },
  ];

  const data = [
    {
      value: "Invoice-Period 1",
      startDate: "2024-11-01",
      endDate: "2024-11-01",
      rate: 100,
      total: 200,
    },
    {
      value: "Invoice-Period 2",
      startDate: "2024-11-01",
      endDate: "2024-11-01",
      rate: 120,
      total: 200,
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<IFormType>({
    mode: "all",
    defaultValues: {
      data,
      extractedDataTable,
      freePeriodTable,
    },
  });
  // watch()
  const submit = (data: any) => {
    console.log(data, "invoice");
    setIsEditable(() => isEditable !== true);
    setValue("data", data.data);
    setValue("extractedDataTable", data.extractedDataTable);
    setValue("freePeriodTable", data.freePeriodTable);
  };

  const { fields } = useFieldArray({
    control,
    name: "data",
  });

  const { fields: table1 } = useFieldArray({
    control,
    name: "extractedDataTable",
  });

  const { fields: table2 } = useFieldArray({
    control,
    name: "freePeriodTable",
  });

  return (
    <div style={{padding:'3px'}}>
      <form onSubmit={handleSubmit(submit)}>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between', justifyItems:"center"}}>
        <h4 style={{bottom:"3px"}}>
          Extracted Data From Invoice&nbsp;
        </h4>
        {!isEditable && (
            <Button
              variant="text"
              sx={{
                borderColor: "#80BF32",
                textTransform: "capitalize",
                color: "blue",
                "&:hover": {
                  // backgroundColor: "#80BF32", // Change the hover background color
                  // color: "white",
                  outline: "none",
                },
                // width: "80px",
                height: "auto",
              }}
              onClick={() => {
                return setIsEditable(true);
              }}
            >
              <EditOutlinedIcon fontSize="small" />
            </Button>
          )}
          {isEditable && (
            <div>
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  borderColor: "blue",
                  textTransform: "capitalize",
                  color: "blue",
                  "&:hover": {
                    backgroundColor: "#80BF32", // Change the hover background color
                    color: "white",
                    outline: "none",
                  },
                  width: "80px",
                  height: 30,
                  marginRight: "20px",
                  marginTop: "20px"
                  // float: "right",
                }}
                onClick={() => {
                  return setIsEditable(true);
                }}
              >
                Save
              </Button>
              
              {/* <span style={{color:'black',float:'right',marginRight: "20px" ,height: 30,}}>|</span>   */}
              <Button
                variant="outlined"
                color='error'
                sx={{
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "red", // Change the hover background color
                    color: "white",
                    outline: "none",
                  },
                  width: "80px",
                  height: 30,
                  marginTop: "20px",
                  marginRight: "20px",
                  // float: "right",
                }}
                onClick={() => {
                  return setIsEditable(false);
                }}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>

        <Table1
          columns={extractedDataTableColumns}
          data={table1}
          isEditable={isEditable}
          register={register}
          errors={errors}
          tableType="extractedDataTable"
        />
        <br />

        <h4>Fee Period Invoice</h4>

        <Table1
          columns={freePeriodTableColumns}
          data={table2}
          isEditable={isEditable}
          register={register}
          errors={errors}
          tableType="freePeriodTable"
        />
        <br />
        <h4>Charged Periods Comparison </h4>
        <Table1
          columns={columns}
          data={fields}
          isEditable={isEditable}
          register={register}
          errors={errors}
          tableType="data"
        />

        <br />
      </form>
    </div>
  );
}
