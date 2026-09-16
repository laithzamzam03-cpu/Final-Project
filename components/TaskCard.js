"use client";

import Link from "next/link";
import {
  formatDate,
  getPriorityClass,
  isOverdue,
  getCourseTitle,
} from "@/lib/helpers";

export default function TaskCard({ task, courses = [], onToggle, onDelete }) {
  if (!task) return null;

  const overdue = isOverdue(task);
  const completed = task.status === "completed";
  const courseTitle = getCourseTitle(courses, task.courseId);

  return (
    <article
      className={`task-card${completed ? " completed" : ""}${overdue ? " overdue-card" : ""}`}
    >
      <div className="task-card-main">
        <button
          type="button"
          className={`checkbox-custom${completed ? " checked" : ""}`}
          aria-label={completed ? "Mark as pending" : "Mark as completed"}
          onClick={() => onToggle?.(task.id)}
        >
          {completed ? "✓" : ""}
        </button>

        <div className="task-content">
          <Link href={`/tasks/${task.id}`} className="task-title-link">
            <h3 className={`task-title${completed ? " line-through" : ""}`}>
              {task.title}
            </h3>
          </Link>
          {task.description && (
            <p className="task-desc">{task.description}</p>
          )}
          <div className="task-tags-row">
            <span className="badge badge-course">{courseTitle}</span>
            <span className={`badge ${getPriorityClass(task.priority)}`}>
              {task.priority}
            </span>
            <span className={`task-due-date${overdue ? " text-danger" : ""}`}>
              {overdue ? "Overdue · " : "Due · "}
              {formatDate(task.dueDate)}
            </span>
            <span className={`badge ${completed ? "badge-done" : "badge-pending"}`}>
              {completed ? "Completed" : "Pending"}
            </span>
          </div>
        </div>
      </div>

      <div className="task-card-actions">
        <Link href={`/tasks/${task.id}`} className="btn btn-ghost btn-sm">
          Details
        </Link>
        <button
          type="button"
          className="btn btn-danger-ghost btn-sm"
          onClick={() => onDelete?.(task.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}
