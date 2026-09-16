"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useTasks } from "@/context/TaskContext";
import SearchBar from "@/components/SearchBar";
import TaskFilters from "@/components/TaskFilters";
import TaskCard from "@/components/TaskCard";
import { courses } from "@/data/courses";

export default function TasksPage() {
  const { tasks, toggleTask, deleteTask } = useTasks();
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [courseFilter, setCourseFilter] = useState("all");

  const filteredTasks = useMemo(() => {
    const term = query.trim().toLowerCase();
    return tasks.filter((task) => {
      const matchesSearch =
        !term ||
        task.title.toLowerCase().includes(term) ||
        task.description?.toLowerCase().includes(term);
      const matchesStatus =
        statusFilter === "all" || task.status === statusFilter;
      const matchesPriority =
        priorityFilter === "all" || task.priority === priorityFilter;
      const matchesCourse =
        courseFilter === "all" || task.courseId === courseFilter;
      return matchesSearch && matchesStatus && matchesPriority && matchesCourse;
    });
  }, [tasks, query, statusFilter, priorityFilter, courseFilter]);

  const resetFilters = () => {
    setQuery("");
    setStatusFilter("all");
    setPriorityFilter("all");
    setCourseFilter("all");
  };

  return (
    <div className="container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Task Manager</h1>
          <p className="page-subtitle">
            Filter, search, and keep every assignment moving.
          </p>
        </div>
        <div className="page-header-actions">
          <Link href="/tasks/new" className="btn btn-primary">
            + Add Task
          </Link>
        </div>
      </div>

      <div className="search-margin">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search tasks by title or description..."
        />
      </div>

      <TaskFilters
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        courseFilter={courseFilter}
        setCourseFilter={setCourseFilter}
        courses={courses}
        onReset={resetFilters}
      />

      {filteredTasks.length > 0 ? (
        <div className="list-margin">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              courses={courses}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">📝</div>
          <h3>No tasks match these filters</h3>
          <p className="text-muted search-margin">
            Reset the filters or create a new assignment.
          </p>
          <Link href="/tasks/new" className="btn btn-primary">
            + Add Task
          </Link>
        </div>
      )}
    </div>
  );
}
