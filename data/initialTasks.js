// data/initialTasks.js
// This is the starting state loaded into TaskContext
// when localStorage is empty (e.g., a brand-new visitor).

export const initialTasks = [
  {
    id: "task-1",
    title: "Build a semantic HTML page",
    description:
      "Create a multi-section HTML page using semantic elements: header, main, section, article, and footer.",
    courseId: "html-css",
    dueDate: "2026-09-05",
    priority: "high",
    status: "completed",
  },
  {
    id: "task-2",
    title: "Style a layout with Flexbox",
    description:
      "Reproduce a provided design mockup using Flexbox. The layout should have a responsive sidebar and a main content area.",
    courseId: "html-css",
    dueDate: "2026-09-08",
    priority: "medium",
    status: "completed",
  },
  {
    id: "task-3",
    title: "Create a responsive CSS Grid layout",
    description:
      "Build a card grid that switches from 3 columns on desktop to 1 column on mobile using CSS Grid and media queries.",
    courseId: "html-css",
    dueDate: "2026-09-12",
    priority: "high",
    status: "pending",
  },
  {
    id: "task-4",
    title: "Implement an interactive Todo list in Vanilla JS",
    description:
      "Build a todo list supporting add, toggle complete, delete, and filtering using vanilla DOM methods and localStorage.",
    courseId: "javascript-core",
    dueDate: "2026-09-15",
    priority: "high",
    status: "pending",
  },
  {
    id: "task-5",
    title: "Fetch and display data from Public REST API",
    description:
      "Use fetch() and async/await to retrieve data from a JSON API, handle loading and error states, and render cards.",
    courseId: "javascript-core",
    dueDate: "2026-09-18",
    priority: "medium",
    status: "pending",
  },
  {
    id: "task-6",
    title: "Build a reusable Component Library in React",
    description:
      "Create modular components (Button, Modal, Card, Input) with clear props interfaces and reusable CSS styling.",
    courseId: "react-essentials",
    dueDate: "2026-09-22",
    priority: "high",
    status: "pending",
  },
  {
    id: "task-7",
    title: "Manage Global State with React Context",
    description:
      "Implement a full Theme & User preferences context provider with custom hooks and persistent storage.",
    courseId: "react-essentials",
    dueDate: "2026-09-25",
    priority: "medium",
    status: "pending",
  },
  {
    id: "task-8",
    title: "Build the StudentFlow App Router Layout & Dashboard",
    description:
      "Structure the Next.js App Router application with layouts, dynamic routes, server/client boundaries, and dashboard metrics.",
    courseId: "nextjs-fullstack",
    dueDate: "2026-09-30",
    priority: "high",
    status: "pending",
  },
];
