import { UseFormRegister } from "react-hook-form"

export type tableColumns = {
    key:string  | undefined,
    label: string | number
  }
  
  export type Tabledata = {
    [key: string]: any
  }
  
  export interface IDynamicTable {
    columns:tableColumns[],
    data:Tabledata,
    isEditable:boolean,
    setData?:any
    errors: any
    register:UseFormRegister<any>
  }

  export interface tableData {
    startDate: Date,
    endDate: Date,
    rate:number,
    total:number
  } 