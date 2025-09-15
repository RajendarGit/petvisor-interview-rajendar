"use client";
import { SortSelectProps } from "@/type";
import React from "react";

const ProfileCardSort: React.FC<SortSelectProps> = ({ sortCriteria, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [sortBy, order] = e.target.value.split("-");
    onChange({ sortBy: sortBy as "name", order: order as "asc" | "desc" });
  };

  return (
    <select
      onChange={handleChange}
      value={`${sortCriteria.sortBy}-${sortCriteria.order}`}
      className="border border-gray-500 p-4 mb-4"
    >
      <option value="name-asc">Name (A-Z)</option>
      <option value="name-desc">Name (Z-A)</option>
    </select>
  );
};

export default ProfileCardSort;