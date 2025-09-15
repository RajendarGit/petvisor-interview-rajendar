export type SortCriteria = {
  sortBy: "name";
  order: "asc" | "desc";
};

export type User = {
  id: number;
  name: string;
  email: string;
  tags: string[];
};

export type SortSelectProps = {
  sortCriteria: SortCriteria;
  onChange: (criteria: SortCriteria) => void;
};