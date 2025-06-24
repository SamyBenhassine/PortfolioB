import React, { useState } from 'react';
import { ArrowUpRight, Code, Layers, LucideHardHat, MessageSquareIcon, School, School2, Plane } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  icon: React.ReactNode;
  accentColor: string;
  iconColor: string;
}

const Projects: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: "Optimisation de la gestion des contrats dans un logiciel d'émission de cartes bancaires",
      description: "<strong>Contexte professionnel et mission</strong>\n\nDans le cadre de mon alternance au sein de la division Issuing de Worldline, leader des solutions de paiement en ligne, j'ai mené un projet d'amélioration structurelle sur le logiciel de gestion des cartes bancaires. Cette mission s'est concentrée sur la rationalisation du stockage des données contractuelles, un aspect crucial pour l'intégrité du système.\n\n<strong>Problématique technique identifiée</strong>\n\nLe projet visait à résoudre une problématique technique majeure : la redondance des données contractuelles dans différentes parties du logiciel Java. Cette situation présentait plusieurs risques, notamment des incohérences potentielles dans les informations stockées et une charge excessive sur les bases de données. Face aux exigences strictes des clients en matière de fiabilité et de performance, une refonte s'imposait.\n\n<strong>Enjeux et défis du projet</strong>\n\nL'enjeu était considérable car les implications d'une gestion défaillante des données auraient pu être sévères pour les clients de Worldline. Au-delà des pertes financières directes, c'est la réputation même de l'entreprise qui aurait pu être affectée, avec le risque de voir certains clients se tourner vers la concurrence. Sur le plan personnel, ce projet représentait également un défi important : il s'agissait de faire mes preuves dans mes premiers pas en entreprise tout en assimilant rapidement les spécificités du métier et les outils utilisés.\n\n<strong>Méthodologie et phases de développement</strong>\n\nLa démarche adoptée s'est articulée autour de trois phases principales. Dans un premier temps, j'ai procédé à une analyse approfondie du logiciel pour cartographier précisément les zones de stockage redondant. Ensuite, j'ai entrepris la modification du code pour centraliser le stockage des données à un emplacement unique, tout en adaptant les mécanismes de récupération de ces informations. Enfin, j'ai mis en place une phase de tests pour valider les modifications, en créant de nouvelles données et en vérifiant leur stockage correct dans la base de données.\n\n<strong>Résultats et impact</strong>\n\nMalgré ma connaissance initialement limitée du logiciel et du secteur bancaire, j'ai pu mener ce projet à bien grâce à l'accompagnement de mon tuteur. Le résultat final est probant : le logiciel présente désormais une architecture plus claire, avec une fiabilité accrue et des performances optimisées. Cette réorganisation contribue à prévenir les problèmes futurs de gestion des données.\n\n<strong>Apprentissages et perspectives d'amélioration</strong>\n\nCette expérience m'a permis d'acquérir une compréhension approfondie de l'architecture logicielle d'une application bancaire et de son articulation avec les besoins clients. Avec le recul, si je devais recommencer ce projet, j'adopterais une approche plus méthodique dans la phase d'analyse du code. Néanmoins, cette réalisation témoigne de ma capacité à m'adapter à un environnement technique complexe et à contribuer à l'amélioration d'un système critique.",
      tech: ["Java", "Maintenance évolutive d'applications", "Anglais", "SQL"],
      icon: <Code size={24} />,
      accentColor: 'border-coolors-blue-purple',
      iconColor: 'text-coolors-blue-purple'
    },
    {
      id: 2,
      title: "Apprentissage pratique de Kafka : relever un défi technique avec un mentor",
      description: "<strong>Contexte et défi technique</strong>\n\nLors de mon alternance chez Worldline, on m'a confié une tâche de développement qui nécessitait l'utilisation de Kafka, une technologie que je ne connaissais pas encore. Kafka est une plateforme de streaming distribué, souvent utilisée dans les systèmes de paiement pour permettre la transmission rapide, fiable et en temps réel de grandes quantités de données entre différents services. Cela permet notamment de gérer efficacement des événements comme les transactions ou les notifications.\n\n<strong>Phase d'apprentissage autonome</strong>\n\nNe connaissant pas cet outil, j'ai d'abord pris le temps de me former par moi-même pour comprendre les concepts de base : les producteurs, les consommateurs, les topics et les partitions. Grâce à cette autoformation intensive à travers la documentation officielle et des tutoriels en ligne, j'ai rapidement assimilé les principes fondamentaux et j'ai pu développer les parties logiques de l'application.\n\nJe suis parvenu à écrire le code Java nécessaire pour implémenter les consommateurs Kafka, en utilisant les bonnes pratiques apprises durant ma formation. Cependant, j'ai rapidement rencontré un mur : malgré un code fonctionnellement correct, je me heurtais à des problèmes de configuration complexes qui m'empêchaient de faire fonctionner l'ensemble du système. Les erreurs de connexion dûs à la configuration restaient un mystère pour moi.\n\n<strong>Collaboration avec un mentor</strong>\n\nFace à ce blocage technique sur la configuration, j'ai sollicité un collègue plus expérimenté. Cette démarche s'est révélée déterminante : il a rapidement identifié que mes difficultés portaient essentiellement sur les aspects opérationnels et de configuration de Kafka, non sur la compréhension conceptuelle ou le développement.\n\nMon mentor m'a expliqué concrètement comment configurer les propriétés des consommateurs et paramétrer correctement les connexions aux brokers dans notre environnement spécifique chez Worldline. Il m'a également fait comprendre l'importance des stratégies de commit et de la gestion des offsets dans notre contexte métier. Grâce à ses explications pratiques et contextualisées, j'ai pu débloquer mes développements et finaliser l'implémentation avec succès.\n\n<strong>Enseignements et développement personnel</strong>\n\nCette expérience m'a révélé une leçon fondamentale : l'autoformation peut permettre de maîtriser les concepts et d'écrire du code fonctionnel, mais certains aspects opérationnels et contextuels nécessitent l'expertise de collègues expérimentés. Sans mon mentor, j'aurais probablement passé des jours à chercher la cause de mes problèmes de configuration, alors que quelques minutes d'explication ont suffi à me débloquer.\n\nJ'ai compris l'importance de savoir identifier précisément où se situent nos blocages : était-ce un problème de compréhension conceptuelle, de logique de code, ou de configuration technique ? Cette capacité d'analyse m'aide aujourd'hui à mieux cibler mes demandes d'aide et à progresser plus efficacement.\n\nCette collaboration m'a aussi permis de développer des soft skills essentielles : savoir reconnaître ses limites, oser demander de l'aide au bon moment, poser des questions précises et structurées. L'apprentissage d'une technologie complexe dans un contexte professionnel réel, avec des enjeux concrets, s'est révélé particulièrement motivant et formateur.",
      tech: ["Travail d'équipe en environnement agile", "Java"],
      icon: <MessageSquareIcon size={24} />,
      accentColor: 'border-coolors-blue-medium',
      iconColor: 'text-coolors-blue-medium'
    },
    {
      id: 3,
      title: "Développement d'une application back-end de gestion et réservation de vols aériens",
      description: "<strong>Contexte et objectifs du projet</strong>\n\nDans le cadre de mon cursus en informatique, j'ai relevé le défi de développer en totale autonomie une application back-end Java dédiée à la gestion et à la réservation de vols aériens. Ce projet académique s'inscrivait dans une démarche de validation pratique des compétences acquises durant mon cours de programmation Java.\n\n<strong>Exigences fonctionnelles et architecture</strong>\n\nL'application que j'ai conçue devait répondre à une double exigence fonctionnelle. D'une part, elle permettait aux compagnies aériennes de gérer leur catalogue de vols à travers une interface d'administration sécurisée. D'autre part, elle offrait aux clients la possibilité de consulter et réserver leurs billets. La mise en place d'un système d'authentification robuste constituait un élément central du projet, garantissant une séparation stricte entre les accès administratifs et clients.\n\n<strong>Enjeux et défis techniques</strong>\n\nLes enjeux de ce développement dépassaient largement le cadre d'une simple validation académique. Il s'agissait avant tout de démontrer ma capacité à concevoir une architecture logicielle cohérente et sécurisée, tout en intégrant les bonnes pratiques de développement enseignées durant le cours. La contrainte temporelle d'une semaine ajoutait une dimension particulièrement stimulante au projet, nécessitant une organisation méticuleuse et une priorisation efficace des tâches pour atteindre les objectifs fixés.\n\n<strong>Méthodologie de développement</strong>\n\nLa réalisation s'est articulée autour de trois phases principales de développement :\n\n<em>Phase de conception</em> : J'ai débuté par une étape cruciale de conception, définissant la structure des données et l'organisation du code qui allaient servir de fondation à l'ensemble du projet.\n\n<em>Phase d'implémentation</em> : La phase de développement qui a suivi s'est concentrée sur l'implémentation des fonctionnalités métier et la mise en place du système d'authentification, avec une attention particulière portée à la sécurisation des accès administratifs.\n\n<em>Phase de validation</em> : Enfin, la dernière phase a été consacrée aux tests approfondis, simulant divers scénarios d'utilisation pour valider la robustesse et la fiabilité de l'application.\n\n<strong>Résultats et validation</strong>\n\nL'excellente évaluation obtenue pour ce projet témoigne non seulement de sa réussite technique, mais également de ma compréhension approfondie des concepts de programmation Java et de ma capacité à les appliquer dans un contexte pratique. Cette réalisation en solo m'a permis d'acquérir une expérience précieuse dans la création complète d'une application, depuis sa conception jusqu'à sa mise en œuvre.\n\n<strong>Impact sur mon développement professionnel</strong>\n\nAu-delà de la validation académique, ce projet a significativement renforcé ma confiance dans mes capacités de développement. Il m'a sensibilisé à l'importance cruciale d'une architecture bien pensée et d'une sécurité robuste dans le développement d'applications professionnelles. Cette expérience constitue désormais une base solide pour aborder des projets plus complexes dans ma future carrière.\n\n<strong>Réflexions et apprentissages</strong>\n\nAvec le recul, bien que le projet ait atteint ses objectifs, je réalise l'importance d'approfondir davantage l'application des bonnes pratiques de développement. Une attention plus soutenue à la documentation et aux tests unitaires aurait enrichi ma pratique et préparé encore mieux mon adaptation aux exigences du monde professionnel. Cette prise de conscience constitue un apprentissage précieux pour mes futurs développements.",
      tech: ["Java", "SQL"],
      icon: <Plane size={24} />,
      accentColor: 'border-coolors-green-bright',
      iconColor: 'text-coolors-green-bright'
    }
  ];

  // Mapping tech tags to skill names (you may need to adjust these based on your actual skills)
  const techToSkillMap: { [key: string]: string } = {
    'Java': 'Java',
    'SQL': 'SQL',
    'Maintenance évolutive d\'applications': 'Maintenance évolutive d\'applications',
    'Travail d\'équipe en environnement agile': 'Travail d\'équipe en environnement agile',
    // Add more mappings as needed
  };

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
    setTimeout(() => {
      setIsAnimating(true);
    }, 10);
  };

  const handleCloseDialog = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setExpandedCard(null);
    }, 350);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseDialog();
    }
  };

  const handleTechTagClick = (tech: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card expansion
    
    // Check if there's an expanded card and close it first
    if (expandedCard !== null) {
      // Close the expanded card
      setIsAnimating(false);
      setTimeout(() => {
        setExpandedCard(null);
        
        // After the card close animation completes, scroll to skills
        setTimeout(() => {
          scrollToSkillsAndOpen(tech);
        }, 100);
      }, 250);
    } else {
      // No expanded card, directly scroll to skills
      scrollToSkillsAndOpen(tech);
    }
  };

  const scrollToSkillsAndOpen = (tech: string) => {
    // Scroll to skills section
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
      
      // Wait for scroll to complete, then trigger skill card opening
      setTimeout(() => {
        // Create a custom event to communicate with Skills component
        const event = new CustomEvent('openSkillCard', {
          detail: { skillName: techToSkillMap[tech] || tech }
        });
        window.dispatchEvent(event);
      }, 200);
    }
  };

  React.useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, projects.length);
  }, [projects.length]);

  // Listen for custom event from Skills component
  React.useEffect(() => {
    const handleOpenProjectCard = (event: CustomEvent) => {
      const { projectTitle } = event.detail;
      
      // Find the project index by title
      const projectIndex = projects.findIndex(project => project.title === projectTitle);
      
      if (projectIndex !== -1) {
        // Wait a bit to ensure the page has scrolled, then open the card
        setTimeout(() => {
          handleCardClick(projectIndex);
        }, 300);
      }
    };

    // Add event listener
    window.addEventListener('openProjectCard', handleOpenProjectCard as EventListener);

    // Cleanup
    return () => {
      window.removeEventListener('openProjectCard', handleOpenProjectCard as EventListener);
    };
  }, [projects]);

  return (
    <section id="projects" className="pt-8 pb-12 min-h-screen flex items-center">
      <div className="container mx-auto px-8 w-4/5 max-w-none">
        <h2 className="text-5xl md:text-6xl font-light mb-16 tracking-tight text-center text-white">
          <span className="text-coolors-green-bright">/</span> 
          <span className="ml-2">Réalisations</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              onClick={() => handleCardClick(index)}
              className={`glass-card p-8 hover:scale-105 transition-all duration-300 cursor-pointer ${project.accentColor} border-l-4 group rounded-lg min-h-80`}
              style={{
                opacity: expandedCard === index ? 0 : 1,
                pointerEvents: expandedCard === index ? 'none' : 'auto',
                transition: 'opacity 0ms'
              }}
            >
              <div className={`mb-6 ${project.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                {React.isValidElement(project.icon) 
                  ? React.cloneElement(project.icon as React.ReactElement, { size: 32 })
                  : project.icon
                }
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-coolors-green-bright transition-colors duration-300 mb-4">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <button
                    key={techIndex}
                    onClick={(e) => handleTechTagClick(tech, e)}
                    className="text-sm px-3 py-1 bg-coolors-green-bright/20 text-coolors-green-bright rounded-full font-medium shadow-sm backdrop-blur-sm border border-coolors-green-bright/30 hover:bg-coolors-green-bright/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    {tech}
                  </button>
                ))}
              </div>

              <div 
                className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 10,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
                dangerouslySetInnerHTML={{ __html: project.description.split('\n\n')[0] }}
              />
              
              <p className="text-xs text-gray-400 mt-3 opacity-60">
                En savoir plus...
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      {expandedCard !== null && (
        <div 
          className="fixed inset-0 z-50 pointer-events-auto cursor-default"
          onClick={handleBackdropClick}
        >
          <div 
            className={`glass-card ${projects[expandedCard].accentColor} border-l-4 absolute pointer-events-auto opacity-90 cursor-auto rounded-lg`}
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
              <ArrowUpRight size={24} />
            </button>
            
            {/* Icon */}
            <div 
              className={`${projects[expandedCard].iconColor} mb-4 transition-transform duration-300`}
            >
              {React.isValidElement(projects[expandedCard].icon) 
                ? React.cloneElement(projects[expandedCard].icon as React.ReactElement, { 
                    size: isAnimating ? 48 : 24
                  })
                : projects[expandedCard].icon
              }
            </div>
            
            {/* Title */}
            <h3 
              className={`font-bold text-white mb-4 transition-all duration-300`}
              style={{
                fontSize: isAnimating ? '3rem' : '1.125rem',
                transitionDelay: isAnimating ? '150ms' : '0ms'
              }}
            >
              {projects[expandedCard].title}
            </h3>

            {/* Tech Tags in Modal */}
            {isAnimating && (
              <div className="flex flex-wrap gap-2 mb-6 transition-opacity duration-300" style={{ transitionDelay: '250ms' }}>
                {projects[expandedCard].tech.map((tech, techIndex) => (
                  <button
                    key={techIndex}
                    onClick={(e) => handleTechTagClick(tech, e)}
                    className="text-sm px-4 py-2 bg-coolors-green-bright/20 text-coolors-green-bright rounded-full font-medium shadow-sm backdrop-blur-sm border border-coolors-green-bright/30 hover:bg-coolors-green-bright/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            )}
            
            {/* Description */}
            {isAnimating && (
              <div
                className="transition-opacity duration-300"
                style={{
                  opacity: isAnimating ? 1 : 0,
                  transitionDelay: '350ms'
                }}
              >
                <div 
                  className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-100 whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: projects[expandedCard].description }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;