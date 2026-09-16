export default function StatsCard({
  title,
  value,
  icon,
  colorVariant = "default",
  subtitle,
}) {
  return (
    <article className={`stats-card variant-${colorVariant}`}>
      <div className="stats-card-header">
        <h3 className="stats-title">{title}</h3>
        <span className="stats-icon" aria-hidden="true">
          {icon}
        </span>
      </div>
      <p className="stats-value">{value}</p>
      {subtitle && <p className="stats-subtitle">{subtitle}</p>}
    </article>
  );
}
