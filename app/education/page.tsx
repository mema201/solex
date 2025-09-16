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

        
        <section className="container mx-auto px-4 py-3 md:py-12">
          <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-4 md:mb-6">
            Nos articles
          </h2>
          {/* Article 1 */}
          <h2 className="text-lg md:text-xl font-bold text-green-900 mb-4 md:mb-6">
            Les Conférences SOLEX SAS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Featured Article */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                Description
              </h3>
              <p className="text-sm md:text-base">
               SOLEX SAS lance une série de conférences juridiques spécialisées destinées aux professionnels de tous secteurs en Côte d’Ivoire. Ces sessions thématiques, animées par des praticiens du droit, des enseignants et des consultants, visent à informer sur les normes juridiques applicables, à équiper les acteurs face aux enjeux de conformité et à outiller les participants pour une utilisation stratégique du droit. Offertes en format hybride (présentiel et digital), les conférences sont conçues selon une pédagogie pratique et ciblée : outils concrets, veille juridique actualisée, et accompagnement post-conférence.
Elles s’adressent aux dirigeants, DRH, juristes, agents publics, professions réglementées et porteurs de projets dans divers domaines (santé, finance, BTP, agriculture, etc.).  Un certificat de participation est disponible en option. Le lancement officiel est prévu pour août 2025, avec une fréquence d’une conférence par mois, prioritairement dans les villes de l’intérieur du pays.<br />
Tarifs : <br />

   <strong> Open Access :</strong> Gratuit, sur inscription<br />

    <strong>Premium :</strong> à partir de 25 000 FCFA par participant<br />

    <strong>Pack entreprise :</strong> à partir de 150 000 FCFA pour 10 participants<br />

              </p>
            </div>

            {/* Article List */}
            <div className="space-y-6 md:space-y-8">
              
                <div className="border-b pb-4 md:pb-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    Une pédagogie stratégique tournée vers l’action
                  </h3>
                  <p className="text-xs md:text-sm">
                    Les conférences privilégient une intelligence juridique appliquée, avec des contenus pensés pour un public métier identifié, sans abstraction théorique. Chaque participant repart avec des supports pratiques et bénéficie d’un suivi post-conférence.
                  </p>
                </div>

                {/* //article 2 */}
                <div className="border-b pb-4 md:pb-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    Des partenariats stratégiques pour une portée nationale
                  </h3>
                  <p className="text-xs md:text-sm">
                    Trois grands partenariats en cours :

    Avec la Chambre des Métiers pour former les artisans ;

    Avec les organisations professionnelles régionales ;

    Avec les ordres professionnels (médecins, avocats, architectes, etc.) pour renforcer les compétences juridiques de leurs membres.
                  </p>
                </div>
                  {/* //article 3 */}
                  <div className="border-b pb-4 md:pb-6">
                   <h3 className="text-lg md:text-xl font-bold mb-2">
                    Des thématiques adaptées aux réalités professionnelles
                   </h3>
                   <p className="text-xs md:text-sm">
                   Les sujets abordés couvrent les enjeux juridiques du secteur privé, public et des secteurs régulés : droit du travail, fiscalité, marchés publics, santé, énergie, BTP, télécoms, etc. Les contenus sont actualisés en fonction des réformes et risques émergents.
                   </p>
                  </div>
              
            </div>
          </div>

          {/* article 2 */}

          <h2 className="text-lg md:text-xl font-bold text-green-900 mb-4 md:mb-6">
            Les Services de Rendez-Vous de SOLEX SAS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Featured Article */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                Description
              </h3>
              <p className="text-sm md:text-base">
SOLEX SAS propose une large gamme de rendez-vous juridiques, conçus pour répondre aux besoins diversifiés des citoyens, salariés, entrepreneurs et organisations. Ces services, assurés par des juristes qualifiés et expérimentés, reposent sur un principe de progressivité des formats et de souplesse tarifaire, afin de garantir un accès au droit à la fois simple, équitable et inclusif. L’objectif principal est de démocratiser l’accès au droit en Côte d’Ivoire, tout en accordant une attention particulière aux publics vulnérables ou isolés, tels que les jeunes, les femmes, les travailleurs informels, les étudiants, ainsi que les personnes à faible revenu ou en situation de handicap.

