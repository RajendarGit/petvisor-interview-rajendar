"use client";
import { useMemo, useState } from "react";
import ProfileCard from "./profile-card";
import ProfileCardSort from "./profile-card-sort";
import { SortCriteria, User } from "@/type";

const userData: User[] = [
  {
    id: 1,
    name: "Arun Kumar",
    email: "arun.kumar@example.com",
    tags: ["developer", "react", "frontend", "ui/ux", "tailwind"],
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    tags: ["designer", "figma", "illustrator", "branding", "creativity"],
  },
  {
    id: 3,
    name: "Rahul Verma",
    email: "rahul.verma@example.com",
    tags: ["backend", "nodejs", "express", "mongodb", "api"],
  },
  {
    id: 4,
    name: "Sneha Iyer",
    email: "sneha.iyer@example.com",
    tags: ["product manager", "strategy", "roadmap", "agile", "communication"],
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    tags: ["devops", "aws", "docker", "kubernetes", "ci/cd"],
  },
  {
    id: 6,
    name: "Anjali Nair",
    email: "anjali.nair@example.com",
    tags: ["qa", "testing", "automation", "selenium", "cypress"],
  },
  {
    id: 7,
    name: "Karan Patel",
    email: "karan.patel@example.com",
    tags: ["data science", "python", "machine learning", "ai", "analytics"],
  },
  {
    id: 8,
    name: "Meera Joshi",
    email: "meera.joshi@example.com",
    tags: ["marketing", "seo", "content", "social media", "branding"],
  },
];

const ProfileCardGrid = () => {
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>({
    sortBy: "name",
    order: "asc",
  });

  // ✅ Only sort when needed, no extra state
  const sortedData = useMemo(() => {
    return [...userData].sort((a, b) => {
      const valA = a[sortCriteria.sortBy];
      const valB = b[sortCriteria.sortBy];

      if (valA < valB) return sortCriteria.order === "asc" ? -1 : 1;
      if (valA > valB) return sortCriteria.order === "asc" ? 1 : -1;
      return 0;
    });
  }, [sortCriteria]);

  return (
    <>
      <ProfileCardSort sortCriteria={sortCriteria} onChange={setSortCriteria} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-0">
        {sortedData.map((user) => (
          <ProfileCard
            key={user.id}
            userName={user.name}
            userEmail={user.email}
            userTags={user.tags}
          />
        ))}
      </div>
    </>
  );
};

export default ProfileCardGrid;
