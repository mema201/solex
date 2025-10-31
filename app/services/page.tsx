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
      <main className="flex-1 bg-gray-50 mt-[120px] ">
        <div className="container mx-auto px-4 py-6 md:py-12">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-12">
            {/* Left Column - Expertise */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <h1 className="text-2xl md:text-3xl font-bold text-green-900 mb-4 md:mb-6">
                Nos Damaine d'expertises
              </h1>
              <p className="mb-6 md:mb-8 text-gray-600 text-sm md:text-base">
Forts de notre expérience et de notre savoir-faire, nous avons développé une expertise approfondie dans ce domaine. Cette compétence nous permet d’apporter des solutions innovantes, adaptées aux besoins réels et aux enjeux actuels.
              </p>

              {/* Expandable Sections */}
              <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
                {/* Conformité Réglementaire */}
                <div className="bg-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleSection("droit-travail")}
                    className="w-full flex items-center justify-between p-3 md:p-4 text-left"
                  >
                    <span className="font-semibold text-sm md:text-base">
                     Conformité Réglementaire
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
                       Le respect des textes législatifs et réglementaires constitue un pilier essentiel de toute organisation responsable. Il garantit non seulement la conformité aux lois en vigueur, mais aussi la crédibilité et la pérennité des activités. Pour atteindre cet objectif, il est nécessaire de mettre en place une veille juridique efficace afin d’assurer la mise à jour des obligations légales et d’adapter en continu les pratiques internes aux nouvelles exigences
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                       Au-delà de la conformité immédiate, une bonne gouvernance implique l’anticipation des évolutions normatives et la préparation aux changements qui peuvent impacter l’activité. Cette démarche proactive permet de réduire l’incertitude et d’éviter des ajustements brusques. Par ailleurs, l’évaluation des risques de sanctions demeure une étape clé pour mesurer les conséquences potentielles d’un manquement et mettre en œuvre des actions correctives ou préventives. Ainsi, l’organisation se protège juridiquement tout en renforçant sa réputation et sa compétitivité.
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
                    Gestion des Risques Contractuels
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
                    <div className="px-3 md:px-4 pb-3 md:pb-4 space-y-3 md:space-y-4">
                      <p className="text-xs md:text-sm text-gray-600">
                       L’analyse des engagements contractuels constitue une étape indispensable pour sécuriser les relations entre partenaires commerciaux. Elle permet de vérifier la conformité des accords conclus, d’identifier les obligations de chaque partie et de s’assurer de la cohérence avec les objectifs stratégiques de l’organisation. Dans ce processus, une attention particulière est portée à l’évaluation des clauses à risque, afin de détecter d’éventuelles dispositions pouvant générer des déséquilibres ou exposer l’entreprise à des responsabilités excessives.
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                       Au-delà de la simple vérification, une démarche proactive vise l’optimisation des conditions contractuelles pour mieux protéger les intérêts de l’organisation et renforcer la solidité des partenariats. Cette optimisation s’accompagne de mécanismes de contrôle et de suivi qui favorisent la prévention des litiges commerciaux. En anticipant les zones de conflit et en clarifiant les responsabilités, l’entreprise réduit les risques juridiques tout en consolidant la confiance avec ses partenaires.
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
                      Protection des Données Personnelles
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
                    <div className="px-3 md:px-4 pb-3 md:pb-4 space-y-3 md:space-y-4">
                      <p className="text-xs md:text-sm text-gray-600">
                       La conformité à la loi ivoirienne sur les données à caractère personnel constitue une exigence incontournable pour toute organisation qui collecte, traite ou conserve des informations sensibles. Elle implique de mettre en place des politiques et des procédures internes permettant d’assurer la transparence et la légalité des traitements. Dans cette logique, une attention particulière doit être portée à la sécurisation des traitements de données, en adoptant des mesures techniques et organisationnelles pour limiter les risques d’accès non autorisés ou de perte d’informations.
                       </p>
                      <p className="text-xs md:text-sm text-gray-600">
                       Par ailleurs, une gestion rigoureuse des droits des personnes (droit d’accès, de rectification, d’opposition, d’effacement, etc.) s’impose afin de renforcer la confiance des usagers et de respecter les principes éthiques liés à la protection des données. Cette approche préventive contribue également à la prévention des violations de données, en réduisant les risques juridiques, financiers et réputationnels. Ainsi, l’organisation se conforme au cadre légal tout en valorisant sa responsabilité sociétale. 
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
                       Responsabilité Civile et Pénale
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
                    <div className="px-3 md:px-4 pb-3 md:pb-4 space-y-3 md:space-y-4">
                      <p className="text-xs md:text-sm text-gray-600">
                       L’identification des zones de responsabilité constitue une étape essentielle pour clarifier les obligations et les limites d’action de chaque acteur au sein d’une organisation. Cette démarche permet non seulement de mieux structurer la gouvernance interne, mais aussi de prévenir les ambiguïtés qui pourraient être sources de litiges. Elle s’accompagne de l’évaluation des risques d’engagement, visant à mesurer l’exposition de l’organisation face à d’éventuelles réclamations ou obligations légales.
                       </p>
                      <p className="text-xs md:text-sm text-gray-600">
                       Afin de renforcer cette maîtrise, il est nécessaire de mettre en place des couvertures assurantielles adaptées aux risques identifiés. Ces mécanismes constituent une protection financière efficace en cas d’incident ou de contentieux. Parallèlement, une démarche proactive de prévention des poursuites judiciaires permet de réduire les conflits potentiels grâce à des procédures claires, une documentation rigoureuse et une sensibilisation des acteurs concernés. Ainsi, l’organisation sécurise ses activités tout en renforçant sa crédibilité.
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
                  SOLEX SAS révolutionne l'accès aux professionnels du droit en Côte d'Ivoire grâce à son service d'intermédiation juridique intelligente. Notre plateforme connecte efficacement les justiciables aux bons professionnels, au bon moment, pour les bons besoins.
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
                      L’intermédiation juridique intelligente de SOLEX SAS est une solution innovante qui vise à rapprocher les citoyens et les organisations des professionnels du droit les plus adaptés à leurs besoins. Grâce à un algorithme d’orientation basé sur 15 critères (domaine juridique, complexité, urgence, budget, localisation, etc.), la plateforme analyse chaque demande et propose une mise en relation qualifiée avec un réseau de plus de 200 professionnels (avocats, notaires, commissaires de justice) répartis sur tout le territoire ivoirien. Elle permet ainsi d’optimiser les délais et les coûts, tout en garantissant un suivi de la satisfaction client et une transparence totale.
                    </p>
                  </div>
                  <div className="bg-amber-100 border-l-4 border-amber-600 p-3 md:p-4">
                    <p className="text-xs md:text-sm">
                      Ce système bénéficie autant aux clients (gain de temps, économies sur les honoraires, accompagnement personnalisé, qualité garantie) qu’aux professionnels du droit (nouveaux clients qualifiés, visibilité accrue, organisation optimisée). Grâce à des outils technologiques tels qu’une application mobile, un espace client sécurisé et un chatbot juridique, SOLEX rend le droit plus accessible et inclusif. Avec un taux de satisfaction de 95 %, plus de 2 500 clients accompagnés et une couverture nationale, ce modèle contribue à démocratiser l’accès à la justice en Côte d’Ivoire, tout en renforçant la confiance et l’efficacité dans les relations juridiques
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-8 md:mb-12 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                culpa qui officia deserunt mollit anim id est laborum.
              </p>

{/*Audit */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-3 md:mb-4">
                  Audit
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                 Pour garantir une justice efficace, nous proposons un service d’audit en justice qui permet d’évaluer les procédures, optimiser les performances et renforcer la confiance des usagers dans le système judiciaire.
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
                      L’audit juridique préventif de SOLEX SAS est une démarche systématique qui permet d’identifier les risques juridiques potentiels, d’évaluer le niveau de conformité aux obligations légales et d’anticiper les évolutions normatives. Grâce à une méthodologie exclusive combinant approche 360°, diagnostic différentiel et scoring juridique, il offre une vision complète et personnalisée de la conformité réglementaire, des risques contractuels, de la protection des données personnelles ainsi que de la responsabilité civile et pénale. L’objectif est de sécuriser les pratiques, prévenir les litiges et proposer des solutions correctives adaptées à chaque profil.
                      </p>
                  </div>
                  <div className="bg-amber-100 border-l-4 border-amber-600 p-3 md:p-4">
                    <p className="text-xs md:text-sm">
                      SOLEX SAS décline ses services selon les besoins spécifiques de chaque public cible : particuliers, professionnels libéraux, entreprises et associations. À travers une gamme de packs personnalisés, l’audit couvre aussi bien la protection familiale et patrimoniale, la conformité professionnelle, la gouvernance d’entreprise que la transparence associative. Chaque pack inclut un rapport d’audit, des recommandations pratiques et des outils de suivi, avec des tarifs adaptés pour garantir accessibilité et efficacité. Cette offre innovante contribue à renforcer la conformité, réduire les risques et accompagner durablement le développement sécurisé en Côte d’Ivoire.
                      </p>
                  </div>
                </div>
              </div>

            

{/*Accompagnement juridique sur mesure */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-3 md:mb-4">
                  Accompagnement juridique sur mesure
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                 Face à la complexité du droit, nous proposons un accompagnement juridique sur mesure, adapté à vos besoins, pour vous assister efficacement et garantir la sécurité de vos démarches.
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
                      SOLEX SAS place l’inclusion juridique au cœur de sa mission, en rendant le droit compréhensible et accessible à tous, sans distinction de niveau d’instruction, de moyens financiers ou de situation géographique. L’entreprise vulgarise les textes juridiques, accompagne la préparation et le suivi des démarches administratives, propose de la médiation extrajudiciaire, des formations pratiques et une veille personnalisée, tout en orientant les bénéficiaires vers les professionnels du droit compétents. Toutefois, elle ne réalise pas les actes réservés aux professions réglementées (consultations juridiques, actes authentiques, représentation en justice, signification d’actes)
                      </p>
                  </div>
                  <div className="bg-amber-100 border-l-4 border-amber-600 p-3 md:p-4">
                    <p className="text-xs md:text-sm">
                     Pour répondre aux besoins variés de ses clients, SOLEX a conçu une gamme de packs d’accompagnement adaptés aux particuliers (famille, successions, bail, consommation), aux entreprises (création, conformité, contrats, relations sociales, prévention des litiges), aux associations (création, gouvernance, financement) et aux syndicats (défense des salariés, formation des représentants, communication et stratégie). Chaque pack associe sensibilisation, assistance opérationnelle et orientation spécialisée, afin de sécuriser les démarches juridiques et prévenir les risques tout en renforçant la confiance et la légitimité des acteurs.
                    </p>
                  </div>
                </div>
              </div>

             

              {/* Solutions juridiques */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-6 md:mb-8">
                  Solutions juridiques
                </h2>
                <div className="space-y-6 md:space-y-8">
                  {/* Solution 1 */}
                  {/* Solution SMARTLEX */}
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="w-full sm:w-48 h-32 bg-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm md:text-base">
                        Image
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-amber-600 mb-2">
                      SMARTLEX
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        Une solution d’intelligence juridique conçue pour les PME et les organisations qui souhaitent transformer le droit en un avantage concurrentiel et un levier stratégique au service de leurs ambitions.
                      </p>
                    </div>
                  </div>

                  {/* Solution 2 */}
                                  {/* Solution LEGALSHIELD */}
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="w-full sm:w-48 h-32 bg-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm md:text-base">
                        Image
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-amber-600 mb-2">
                        LEGALSHIELD
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        Une solution de sécurité juridique pensée pour offrir aux PME et aux organisations un environnement juridique clair et maîtrisé, limitant l’exposition aux risques. Ce système repose sur une cartographie précise des risques juridiques pour une protection adaptée et proactive.
                      </p>
                    </div>
                  </div>

                                  {/* Solution JURITRACK */}
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="w-full sm:w-48 h-32 bg-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm md:text-base">
                        Image
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-amber-600 mb-2">
                        JURITRACK
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        Une solution automatisée de suivi et de rappel des obligations légales, avec l’envoi de notifications par SMS ou WhatsApp aux dirigeants de PME et d’organisations, pour garantir le respect des échéances réglementaires.
                      </p>
                    </div>
                  </div>

                                                    {/* Solution MEDILEX */}
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="w-full sm:w-48 h-32 bg-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm md:text-base">
                        Image
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-amber-600 mb-2">
                        MEDILEX
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        Une solution de médiation en ligne pour favoriser le règlement amiable des litiges de façon rapide, sécurisée et conforme aux principes du droit OHADA et aux réglementations ivoiriennes. Parce qu’un accord juste et équitable vaut souvent mieux qu’un long procès.
                      </p>
                    </div>
                  </div>

                                                     {/* Solution SOLEXFORM */}
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="w-full sm:w-48 h-32 bg-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm md:text-base">
                        Image
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-amber-600 mb-2">
                        SOLEXFORM
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        Une solution digitale sur mesure, conçue pour accompagner les PME, start-ups, organisations et particuliers dans toutes leurs formalités administratives et légales. Elle offre un service sécurisé, confidentiel et efficace, pour des démarches simplifiées et réalisées en toute sérénité.
                      </p>
                    </div>
                  </div>

                                                     {/* Solution LEXWATCH*/}
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="w-full sm:w-48 h-32 bg-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm md:text-base">
                        Image
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-amber-600 mb-2">
                      LEXWATCH
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        Une solution innovante de veille juridique, conçue pour permettre aux entreprises et organisations de suivre en temps réel les évolutions législatives, réglementaires et jurisprudentielles ayant un impact sur leur activité.
                      </p>
                    </div>
                  </div>

                  {/* Solution SOLEXGOUV */}
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="w-full sm:w-48 h-32 bg-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm md:text-base">
                        Image
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-amber-600 mb-2">
                        SOLEXGOUV
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        Une solution digitale et juridique conçue pour accompagner les PME, startups et organisations dans la mise en place, le renforcement et l’optimisation de leur gouvernance, en assurant transparence, conformité et performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Questions */}
            
            <form className="lg:col-span-1 order-1 lg:order-2">
  <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm sticky top-6">
    <h3 className="text-base md:text-lg font-bold text-amber-600 mb-3 md:mb-4">
      Posez votre question ici
    </h3>
    <p className="text-xs md:text-sm mb-3 md:mb-4">
      Les questions les plus posées :
    </p>
    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
      <div className="text-xs md:text-sm text-gray-600 cursor-pointer hover:underline">
        Quel service pour mon entreprise ?
      </div>
      <div className="text-xs md:text-sm text-gray-600 cursor-pointer hover:underline">
        Quel lorem ipsum pour mon entreprise ?
      </div>
      <div className="text-xs md:text-sm text-gray-600 cursor-pointer hover:underline">
        Quel service pour mon entreprise ?
      </div>
      <input
        type="text"
        placeholder="Votre question..."
        className="w-full h-10 border border-gray-300 rounded px-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
    </div>
    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-sm" type="submit">
      <Send className="h-3 w-3 md:h-4 md:w-4 mr-2" />
      Envoyer
    </Button>
  </div>
</form>

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