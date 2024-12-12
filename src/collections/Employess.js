import { permission } from "process";

export const Employess = {
  slug: 'employe',
  fields: [
    {
      name: 'erNo',
      type: 'text',
      label: 'ErNo',
      required: true,
    },
    {
      name: 'empId',
      type: 'text',
      label: 'EmpID',
      required: true,
    },
    {
      name: 'data',
      type: 'text',
      label: 'Data',
      required: true,
    },
  ],
 
  permission: {
    read: ["admin","public"]
  }
};
