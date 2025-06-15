'use client'
import Link from "next/link"
import "./contact-page.css";
import React from "react";
import Nav from "../nav/nav";
import Contactform from "./contact-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <div className="containerCpage">
      <Nav />
      <div className="page1">
        <Contactform />

        <section className="container-cpage">
          <div className="left">
            <h2>Nos horaires d'ouverture</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Culpa
              qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="schedule">
              {[
                ["Lun.", "07 H00 – 16H00"],
                ["Mar.", "07 H00 – 16H00"],
                ["Mer.", "07 H00 – 16H00"],
                ["Jeu.", "07 H00 – 16H00"],
                ["Ven.", "07 H00 – 16H00"],
                ["Sam.", "07 H00 – 13H00"],
              ].map(([day, time]) => (
                <div className="day" key={day}>
                  <span className="span1">{day}</span>
                  <span className="span2">{time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="right">
            <h2>Réseaux sociaux</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <div className="social-icons">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt="X"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
                alt="Facebook"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
                alt="LinkedIn"
              />
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-green-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base">
              Liens utiles
            </h3>
            <p className="text-xs md:text-sm mb-3 md:mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, integer
              lobortis.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter">
                <div className="h-6 w-6 border border-white flex items-center justify-center text-xs">
                  X
                </div>
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <div className="h-6 w-6 border border-white flex items-center justify-center text-xs">
                  in
                </div>
              </Link>
              <Link href="#" aria-label="Facebook">
                <div className="h-6 w-6 border border-white flex items-center justify-center text-xs">
                  f
                </div>
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base">
              Termes
            </h3>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-amber-300 transition-colors"
                >
                  A propos de nous
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-amber-300 transition-colors"
                >
                  Nos services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-amber-300 transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-amber-300 transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-amber-300 transition-colors"
                >
                  CGU
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base">
              Abonnez-vous à notre Newsletter
            </h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white text-black rounded-none text-sm flex-1"
              />
              <Button className="bg-amber-600 hover:bg-amber-700 rounded-none text-sm whitespace-nowrap">
                Soumettre
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 md:mt-12 text-center text-xs md:text-sm">
          <p>© Social Lex Expertises, tous droit réservés</p>
        </div>
      </footer>
    </div>
  );
}
