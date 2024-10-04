import { UseFormRegister } from "react-hook-form"

export type tableColumns = {
    title:string  | undefined,
    field: string,
    type:string
  }
  
  export type Tabledata = {
    [key: string]: any
  }
  
  export interface IDynamicTable {
    columns:tableColumns[],
    data:Tabledata,
    isEditable:boolean,
    tableType:string
    errors: any
    register:UseFormRegister<any>
  }

  export type dataT = {
    startDate: string,
    endDate: string,
    rate:number,
    total:number
  }
  
  export type freePeriodTableT = {
    value : string,
    StartDate:string,
    EndDate:string
  }

  export type extractedDataTableT = {
    value :string,
    fronInvoice:string
  }

  export interface IFormType  {
    extractedDataTable:extractedDataTableT[],
    freePeriodTable:freePeriodTableT[],
    data:dataT[],
  }
  