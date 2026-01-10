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
        <span className="block">TECHNOLOGYPOLYMATH</span>
      </h1>

      
      
      {/* --- Skills List (Bottom Left) --- */}
      <div className={`${styles.skills} ${sofiasanscondensed.className} text-black`}>
        <span className="block">/ FULL-STACK WEB</span>
        <span className="block">/ AI & ML</span>
        <span className="block">/ WEB3 & DEVOPS</span>
      </div>

      {/* --- Image (Middle) --- */}
      {/* This container sits behind the title text. */}
      <div className={styles.imageContainer}>
        <Image
          src="/aarav.jpg"
          alt="Aarav Shukla"
          width={300}
          height={500}
          className={styles.image}
        />
      </div>

      {/* --- Location (Bottom Right) --- */}
      <div className={`${styles.smallText} ${styles.location} ${splinesansmono.className} text-black`}>
        B A S E D &nbsp; I N &nbsp; I N D I A
      </div>

      <div className={`${styles.description} ${splinesansmono.className}`}>
        I'M A FULL-SPECTRUM DEVELOPER, ENGINEERING ROBUST AND INTELLIGENT APPLICATIONS FROM CONCEPT TO DEPLOYMENT.
      </div>
    </section>
  );
};

export default Hero;
