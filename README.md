# StudentFlow — Student Starter Kit ⚡

A comprehensive student course and task management dashboard starter built with **Next.js (App Router)**, **React 19**, and **Vanilla CSS**.

---

## 📦 Starter Kit Contents

```
studentflow-starter/
├── app/
│   ├── layout.js              # Root layout with TaskProvider, Navbar, Footer
│   ├── page.js                # Dashboard (Server Component)
│   ├── DashboardTaskSection.js # Interactive task metrics & upcoming tasks
│   ├── globals.css            # Complete global design tokens and styles
│   ├── loading.js             # Root loading UI
│   ├── error.js               # Error boundary
│   ├── not-found.js           # 404 page
│   ├── courses/
│   │   ├── page.js            # Course catalog with filters
│   │   └── [courseId]/
│   │       ├── page.js        # Dynamic course detail (generateStaticParams)
│   │       ├── CourseTasksSection.js # Course tasks and progress bar
│   │       └── not-found.js   # 404 for unknown course
│   ├── tasks/
│   │   ├── page.js            # Task manager with filters
│   │   ├── new/
│   │   │   └── page.js        # Add task page
│   │   └── [taskId]/
│   │       └── page.js        # Dynamic task detail & actions
│   ├── resources/
│   │   ├── page.js            # Learning resources page with useEffect fetch
│   │   └── loading.js         # Loading skeleton
│   └── api/
│       └── resources/
│           └── route.js       # Next.js Route Handler returning JSON
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── CourseCard.js
│   ├── TaskCard.js
│   ├── StatsCard.js
│   ├── SearchBar.js
│   ├── TaskFilters.js
│   ├── TaskForm.js
│   └── TaskProvider.js
├── context/
│   └── TaskContext.js         # Global task state & localStorage synchronization
├── data/
│   ├── courses.js             # Static course curriculum
│   └── initialTasks.js        # Initial task seed data
├── lib/
│   └── helpers.js             # Pure helper functions
├── STUDENT_STARTER_GUIDE.md   # Step-by-step student implementation guide
└── README.md
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Deploying to Vercel

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Vercel automatically detects Next.js and deploys your project in under a minute!
