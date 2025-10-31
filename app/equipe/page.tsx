'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Nav from "../nav/nav"
import "./equipe.css"
import Link from "next/link"


export default function Equipe(){
    return(
    <div className="container2">
       <Nav />
            <div className="header-image">
                <h2>A propos de nous</h2>

                
            </div>
            <div className="cont2">
            <div className="image-container">

                <div className="image-texte">
                   <h3>Notre Vision</h3>
                   <p>Être le partenaire de référence auprès des entreprises, des organisations et des particuliers dans la résolution de problèmes juridiques et stratégiques simples ou complexes tout en les aidant à anticiper leurs risques juridiques et stratégiques.</p>
                </div>
            </div>
            <div className="image-container">
               <div className="image-texte">
                   <h3>Nos Objectifs</h3>
                   <p>L’objectif de SOLEX SAS est d’accompagner ses clients dans leurs enjeux juridiques et stratégiques en proposant des solutions personnalisées et innovantes, tout en facilitant la gestion des risques, des démarches administratives et la résolution amiable des conflits, et en renforçant les compétences juridiques à travers des formations adaptées.</p>
                </div>    
            </div>
            </div>
             <div className="image-container image2">
                <div className="image"></div>
                <div className="image-texte m">
                   <h3>Vision et motivation du fondateur</h3>
                   <p>SOCIAL LEX EXPERTISES SAS est née de l’ambition de son fondateur de démocratiser l’accès au droit et de lutter contre les inégalités juridiques. Conscient des obstacles que rencontrent de nombreux individus, entreprises et organisations pour comprendre et faire valoir leurs droits, le fondateur a identifié un besoin pressant d’inclusion juridique.</p>
                  <h3 className="titre">Bedina GOUANDA</h3>
                   
                </div>
            </div>
            <div className="equipe-container">
                <h2>Notre équipe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="equipe-grid">
                  
                    <div className="wrapper">
                        <div className="profile">
                            <img
                            src = "/image/Image-directrice.jpg"
                            className="thumbnail"
                            />


                            <h1 className="name">Beverly Little</h1>
                            <p className="title">Juriste</p>
                            <p className="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur tempore labore reiciendis accusamus optio facilis, excepturi aliquid possimus veritatis. Illo dolor asperiores quas quibusdam iusto eos repudiandae fugit, nam quidem!
                            </p>
                        </div>
                      </div>  
                        
                        <div className="wrapper">
                        <div className="profile">
                            <img
                            src="/image/assist-admin.jpg"
                            className="thumbnail"
                            />


                            <h1 className="name">Beverly Little</h1>
                            <p className="title">Juriste</p>
                            <p className="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur tempore labore reiciendis accusamus optio facilis, excepturi aliquid possimus veritatis. Illo dolor asperiores quas quibusdam iusto eos repudiandae fugit, nam quidem!
                            </p>
                        </div>
                      </div>  

                      <div className="wrapper">
                        <div className="profile">
                            <img
                            src="/image/juriste.jpg"
                            className="thumbnail"
                            />


                            <h1 className="name">Beverly Little</h1>
                            <p className="title">Juriste</p>
                            <p className="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur tempore labore reiciendis accusamus optio facilis, excepturi aliquid possimus veritatis. Illo dolor asperiores quas quibusdam iusto eos repudiandae fugit, nam quidem!
                            </p>
                        </div>
                      </div>  

                      <div className="wrapper">
                        <div className="profile">
                            <img
                            src="/image/dev.jpg"
                            className="thumbnail"
                            />


                            <h1 className="name">Beverly Little</h1>
                            <p className="title">Business Developper</p>
                            <p className="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur tempore labore reiciendis accusamus optio facilis, excepturi aliquid possimus veritatis. Illo dolor asperiores quas quibusdam iusto eos repudiandae fugit, nam quidem!
                            </p>
                        </div>
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