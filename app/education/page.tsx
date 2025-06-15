"use client";
import "../globals.css"
import { useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Nav from "../nav/nav";

export default function Home() {
  // menuOpen et le bouton menu ont été retirés car plus nécessaires

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      {/* Main Content */}
<main className="sm:mt-[27vw] lg:mt-[8vw] mt-[37vw] ">

        {/* Hero Section */}
        <section
  className="py-8 md:py-16 text-center px-4 bg-cover bg-center"
  style={{ backgroundImage: "url('/image/equipe-header.jpg')" }}
>
  <h1 className="text-2xl md:text-4xl font-bold text-amber-600">
    Espace éducation juridique
  </h1>
</section>

        {/* Latest Articles */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-4 md:mb-6">
            Nos derniers articles
          </h2>
          <p className="mb-6 md:mb-8 max-w-2xl text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. culpa
            qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Featured Article */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                Article à la une titre
              </h3>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Article List */}
            <div className="space-y-6 md:space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-b pb-4 md:pb-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    Titre de l&apos;article
                  </h3>
                  <p className="text-xs md:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. culpa qui officia deserunt mollit anim id est
                    laborum.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Multimedia Content */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-4 md:mb-6">
            Contenus multimédias
          </h2>
          <p className="mb-8 md:mb-12 max-w-2xl text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. culpa
            qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-16">
            {/* Video 1 */}
            <div className="flex gap-4 md:gap-6">
              <div className="relative h-16 w-16 md:h-24 md:w-24 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gray-100 flex items-center justify-center">
                  <Play className="h-6 w-6 md:h-10 md:w-10 text-amber-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-amber-600 mb-2">
                  1 minute de droit
                </h3>
                <p className="text-xs md:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="flex gap-4 md:gap-6">
              <div className="relative h-16 w-16 md:h-24 md:w-24 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gray-100 flex items-center justify-center">
                  <Play className="h-6 w-6 md:h-10 md:w-10 text-amber-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-amber-600 mb-2">
                  Titre de la vidéo
                </h3>
                <p className="text-xs md:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
