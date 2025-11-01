import React from 'react';
import Image from 'next/image';
import { sofiasanscondensed, splinesansmono } from '@/lib/font'; // Assuming your fonts are here
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroGrid}>
      {/* --- Main Title --- */}
      {/* This is the giant text. We split it into two spans 
          to match the style of "CREATIVE" and "DESIGNER".
          The `styles.title` class makes it sit on top.
      */}
      <h1 className={`${styles.title} ${sofiasanscondensed.className}`}>
        <span className="block">TECHNOLOGY</span>
        {/* <span className="block">POLYMATH</span> */}
      </h1>

      {/* --- Small Text (Top Left) --- */}
      <span className={`${styles.smallText} ${styles.number} ${splinesansmono.className}`}>
        1.618
      </span>

      {/* --- Skills List (Bottom Left) --- */}
      <div className={`${styles.skills} ${splinesansmono.className} text-black/70`}>
        <span className="block">/ FULL-STACK WEB</span>
        <span className="block">/ AI & ML</span>
        <span className="block">/ WEB3 & DEVOPS</span>
      </div>

      {/* --- Image (Middle) --- */}
      {/* This container sits behind the title text. */}
      <div className={styles.imageContainer}>
        {/* <Image
          src="https://placehold.co/600x800/222222/white?text=AARAV"
          alt="Aarav Shukla"
          width={600}
          height={800}
          className={styles.image}
        /> */}
      </div>

      {/* --- Location (Bottom Right) --- */}
      <div className={`${styles.smallText} ${styles.location} ${splinesansmono.className} text-white/70`}>
        BASED IN INDIA
      </div>
    </section>
  );
};

export default Hero;
