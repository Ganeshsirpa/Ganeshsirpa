import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ArrowRight, Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import PortfolioItem from './components/PortfolioItem';
import { logoWorks, thumbnailWorks, merchandiseWorks } from './data/portfolioData';

function App() {
  const [activeCategory, setActiveCategory] = useState('logo');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioData = {
    logo: logoWorks,
    thumbnail: thumbnailWorks,
    merchandise: merchandiseWorks
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800 font-serif">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-stone-900 text-stone-100 shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter">G VISUALS</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#work" className="hover:text-amber-500 transition-colors">Work</a>
            <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
            <a href="#" className="border border-current px-4 py-2 hover:bg-amber-500 hover:border-amber-500 hover:text-stone-900 transition-all">Hire Me</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-stone-900 text-stone-100 absolute top-full left-0 w-full">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#work" className="py-2 border-b border-stone-700 hover:text-amber-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Work</a>
              <a href="#about" className="py-2 border-b border-stone-700 hover:text-amber-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="py-2 border-b border-stone-700 hover:text-amber-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <a href="#" className="py-2 border border-current text-center hover:bg-amber-500 hover:border-amber-500 hover:text-stone-900 transition-all" onClick={() => setMobileMenuOpen(false)}>Hire Me</a>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-stone-900 text-stone-100 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900 to-transparent"></div>
          <img 
            src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Design Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Crafting Visual Stories with Rugged Elegance</h1>
            <p className="text-xl md:text-2xl mb-8 text-stone-300">Professional designer specializing in logos, thumbnails, and merchandise that leave a lasting impression.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#work" className="px-8 py-3 bg-amber-500 text-stone-900 font-bold flex items-center justify-center hover:bg-amber-600 transition-colors">
                View My Work <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#contact" className="px-8 py-3 border border-stone-100 text-stone-100 flex items-center justify-center hover:bg-stone-100 hover:text-stone-900 transition-colors">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="work" className="py-20 bg-stone-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Explore my portfolio across different design disciplines, each crafted with attention to detail and purpose.</p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-stone-300">
            <button 
              className={`px-6 py-3 text-lg font-medium transition-colors relative ${activeCategory === 'logo' ? 'text-amber-500' : 'text-stone-600 hover:text-stone-900'}`}
              onClick={() => setActiveCategory('logo')}
            >
              Logo Design
              {activeCategory === 'logo' && <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-500"></span>}
            </button>
            <button 
              className={`px-6 py-3 text-lg font-medium transition-colors relative ${activeCategory === 'thumbnail' ? 'text-amber-500' : 'text-stone-600 hover:text-stone-900'}`}
              onClick={() => setActiveCategory('thumbnail')}
            >
              Thumbnail Works
              {activeCategory === 'thumbnail' && <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-500"></span>}
            </button>
            <button 
              className={`px-6 py-3 text-lg font-medium transition-colors relative ${activeCategory === 'merchandise' ? 'text-amber-500' : 'text-stone-600 hover:text-stone-900'}`}
              onClick={() => setActiveCategory('merchandise')}
            >
              Merchandise
              {activeCategory === 'merchandise' && <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-500"></span>}
            </button>
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData[activeCategory as keyof typeof portfolioData].map((item, index) => (
              <PortfolioItem key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-stone-900 text-stone-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About The Designer</h2>
              <p className="text-lg mb-6 text-stone-300">With over a decade of experience in visual design, I've developed a distinctive style that blends rugged aesthetics with modern sensibilities. My work aims to capture the essence of brands and communicate their stories effectively.</p>
              <p className="text-lg mb-6 text-stone-300">I believe in the power of thoughtful design to transform ideas into memorable visual experiences. Whether it's crafting a logo that becomes synonymous with a brand's identity, creating thumbnails that demand attention, or designing merchandise that people are proud to wear.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="#contact" className="px-8 py-3 bg-amber-500 text-stone-900 font-bold flex items-center justify-center hover:bg-amber-600 transition-colors">
                  Work With Me <ChevronRight className="ml-2" size={20} />
                </a>
                <a href="#" className="px-8 py-3 border border-stone-100 text-stone-100 flex items-center justify-center hover:bg-stone-100 hover:text-stone-900 transition-colors">
                  Download Resume
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-500"></div>
              <img 
                src="https://imgur.com/IrK0QnL" 
                alt="Designer Portrait" 
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Design Process</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">A methodical approach that ensures every project receives the attention it deserves.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-amber-500 text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-stone-600">Understanding your brand, audience, and objectives through in-depth consultation.</p>
            </div>
            
            <div className="bg-white p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-amber-500 text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Concept</h3>
              <p className="text-stone-600">Developing initial ideas and sketches based on research and creative exploration.</p>
            </div>
            
            <div className="bg-white p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-amber-500 text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Refinement</h3>
              <p className="text-stone-600">Iterating on selected concepts with your feedback to perfect every detail.</p>
            </div>
            
            <div className="bg-white p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-amber-500 text-4xl font-bold mb-4">04</div>
              <h3 className="text-xl font-bold mb-3">Delivery</h3>
              <p className="text-stone-600">Providing finalized designs in all necessary formats for immediate implementation.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-900 text-stone-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-lg mb-8 text-stone-300">Ready to elevate your brand with professional design? Get in touch to discuss your project needs and how we can collaborate.</p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="text-amber-500 mr-4" size={24} />
                  <a href="mailto:sirpaganeshpatel@gmail.com" className="hover:text-amber-500 transition-colors">sirpaganeshpatel@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <div className="text-amber-500 mr-4">📍</div>
                  <p>Nizamabad, IND</p>
                </div>
                
                <div className="flex space-x-4 mt-8">
                  <a href="https://www.instagram.com/iamgoogly" target="_blank" rel="noopener noreferrer" className="text-stone-100 hover:text-amber-500 transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="https://www.facebook.com/GaneshOG" target="_blank" rel="noopener noreferrer" className="text-stone-100 hover:text-amber-500 transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="https://www.x.com/GaneshOG_" target="_blank" rel="noopener noreferrer" className="text-stone-100 hover:text-amber-500 transition-colors">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-stone-800 p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-stone-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 bg-stone-700 border border-stone-600 text-stone-100 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-stone-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 bg-stone-700 border border-stone-600 text-stone-100 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="project" className="block mb-2 text-stone-300">Project Type</label>
                  <select 
                    id="project" 
                    className="w-full p-3 bg-stone-700 border border-stone-600 text-stone-100 focus:border-amber-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="logo">Logo Design</option>
                    <option value="thumbnail">Thumbnail Work</option>
                    <option value="merchandise">Merchandise Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-stone-300">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full p-3 bg-stone-700 border border-stone-600 text-stone-100 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Tell me about your project"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 bg-amber-500 text-stone-900 font-bold hover:bg-amber-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-stone-800 text-stone-400">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
              <a href="#" className="text-xl font-bold text-stone-100">GANESH PATEL</a>
            </div>
            
            <div className="text-center mb-4 md:mb-0">
              <p className="text-sm text-amber-500 font-medium">G VISUALS</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#work" className="hover:text-amber-500 transition-colors">Work</a>
              <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
              <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
            </div>
            
            <div className="mt-4 md:mt-0">
              <p>&copy; 2025 Ganesh Patel. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;