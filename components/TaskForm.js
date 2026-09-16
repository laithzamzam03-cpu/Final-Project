"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TaskContext";
import { generateId } from "@/lib/helpers";

const PRIORITIES = ["high", "medium", "low"];

export default function TaskForm({ courses = [] }) {
  const router = useRouter();
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [courseId, setCourseId] = useState(courses[0]?.id || "");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !dueDate) {
      setError("Please provide a title and a due date before submitting.");
      return;
    }

    addTask({
      id: generateId(),
      title: title.trim(),
      description: description.trim(),
      courseId,
      dueDate,
      priority,
      status: "pending",
    });

    router.push("/tasks");
  };

  return (
    <form className="task-form card" onSubmit={handleSubmit} noValidate>
      {error && <div className="form-error-banner">{error}</div>}

      <div className="form-group">
        <label className="form-label" htmlFor="task-title">
          Title
        </label>
        <input
          id="task-title"
          className="form-input"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError("");
          }}
          placeholder="e.g. Finish CSS Grid assignment"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="task-description">
          Description
        </label>
        <textarea
          id="task-description"
          className="form-textarea"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What needs to be done?"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="task-course">
            Course
          </label>
          <select
            id="task-course"
            className="form-select"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
          >
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="task-due-date">
            Due Date
          </label>
          <input
            id="task-due-date"
            className="form-input"
            type="date"
            value={dueDate}
            onChange={(e) => {
              setDueDate(e.target.value);
              setError("");
            }}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="task-priority">
          Priority
        </label>
        <select
          id="task-priority"
          className="form-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          {PRIORITIES.map((level) => (
            <option key={level} value={level}>
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="form-actions">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => router.push("/tasks")}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Create Task
        </button>
      </div>
    </form>
  );
}