Au-delà de l’assistance juridique traditionnelle, SOLEX SAS s’engage également à valoriser le rôle du juriste comme acteur social et économique, en facilitant l’orientation, la compréhension et la prise de décision des justiciables dans toutes leurs démarches. Les rendez-vous peuvent être pris facilement via le site web, par téléphone ou par WhatsApp, et se déroulent selon des formats flexibles : en présentiel, par appel téléphonique ou en visioconférence (Zoom, Google Meet, Teams, WhatsApp Call), pour s’adapter aux contraintes et préférences de chacun. Selon les situations, les clients bénéficient d’une orientation orale, d’une synthèse écrite, d’un rapport d’analyse détaillé ou encore de modèles de documents types. L’ensemble du dispositif s’inscrit dans une démarche de proximité, de fiabilité et de clarté, afin de rendre le droit accessible à tous et de renforcer la confiance des citoyens envers les services juridiques professionnels.
</p>
            </div>

            {/* Article List */}
            <div className="space-y-6 md:space-y-8">
              
                <div className="border-b pb-4 md:pb-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                  SOLEX ÉCOUTE
                  </h3>
                  <p className="text-xs md:text-sm">
                    Un échange de 5 à 10 minutes avec un juriste par téléphone pour répondre à une question ponctuelle et orienter vers le bon professionnel du droit.<br/>
                    <strong>Tarif :</strong> Gratuit (2 fois/mois), puis 5 000 FCFA à partir de la 3ᵉ demande
                    </p>
                </div>

                {/* //article 2 */}
                <div className="border-b pb-4 md:pb-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    SOLEX ENTRETIEN
                  </h3>
                  <p className="text-xs md:text-sm">
Un accompagnement de 15 à 60 minutes avec un juriste expert, en présentiel ou visioconférence, pour clarifier la situation et explorer les options juridiques possibles.<br/>
<strong>Tarif :</strong> 
<br/>Standard (15-25 min) : 10 000 FCFA<br/>
Premium (25-45 min) : 35 000 FCFA<br/>
Projet structurant (45-60 min) : 75 000 FCFA<br/>
<strong>Réduction :</strong> Startups : -15%; 

 Promoteur de projet d’entreprise : -20%; 

 Association / ONG : -30%; 

 Étudiants entrepreneurs : -40% 
</p>
                </div>
                  {/* //article 3 */}
                  <div className="border-b pb-4 md:pb-6">
                   <h3 className="text-lg md:text-xl font-bold mb-2">
                    SOLEX ANALYSE
                   </h3>
                   <p className="text-xs md:text-sm">
                   Une étude approfondie rédigée , livrée en 2 à 10 jours ouvrés, fournissant une analyse juridique détaillée, des références, et des pistes de décision stratégique.<br/>
<strong>Tarif :</strong> <br/>
Standard (5 jours) : 75 000 FCFA<br/>
Premium (10 jours) : 125 000 FCFA <br/>
Express (48h) : 150 000 FCFA<br/>
                   </p>
                  </div>
               {/* //article 4 */}
                  <div className="border-b pb-4 md:pb-6">
                   <h3 className="text-lg md:text-xl font-bold mb-2">
                    SOLEX MEET
                   </h3>
                   <p className="text-xs md:text-sm">
                   Un rendez-vous de 25 à 45 minutes, réunissant 5 à 20 personnes partageant une problématique juridique similaire. Animé par un juriste, il permet un éclairage collectif et une stratégie commune.<br/>
<strong>Tarif :</strong> <br/>
Standard : 5 000 FCFA<br/>
Solidaire : 2 500 FCFA <br/>
Pro : 10 000 FCFA<br/>
                   </p>
                  </div>
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
