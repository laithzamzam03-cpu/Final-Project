"use client";

export default function SearchBar({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="search-bar-wrapper">
      <span className="search-icon" aria-hidden="true">
        🔍
      </span>
      <input
        type="search"
        className="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
      {value ? (
        <button
          type="button"
          className="search-clear-btn"
          aria-label="Clear search"
          onClick={() => onChange("")}
        >
          ✕
        </button>
      ) : null}
    </div>
  );
}
