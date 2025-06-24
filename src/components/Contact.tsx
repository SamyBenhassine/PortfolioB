import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // For now, we'll create a mailto link with the form data
    const subject = encodeURIComponent(formData.subject || 'Contact depuis le portfolio');
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:benhassine@et.esiea.fr?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 pb-36 min-h-screen flex items-center">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-end mb-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
            <span className="text-coolors-green-bright">/</span> 
            <span className="ml-2">Contact</span>
          </h2>
        </div>
        
        <div className="flex justify-center">
          <div className="glass-card p-12 max-w-2xl w-full border-t-4 border-coolors-green-bright">
            <h3 className="text-2xl font-bold mb-8 text-white text-center">Contactez-moi</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-200 text-sm font-medium mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coolors-green-bright focus:border-transparent backdrop-blur-sm transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-200 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coolors-green-bright focus:border-transparent backdrop-blur-sm transition-all duration-300"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-200 text-sm font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coolors-green-bright focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-200 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coolors-green-bright focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none"
                  placeholder="Votre message..."
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-coolors-cyan-medium to-coolors-green-bright text-text-dark font-bold transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl backdrop-blur-sm"
                >
                  <span>Envoyer le message</span>
                  <span className="ml-2">→</span>
                </button>
              </div>
            </form>
            
            <div className="mt-8 pt-6 border-t border-white/20 text-center">
              <p className="text-gray-200 text-sm">
                Ou contactez-moi directement : 
                <a href="mailto:benhassine@et.esiea.fr" className="text-coolors-green-bright hover:underline ml-1">
                  benhassine@et.esiea.fr
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 