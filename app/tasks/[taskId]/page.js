"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useTasks } from "@/context/TaskContext";
import { courses } from "@/data/courses";
import {
  formatDate,
  getPriorityClass,
  getCourseTitle,
  isOverdue,
} from "@/lib/helpers";

export default function TaskDetailPage() {
  const { taskId } = useParams();
  const router = useRouter();
  const { tasks, toggleTask, deleteTask, hydrated } = useTasks();
  const [isDeleting, setIsDeleting] = useState(false);

  const task = tasks.find((item) => item.id === taskId);

  if (!hydrated) {
    return (
      <div className="container status-screen">
        <div className="status-icon-sm">⏳</div>
        <h3>Loading task...</h3>
        <p className="text-muted">Reading your saved workspace.</p>
      </div>
    );
  }

  if (!task) {
    if (isDeleting) {
      return (
        <div className="container status-screen">
          <div className="status-icon-sm">⏳</div>
          <h3>Deleting task...</h3>
        </div>
      );
    }
    return (
      <div className="container status-screen">
        <div className="status-icon">🔍</div>
        <h1 className="status-title">Task Not Found</h1>
        <p className="status-desc">
          This task may have been deleted or does not exist in your workspace.
        </p>
        <Link href="/tasks" className="btn btn-primary">
          Back to Tasks
        </Link>
      </div>
    );
  }

  const completed = task.status === "completed";
  const overdue = isOverdue(task);
  const courseTitle = getCourseTitle(courses, task.courseId);

  const handleDelete = () => {
    setIsDeleting(true);
    deleteTask(task.id);
    router.push("/tasks");
  };

  return (
    <div className="container task-detail-container">
      <Link href="/tasks" className="btn btn-ghost btn-sm page-back-btn">
        ← Back to Tasks
      </Link>

      <article className="card task-detail-card">
        <div className="task-detail-header-row">
          <div className="task-detail-badges">
            <span className={`badge ${getPriorityClass(task.priority)}`}>
              {task.priority}
            </span>
            <span className={`badge ${completed ? "badge-done" : "badge-pending"}`}>
              {completed ? "Completed" : "Pending"}
            </span>
            {overdue && <span className="badge priority-high">Overdue</span>}
          </div>
          <span className="task-detail-id">{task.id}</span>
        </div>

        <h1 className="task-detail-title">{task.title}</h1>

        <div className="task-meta-grid">
          <div>
            <span className="task-meta-label">Course</span>
            <Link
              href={`/courses/${task.courseId}`}
              className="task-meta-course-link"
            >
              {courseTitle}
            </Link>
          </div>
          <div>
            <span className="task-meta-label">Due Date</span>
            <p className={`task-meta-value${overdue ? " text-danger" : ""}`}>
              {formatDate(task.dueDate)}
            </p>
          </div>
          <div>
            <span className="task-meta-label">Status</span>
            <p className="task-meta-value">
              {completed ? "Completed" : "Pending"}
            </p>
          </div>
        </div>

        <section className="task-detail-body">
          <h2 className="task-section-title">Description</h2>
          <p className="task-detail-text">
            {task.description || "No description provided."}
          </p>
        </section>

        <div className="task-detail-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => toggleTask(task.id)}
          >
            {completed ? "Mark as Pending" : "Mark as Completed"}
          </button>
          <button
            type="button"
            className="btn btn-danger-ghost"
            onClick={handleDelete}
          >
            Delete Task
          </button>
        </div>
      </article>
    </div>
  );
}
