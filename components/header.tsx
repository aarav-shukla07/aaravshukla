import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { sofiasanscondensed, splinesansmono } from '@/lib/font';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* Logo on the left (unchanged) */}
      <div className={`${sofiasanscondensed.className} font-bold text-2xl leading-[.7]`}>
        <Link href="/">
          AARAV
          <br />
          SHUKLA
        </Link>
      </div>

      {/* === UPDATED NAVIGATION === */}
      <nav className={`${splinesansmono.className} flex justify-center gap-10 text-sm`}>
        
        {/* --- LINK 1: ABOUT ME --- */}
        <Link 
          href="/about" 
          className="
            flex items-center group text-[#4e4e4e] 
            hover:text-[#4e4e4e]  transition-colors duration-500
          "
        >
          {/* Static Bracket */}
          <span>[</span>
          
          {/* Flipper "Window" (h-4 is 1rem, fits text-sm) */}
          <span className="relative block h-4 overflow-hidden mx-1">
            {/* Original Text */}
            <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
              ABOUT ME
            </span>
            {/* Clone Text (slides in) */}
            <span className="absolute inset-0 block transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
              ABOUT ME
            </span>
          </span>

          {/* Static Bracket */}
          <span>]</span>
        </Link>

        {/* --- LINK 2: PROJECTS --- */}
        <Link 
          href="/project" 
          className="
            flex items-center group text-[#4e4e4e] 
            hover:text-[#4e4e4e]  transition-colors duration-500
          "
        >
          <span>[</span>
          <span className="relative block h-4 overflow-hidden mx-1">
            <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
              PROJECTS
            </span>
            <span className="absolute inset-0 block transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
              PROJECTS
            </span>
          </span>
          <span>]</span>
        </Link>

        {/* --- LINK 3: WORK --- */}
        <Link 
          href="/work" 
          className="
            flex items-center group text-[#4e4e4e] 
            hover:text-[#4e4e4e]  transition-colors duration-500
          "
        >
          <span>[</span>
          <span className="relative block h-4 overflow-hidden mx-1">
            <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
              WORK
            </span>
            <span className="absolute inset-0 block transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
              WORK
            </span>
          </span>
          <span>]</span>
        </Link>

        {/* --- LINK 4: CONNECT --- */}
        <Link 
          href="/connect" 
          className="
            flex items-center group text-[#4e4e4e] 
            hover:text-[#4e4e4e]  transition-colors duration-500
          "
        >
          <span>[</span>
          <span className="relative block h-4 overflow-hidden mx-1">
            <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
              CONNECT
            </span>
            <span className="absolute inset-0 block transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
              CONNECT
            </span>
          </span>
          <span>]</span>
        </Link>

      </nav>

      {/* Contact link on the right (unchanged) */}
      <div className={`${splinesansmono.className} justify-self-end text-black`}>
        <Link href="/contact" 
            className="
              relative
              flex items-center gap-2
              text-inherit
              after:content-['']
              after:absolute after:left-0 after:bottom-0
              after:h-[2px] after:bg-current
              after:w-0
              after:transition-all after:duration-500
              hover:after:w-full"
        >
          CONTACT ME ↗
        </Link>
      </div>
    </header>
  );
};

export default Header;