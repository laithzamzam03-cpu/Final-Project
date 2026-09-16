# StudentFlow — Student Starter Guide & Capstone Milestones

Welcome to the **StudentFlow** final capstone project! This guide contains the full instructions, milestones, component specifications, and debugging tips to help you build the complete application step by step.

---

## 🎯 Project Overview

StudentFlow is a course and task management dashboard for web development students. It combines:
1. **Next.js App Router** (layouts, dynamic routes, server & client components).
2. **React 19** (hooks, controlled inputs, Context API for global state).
3. **Local Storage** persistence for tasks.
4. **Vanilla CSS Design System** (custom properties, responsive layouts, glassmorphism).
5. **Asynchronous Data Fetching** (REST API route & Server Components).

---

## 📦 What Is Provided in Your Starter Kit

- `data/courses.js`: Pre-defined course data.
- `data/initialTasks.js`: Seed task data.
- `lib/helpers.js`: Utility functions (`formatDate`, `getPriorityClass`, `isOverdue`, `getUpcomingTasks`, `generateId`).
- `app/globals.css`: Full responsive design system.
- `package.json`: Project dependencies and scripts.

---

## 🗺️ Implementation Milestones

### Milestone 1: Layout & Navigation Shell
- [ ] Implement `components/Navbar.js` with desktop links and mobile drawer.
- [ ] Implement `components/Footer.js`.
- [ ] Connect `app/layout.js` to render Navbar, children, and Footer.
- [ ] Set up placeholder pages for `/`, `/courses`, `/tasks`, `/resources`.

### Milestone 2: Course Catalog & Dynamic Detail Page
- [ ] Build `components/CourseCard.js` to display course info and meta tags.
- [ ] Build `app/courses/page.js` with real-time title/instructor search and category filter buttons.
- [ ] Build `app/courses/[courseId]/page.js` with dynamic route params, syllabus topics, and course metadata.
- [ ] Add `generateStaticParams` to statically pre-render all course detail pages.
- [ ] Add `not-found.js` for non-existent course IDs.

### Milestone 3: Global Task State with Context & LocalStorage
- [ ] Create `context/TaskContext.js` with `createContext` and `useContext`.
- [ ] Initialize state with `initialTasks` from `data/initialTasks.js`.
- [ ] Use `useEffect` to hydrate task state from `localStorage` on initial mount.
- [ ] Use `useEffect` to sync task updates back to `localStorage`.
- [ ] Implement actions: `addTask(task)`, `toggleTask(taskId)`, `deleteTask(taskId)`.
- [ ] Wrap the app tree in `app/layout.js` with `TaskProvider`.

### Milestone 4: Task Manager & Interactive Filters
- [ ] Build `components/TaskCard.js` with completion toggle, priority badge, and formatted due date.
- [ ] Build `components/SearchBar.js` for keyword filtering.
- [ ] Build `components/TaskFilters.js` for status (All/Pending/Completed), priority, and course filters.
- [ ] Assemble `app/tasks/page.js` connecting `useTasks()` to filtering and rendering.

### Milestone 5: Add Task Form & Dynamic Task Detail
- [ ] Build `components/TaskForm.js` as a controlled form with state for title, description, course, due date, and priority.
- [ ] Add basic field validation (prevent submitting without a title or due date).
- [ ] Build `app/tasks/new/page.js` hosting the form.
- [ ] Build `app/tasks/[taskId]/page.js` displaying full task details, toggle status, and delete button with router redirect.

### Milestone 6: Dashboard Metrics & API Resources
- [ ] Build `components/StatsCard.js` to show Total Tasks, Completed, Pending, and Overdue counts.
- [ ] Assemble `app/page.js` with the hero banner, live stats cards, upcoming 7-day deadlines, and course cards.
- [ ] Build `app/api/resources/route.js` Next.js Route Handler returning JSON.
- [ ] Build `app/resources/page.js` fetching from `/api/resources` using `useEffect`, showing loading and error states.
- [ ] Add `loading.js`, `error.js`, and `not-found.js` handling.

---

## 💡 Important Rules & Tips

### Server Components vs. Client Components
| When to use Server Component (Default) | When to use Client Component (`"use client"`) |
|---|---|
| Fetching data directly on the server | Using React hooks (`useState`, `useEffect`, `useRef`, `useContext`) |
| Static content or SEO-critical pages | Listening to user events (`onClick`, `onChange`, `onSubmit`) |
| Reducing client bundle size | Accessing browser APIs (`localStorage`, `window`, `document`) |

### Common Pitfalls to Avoid
1. **Direct State Mutation:** Never do `tasks.push(newTask)`. Always return a new array: `setTasks(prev => [newTask, ...prev])`.
2. **Hydration Mismatch:** Don't read `localStorage` during initial render. Read it inside a `useEffect` hook after client mount.
3. **Missing Keys in Loops:** Always provide a unique `key={task.id}` or `key={course.id}` when rendering arrays with `.map()`.
4. **Form Submissions:** Always include `e.preventDefault()` inside your submit handler.

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```
