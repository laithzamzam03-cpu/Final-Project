import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import DashboardTaskSection from "./DashboardTaskSection";
import { courses } from "@/data/courses";

export default function HomePage() {
  return (
    <div className="container">
      <section className="hero-banner">
        <div className="hero-header-row">
          <span className="hero-header-icon" aria-hidden="true">
            ⚡
          </span>
          <h1 className="hero-title">Stay on track with StudentFlow</h1>
        </div>
        <p className="hero-subtitle">
          Manage courses, assignments, and learning resources in one dashboard
          built with Next.js App Router and React 19.
        </p>
        <div className="hero-actions">
          <Link href="/tasks/new" className="btn btn-primary btn-lg">
            + Add a Task
          </Link>
          <Link href="/courses" className="btn btn-secondary btn-lg">
            Browse Courses
          </Link>
        </div>
      </section>

      <DashboardTaskSection />

      <section className="dashboard-courses-section">
        <div className="page-header">
          <div>
            <h2 className="page-title">Your Courses</h2>
            <p className="page-subtitle">
              Jump into a module and keep your syllabus moving.
            </p>
          </div>
          <Link href="/courses" className="btn btn-outline">
            View Catalog
          </Link>
        </div>
        <div className="cards-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
