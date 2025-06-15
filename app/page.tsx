'use client'
import Link from "next/link"
import Contactform from "./contact/contact-form"
import Nav from "./nav/nav"
import "./acceuil.css"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Acceuil() {
  return (
    <div className="container1">
      <Nav />
      <div className="header_image">
        <div className="header_texte">
          <h2>
            Pionnier de l’inclusion juridique, <strong>SOLEX</strong> met{" "}
            <strong>l’intelligence du droit au service de l’humain</strong>
          </h2>
          <p>
            Acteur de l’innovation juridique, SOLEX est la première legaltech spécialisée dans l’accompagnement juridique et l’intermédiation juridique en Côte d’Ivoire
          </p>
          <div className="button-group">
                        <div className="button1">
              Consulter Nos Service <div className="rond">></div>
            </div>
            
            <button className="rdv"><Link href="/contact">Prenez rendez-vous</Link></button>
            
          </div>
        </div>
      </div>

      <h2 className="h2">A propos</h2>
      <div className="apropos-container">
        <div className="apropos-image"></div>
        <div className="apropos-texte">
          <h3>
            Chez <strong>SOLEX</strong>, nous croyons que le droit ne se limite pas à des textes ou à des procédures
          </h3>
          <div className="texte">
            <p>
              Pour nous le droit est avant tout un outil au service de l’humain, de la justice et du progrès. Notre mission ne consiste pas seulement à accompagner juridiquement nos clients, mais à le faire avec excellence, intégrité et humanité.
            </p>
          </div>
           
          <button>
            <Link href="/equipe" className="flex items-center">
            En savoir plus <div className="rond">></div>
             </Link>
          </button>
         
        </div>
      </div>

      <div className="service-container">
        <h2>
          
          Nos Services et <br />
          solutions juridiques
        </h2>
        <p>
          Nous mettons notre expertise à votre service pour évaluer les procédures, optimiser les performances du système judiciaire et garantir une meilleure accessibilité à la justice. Notre engagement : promouvoir l’équité et l’efficacité à chaque étape du processus juridique.
        </p>
        <div className="service">
          <div className="service-items">
            <strong>
            <h3>Audit</h3>
            </strong>
            <p>Pour garantir une justice efficace, nous proposons un service d’audit en justice qui permet d’évaluer les procédures, optimiser les performances et renforcer la confiance des usagers dans le système judiciaire.</p>
           
          <button>
             <Link href="/services" className="flex items-center"> 
            En savoir plus <div className="rond">></div>
             </Link>
          </button>
         
          </div>
          <div className="service-items">
            <strong>
            <h3>Accompagnement juridique sur mesure</h3>
            </strong>
            <p>Face à la complexité du droit, nous proposons un accompagnement juridique sur mesure, adapté à vos besoins, pour vous assister efficacement et garantir la sécurité de vos démarches.</p>
           <button>
             <Link href="/services" className="flex items-center"> 
            En savoir plus <div className="rond">></div>
             </Link>
          </button>
          </div>
          <div className="service-items">
            <strong>
            <h3>Intermédiation juridique intelligente</h3>
            </strong>
            <p>Dans un environnement juridique complexe, notre service d’intermédiation juridique intelligente facilite la mise en relation entre justiciables et professionnels du droit, grâce à des outils numériques performants.</p>
          <button>
             <Link href="/services" className="flex items-center"> 
            En savoir plus <div className="rond">></div>
             </Link>
          </button>
          </div>
          <div className="service-items">
            <strong>
            <h3>Solutions juridiques</h3>
            </strong>
            <p>Face à la complexité croissante du droit, nous proposons des solutions juridiques claires et personnalisées, pour accompagner efficacement nos clients dans la défense de leurs droits et la sécurisation de leurs activités</p>
           <button>
             <Link href="/services" className="flex items-center"> 
            En savoir plus <div className="rond">></div>
             </Link>
          </button>
          </div>
        </div>
      </div>

      <div className="juridique-container">
        <h2>
          Accedez à notre espace <br />
          d’éducation juridique
        </h2>
        <div className="flex1">
          <p >
           Accédez à des ressources essentielles pour mieux comprendre le système judiciaire, faire valoir vos droits et agir avec confiance. Votre connaissance du droit, renforcée et accessible.
          </p>
          <button>
             <Link href="/education" className="flex items-center"> 
            En savoir plus <div className="rond">></div>
             </Link>
          </button>
        </div>
      </div>

      <div className="video-container">
        <div className="juridique">
          <div className="juridique-items">
            <h3>Article 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="juridique-items">
            <h3>Article 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="juridique-items">
            <h3>Article 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      <Contactform />
      <footer className="bg-green-900 text-white py-8 md:py-12 mt-[20px]">
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
  )
}
