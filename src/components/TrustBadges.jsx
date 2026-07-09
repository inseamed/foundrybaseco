import Icon from "./Icon";

const badges = [
  { icon: "shield", label: "Licensed & Insured" },
  { icon: "award", label: "Free Estimates" },
  { icon: "clock", label: "10+ Years Experience" },
  { icon: "tool", label: "Owner On-Site" },
];

function TrustBadges() {
  return (
    <section className="trust-badges">
      {badges.map((badge) => (
        <div className="trust-badge" key={badge.label}>
          <Icon name={badge.icon} className="trust-badge-icon" />
          <span>{badge.label}</span>
        </div>
      ))}
    </section>
  );
}

export default TrustBadges;