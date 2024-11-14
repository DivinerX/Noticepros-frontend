import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import TableTemplate from "../components/TableTemplate";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux";
import * as Api from '../api'
import PropertyFormModal from "../components/PropertyFormModal";

export interface ITenant {
  ID?: string;
  Name?: string;
  Address: string;
  City: string;
  Unit?: string;
  State: string;
  ZipCode: string;
  County: string;
  NumUnitTotal?: number;
}


const TenantTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    dispatch(Api.GetProperties())
      .finally(() => {
        setLoading(false)
      })
  }, [])
  const properties: ITenant[] = useSelector((state: RootState) => state.property);

  const columns: { key: keyof ITenant; label: string }[] = [
    { key: "ID", label: "ID" },
    { key: "Name", label: "Name" },
    { key: "Address", label: "Address" },
    { key: "City", label: "City" },
    { key: "State", label: "State" },
    { key: "ZipCode", label: "ZipCode" },
    { key: "County", label: "County" },
    { key: "NumUnitTotal", label: "Units" },
  ];

  const addNewTenant = () => {
    console.log("Add New Tenant");
  };

  return (
    <TableTemplate
      data={properties}
      columns={columns}
      onAddNew={addNewTenant}
      Modal={PropertyFormModal}
      loading={loading}
    />
  );
};

const Tenant = () => {
  return (
    <DashboardLayout title="Tenants">
      <>Tenant</>
    </DashboardLayout>
  )
}

export default Tenant;