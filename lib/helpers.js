// lib/helpers.js
// Shared utility (helper) functions used across the application.
// These are pure functions — they take inputs and return outputs with no side effects.
// Because they don't use React hooks or browser-only APIs directly, they can be used in both
// Server Components and Client Components.

/**
 * Formats a date string (YYYY-MM-DD) into a human-readable format.
 * Example: "2026-09-15" → "Sep 15, 2026"
 */
export function formatDate(dateString) {
  if (!dateString) return "No due date";
  const date = new Date(dateString + "T00:00:00"); // avoid timezone offset issues
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Returns a CSS class name suffix based on task priority.
 * Used by TaskCard to apply the right color to the priority badge.
 */
export function getPriorityClass(priority) {
  switch (priority?.toLowerCase()) {
    case "high":
      return "priority-high";
    case "medium":
      return "priority-medium";
    case "low":
      return "priority-low";
    default:
      return "priority-low";
  }
}

/**
 * Checks whether a task is overdue.
 * A task is overdue if it is still pending and its due date is before today.
 */
export function isOverdue(task) {
  if (!task || task.status === "completed" || !task.dueDate) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(task.dueDate + "T00:00:00");
  return due < today;
}

/**
 * Returns tasks that are due within the next 7 days and not yet completed.
 * Used on the Dashboard to show upcoming tasks.
 */
export function getUpcomingTasks(tasks) {
  if (!Array.isArray(tasks)) return [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);

  return tasks.filter((task) => {
    if (task.status === "completed" || !task.dueDate) return false;
    const due = new Date(task.dueDate + "T00:00:00");
    return due >= today && due <= nextWeek;
  });
}

/**
 * Generates a unique ID for new tasks.
 */
export function generateId() {
  return "task-" + Date.now();
}

/**
 * Returns the course title for a given courseId.
 * Accepts the full courses array and a courseId string.
 */
export function getCourseTitle(courses, courseId) {
  if (!Array.isArray(courses)) return "Unknown Course";
  const course = courses.find((c) => c.id === courseId);
  return course ? course.title : "General Task";
}
