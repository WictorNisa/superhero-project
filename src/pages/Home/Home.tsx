import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.HomeContainer}>
      <div className={styles.HomeContainerInner}>
        <h1> Welcome to the home page about superheroes</h1>
        <p>Wow very superhero very stronk very big and moskl and ja</p>
      </div>
    </section>
  );
};

export default Home;
