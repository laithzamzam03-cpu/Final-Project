"use client";

import { useEffect, useState } from "react";

export default function ResourcesPage() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadResources() {
      try {
        const response = await fetch("/api/resources");
        if (!response.ok) {
          throw new Error("The resources API did not respond successfully.");
        }
        const data = await response.json();
        if (!cancelled) {
          setResources(Array.isArray(data.resources) ? data.resources : []);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Failed to load learning resources.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadResources();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="container status-screen">
        <div className="status-icon-sm">📖</div>
        <h3>Fetching Learning Resources...</h3>
        <p className="text-muted">Connecting to the internal API route.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container status-screen">
        <div className="status-icon">⚠️</div>
        <h2 className="status-title">Could not load resources</h2>
        <p className="status-desc">{error}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Learning Resources</h1>
          <p className="page-subtitle">
            Articles and docs fetched from the StudentFlow API route.
          </p>
        </div>
      </div>

      {resources.length > 0 ? (
        <div className="cards-grid">
          {resources.map((resource) => (
            <article key={resource.id} className="card resource-card">
              <div className="resource-card-header">
                <span className="badge badge-category">{resource.category}</span>
                <span className="badge badge-course">{resource.type}</span>
              </div>
              <h3 className="resource-card-title">{resource.title}</h3>
              <p className="resource-card-desc">{resource.description}</p>
              <div className="resource-card-footer">
                <span className="resource-author">{resource.author}</span>
                <a
                  href={resource.url}
                  className="btn btn-outline btn-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">📚</div>
          <h3>No resources yet</h3>
          <p className="text-muted">The API did not return any articles.</p>
        </div>
      )}
    </div>
  );
}
