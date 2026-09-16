import Link from "next/link";

export default function CourseCard({ course }) {
  if (!course) return null;

  return (
    <article className="course-card">
      <div className="course-card-header">
        <span className="course-icon" aria-hidden="true">
          {course.icon}
        </span>
        <span className="badge badge-category">{course.category}</span>
      </div>

      <h3 className="course-card-title">{course.title}</h3>
      <p className="course-card-desc">{course.description}</p>

      <div className="course-card-meta">
        <span className="meta-item">👤 {course.instructor}</span>
        <span className="meta-item">⏱ {course.duration}</span>
        <span className="meta-item">📊 {course.level}</span>
      </div>

      <Link href={`/courses/${course.id}`} className="btn btn-outline btn-full">
        View Course
      </Link>
    </article>
  );
}
