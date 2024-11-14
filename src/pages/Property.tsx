import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import TableTemplate from "../components/TableTemplate";
import PropertyFormModal from "../components/PropertyFormModal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux";
import { RootState } from "../redux";
import * as Api from '../api'

export interface IProperty {
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

const PropertyTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    dispatch(Api.GetProperties())
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  const properties: IProperty[] = useSelector((state: RootState) => state.property);

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
    setIsModalOpen(true);
  };

  const onEdit = (property: IProperty) => {
    console.log(property);
  };

  const onDelete = (property: IProperty) => {
    console.log(property);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <TableTemplate
        data={properties}
        columns={columns}
        onAddNew={addNewProperty}
        onEdit={onEdit}
        onDelete={onDelete}
        loading={loading}
      />

      <PropertyFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

const Property = () => {
  return (
    <DashboardLayout title="Properties">
      <PropertyTable />
    </DashboardLayout>
  );
};

export default Property;
