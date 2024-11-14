import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import TableTemplate from "../components/TableTemplate";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux";
import * as Api from '../api';
import TenantFormModal from "../components/TenantFormModal";

export interface ITenant {
  ID?: string;
  FirstName: string;
  LastName: string;
  Telephone: string;
  TelephoneCell: string;
  TelephoneFax: string;
  Email1: string;
  Email2?: string;
  SS?: string;
  DOB?: string;
  DL?: string;
  DLST?: string;
}

const TenantTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(Api.GetTenants())
      .finally(() => setLoading(false));
  }, [dispatch]);

  const tenants: ITenant[] = useSelector((state: RootState) => state.tenant);

  const columns: { key: keyof ITenant; label: string }[] = [
    { key: "FirstName", label: "First Name" },
    { key: "LastName", label: "Last Name" },
    { key: "Telephone", label: "Telephone" },
    { key: "Email1", label: "Email" },
    { key: "SS", label: "SS" },
    { key: "DOB", label: "DOB" },
    { key: "DL", label: "Driver's License" },
  ];

  const addNewTenant = () => setIsModalOpen(true);

  return (
    <>
      <TableTemplate
        data={tenants}
        columns={columns}
        onAddNew={addNewTenant}
        loading={loading}
      />
      <TenantFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

const Tenant = () => (
  <DashboardLayout title="Tenants">
    <TenantTable />
  </DashboardLayout>
);

export default Tenant;
