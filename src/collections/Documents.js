import { permission } from "process";

export const Documents = {
  slug: 'documents',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      label: 'Desc',
      required: true,
    },
  ],
 
  permission: {
    read: ["admin","public"]
  }
};
