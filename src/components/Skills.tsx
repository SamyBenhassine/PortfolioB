import React, { useState, useRef, useEffect } from 'react';
import { Code, Layout, Database, Server, Globe, BookOpen, X, AppWindow, Languages, Group, GroupIcon, Users, MessageSquare } from 'lucide-react';
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
      description: "Java est un des langages de développement backend les plus utilisés en entreprises à ce jour. Il est surtout apprécié pour sa <strong>robustesse</strong>, sa <strong>gestion automatique de la mémoire</strong> ou encore le grand catalogue de frameworks et bibliothèques disponibles.\n\nJava est aussi connu pour pouvoir gérer des applications à grande échelle avec une performance et une fiabilité reconnues, c'est pourquoi il est principalement utilisé dans le <strong>secteur bancaire et celui des paiements</strong>.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Mon expérience chez Worldline</h3>\n\nChez <strong>Worldline</strong>, cette compétence est au cœur de mon quotidien professionnel. Ayant effectué mon alternance sur un logiciel d'émission de cartes bancaires et de gestion de transactions, j'ai travaillé exclusivement avec ce langage en backend.\n\nCette expérience quotidienne dans le secteur des paiements m'a permis de comprendre les enjeux critiques de <strong>performance</strong>, de <strong>sécurité</strong> et de <strong>fiabilité</strong> propres aux applications financières.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Réalisation concrète</h3>\n\nJ'ai développé des évolutions significatives sur le logiciel chez Worldline. J'ai notamment implémenté une <strong>fonctionnalité de délégation de droits</strong> permettant à un titulaire de compte bancaire de déléguer ses droits à une personne de confiance tierce lorsqu'il n'est pas en mesure de prendre seul des décisions concernant sa banque.\n\nCette réalisation illustre ma capacité à <strong>comprendre les besoins métier complexes</strong> et à les traduire en solutions techniques robustes avec Java.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Perspective d'évolution</h3>\n\nCette compétence est <strong>essentielle</strong> dans mon profil d'ingénieur logiciel. Mon niveau de maîtrise se situe à un niveau confirmé, avec une solide expertise dans le développement d'applications backend en <strong>REST API</strong>.\n\nJe compte approfondir mes connaissances sur les <strong>architectures microservices natives</strong> et l'<strong>optimisation des performances à très grande échelle</strong>. Mon projet de formation s'articule autour d'une autoformation continue via des projets personnels explorant les microservices et les technologies cloud-native (Docker, Kubernetes).",
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
      description: "SQL (Structured Query Language) représente l'<strong>interface universelle</strong> pour dialoguer avec les données structurées et en extraire de la valeur métier. Dans mon contexte d'ingénieur logiciel, cette compétence englobe la <strong>maîtrise syntaxique du langage</strong>, la <strong>conception de requêtes performantes</strong> et la compréhension des implications architecturales.\n\nCette compétence prend une dimension stratégique dans le contexte actuel où les entreprises accumulent des <strong>volumes de données exponentiels</strong>.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Usage dans le secteur des paiements</h3>\n\nChez <strong>Worldline</strong>, dans le secteur des paiements, le SQL est indispensable pour <strong>analyser les transactions</strong> et assurer la <strong>traçabilité des opérations bancaires</strong>.\n\nMon travail quotidien sur les bases de données de transaction et de gestion des cartes bancaires m'a donné une expertise pratique dans la conception de requêtes, l'optimisation des performances et la <strong>manipulation de données sensibles</strong>.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Projet de rationalisation des données</h3>\n\nJ'ai illustré ma maîtrise de SQL à travers un <strong>projet de rationalisation du stockage des données contractuelles</strong> sur le logiciel de gestion des cartes bancaires chez Worldline.\n\nFace à une problématique de <strong>redondance des données</strong> dans différentes parties du système, j'ai analysé en profondeur la structure de la base de données pour cartographier précisément les zones de stockage redondant. Ma compétence SQL s'est révélée cruciale lors de la phase de refonte : j'ai conçu et implémenté des requêtes pour <strong>centraliser le stockage des données</strong> à un emplacement unique, tout en préservant leur intégrité.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Stratégie d'apprentissage continu</h3>\n\nCette compétence occupe une place <strong>centrale</strong> dans mon profil d'Expert en Ingénierie, car elle constitue le fondement de toute interaction avec les données en entreprise. Elle me permet d'être <strong>autonome sur la majorité des besoins métier</strong> et de comprendre les enjeux de performance des applications que je développe.\n\nPour faire évoluer cette compétence, je compte tirer parti d'une utilisation intelligente et régulée de l'<strong>IA générative</strong> : plutôt que de simplement copier les solutions proposées, je m'attache à comprendre les techniques utilisées, à analyser les optimisations suggérées et à intégrer progressivement ces nouvelles approches dans ma pratique autonome.",
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
      description: "La maintenance évolutive représente la capacité à <strong>analyser et comprendre une codebase existante</strong> afin d'implémenter des modifications en respectant les normes établies, l'architecture en place et les contraintes de performance. Cette compétence va au-delà de la simple correction de bugs : elle implique une <strong>vision systémique</strong> pour faire évoluer un logiciel sans compromettre sa stabilité, sa sécurité ou sa maintenabilité future.\n\nDans le contexte professionnel actuel, cette compétence est devenue <strong>stratégique</strong> car l'ingénieur logiciel travaille très souvent sur des applications déjà existantes en entreprise.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Réalité industrielle chez Worldline</h3>\n\nContrairement aux projets académiques où l'on part d'une page blanche, la réalité industrielle chez <strong>Worldline</strong> impose de s'adapter rapidement à des codebases parfois anciennes, complexes ou documentées de façon lacunaire.\n\nCette capacité d'adaptation et d'analyse permet d'être <strong>agile et flexible</strong>, qualités essentielles dans un environnement où les systèmes legacy coexistent avec les nouvelles technologies.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Intégration de Kafka : un défi technique</h3>\n\nJ'ai illustré cette compétence en <strong>intégrant Kafka</strong> dans l'application d'issuing existante chez Worldline, une tâche complexe nécessitant une compréhension approfondie de l'architecture en place. Cette intégration visait à permettre la transmission en temps réel de données entre différents services du système de paiement, sans perturber les fonctionnalités critiques déjà en production.\n\nJ'ai procédé à une <strong>analyse minutieuse de la codebase</strong> pour identifier les points d'intégration optimaux et comprendre les flux de données existants. Le succès de cette intégration repose sur ma capacité à équilibrer <strong>innovation technique et respect de l'existant</strong>.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Développement de l'expertise</h3>\n\nCette compétence occupe une place <strong>centrale</strong> dans mon profil d'Expert en Ingénierie car elle reflète ma capacité d'adaptation, qualité fondamentale dans un secteur en constante évolution. Elle me permet d'être rapidement opérationnel sur différents projets.\n\nPour faire évoluer cette compétence, je compte approfondir mes connaissances en <strong>patterns de refactoring</strong>, en <strong>architecture logicielle</strong> et en techniques d'analyse statique de code. J'ai déjà commencé à tirer parti de l'<strong>IA générative</strong> pour accélérer ma phase d'analyse en me faisant expliquer des portions de code complexes, optimisant ainsi mon temps d'appropriation des nouvelles codebases.",
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
      description: "L'anglais représente pour moi une <strong>porte d'ouverture vers d'autres cultures</strong>, personnes et contenus qui seraient inaccessibles avec la barrière de la langue. Cette compétence constitue une richesse culturelle et linguistique qui transcende la communication basique.\n\nDans notre environnement mondialisé, cette compétence prend une <strong>dimension stratégique cruciale</strong>. Dans la tech, l'anglais constitue le socle commun pour les documentations et la veille technologique.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Collaboration internationale chez Worldline</h3>\n\nChez <strong>Worldline</strong>, je collabore avec des collègues internationaux (Allemagne, Italie, Arménie, Inde, Belgique), rendant l'anglais indispensable. Au quotidien, j'utilise l'anglais pour communiquer avec mes collègues internationaux, le plus souvent à l'écrit, mais aussi à l'oral lors de réunions.\n\nCette compétence est <strong>fondamentale pour se former aux nouvelles technologies</strong> et démultiplie mes capacités d'apprentissage.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Autoformation sur Kafka en anglais</h3>\n\nMa maîtrise de l'anglais s'est révélée <strong>déterminante lors d'un projet nécessitant l'utilisation de Kafka</strong>, une technologie que je ne connaissais pas. Face à cette lacune, j'ai pu m'appuyer exclusivement sur des ressources anglophones : documentations officielles, tutoriels vidéo et forums pour acquérir rapidement les concepts fondamentaux.\n\nCette autoformation en anglais m'a permis de comprendre l'essentiel de Kafka avant de solliciter l'aide d'un collègue expérimenté. Avec un score de <strong>980/990 au TOEIC</strong>, j'ai développé un niveau quasi-bilingue (C1/C2) qui me permet d'être autonome dans toute situation professionnelle.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Ambitions internationales</h3>\n\nCette compétence constitue un <strong>pilier de mon projet professionnel</strong> car elle m'ouvre les portes du marché international et me permet d'envisager une carrière à l'étranger. Elle représente un avantage concurrentiel pour accéder à des postes à responsabilités dans des entreprises globales.\n\nPour faire évoluer cette compétence, je prévois de passer une <strong>certification TOEFL</strong> pour attester officiellement de mon niveau. À mon niveau avancé, je privilégie une approche d'<strong>immersion culturelle</strong> plutôt que des formations traditionnelles. Mon projet s'articule autour de voyages dans des pays anglophones et, à terme, d'une expérience professionnelle à l'étranger pour parfaire ma maîtrise culturelle.",
      accentColor: 'border-coolors-cyan-medium',
      iconColor: 'text-coolors-cyan-medium',
      relatedProjects: [
        "Optimisation de la gestion des contrats dans un logiciel d'émission de cartes bancaires"
      ]
    },
    { 
      name: "Travail d'équipe en environnement agile", 
      icon: <Users size={24} />, 
      description: "Le travail d'équipe en environnement agile consiste à <strong>collaborer efficacement au sein d'une équipe pluridisciplinaire</strong> en adoptant les principes et pratiques de l'agilité pour livrer de la valeur de manière itérative. Cette compétence implique la capacité à communiquer de façon transparente, à s'adapter rapidement aux changements et à contribuer activement aux rituels agiles.\n\nDans le secteur fintech comme chez Worldline, cette compétence est devenue <strong>essentielle</strong> pour répondre aux exigences de rapidité et d'innovation du marché, particulièrement dans des équipes internationales.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Agilité dans le secteur fintech</h3>\n\nChez <strong>Worldline</strong>, cette compétence est au cœur de mon quotidien professionnel. Dans un environnement où les solutions de paiement évoluent constamment pour s'adapter aux besoins des marchés internationaux, la capacité à travailler en équipe agile devient un <strong>levier stratégique</strong> pour :\n\n- <strong>Accélérer le time-to-market</strong> des nouvelles fonctionnalités\n- <strong>Réduire les risques</strong> grâce aux feedbacks fréquents\n- <strong>Améliorer la qualité</strong> par la collaboration continue entre développeurs, testeurs et product owners\n- <strong>Favoriser l'innovation</strong> par la diversité des perspectives au sein d'équipes multiculturelles\n\nCette compétence me permet de <strong>m'épanouir dans un contexte technique exigeant</strong> tout en contribuant efficacement aux objectifs business de l'entreprise.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Weekly meetings : mise en pratique</h3>\n\nAu sein de mon équipe internationale chez Worldline, les <strong>weekly meetings</strong> illustrent concrètement ma maîtrise du travail d'équipe agile. Je <strong>structure mes interventions</strong> pour présenter clairement l'avancement de mes tâches et identifier les blocages potentiels. Ma capacité d'<strong>écoute active</strong> se manifeste lorsque j'aide à clarifier les besoins exprimés par les collègues de différentes cultures, facilitant la compréhension mutuelle. Ma <strong>réactivité</strong> apparaît dans ma capacité à m'adapter rapidement aux changements de priorités et à réorganiser mes tâches en fonction des dépendances identifiées.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Évolution vers le leadership technique</h3>\n\nCette compétence occupe une place <strong>centrale</strong> dans mon projet professionnel et constitue un socle solide pour évoluer vers des responsabilités de <strong>leadership technique</strong> dans des environnements agiles.\n\nMon plan de développement se concentre sur la <strong>veille active</strong> concernant les évolutions des pratiques agiles dans le secteur fintech.\n\nCette compétence représente un <strong>atout différenciant</strong> pour mon profil d'Expert en Ingénierie, particulièrement dans un contexte où les entreprises recherchent des profils techniques capables de <strong>collaborer efficacement</strong> et de <strong>s'adapter rapidement</strong> aux évolutions du marché.",
      accentColor: 'border-coolors-green-light',
      iconColor: 'text-coolors-green-light',
      relatedProjects: [
        "Apprentissage pratique de Kafka : relever un défi technique avec un mentor"
      ]
    },
    { 
      name: 'Communication', 
      icon: <MessageSquare size={24} />, 
      description: "La communication constitue le <strong>socle fondamental</strong> de toute interaction humaine, et les ingénieurs logiciels ne font pas exception à cette règle. Dans le contexte professionnel, cette compétence implique la capacité à <strong>traduire des besoins métier en solutions techniques</strong> compréhensibles, à <strong>faciliter la collaboration</strong> au sein d'équipes pluridisciplinaires, et à <strong>transmettre efficacement les connaissances</strong> techniques.\n\nDans l'écosystème technologique actuel, la communication devient un <strong>facteur différenciant</strong> pour le succès des développements, particulièrement dans des environnements internationaux comme chez Worldline.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Application concrète chez Worldline</h3>\n\nChez <strong>Worldline</strong>, cette compétence se manifeste concrètement dans mon quotidien professionnel. Au-delà des échanges avec les experts métier pour comprendre leurs besoins et évaluer la faisabilité technique, je communique régulièrement au sein de l'équipe de développement : <strong>partage de connaissances</strong> lors des code reviews, <strong>coordination</strong> pour éviter les conflits, <strong>documentation</strong> des choix architecturaux, et <strong>transmission d'expertise</strong> lors de l'intégration de nouvelles technologies.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Apprentissage de Kafka : illustration concrète</h3>\n\nL'anecdote de mon apprentissage de <strong>Kafka</strong> illustre parfaitement cette compétence. Confronté à des problèmes de configuration malgré une compréhension conceptuelle solide, j'ai dû <strong>formuler précisément mon blocage</strong> auprès d'un collègue expérimenté. Ma capacité à distinguer les aspects maîtrisés des difficultés réelles a permis à mon mentor d'identifier rapidement la solution. Mon <strong>écoute active</strong> de ses explications sur les stratégies de commit et la gestion des offsets m'a permis d'assimiler rapidement les connaissances opérationnelles cruciales. Cette interaction a transformé un blocage de plusieurs jours en une résolution de quelques minutes.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Niveau actuel et axes de progression</h3>\n\nJe considère avoir un <strong>niveau solide</strong> en communication. Mon point fort réside dans l'<strong>écoute active</strong>, efficace pour récupérer des informations techniques et comprendre les nuances exprimées. Mes marges de progression concernent l'expression orale : je dois m'assurer d'exprimer l'intégralité de mes réflexions en contexte professionnel, même si elles peuvent parfois paraître exhaustives.\n\n<h3 class='text-xl font-bold text-white mb-3 mt-6'>Plan de développement</h3>\n\nPour faire évoluer cette compétence, je mise sur la <strong>pratique quotidienne</strong> avec mes collègues, en portant attention à la clarté de mes explications techniques. Je prévois également de <strong>voyager</strong> et d'échanger avec des personnes d'autres horizons culturels pour enrichir ma compréhension des différents styles de communication et développer une approche plus complète de cette compétence essentielle à mon évolution professionnelle et personnelle.",
      accentColor: 'border-coolors-cyan-light',
      iconColor: 'text-coolors-cyan-light',
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
    <section id="skills" className="pt-8 pb-12 min-h-screen flex items-center">
      <div className="container mx-auto px-8 w-4/5 max-w-none">
        <div className="pt-2 md:pt-0">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="text-5xl md:text-6xl font-light mb-12 tracking-tight text-center text-white">
              <span className="text-coolors-green-bright">/</span> 
              <span className="ml-2">Compétences</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mt-8">
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
              className={`glass-card p-8 hover:scale-105 transition-all duration-300 cursor-pointer ${skill.accentColor} border-l-4 group rounded-lg min-h-64`}
              style={{
                opacity: expandedCard === index ? 0 : 1,
                pointerEvents: expandedCard === index ? 'none' : 'auto',
                transition: 'opacity 0ms'
              }}
            >
              <div className={`mb-6 ${skill.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                {React.cloneElement(skill.icon, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-coolors-green-bright transition-colors duration-300 mb-4">
                {skill.name}
              </h3>
              
              {/* Project Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {skill.relatedProjects.map((project, projectIndex) => (
                  <button
                    key={projectIndex}
                    onClick={(e) => handleProjectTagClick(project, e)}
                    className="text-sm px-3 py-1 bg-coolors-green-bright/20 text-coolors-green-bright rounded-full font-medium shadow-sm backdrop-blur-sm border border-coolors-green-bright/30 hover:bg-coolors-green-bright/30 hover:scale-105 transition-all duration-200 cursor-pointer"
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
                className={`glass-card p-8 hover:scale-105 transition-all duration-300 cursor-pointer ${skill.accentColor} border-l-4 group rounded-lg min-h-64`}
                style={{
                  opacity: expandedCard === adjustedIndex ? 0 : 1,
                  pointerEvents: expandedCard === adjustedIndex ? 'none' : 'auto',
                  transition: 'opacity 0ms'
                }}
              >
                <div className={`mb-6 ${skill.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {React.cloneElement(skill.icon, { size: 32 })}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-coolors-green-bright transition-colors duration-300 mb-4">
                  {skill.name}
                </h3>
                
                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.relatedProjects.map((project, projectIndex) => (
                    <button
                      key={projectIndex}
                      onClick={(e) => handleProjectTagClick(project, e)}
                      className="text-sm px-3 py-1 bg-coolors-green-bright/20 text-coolors-green-bright rounded-full font-medium shadow-sm backdrop-blur-sm border border-coolors-green-bright/30 hover:bg-coolors-green-bright/30 hover:scale-105 transition-all duration-200 cursor-pointer"
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
                <div 
                  className="text-lg leading-relaxed text-gray-100 whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: allSkills[expandedCard].description }}
                />
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