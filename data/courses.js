// data/courses.js
// Static course data for the StudentFlow application.

export const courses = [
  {
    id: "html-css",
    title: "HTML5 & Modern CSS",
    description:
      "Master the foundations of the web: semantic HTML, responsive web design, Flexbox, CSS Grid, and modern CSS variables.",
    category: "frontend",
    instructor: "Sarah Jenkins",
    duration: "4 weeks",
    level: "Beginner",
    icon: "🎨",
    topics: [
      "Semantic HTML5 & Accessibility",
      "CSS Box Model & Typography",
      "Flexbox & CSS Grid Mastery",
      "Responsive Web Design & Media Queries",
      "CSS Animations & Transitions",
    ],
  },
  {
    id: "javascript-core",
    title: "JavaScript Core & ES6+",
    description:
      "Deep dive into modern JavaScript: DOM manipulation, asynchronous programming, Promises, ES Modules, and functional concepts.",
    category: "javascript",
    instructor: "Alex Chen",
    duration: "5 weeks",
    level: "Intermediate",
    icon: "⚡",
    topics: [
      "ES6+ Syntax & Destructuring",
      "DOM Manipulation & Event Handling",
      "Array Methods (map, filter, reduce)",
      "Promises, Async/Await & Fetch API",
      "Local Storage & State Persistence",
    ],
  },
  {
    id: "react-essentials",
    title: "React 19 Essentials",
    description:
      "Build dynamic user interfaces with React: Components, Props, State, Hooks (useState, useEffect, useRef, useContext), and custom hooks.",
    category: "react",
    instructor: "Michael Ross",
    duration: "6 weeks",
    level: "Intermediate",
    icon: "⚛️",
    topics: [
      "JSX & Component Architecture",
      "Props, State & Component Lifecycle",
      "React Hooks (useState, useEffect, useRef)",
      "Context API & Global State",
      "Controlled Forms & Validation",
    ],
  },
  {
    id: "nextjs-fullstack",
    title: "Next.js 15+ & App Router",
    description:
      "Learn modern full-stack frontend development: App Router, Server vs Client Components, dynamic routes, API routes, and deployment.",
    category: "nextjs",
    instructor: "Elena Rostova",
    duration: "5 weeks",
    level: "Advanced",
    icon: "🚀",
    topics: [
      "App Router Architecture & Layouts",
      "Server vs Client Component Boundaries",
      "Dynamic Routes & Search Params",
      "API Routes & Data Fetching Patterns",
      "Deployment on Vercel & Production Optimization",
    ],
  },
];
