import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon, PlusIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; // Import icons

interface TableTemplateProps<T> {
  data: T[];
  columns: { key: keyof T; label: string }[];
  onAddNew?: () => void;
}

const TableTemplate = <T extends {}>({
  data,
  columns,
  onAddNew,
}: TableTemplateProps<T>) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Handle Sorting
  const handleSort = (key: keyof T) => {
    const order = sortKey === key && sortOrder === "asc" ? "desc" : "asc";
    setSortKey(key);
    setSortOrder(order);
  };

  // Handle Search
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter and Sort Data
  const filteredData = data.filter((item) =>
    columns.some(
      (col) =>
        String(item[col.key]).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortKey) {
      if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="overflow-x-auto bg-white p-6 shadow-lg rounded-lg">
      {/* Header and Search */}
      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={handleSearch}
        />
        {onAddNew && (
          <button
            onClick={onAddNew}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200 flex items-center"
          >
            <PlusIcon className="h-5 w-5 mr-2" /> Add New
          </button>
        )}
      </div>

      {/* Table */}
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((column) => (
              <th
                key={column.key as string}
                onClick={() => handleSort(column.key)}
                className="px-6 py-3 text-left text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-200"
              >
                {column.label}{" "}
                {sortKey === column.key ? (
                  sortOrder === "asc" ? (
                    <ChevronUpIcon className="inline-block h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="inline-block h-4 w-4" />
                  )
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {paginatedData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 transition duration-200">
              {columns.map((column) => (
                <td key={column.key as string} className="px-6 py-4 text-sm text-gray-900">
                  {item[column.key] as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-6 space-x-4">
        <button
          onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-400 flex items-center"
        >
          <ChevronLeftIcon className="h-5 w-5 mr-2" /> Prev
        </button>
        <span className="text-sm font-medium text-gray-600 items-center">
          Page {currentPage} of {Math.ceil(sortedData.length / itemsPerPage)}
        </span>
        <button
          onClick={() =>
            setCurrentPage((page) =>
              Math.min(page + 1, Math.ceil(sortedData.length / itemsPerPage))
            )
          }
          disabled={currentPage === Math.ceil(sortedData.length / itemsPerPage)}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-400 flex items-center"
        >
          Next <ChevronRightIcon className="h-5 w-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default TableTemplate;
