import { useState } from "react";
import { Table1 } from "../ui/Table";
import EditIcon from "@mui/icons-material/Edit";
import { useForm } from "react-hook-form";
import { tableData } from "../constant/types";

export default function Invoice() {
  const [isEditable, setIsEditable] = useState(false);

  const [columns, setColumns] = useState<any>([
    { title: "Value", field: "value" },
    { title: "Start Date", field: "startDate" },
    { title: "End Date", field: "endDate" },
    {
      title: "Rate",
      field: "rate",
    },
    {
      title: "Total",
      field: "total",
    },
  ]);

  const [data, setData] = useState<any>([
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
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tableData>({
    mode: "all",
    // defaultValues: data,
  });

  const submit = (data: any) => {
      console.log(data);
      setIsEditable(() => isEditable !== true);
  };

  return (
    <div>
      <h2>
        Charged Periods Comparison&nbsp;
        {!isEditable && (
          <button
            onClick={() => {
              return setIsEditable(true);
            }}
          >
            <EditIcon fontSize="medium" />
          </button>
        )}
        {isEditable && <button onClick={submit}>Save</button>}
      </h2>
      <form onSubmit={handleSubmit(submit)}>
        <Table1
          columns={columns}
          data={data}
          isEditable={isEditable}
          register={register}
          errors={errors}
        />
      </form>
    </div>
  );
}
