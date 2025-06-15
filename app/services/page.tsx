"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Nav from "../nav/nav";

export default function ServicesPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "droit-travail",
  ]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      {/* Main Content */}
      <main className="flex-1 bg-gray-50 sm:mt-[27vw] lg:mt-[8vw] mt-[37vw]">
        <div className="container mx-auto px-4 py-6 md:py-12">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-12">
            {/* Left Column - Expertise */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <h1 className="text-2xl md:text-3xl font-bold text-green-900 mb-4 md:mb-6">
                Expertise Juridique
              </h1>
              <p className="mb-6 md:mb-8 text-gray-600 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                culpa qui officia deserunt mollit anim id est laborum.
              </p>

              {/* Expandable Sections */}
              <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
                {/* Droit du travail */}
                <div className="bg-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleSection("droit-travail")}
                    className="w-full flex items-center justify-between p-3 md:p-4 text-left"
                  >
                    <span className="font-semibold text-sm md:text-base">
                      Droit du travail
                    </span>
                    <div className="bg-amber-600 rounded-full p-1 flex-shrink-0 ml-2">
                      {expandedSections.includes("droit-travail") ? (
                        <ChevronDown className="h-3 w-3 md:h-4 md:w-4 text-white" />
                      ) : (
                        <ChevronRight className="h-3 w-3 md:h-4 md:w-4 text-white" />
                      )}
                    </div>
                  </button>
                  {expandedSections.includes("droit-travail") && (
                    <div className="px-3 md:px-4 pb-3 md:pb-4 space-y-3 md:space-y-4">
                      <p className="text-xs md:text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. culpa qui officia deserunt mollit anim id
                        est laborum.
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. culpa qui officia deserunt mollit anim id
                        est laborum.
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. culpa qui officia deserunt mollit anim id
                        est laborum.
                      </p>
                    </div>
                  )}
                </div>

                {/* Droit administratif */}
                <div className="bg-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleSection("droit-administratif")}
                    className="w-full flex items-center justify-between p-3 md:p-4 text-left"
                  >
                    <span className="font-semibold text-sm md:text-base">
                      Droit administratif
                    </span>
                    <div className="bg-amber-600 rounded-full p-1 flex-shrink-0 ml-2">
                      {expandedSections.includes("droit-administratif") ? (
                        <ChevronDown className="h-3 w-3 md:h-4 md:w-4 text-white" />
                      ) : (
                        <ChevronRight className="h-3 w-3 md:h-4 md:w-4 text-white" />
                      )}
                    </div>
                  </button>
                  {expandedSections.includes("droit-administratif") && (
                    <div className="px-3 md:px-4 pb-3 md:pb-4">
                      <p className="text-xs md:text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  )}
                </div>

                {/* Droit des affaires */}
                <div className="bg-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleSection("droit-affaires")}
                    className="w-full flex items-center justify-between p-3 md:p-4 text-left"
                  >
                    <span className="font-semibold text-sm md:text-base">
                      Droit des affaires
                    </span>
                    <div className="bg-amber-600 rounded-full p-1 flex-shrink-0 ml-2">
                      {expandedSections.includes("droit-affaires") ? (
                        <ChevronDown className="h-3 w-3 md:h-4 md:w-4 text-white" />
                      ) : (
                        <ChevronRight className="h-3 w-3 md:h-4 md:w-4 text-white" />
                      )}
                    </div>
                  </button>
                  {expandedSections.includes("droit-affaires") && (
                    <div className="px-3 md:px-4 pb-3 md:pb-4">
                      <p className="text-xs md:text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  )}
                </div>

                {/* SIR MISÈRE */}
                <div className="bg-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleSection("sir-misere")}
                    className="w-full flex items-center justify-between p-3 md:p-4 text-left"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-sm md:text-base">
                        SIR MISÈRE
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        Lorem Ipsum
                      </div>
                    </div>
                    <div className="bg-amber-600 rounded-full p-1 flex-shrink-0 ml-2">
                      {expandedSections.includes("sir-misere") ? (
                        <ChevronDown className="h-3 w-3 md:h-4 md:w-4 text-white" />
                      ) : (
                        <ChevronRight className="h-3 w-3 md:h-4 md:w-4 text-white" />
                      )}
                    </div>
                  </button>
                  {expandedSections.includes("sir-misere") && (
                    <div className="px-3 md:px-4 pb-3 md:pb-4">
                      <p className="text-xs md:text-sm text-gray-600">
                        Culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Presentation Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-gray-400 h-32 md:h-48 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-white font-medium text-sm md:text-base text-center px-2">
                      Présentation des packs
                    </span>
                  </div>
                ))}
              </div>

              {/* Intermédiation juridique intelligente */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-3 md:mb-4">
                  Intermédiation juridique intelligente
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>

              {/* Découvre l'offre de service */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-amber-600 mb-4 md:mb-6 text-center">
                  Découvre l&apos;offre de service
                </h2>
                <div className="space-y-3 md:space-y-4">
                  <div className="bg-amber-100 border-l-4 border-amber-600 p-3 md:p-4">
                    <p className="text-xs md:text-sm">
                      Pour nous, chaque client est unique et mérite un service
                      de l&apos;humain, de la justice et du progrès. Notre
                      mission ne consiste pas seulement à accompagner
                      juridiquement nos clients, mais à le faire avec
                      excellence, intégrité et humanité.
                    </p>
                  </div>
                  <div className="bg-amber-100 border-l-4 border-amber-600 p-3 md:p-4">
                    <p className="text-xs md:text-sm">
                      Pour nous le droit est avant tout un outil au service de
                      l'humain, de la justice et du progrès. Notre mission ne
                      consiste pas seulement à accompagner juridiquement nos
                      clients, mais à le faire avec excellence, intégrité et
                      humanité.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-8 md:mb-12 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                culpa qui officia deserunt mollit anim id est laborum.
              </p>

              {/* Solutions juridiques */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-6 md:mb-8">
                  Solutions juridiques
                </h2>
                <div className="space-y-6 md:space-y-8">
                  {/* Solution 1 */}
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="w-full sm:w-48 h-32 bg-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm md:text-base">
                        Image
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-amber-600 mb-2">
                        Solutions juridiques 1
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. culpa qui officia deserunt mollit anim id
                        est laborum.
                      </p>
                    </div>
                  </div>

                  {/* Solution 2 */}
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="w-full sm:w-48 h-32 bg-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm md:text-base">
                        Image
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-amber-600 mb-2">
                        Solutions juridiques 2
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. culpa qui officia deserunt mollit anim id
                        est laborum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Questions */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm sticky top-6">
                <h3 className="text-base md:text-lg font-bold text-amber-600 mb-3 md:mb-4">
                  Posez votre question ici
                </h3>
                <p className="text-xs md:text-sm mb-3 md:mb-4">
                  Les questions les plus posées :
                </p>
                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  <div className="text-xs md:text-sm text-gray-600">
                    Quel service pour mon entreprise ?
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Quel lorem ipsum pour mon entreprise ?
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Quel service pour mon entreprise ?
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-sm">
                  <Send className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                  Envoyer
                </Button>
              </div>
            </div>
          </div>
        </div>
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