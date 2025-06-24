import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    // Show thank you message
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 pb-36 min-h-screen flex items-center">
      <div className="container mx-auto px-8 w-4/5 max-w-none">
        <div className="flex justify-end mb-8">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white">
            <span className="text-coolors-green-bright">/</span> 
            <span className="ml-2">Contact</span>
          </h2>
        </div>
        
        <div className="flex justify-center">
          <div className="glass-card p-16 w-full border-t-4 border-coolors-green-bright max-w-5xl mx-auto min-h-96">
            {!isSubmitted ? (
              <>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white text-center">Contactez-moi</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-200 text-base md:text-lg lg:text-xl font-medium mb-2">
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
                      <label htmlFor="email" className="block text-gray-200 text-base md:text-lg lg:text-xl font-medium mb-2">
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
                    <label htmlFor="subject" className="block text-gray-200 text-base md:text-lg lg:text-xl font-medium mb-2">
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
                    <label htmlFor="message" className="block text-gray-200 text-base md:text-lg lg:text-xl font-medium mb-2">
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
                  <p className="text-gray-200 text-base md:text-lg lg:text-xl">
                    Ou contactez-moi directement : 
                    <a href="mailto:benhassine@et.esiea.fr" className="text-coolors-green-bright hover:underline ml-1">
                      benhassine@et.esiea.fr
                    </a>
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-coolors-cyan-medium to-coolors-green-bright rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Merci pour votre message !</h3>
                  <p className="text-gray-200 mb-8">
                    Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais à l'adresse{' '}
                    <span className="text-coolors-green-bright font-medium">{formData.email}</span>.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
                  >
                    <span>Envoyer un autre message</span>
                  </button>
                  
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-gray-200 text-base">
                      Ou contactez-moi directement : 
                      <a href="mailto:benhassine@et.esiea.fr" className="text-coolors-green-bright hover:underline ml-1">
                        benhassine@et.esiea.fr
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 