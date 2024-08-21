import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#191919] text-slate-400 py-8 h-80">
      <div className="container mx-16 mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <a href="#" className="hover:underline">Real Estate in New Delhi</a>
        <a href="#" className="hover:underline">Flats in New Delhi</a>
        <a href="#" className="hover:underline">Commercial Property in New Delhi</a>
        <a href="#" className="hover:underline">New Projects in New Delhi</a>
        <a href="#" className="hover:underline">Real Estate in Gurgaon</a>
        <a href="#" className="hover:underline">Flats in Gurgaon</a>
        <a href="#" className="hover:underline">Commercial Propery in Gurgaon</a>
        <a href="#" className="hover:underline">New Projects in Gurgaon</a>
        <a href="#" className="hover:underline">Real Estate in Chandigarh</a>
        <a href="#" className="hover:underline">Flats in Chandigarh</a>
        <a href="#" className="hover:underline">Commercial Propery in Chandigarh</a>
        <a href="#" className="hover:underline">New Projects in Chandigarh</a>
        <a href="#" className="hover:underline">Real Estate in Mumbai</a>
        <a href="#" className="hover:underline">Flats in Mumbai</a>
        <a href="#" className="hover:underline">Commercial Propery in Mumbai</a>
        <a href="#" className="hover:underline">New Projects in Mumbai</a>
      </div>
      <div className="text-center mt-12 text-white">
        <p>&copy; 2024 SG Real Estate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
