import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import CourseTasksSection from "./CourseTasksSection";

export function generateStaticParams() {
  return courses.map((course) => ({ courseId: course.id }));
}

export default async function CourseDetailPage({ params }) {
  const { courseId } = await params;
  const course = courses.find((item) => item.id === courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className="container">
      <Link href="/courses" className="btn btn-ghost btn-sm page-back-btn">
        ← Back to Catalog
      </Link>

      <section className="hero-banner">
        <div className="hero-header-row">
          <span className="hero-header-icon" aria-hidden="true">
            {course.icon}
          </span>
          <div>
            <span className="badge badge-category-glass">{course.category}</span>
            <h1 className="hero-title">{course.title}</h1>
          </div>
        </div>
        <p className="hero-subtitle">{course.description}</p>
        <div className="hero-meta-row">
          <div>
            <span className="hero-meta-label">Instructor</span>
            <p className="hero-meta-value">{course.instructor}</p>
          </div>
          <div>
            <span className="hero-meta-label">Duration</span>
            <p className="hero-meta-value">{course.duration}</p>
          </div>
          <div>
            <span className="hero-meta-label">Level</span>
            <p className="hero-meta-value">{course.level}</p>
          </div>
        </div>
      </section>

      <div className="course-detail-layout">
        <aside className="card">
          <h2 className="topics-title">Syllabus Topics</h2>
          <ol className="topics-list">
            {course.topics.map((topic, index) => (
              <li key={topic} className="topics-item">
                <span className="topics-number">{index + 1}.</span>
                <span>{topic}</span>
              </li>
            ))}
          </ol>
        </aside>

        <CourseTasksSection courseId={course.id} courses={courses} />
      </div>
    </div>
  );
}
