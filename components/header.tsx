import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { sofiasanscondensed, splinesansmono } from '@/lib/font';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* Logo on the left */}
      <div className={`${sofiasanscondensed.className} font-bold text-2xl leading-[.7]`}>
        <Link href="/">
          AARAV
          <br />
          SHUKLA
        </Link>
      </div>

      {/* Navigation in the center */}
      <nav className={`${splinesansmono.className} flex justify-center gap-20 text-sm text-[#4e4e4e]`}>
        <Link href="/about">[ ABOUT ME ]</Link>
        <Link href="/project">[ PROJECTS ]</Link>
        <Link href="/work">[ WORK ]</Link>
        <Link href="/connect">[ CONNECT ]</Link>
      </nav>

      {/* Contact link on the right */}
      <div className={`${splinesansmono.className} justify-self-end`}>
        <Link href="/contact" 
            className="
                relative
                flex items-center gap-2
                text-inherit
                after:content-['']
                after:absolute after:left-0 after:bottom-0
                after:h-[2px] after:bg-current
                after:w-0
                after:transition-all after:duration-300
                hover:after:w-full"
        >
          CONTACT ME ↗
        </Link>
      </div>
    </header>
  );
};

export default Header;