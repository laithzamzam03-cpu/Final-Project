"use client";

const STATUS_OPTIONS = [
  { value: "all", label: "All" },
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
];

const PRIORITY_OPTIONS = [
  { value: "all", label: "All" },
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

export default function TaskFilters({
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  courseFilter,
  setCourseFilter,
  courses = [],
  onReset,
}) {
  return (
    <div className="filters-container">
      <div className="filter-group">
        <span className="filter-label">Status</span>
        <div className="filter-buttons">
          {STATUS_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`filter-btn${statusFilter === option.value ? " active" : ""}`}
              onClick={() => setStatusFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <span className="filter-label">Priority</span>
        <div className="filter-buttons">
          {PRIORITY_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`filter-btn${priorityFilter === option.value ? " active" : ""}`}
              onClick={() => setPriorityFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-label" htmlFor="course-filter">
          Course
        </label>
        <select
          id="course-filter"
          className="filter-select"
          value={courseFilter}
          onChange={(e) => setCourseFilter(e.target.value)}
        >
          <option value="all">All Courses</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
      </div>

      {onReset && (
        <div className="filter-group">
          <span className="filter-label">&nbsp;</span>
          <button type="button" className="btn btn-ghost btn-sm" onClick={onReset}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
