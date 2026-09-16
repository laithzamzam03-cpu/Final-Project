"use client";

import { useMemo, useState } from "react";
import SearchBar from "@/components/SearchBar";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

const CATEGORIES = ["all", ...new Set(courses.map((course) => course.category))];

export default function CoursesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filteredCourses = useMemo(() => {
    const term = query.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesCategory = category === "all" || course.category === category;
      const matchesSearch =
        !term ||
        course.title.toLowerCase().includes(term) ||
        course.instructor.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [query, category]);

  return (
    <div className="container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Course Catalog</h1>
          <p className="page-subtitle">
            Search by title or instructor, then filter by category.
          </p>
        </div>
      </div>

      <div className="search-margin">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search courses or instructors..."
        />
      </div>

      <div className="filter-buttons search-margin">
        {CATEGORIES.map((item) => (
          <button
            key={item}
            type="button"
            className={`filter-btn${category === item ? " active" : ""}`}
            onClick={() => setCategory(item)}
          >
            {item === "all" ? "All" : item}
          </button>
        ))}
      </div>

      {filteredCourses.length > 0 ? (
        <div className="cards-grid">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">🔎</div>
          <h3>No courses match your search</h3>
          <p className="text-muted">Try a different keyword or category.</p>
        </div>
      )}
    </div>
  );
}
