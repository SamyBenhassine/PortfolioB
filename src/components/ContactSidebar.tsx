import React from 'react';

const ContactSidebar: React.FC = () => {
  return (
    <aside className="fixed right-6 bottom-0 z-40 hidden md:block">
      <div className="flex flex-col items-center">
        <a 
          href="mailto:hello@example.com"
          className="vertical-text py-4 text-gray-400 hover:text-accent transition-all duration-300 tracking-widest"
        >
          hello@example.com
        </a>
        <div className="w-px h-24 bg-gray-700 mt-4"></div>
      </div>
    </aside>
  );
};

export default ContactSidebar;