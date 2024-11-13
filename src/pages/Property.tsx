import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import TableTemplate from "../components/TableTemplate";

export interface IProperty {
  ID: string;
  Name: string;
  Address: string;
  City: string;
  Unit?: string;
  State: string;
  ZipCode: string;
  County: string;
  NumUnitTotal?: number;
}


const PropertyTable: React.FC = () => {
  const properties: IProperty[] = [
    { ID: "1", Name: "Property One", Address: "123 Main St", City: "City1", State: "ST", ZipCode: "12345", County: "County1", NumUnitTotal: 10 },
    { ID: "2", Name: "Property Two", Address: "456 Side St", City: "City2", State: "ST", ZipCode: "67890", County: "County2", NumUnitTotal: 8 },
    // Add more properties here
  ];

  const columns: { key: keyof IProperty; label: string }[] = [
    { key: "ID", label: "ID" },
    { key: "Name", label: "Name" },
    { key: "Address", label: "Address" },
    { key: "City", label: "City" },
    { key: "State", label: "State" },
    { key: "ZipCode", label: "ZipCode" },
    { key: "County", label: "County" },
    { key: "NumUnitTotal", label: "Units" },
  ];

  const addNewProperty = () => {
    // Logic to add new property (e.g., show form modal or add mock data)
    console.log("Add New Property");
  };

  return (
    <TableTemplate
      data={properties}
      columns={columns}
      onAddNew={addNewProperty}
    />
  );
};

const Property = () => {
  return (
    <DashboardLayout title="Properties">
      <PropertyTable />
    </DashboardLayout>
  )
}

export default Property;