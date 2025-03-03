import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

interface PortfolioItemProps {
  item: {
    title: string;
    category: string;
    image: string;
    description: string;
    client?: string;
    year?: string;
    link?: string;
  };
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div 
        className="group cursor-pointer overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
        onClick={() => setModalOpen(true)}
      >
        <div className="relative overflow-hidden h-64">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-stone-900 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project</span>
          </div>
        </div>
        <div className="p-6">
          <span className="text-amber-500 text-sm font-medium">{item.category}</span>
          <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
          <p className="text-stone-600 line-clamp-2">{item.description}</p>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900 bg-opacity-90">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              className="absolute top-4 right-4 text-stone-600 hover:text-stone-900 transition-colors"
              onClick={() => setModalOpen(false)}
            >
              <X size={24} />
            </button>
            
            <div className="p-8">
              <div className="mb-6">
                <span className="text-amber-500 text-sm font-medium">{item.category}</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-1">{item.title}</h2>
              </div>
              
              <div className="mb-8">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>
                  <p className="text-stone-600 mb-4">{item.description}</p>
                  
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-amber-500 hover:text-amber-600 transition-colors"
                    >
                      View Live Project <ExternalLink size={16} className="ml-2" />
                    </a>
                  )}
                </div>
                
                <div className="bg-stone-100 p-6">
                  <h3 className="text-lg font-bold mb-4">Project Info</h3>
                  
                  <div className="space-y-4">
                    {item.client && (
                      <div>
                        <h4 className="text-sm text-stone-500">Client</h4>
                        <p className="font-medium">{item.client}</p>
                      </div>
                    )}
                    
                    {item.year && (
                      <div>
                        <h4 className="text-sm text-stone-500">Year</h4>
                        <p className="font-medium">{item.year}</p>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="text-sm text-stone-500">Category</h4>
                      <p className="font-medium">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioItem;