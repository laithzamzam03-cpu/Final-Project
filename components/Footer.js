import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <Link href="/" className="logo-brand">
              <div className="logo-icon sm">⚡</div>
              <span className="logo-text">
                Student<span className="logo-accent">Flow</span>
              </span>
            </Link>
            <p className="footer-desc">
              A course and task dashboard for web development students — track
              assignments, courses, and learning resources in one place.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Explore</h4>
            <ul>
              <li>
                <Link href="/">Dashboard</Link>
              </li>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/tasks">Tasks</Link>
              </li>
              <li>
                <Link href="/resources">Resources</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Quick Actions</h4>
            <ul>
              <li>
                <Link href="/tasks/new">Add a Task</Link>
              </li>
              <li>
                <Link href="/courses">Browse Catalog</Link>
              </li>
              <li>
                <Link href="/resources">Learning Articles</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} StudentFlow. Frontend Web Development
            Final Project.
          </p>
          <span className="footer-badge">Next.js · React 19</span>
        </div>
      </div>
    </footer>
  );
}
