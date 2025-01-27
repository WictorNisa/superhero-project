import React from "react";
import styles from "./DetailsCard.module.css";

const DetailsCard: React.FC<{
  heroDetails: any;
  onClose: () => void;
}> = ({ heroDetails, onClose }) => {
  if (!heroDetails) return null;

  const { powerstats, biography, appearance, work, connections } = heroDetails;

  return (
    <div className={styles.DetailsCard}>
      {/* Title */}
      <div className={styles.titleContainer}>
        <span className={styles.idTag}>{heroDetails.id}</span>
        <h2 className={styles.title}>{heroDetails.name}</h2>
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>

      {/* Image and Powerstats */}
      <div className={styles.heroWrapper}>
        {heroDetails.image?.url && (
          <img
            src={heroDetails.image.url}
            alt={heroDetails.name}
            className={styles.heroImage}
          />
        )}

        <div className={styles.powerstatsContainer}>
          <h4>Power Stats</h4>
          {Object.entries(powerstats).map(([stat, value]) => (
            <div key={stat} className={styles.powerstat}>
              <span className={styles.statName}>{stat}</span>
              <div className={styles.barContainer}>
                <div
                  className={styles.bar}
                  style={{ width: `${value}%` }}
                ></div>
                <span className={styles.value}>{value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Biography */}
      <div className={styles.section}>
        <h4>Biography</h4>
        <p>
          <strong>Full Name:</strong> {biography["full-name"] || "Unknown"}
        </p>
        <p>
          <strong>Alter Egos:</strong> {biography["alter-egos"]}
        </p>
        <p>
          <strong>Place of Birth:</strong> {biography["place-of-birth"]}
        </p>
        <p>
          <strong>First Appearance:</strong> {biography["first-appearance"]}
        </p>
        <p>
          <strong>Publisher:</strong> {biography.publisher}
        </p>
        <p>
          <strong>Alignment:</strong> {biography.alignment}
        </p>
      </div>

      {/* Appearance */}
      <div className={styles.section}>
        <h4>Appearance</h4>
        <p>
          <strong>Gender:</strong> {appearance.gender}
        </p>
        <p>
          <strong>Race:</strong> {appearance.race || "Unknown"}
        </p>
        <p>
          <strong>Height:</strong> {appearance.height.join(" / ")}
        </p>
        <p>
          <strong>Weight:</strong> {appearance.weight.join(" / ")}
        </p>
        <p>
          <strong>Eye Color:</strong> {appearance["eye-color"]}
        </p>
        <p>
          <strong>Hair Color:</strong> {appearance["hair-color"]}
        </p>
      </div>

      {/* Work */}
      <div className={styles.section}>
        <h4>Work</h4>
        <p>
          <strong>Occupation:</strong> {work.occupation}
        </p>
        <p>
          <strong>Base:</strong> {work.base !== "-" ? work.base : "Unknown"}
        </p>
      </div>

      {/* Connections */}
      <div className={styles.section}>
        <h4>Connections</h4>
        <p>
          <strong>Group Affiliation:</strong> {connections["group-affiliation"]}
        </p>
        <p>
          <strong>Relatives:</strong> {connections.relatives}
        </p>
      </div>
    </div>
  );
};

export default DetailsCard;
