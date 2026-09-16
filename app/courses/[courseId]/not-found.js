import Link from "next/link";

export default function CourseNotFound() {
  return (
    <div className="container status-screen">
      <div className="status-icon">📚</div>
      <h2 className="status-title">Course Not Found</h2>
      <p className="status-desc">
        We couldn&apos;t find any course matching the requested ID in our curriculum.
      </p>
      <Link href="/courses" className="btn btn-primary">
        Browse All Courses
      </Link>
    </div>
  );
}
