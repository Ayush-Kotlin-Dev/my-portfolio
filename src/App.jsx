import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Star, Moon, MenuIcon, X, Briefcase, GraduationCap, Code, Sun, Cloud, Circle } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setRotation(window.scrollY * 0.1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Finance Tracker App",
      description: "Personal finance management app built with Jetpack Compose and Clean Architecture. Features include expense tracking, budget planning, and detailed analytics.",
      tech: ["Kotlin", "Jetpack Compose", "Room DB", "MVVM", "Coroutines"],
      github: "#"
    },
    {
      title: "Weather Forecast",
      description: "Modern weather app utilizing Material Design 3 and dynamic theming. Implements location services and weather API integration.",
      tech: ["Kotlin", "Compose", "Retrofit", "Dagger Hilt", "Location Services"],
      github: "#"
    },
    {
      title: "Social Media Client",
      description: "Feature-rich social media client with offline support and real-time updates using Kotlin Flow.",
      tech: ["Kotlin", "Compose", "Flow", "Firebase", "WorkManager"],
      github: "#"
    }
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-opacity-90 bg-gray-900 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Ayush Rai</div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#" onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }} className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }} className="hover:text-blue-400 transition-colors">About</a>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }} className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }} className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 p-4">
            <div className="flex flex-col space-y-4">
              <a href="#" onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }} className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }} className="hover:text-blue-400 transition-colors">About</a>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }} className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }} className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute w-48 h-48 rounded-full bg-blue-500 opacity-20 blur-3xl"
          style={{
            transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.1}px)`,
            top: '20%',
            left: '20%'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full bg-purple-500 opacity-20 blur-3xl"
          style={{
            transform: `translate(${-scrollY * 0.3}px, ${-scrollY * 0.1}px)`,
            top: '40%',
            right: '20%'
          }}
        />
        <div className="text-center z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Ayush Rai</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Android Developer | Kotlin Enthusiast</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Ayush-Kotlin-Dev" target="_blank" rel="noopener noreferrer">
              <Github className="w-8 h-8 hover:text-blue-400 cursor-pointer transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/ayush-rai-0b-0q-200s/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-8 h-8 hover:text-blue-400 cursor-pointer transition-colors" />
            </a>
            <a href="mailto:shweetarai@gmail.com">
              <Mail className="w-8 h-8 hover:text-blue-400 cursor-pointer transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          
          <div className="space-y-12">
            {/* Education */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 mr-3 text-blue-400" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="ml-9">
                <h4 className="text-xl font-semibold">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-gray-300">Guru Ghasidas Vishwavidyalaya, Bilaspur</p>
                <p className="text-gray-400">2022 - 2025</p>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 mr-3 text-blue-400" />
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              <div className="ml-9">
                <h4 className="text-xl font-semibold">App Development Team Lead</h4>
                <p className="text-gray-300">GeeksforGeeks Student Chapter GGV</p>
                <p className="text-gray-400">A coding club of college</p>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  <li>Leading app development initiatives</li>
                  <li>Mentoring team members in Android development</li>
                  <li>Organizing technical workshops and coding events</li>
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 mr-3 text-blue-400" />
                <h3 className="text-2xl font-bold">Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2 ml-9">
                {["Kotlin", "Android Development", "Jetpack Compose", "MVVM", "Clean Architecture", 
                  "Room DB", "Coroutines", "Flow", "Dagger Hilt", "Material Design"].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-900 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-900 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
              >
                <Github className="w-5 h-5 mr-2" />
                View Source
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 p-4">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Currently open for new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          <a 
            href="mailto:shweetarai@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Say Hello
          </a>
        </div>
        <div 
          className="absolute w-96 h-96 rounded-full bg-blue-600 opacity-10 blur-3xl"
          style={{
            transform: `translate(${scrollY * -0.2}px, ${scrollY * -0.1}px)`
          }}
        />
      </section>

      {/* Floating elements */}
      <Star 
        className="fixed text-yellow-400 opacity-50"
        style={{
          top: '10%',
          left: '5%',
          transform: `translate(${scrollY * 0.5}px, ${scrollY * 0.2}px)`,
        }}
      />
      <Moon 
        className="fixed text-gray-400 opacity-50"
        style={{
          top: '20%',
          right: '10%',
          transform: `translate(${-scrollY * 0.3}px, ${scrollY * 0.4}px)`,
        }}
      />
      <div className="fixed inset-0 pointer-events-none">
        {/* Planets and Stars */}
        <Sun 
          className="fixed text-yellow-500 opacity-30"
          style={{
            top: '15%',
            right: '15%',
            transform: `rotate(${rotation}deg) translate(${-scrollY * 0.4}px, ${scrollY * 0.2}px)`,
            width: '80px',
            height: '80px',
          }}
        />
        
        <Circle 
          className="fixed text-purple-400 opacity-20"
          style={{
            top: '40%',
            left: '10%',
            transform: `rotate(${-rotation}deg) translate(${scrollY * 0.3}px, ${scrollY * 0.1}px)`,
            width: '120px',
            height: '120px',
          }}
        />

        <Cloud 
          className="fixed text-blue-300 opacity-20"
          style={{
            top: '60%',
            right: '20%',
            transform: `rotate(${rotation * 0.5}deg) translate(${-scrollY * 0.2}px, ${-scrollY * 0.3}px)`,
            width: '100px',
            height: '100px',
          }}
        />

        {/* Shooting Stars */}
        <div 
          className="fixed w-1 h-20 bg-gradient-to-b from-white to-transparent"
          style={{
            top: '10%',
            left: `${30 + Math.sin(scrollY * 0.01) * 20}%`,
            transform: `rotate(45deg) translateX(${scrollY * 0.5}px)`,
          }}
        />
        
        <div 
          className="fixed w-1 h-16 bg-gradient-to-b from-white to-transparent"
          style={{
            top: '20%',
            right: `${20 + Math.cos(scrollY * 0.01) * 20}%`,
            transform: `rotate(-45deg) translateX(${-scrollY * 0.3}px)`,
          }}
        />

        {/* Color Orbs */}
        <div 
          className="fixed w-64 h-64 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-10 blur-3xl"
          style={{
            top: '70%',
            left: '60%',
            transform: `translate(${scrollY * -0.1}px, ${-scrollY * 0.2}px) scale(${1 + scrollY * 0.001})`,
          }}
        />
        
        <div 
          className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-blue-500 to-green-500 opacity-10 blur-3xl"
          style={{
            top: '30%',
            left: '40%',
            transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.1}px) scale(${1 + scrollY * 0.0005})`,
          }}
        />
      </div>
    </div>
  );
};
const scrollToSection = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  }
};
export default Portfolio;