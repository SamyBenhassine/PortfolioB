import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 min-h-screen flex items-center">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mt-16 md:mt-20">
          <h1 className="text-5xl md:text-6xl font-light mb-8 text-white">
            <span className="text-coolors-green-bright">/</span> 
            <span className="ml-2">A propos de moi</span>
          </h1>
          <div className="mt-6 md:mt-8">
            <h3 className="text-3xl font-bold mb-8 text-coolors-cyan-light">
               Backend Software Engineer
            </h3>
            <div className="glass-card p-8 border-l-4 border-coolors-green-bright mb-8 rounded-lg">
              <p className="text-gray-100 leading-relaxed text-lg">
              Je suis ingénieur logiciel, spécialisé en backend, passionné par ce qui se passe sous le capot des systèmes complexes. J'aime quand la technique a du sens, quand elle sert des usages concrets.<br />
              C'est le cas dans le secteur des cartes de paiement chez Worldline, où je travaille sur des applications critiques.<br />
              <br />
              Ce qui m'anime au quotidien, c'est le besoin de comprendre. Pas seulement le code, mais aussi les métiers, les équipes, les contextes. Travailler avec des collègues en Inde, en Allemagne ou en Arménie m'a appris que les différences de culture, de point de vue ou encore de façon de penser sont une richesse.<br />
              <br />
Aujourd'hui, je continue la construction d'une expertise solide en backend (Java, APis REST, SQL) tout en me projetant à l'international, avec une envie forte d'évoluer aux États-Unis. Ce n'est pas qu'un choix de carrière : c'est une façon de rester au plus proche de l'innovation, dans des environnements stimulants et ouverts.
              </p>
            </div>
            <a 
              href="#skills" 
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-coolors-cyan-medium/30 to-coolors-green-bright/30 text-white hover:from-coolors-cyan-medium hover:to-coolors-green-bright transition-all duration-300 font-medium backdrop-blur-sm border border-coolors-green-bright/30 hover:scale-105 text-lg"
            >
              <span>Voir mes compétences</span>
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;