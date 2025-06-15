'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Nav from "../nav/nav"
import "./equipe.css"
import Link from "next/link"
import image2  from "../image/image2 (2).jpg"

export default function Equipe(){
    return(
    <div className="container2">
       <Nav />
            <div className="header-image">
                <h2>A propos de nous</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  culpa qui officia deserunt mollit anim id est laborum.</p>
            
            </div>
            <div className="image-container">
                <div className="image"></div>
                <div className="image-texte">
                   <h3>Lorem ipsum</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="image-container">
               <div className="image-texte">
                   <h3>Lorem ipsum</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="image imagep"></div>
                
            </div>
            <div className="image-container image1">
                <div className="image"></div>
                <div className="image-texte">
                   <h3>Lorem ipsum</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  culpa qui officia deserunt mollit anim id est laborum.</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
             <div className="image-container image2">
                <div className="image"></div>
                <div className="image-texte ">
                   <h3>Vision et motivation du fondateur</h3>
                   <p>SOCIAL LEX EXPERTISES SAS est née de l’ambition de son fondateur de démocratiser l’accès au droit et de lutter contre les inégalités juridiques. Conscient des obstacles que rencontrent de nombreux individus, entreprises et organisations pour comprendre et faire valoir leurs droits, le fondateur a identifié un besoin pressant d’inclusion juridique.</p>
                  <h3 className="titre">Bedina GOUANDA</h3>
                   
                </div>
            </div>
            <div className="equipe-container">
                <h2>Notre équipe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="equipe-grid">
                    <div className="equipe">
                        <img src="/image/e-business-dev .jpg"/>
                        <h3>E-buisness developper</h3>
                        <p>conçoit des stratégies digitales pour optimiser la présence en ligne d’une entreprise.</p>
                    </div>
                    <div className="equipe">
                        <img src="/image/image2 (2).jpg"/>
                        <h3>George Mermoz</h3>
                        <p>Directeur des lorems ipsum dolor si amet ut labore</p>
                    </div>
                    <div className="equipe">
                        <img src="/image/image2 (2).jpg"/>
                        <h3>George Mermoz</h3>
                        <p>Directeur des lorems ipsum dolor si amet ut labore</p>
                    </div>
                    <div className="equipe">
                        <img src="/image/image2 (2).jpg"/>
                        <h3>George Mermoz</h3>
                        <p>Directeur des lorems ipsum dolor si amet ut labore</p>
                    </div>
                    <div className="equipe">
                        <img src="/image/image2 (2).jpg"/>
                        <h3>George Mermoz</h3>
                        <p>Directeur des lorems ipsum dolor si amet ut labore</p>
                    </div>
                    <div className="equipe">
                        <img src="/image/image2 (2).jpg"/>
                        <h3>George Mermoz</h3>
                        <p>Directeur des lorems ipsum dolor si amet ut labore</p>
                    </div>
                    
                </div>
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
    )
}