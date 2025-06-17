'use client'
import Image from "next/image";
<<<<<<< HEAD
import Link from "next/link";
=======
import Link from "next/link"; 
>>>>>>> 554d4f3 (real site-solex)
import React, { useState } from "react";
import "./nav.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav>
      {/* Logo avec lien vers l'accueil */}

        <Image
          src="/image/logo-solex.png"
          alt="Logo Solex"
          width={80}
          height={30}
          style={{ cursor: 'pointer' }}
          className="logo"
        />
     
      
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      
      <ul className={menuOpen ? "active" : ""}>
        <li>
          <Link href="/">Acceuil</Link>
        </li>
        <li>
          <Link href="/equipe">Qui sommes-nous ?</Link>
        </li>
        <li>
          <Link href="/services">Services & solutions</Link>
        </li>
        <li>
          <Link href="/education">Éducation</Link>
        </li>
      </ul>
      
      <Link href="/contact">
        <button>Contactez-Nous</button>
      </Link>
    </nav>
  );
}