"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Dashboard" },
  { href: "/courses", label: "Courses" },
  { href: "/tasks", label: "Tasks" },
  { href: "/resources", label: "Resources" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="navbar-wrapper">
      <div className="container navbar-inner">
        <Link href="/" className="logo-brand" onClick={closeMobile}>
          <div className="logo-icon">⚡</div>
          <span className="logo-text">
            Student<span className="logo-accent">Flow</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${isActive(link.href) ? " active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link href="/tasks/new" className="btn btn-primary btn-sm">
            + New Task
          </Link>
          <button
            type="button"
            className="mobile-toggle-btn"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-nav-menu">
          <div className="container">
            <nav className="mobile-nav-links" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mobile-nav-link${isActive(link.href) ? " active" : ""}`}
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/tasks/new"
              className="btn btn-primary btn-full mobile-create-btn"
              onClick={closeMobile}
            >
              + New Task
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
