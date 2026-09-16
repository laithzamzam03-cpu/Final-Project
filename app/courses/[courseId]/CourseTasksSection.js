"use client";

import Link from "next/link";
import { useTasks } from "@/context/TaskContext";
import TaskCard from "@/components/TaskCard";

export default function CourseTasksSection({ courseId, courses = [] }) {
  const { tasks, toggleTask, deleteTask } = useTasks();

  const courseTasks = tasks.filter((t) => t.courseId === courseId);
  const completedTasks = courseTasks.filter((t) => t.status === "completed");
  const progressPercent =
    courseTasks.length > 0
      ? Math.round((completedTasks.length / courseTasks.length) * 100)
      : 0;

  return (
    <div className="card">
      <div className="course-tasks-header">
        <h3 className="course-tasks-title">
          📝 Course Tasks & Assignments ({completedTasks.length}/{courseTasks.length})
        </h3>
        <span className="course-tasks-percent">
          {progressPercent}% Complete
        </span>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <div className="course-tasks-content">
        {courseTasks.length > 0 ? (
          <div>
            {courseTasks.map((task) => (
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
          <div className="empty-state empty-state-sm">
            <div className="empty-icon">📝</div>
            <h4>No tasks assigned to this course yet.</h4>
            <p className="text-muted search-margin">
              Add a new task to track your assignments for this module.
            </p>
            <Link href="/tasks/new" className="btn btn-primary btn-sm">
              + Add Task for this Course
            </Link>
          </div>
        )}
      </div>

      {courseTasks.length > 0 && (
        <div className="course-tasks-action-bottom">
          <Link href="/tasks/new" className="btn btn-primary btn-sm">
            + Add Another Task
          </Link>
        </div>
      )}
    </div>
  );
}
