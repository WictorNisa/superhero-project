import { useEffect, useState } from "react";
import styles from "./DividerQuotePage.module.css";
import { motion, AnimatePresence } from "framer-motion";

const DividerQuotePage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % superheroQuotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval); // Cleanup function
  }, []);
  const superheroQuotes = [
    {
      quote: "With great power comes great responsibility.",
      hero: "Spider-Man",
    },
    {
      quote: "It’s not who I am underneath, but what I do that defines me.",
      hero: "Batman",
    },
    { quote: "I am Iron Man.", hero: "Iron Man" },
    {
      quote:
        "You either die a hero or you live long enough to see yourself become the villain.",
      hero: "Harvey Dent",
    },
    { quote: "I can do this all day.", hero: "Captain America" },
    { quote: "Truth, justice, and the American way.", hero: "Superman" },
    { quote: "Hulk smash!", hero: "Hulk" },
    {
      quote:
        "In brightest day, in blackest night, no evil shall escape my sight.",
      hero: "Green Lantern",
    },
    { quote: "I’m always angry.", hero: "Hulk" },
    { quote: "I'm vengeance.", hero: "Batman" },
    {
      quote:
        "No matter how bad things get, something good is out there, over the horizon.",
      hero: "Wonder Woman",
    },
    { quote: "Mercy is not a weakness, it is a virtue.", hero: "Superman" },
    {
      quote:
        "The greatest power on Earth is the magnificent power we all possess… the power of the human brain!",
      hero: "Professor X",
    },
    {
      quote: "The world doesn’t need a savior, and neither do I.",
      hero: "Superman",
    },
    {
      quote:
        "It’s not about how much we lost. It’s about how much we have left.",
      hero: "Iron Man",
    },
    { quote: "We are Groot.", hero: "Groot" },
    { quote: "I'm Mary Poppins, y'all!", hero: "Yondu" },
    {
      quote: "Sometimes you have to run before you can walk.",
      hero: "Iron Man",
    },
    { quote: "I’m Batman.", hero: "Batman" },
    { quote: "I am inevitable.", hero: "Thanos" },
    { quote: "I have nothing to prove to you.", hero: "Captain Marvel" },
    {
      quote:
        "Whatever happens tomorrow, you must promise me one thing. That you will stay who you are.",
      hero: "Dr. Erskine",
    },
    {
      quote: "The hardest choices require the strongest wills.",
      hero: "Thanos",
    },
    {
      quote:
        "No man can win every battle, but no man should fall without a struggle.",
      hero: "Peter Parker",
    },
    {
      quote:
        "Heroes are made by the path they choose, not the powers they are graced with.",
      hero: "Iron Man",
    },
    {
      quote: "You’re much stronger than you think you are. Trust me.",
      hero: "Superman",
    },
    { quote: "A hero can be anyone.", hero: "Batman" },
    { quote: "Wakanda forever!", hero: "Black Panther" },
    {
      quote:
        "There is a right and a wrong in the universe, and that distinction is not hard to make.",
      hero: "Superman",
    },
    {
      quote:
        "This isn’t freedom. We’re holding a gun to every citizen’s head and calling it security.",
      hero: "Captain America",
    },
    {
      quote:
        "Sometimes the truth isn’t good enough. Sometimes people deserve more.",
      hero: "Batman",
    },
    {
      quote: "I don’t like bullies. I don’t care where they’re from.",
      hero: "Captain America",
    },
    { quote: "I’ve come to bargain!", hero: "Doctor Strange" },
    {
      quote:
        "We must all live in the real world… and sometimes that can be pretty grim.",
      hero: "Batman",
    },
    {
      quote: "The universe is so big, it has no center. We are the center.",
      hero: "Ms. Marvel",
    },
    {
      quote: "I will fight for those who cannot fight for themselves.",
      hero: "Wonder Woman",
    },
    { quote: "Part of the journey is the end.", hero: "Iron Man" },
    {
      quote: "Vengeance won’t change the past, mine or anyone else’s.",
      hero: "Batman",
    },
    { quote: "A man without fear is a man without hope.", hero: "Daredevil" },
    {
      quote: "You may have my past, but you do not have my future.",
      hero: "Black Widow",
    },
    { quote: "I am the law!", hero: "Judge Dredd" },
    { quote: "The future is worth fighting for.", hero: "Cyclops" },
    { quote: "Faith is my sword. Truth is my shield.", hero: "Thor" },
    {
      quote:
        "Sometimes you have to take a leap of faith first. The trust part comes later.",
      hero: "Superman",
    },
    {
      quote:
        "The world is changing. Soon there will only be the conquerors and the conquered.",
      hero: "Killmonger",
    },
    {
      quote: "Genius, billionaire, playboy, philanthropist.",
      hero: "Iron Man",
    },
    { quote: "No gods. No masters.", hero: "Black Widow" },
    {
      quote: "You have great power, but you lack restraint.",
      hero: "Doctor Strange",
    },
    {
      quote: "Life doesn’t give us purpose. We give life purpose.",
      hero: "The Flash",
    },
    {
      quote:
        "Your anger gives you great power. But if you let it, it will destroy you.",
      hero: "Professor X",
    },
    {
      quote:
        "Being a hero isn’t about taking care of yourself, it’s about taking responsibility for other people.",
      hero: "Superman",
    },
    {
      quote: "The price of freedom is high. It always has been.",
      hero: "Captain America",
    },
    { quote: "The world needs saving. That’s what heroes do.", hero: "Thor" },
    {
      quote: "Power is not what makes a hero. It’s what they do with it.",
      hero: "Thor",
    },
    { quote: "Every journey has an end.", hero: "Iron Man" },
    {
      quote:
        "No matter how many times you save the world, it always manages to get back in jeopardy again.",
      hero: "Mr. Incredible",
    },
    {
      quote: "Why do we fall, Bruce? So we can learn to pick ourselves up.",
      hero: "Alfred Pennyworth",
    },
    {
      quote: "You can be the hero Gotham needs, not the one it deserves.",
      hero: "Batman",
    },
    { quote: "With great risk comes great reward.", hero: "Spider-Man" },
    {
      quote: "Courage is not the absence of fear, but the triumph over it.",
      hero: "Black Panther",
    },
    {
      quote: "No one stays dead in comics… except Uncle Ben.",
      hero: "Wolverine",
    },
    {
      quote:
        "Strength doesn’t come from muscles. It comes from an unbreakable will.",
      hero: "Wonder Woman",
    },
    {
      quote:
        "To protect the world from devastation, to unite all people within our nation.",
      hero: "Team Rocket",
    },
    {
      quote: "Dreams save us. Dreams lift us up and transform us.",
      hero: "Superman",
    },
    { quote: "I will not let you destroy my world!", hero: "Goku" },
    {
      quote:
        "I have lived my life by my own terms. And I will die the same way.",
      hero: "Wolverine",
    },
    { quote: "We don’t trade lives.", hero: "Captain America" },
    { quote: "Justice is blind, but she is not heartless.", hero: "Daredevil" },
    {
      quote:
        "Hope is like the sun. If you only believe in it when you see it, you’ll never make it through the night.",
      hero: "Leia Organa",
    },
    {
      quote: "It’s not the suit that makes the hero. It’s the man inside.",
      hero: "Iron Man",
    },
    { quote: "Fear is the enemy of will.", hero: "Green Lantern" },
    { quote: "What is grief, if not love persevering?", hero: "Vision" },
  ];

  return (
    <section className={styles.dividerQuotePageContainer}>
      <div className={styles.dividerInnerContainer}>
      <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className={styles.quoteContainer}>
            <p className="text-2xl font-semibold">" {superheroQuotes[index].quote} "</p>
            <h4 className="mt-2 text-lg italic">- {superheroQuotes[index].hero}</h4>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DividerQuotePage;
