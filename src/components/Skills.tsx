import React, { useState, useRef, useEffect } from 'react';
import { Code, Layout, Database, Server, Globe, BookOpen, X, AppWindow, Languages, Group, GroupIcon, Users } from 'lucide-react';
import { SiTeamcity } from '@icons-pack/react-simple-icons';

const Skills: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const technicalSkills = [
    { 
      name: 'Java', 
      icon: <Server size={24} />, 
      description: "Java est un des langages de développement backend les plus utilisés en entreprises à ce jour. Il est surtout apprécié pour sa robustesse, sa gestion automatique de la mémoire ou encore le grand catalogue de frameworks et bibliothéques disponibles.\n\nJava est aussi connu pour pouvoir gérer des applications à grande échelle avec une performance et une fiabilité reconnues, c'est pourquoi c'est pourquoi il est principalement utilisé dans le secteur bancaire et celui des paiements.\n\nAyant effectué mon alternance chez Worldline sur un logiciel d'émission de cartes bancaires et de gestion de transactions, j'ai travaillé exclusivement avec ce langage en backend. Cette expérience quotidienne m'a permis de développer des évolutions significatives sur le logiciel. J'ai notamment implémenté une fonctionnalité permettant à un titulaire de compte bancaire de déléguer ses droits à une personne de confiance tierce lorsqu'il n'est pas en mesure de prendre seul des décisions concernant sa banque.\n\nCette compétence est essentielle dans mon profil d'ingénieur logiciel et j'ai pu, grâce à mon expérience professionnelle, développer une maîtrise avancée de ce langage. Mon niveau de maîtrise se situe à un niveau confirmé, avec une solide expertise dans le développement d'applications backend en REST API. Je manque encore d'expérience sur les architectures microservices natives et certains aspects avancés comme l'optimisation des performances à très grande echelle.\n\nJe compte travailler sur ces axes afin de devenir un expert complet. Mon projet de formation s'articule autour de plusieurs volets : d'une part, une autoformation continue via des projets personnels explorant les microservices et les technologies cloud-native (Docker, Kubernetes).",
      accentColor: 'border-coolors-blue-purple',
      iconColor: 'text-coolors-blue-purple',
      relatedProjects: [
        "Optimisation de la gestion des contrats dans un logiciel d'émission de cartes bancaires",
        "Apprentissage pratique de Kafka : relever un défi technique avec un mentor"
      ]
    },
    { 
      name: 'SQL', 
      icon: <Database size={24} />, 
      description: "SQL (Structured Query Language) représente l'interface universelle pour dialoguer avec les données structurées et en extraire de la valeur métier. Dans mon contexte d'ingénieur logiciel, cette compétence englobe la maîtrise syntaxique du langage, la conception de requêtes performantes et la compréhension des implications architecturales.\n\nCette compétence prend une dimension stratégique dans le contexte actuel où les entreprises accumulent des volumes de données exponentiels. Dans le secteur des paiements chez Worldline, le SQL est indispensable pour analyser les transactions et assurer la traçabilité des opérations bancaires.\n\nLors de mon expérience chez Worldline, j'ai démontré ma maîtrise de SQL à travers un projet de rationalisation du stockage des données contractuelles sur le logiciel de gestion des cartes bancaires. Face à une problématique de redondance des données dans différentes parties du système, j'ai dû analyser en profondeur la structure de la base de données pour cartographier précisément les zones de stockage redondant.\n\nMa compétence SQL s'est révélée cruciale lors de la phase de refonte : j'ai conçu et implémenté des requêtes pour centraliser le stockage des données à un emplacement unique, tout en préservant leur intégrité.\n\nMon travail quotidien sur les bases de données de transaction et de gestion des cartes bancaires m'a donné une expertise pratique dans la conception de requêtes, l'optimisation des performances et la manipulation de données sensibles.\n\nCependant, ma compétence présente certaines limites : pour des requêtes particulièrement complexes impliquant des analyses statistiques avancées ou des optimisations très spécifiques, j'ai recours à l'IA générative pour m'assister dans la conception et la validation de mes requêtes. Cette approche me permet de gagner en efficacité tout en apprenant de nouvelles techniques, mais révèle aussi des axes d'amélioration dans ma maîtrise autonome des aspects les plus pointus.\n\nCette compétence occupe une place centrale dans mon profil d'Expert en Ingénierie, car elle constitue le fondement de toute interaction avec les données en entreprise. Elle me permet d'être autonome sur la majorité des besoins métier et de comprendre les enjeux de performance des applications que je développe.\n\nPour faire évoluer cette compétence, je compte tirer parti d'une utilisation intelligente et régulée de l'IA générative : plutôt que de simplement copier les solutions proposées, je m'attache à comprendre les techniques utilisées, à analyser les optimisations suggérées et à intégrer progressivement ces nouvelles approches dans ma pratique autonome. Cette méthode d'apprentissage hybride me permet d'accélérer ma montée en compétence sur les aspects avancés tout en développant mon esprit critique face aux solutions automatisées.",
      accentColor: 'border-coolors-blue-medium',
      iconColor: 'text-coolors-blue-medium',
      relatedProjects: [
        "Optimisation de la gestion des contrats dans un logiciel d'émission de cartes bancaires",
        "Développement d'une application back-end de gestion et réservation de vols aériens"
      ]
    },
    { 
      name: "Maintenance évolutive d'applications", 
      icon: <AppWindow size={24} />, 
      description: "J'interviens sur un logiciel en production, où je développe de nouvelles fonctionnalités tout en m'appuyant sur une base de code existante. Cela implique de naviguer dans un code parfois dense ou ancien, d'en comprendre la logique, puis de l'enrichir sans compromettre sa stabilité. Cette capacité à faire évoluer un système existant est une compétence clé que je continue à développer.",
      accentColor: 'border-coolors-blue-light',
      iconColor: 'text-coolors-blue-light',
      relatedProjects: [
        "Optimisation de la gestion des contrats dans un logiciel d'émission de cartes bancaires"
      ]
    },
  ];

  const softSkills = [
    { 
      name: 'Anglais', 
      icon: <Languages size={24} />, 
      description: "L'anglais représente pour moi une porte d'ouverture vers d'autres cultures, personnes et contenus qui seraient inaccessibles avec la barrière de la langue. Cette compétence constitue une richesse culturelle et linguistique qui transcende la communication basique.\n\nDans notre environnement mondialisé, cette compétence prend une dimension stratégique cruciale. Chez Worldline, je collabore avec des collègues internationaux (Allemagne, Italie, Arménie, Inde, Belgique), rendant l'anglais indispensable. Dans la tech, l'anglais constitue le socle commun pour les documentations et la veille technologique, donc fondamental pour se former aux nouvelles technologies.\n\nLors de mon alternance chez Worldline, ma maîtrise de l'anglais s'est révélée déterminante lors d'un projet nécessitant l'utilisation de Kafka, une technologie que je ne connaissais pas. Face à cette lacune, j'ai pu m'appuyer exclusivement sur des ressources anglophones: documentations officielles, tutoriels vidéo et forums pour acquérir rapidement les concepts fondamentaux.\n\nCette autoformation en anglais m'a permis de comprendre l'essentiel de Kafka avant de solliciter l'aide d'un collègue expérimenté. Au quotidien, j'utilise l'anglais pour communiquer avec mes collègues internationaux, le plus souvent à l'écrit, mais aussi à l'oral lors de réunions.\n\nAvec un score de 980/990 au TOEIC, j'ai développé un niveau quasi-bilingue (C1/C2) qui me permet d'être autonome dans toute situation professionnelle. Cette compétence occupe une place centrale dans mon profil d'Expert en Ingénierie car elle démultiplie mes capacités d'apprentissage et facilite ma collaboration internationale.\n\nMa principale marge de progression se situe dans l'expression orale, notamment en confiance et fluidité. Bien que très à l'aise lors des réunions internationales, je manque d'occasions de pratiquer l'oral quotidiennement.\n\nPar rapport à un niveau expert natif, j'estime maîtriser la grande majorité des compétences requises : excellent à l'écrit et très bon à l'oral, avec une marge de perfectionnement sur la fluidité d'expression.\n\nCette compétence constitue un pilier de mon projet professionnel car elle m'ouvre les portes du marché international et me permet d'envisager une carrière à l'étranger. Elle représente un avantage concurrentiel pour accéder à des postes à responsabilités dans des entreprises globales.\n\nPour faire évoluer cette compétence, je prévois de passer une certification TOEFL pour attester officiellement de mon niveau. À mon niveau avancé, je privilégie une approche d'immersion culturelle plutôt que des formations traditionnelles.\n\nMon projet s'articule autour de voyages dans des pays anglophones et, à terme, d'une expérience professionnelle à l'étranger pour parfaire ma maîtrise culturelle et atteindre un niveau véritablement natif.",
      accentColor: 'border-coolors-cyan-medium',
      iconColor: 'text-coolors-cyan-medium',
      relatedProjects: [
        "Optimisation de la gestion des contrats dans un logiciel d'émission de cartes bancaires"
      ]
    },
    { 
      name: "Travail d'équipe en environnement agile", 
      icon: <Users size={24} />, 
      description: "Je travaille au sein d'une équipe agile et internationale chez Worldline, où les échanges sont rythmés par les rituels agiles (weekly meetings, sprint planning, retrospectives), qui nous permettent de suivre l'avancement du projet, d'anticiper les blocages et de nous répartir les tâches efficacement. Cette méthode m'a appris à mieux structurer mes idées, à m'exprimer clairement, et à faire preuve d'écoute et de réactivité. Travailler avec des personnes de cultures différentes m'a aussi permis de développer ma capacité d'adaptation et de mieux comprendre d'autres façons de collaborer. J'ai gagné en autonomie tout en apprenant à m'appuyer sur les forces du collectif, ce qui me semble essentiel pour avancer dans un environnement technique exigeant. Je continue de progresser sur certains aspects, comme l'estimation des charges ou la gestion des dépendances, mais cette expérience a renforcé ma motivation à évoluer dans des contextes agiles et internationaux, qui correspondent bien à ma façon de travailler.",
      accentColor: 'border-coolors-green-light',
      iconColor: 'text-coolors-green-light',
      relatedProjects: [
        "Apprentissage pratique de Kafka : relever un défi technique avec un mentor"
      ]
    },
  ];

  const allSkills = [...technicalSkills, ...softSkills];

  const handleCardClick = (index: number) => {
    const cardElement = cardRefs.current[index];
    if (cardElement) {
      const rect = cardElement.getBoundingClientRect();
      setCardPosition({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      });
    }
    
    setExpandedCard(index);
    // Trigger animation after a brief delay to ensure proper positioning
    setTimeout(() => {
      setIsAnimating(true);
    }, 10);
  };

  const handleCloseDialog = () => {
    setIsAnimating(false);
    // Wait for the modal animation to complete, then instantly swap
    setTimeout(() => {
      setExpandedCard(null);
    }, 350); // Wait for full modal animation to complete
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseDialog();
    }
  };

  const handleProjectTagClick = (projectTitle: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent skill card expansion
    
    // Check if there's an expanded card and close it first
    if (expandedCard !== null) {
      // Close the expanded card
      setIsAnimating(false);
      setTimeout(() => {
        setExpandedCard(null);
        
        // After the card close animation completes, scroll to projects
        setTimeout(() => {
          scrollToProjectsAndOpen(projectTitle);
        }, 100);
      }, 250);
    } else {
      // No expanded card, directly scroll to projects
      scrollToProjectsAndOpen(projectTitle);
    }
  };

  const scrollToProjectsAndOpen = (projectTitle: string) => {
    // Scroll to projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
      
      // Wait for scroll to complete, then trigger project card opening
      setTimeout(() => {
        // Create a custom event to communicate with Projects component
        const event = new CustomEvent('openProjectCard', {
          detail: { projectTitle }
        });
        window.dispatchEvent(event);
      }, 200);
    }
  };

  useEffect(() => {
    // Initialize card refs array
    cardRefs.current = cardRefs.current.slice(0, allSkills.length);
  }, [allSkills.length]);

  useEffect(() => {
    // Listen for custom event from Projects component
    const handleOpenSkillCard = (event: CustomEvent) => {
      const { skillName } = event.detail;
      
      // Find the skill index by name
      const skillIndex = allSkills.findIndex(skill => skill.name === skillName);
      
      if (skillIndex !== -1) {
        // Wait a bit to ensure the page has scrolled, then open the card
        setTimeout(() => {
          handleCardClick(skillIndex);
        }, 300);
      }
    };

    // Add event listener
    window.addEventListener('openSkillCard', handleOpenSkillCard as EventListener);

    // Cleanup
    return () => {
      window.removeEventListener('openSkillCard', handleOpenSkillCard as EventListener);
    };
  }, [allSkills]);

  return (
    <section id="skills" className="pt-8 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="pt-2 md:pt-0">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-tight text-center text-white">
              <span className="text-coolors-green-bright">/</span> 
              <span className="ml-2">Compétences</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-white mt-8">
              Techniques
            </h3>
          </div>
        </div>
        
        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 mt-8">
          {technicalSkills.map((skill, index) => (
            <div 
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onClick={() => handleCardClick(index)}
              className={`glass-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer ${skill.accentColor} border-l-4 group rounded-lg`}
              style={{
                opacity: expandedCard === index ? 0 : 1,
                pointerEvents: expandedCard === index ? 'none' : 'auto',
                transition: 'opacity 0ms'
              }}
            >
              <div className={`mb-4 ${skill.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-coolors-green-bright transition-colors duration-300 mb-3">
                {skill.name}
              </h3>
              
              {/* Project Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {skill.relatedProjects.map((project, projectIndex) => (
                  <button
                    key={projectIndex}
                    onClick={(e) => handleProjectTagClick(project, e)}
                    className="text-xs px-3 py-1 bg-coolors-green-bright/20 text-coolors-green-bright rounded-full font-medium shadow-sm backdrop-blur-sm border border-coolors-green-bright/30 hover:bg-coolors-green-bright/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    {project.length > 30 ? `${project.substring(0, 30)}...` : project}
                  </button>
                ))}
              </div>
              
              <p className="text-sm text-gray-300 mt-2 opacity-60">
                En savoir plus
              </p>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="flex justify-start mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Soft Skills
          </h3>
        </div>
        
        {/* Soft Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softSkills.map((skill, index) => {
            const adjustedIndex = index + technicalSkills.length;
            return (
              <div 
                key={adjustedIndex}
                ref={(el) => (cardRefs.current[adjustedIndex] = el)}
                onClick={() => handleCardClick(adjustedIndex)}
                className={`glass-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer ${skill.accentColor} border-l-4 group rounded-lg`}
                style={{
                  opacity: expandedCard === adjustedIndex ? 0 : 1,
                  pointerEvents: expandedCard === adjustedIndex ? 'none' : 'auto',
                  transition: 'opacity 0ms'
                }}
              >
                <div className={`mb-4 ${skill.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-coolors-green-bright transition-colors duration-300 mb-3">
                  {skill.name}
                </h3>
                
                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.relatedProjects.map((project, projectIndex) => (
                    <button
                      key={projectIndex}
                      onClick={(e) => handleProjectTagClick(project, e)}
                      className="text-xs px-3 py-1 bg-coolors-green-bright/20 text-coolors-green-bright rounded-full font-medium shadow-sm backdrop-blur-sm border border-coolors-green-bright/30 hover:bg-coolors-green-bright/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                    >
                      {project.length > 40 ? `${project.substring(0, 40)}...` : project}
                    </button>
                  ))}
                </div>
                
                <p className="text-sm text-gray-300 mt-2 opacity-60">
                  En savoir plus
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Seamless Modal Animation */}
      {expandedCard !== null && (
        <div 
          className="fixed inset-0 z-50 pointer-events-auto cursor-default"
          onClick={handleBackdropClick}
        >
          <div 
            className={`glass-card ${allSkills[expandedCard].accentColor} border-l-4 absolute pointer-events-auto opacity-90 cursor-auto rounded-lg`}
            style={{
              left: isAnimating ? '50%' : `${cardPosition.x}px`,
              top: isAnimating ? '50%' : `${cardPosition.y}px`,
              width: isAnimating ? '900px' : `${cardPosition.width}px`,
              height: isAnimating ? 'auto' : `${cardPosition.height}px`,
              minHeight: isAnimating ? '400px' : `${cardPosition.height}px`,
              maxHeight: '80vh',
              transform: isAnimating 
                ? 'translate(-50%, -50%)' 
                : 'translate(0, 0)',
              transformOrigin: 'top left',
              transition: 'all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              overflow: 'auto',
              padding: isAnimating ? '2rem' : '1.5rem',
              zIndex: 1000,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseDialog}
              className="absolute top-4 right-4 text-white hover:text-coolors-green-bright transition-all duration-300 hover:scale-110 z-10"
              style={{
                opacity: isAnimating ? 1 : 0,
                transitionDelay: isAnimating ? '350ms' : '0ms'
              }}
            >
              <X size={24} />
            </button>
            
            {/* Icon */}
            <div 
              className={`${allSkills[expandedCard].iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              {React.cloneElement(allSkills[expandedCard].icon, { 
                size: isAnimating ? 48 : 24
              })}
            </div>
            
            {/* Title */}
            <h3 
              className={`font-bold text-white mb-4 transition-all duration-300`}
              style={{
                fontSize: isAnimating ? '1.875rem' : '1.125rem',
                transitionDelay: isAnimating ? '150ms' : '0ms'
              }}
            >
              {allSkills[expandedCard].name}
            </h3>

            {/* Project Tags in Modal */}
            {isAnimating && (
              <div className="flex flex-wrap gap-2 mb-6 transition-opacity duration-300" style={{ transitionDelay: '250ms' }}>
                {allSkills[expandedCard].relatedProjects.map((project, projectIndex) => (
                  <button
                    key={projectIndex}
                    onClick={(e) => handleProjectTagClick(project, e)}
                    className="text-sm px-4 py-2 bg-coolors-green-bright/20 text-coolors-green-bright rounded-full font-medium shadow-sm backdrop-blur-sm border border-coolors-green-bright/30 hover:bg-coolors-green-bright/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    {project}
                  </button>
                ))}
              </div>
            )}
            
            {/* Description - Only show when animating */}
            {isAnimating && (
              <div
                className="transition-opacity duration-300"
                style={{
                  opacity: isAnimating ? 1 : 0,
                  transitionDelay: '350ms'
                }}
              >
                <p className="text-lg leading-relaxed text-gray-100 whitespace-pre-line">
                  {allSkills[expandedCard].description}
                </p>
              </div>
            )}
            
            {/* Placeholder content for collapsed state */}
            {!isAnimating && (
              <p className="text-sm text-gray-300 mt-2" style={{ opacity: 0 }}>
                En savoir plus
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;