import styles from "./DividerQuotePage.module.css";

const DividerQuotePage = () => {
  return (
    <section className={styles.dividerQuotePageContainer}>
      <div className={styles.dividerInnerContainer}>
        <h1>Quote från superhjältar som slumpas</h1>
        <span>Ingen bestämd bakgrund än</span>
        <p>-Superhero</p>
      </div>
    </section>
  );
};

export default DividerQuotePage;
