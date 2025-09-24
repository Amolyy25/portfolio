import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ExternalLink, 
  Github, 
  Code, 
  Mic, 
  Bot, 
  Globe, 
  Shield, 
  Star,
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Hyrule - Assistant Vocal IA',
      description: 'Assistant vocal intelligent utilisant Google Speech Recognition et Groq API avec le modèle Ollama. Capable de contrôler des objets connectés via commandes vocales.',
      category: 'python',
      technologies: ['Python', 'Google Speech API', 'Groq API', 'Ollama', 'IoT'],
      features: [
        'Reconnaissance vocale en temps réel',
        'Réponses IA ultra-rapides',
        'Contrôle d\'objets connectés',
        'Interface vocale intuitive'
      ],
      github: 'https://github.com/Amolyy25/hyrule',
      demo: null,
      image: '/api/placeholder/600/400',
      status: 'completed',
      icon: Mic,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 2,
      title: 'Serenity Fitness - Site Coach Sportif',
      description: 'Site web professionnel pour un coach sportif à domicile, développé en HTML, CSS et JavaScript avec animations et formulaire de contact fonctionnel.',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'EmailJS', 'Animations'],
      features: [
        'Design responsive moderne',
        'Formulaire de contact fonctionnel',
        'Animations CSS fluides',
        'Optimisation SEO'
      ],
      demo: 'https://serenityfitness.fr',
      image: '/api/placeholder/600/400',
      status: 'completed',
      icon: Globe,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 3,
      title: 'Spam Detector API',
      description: 'API intelligente permettant aux entreprises de détecter automatiquement les emails de spam/scam en utilisant l\'API Gemini pour l\'analyse de contenu.',
      category: 'python',
      technologies: ['Python', 'Gemini API', 'FastAPI', 'RapidAPI', 'Machine Learning'],
      features: [
        'Détection automatique de spam',
        'API RESTful moderne',
        'Intégration Gemini AI',
        'Documentation complète'
      ],
      github: 'https://github.com/Amolyy25/api-spam',
      demo: 'https://rapidapi.com/meilleramaury/api/spam-detector-api',
      image: '/api/placeholder/600/400',
      status: 'completed',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 4,
      title: 'App Avis Google - Stage',
      description: 'Application développée en stage utilisant l\'API Google pour récupérer et transformer automatiquement les avis d\'entreprises en fichiers JSON structurés.',
      category: 'python',
      technologies: ['Python', 'Google API', 'JSON', 'Data Processing', 'Automation'],
      features: [
        'Récupération automatique d\'avis',
        'Transformation en JSON',
        'Interface utilisateur simple',
        'Traitement de données massives'
      ],
      github: null,
      demo: null,
      image: '/api/placeholder/600/400',
      status: 'completed',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 5,
      title: 'Site E-commerce Montres',
      description: 'Site de vente de montres fictif créé pour un projet de terminal, développé entièrement en HTML et CSS avec un design moderne et responsive.',
      category: 'web',
      technologies: ['HTML', 'CSS', 'Responsive Design', 'Grid/Flexbox'],
      features: [
        'Design e-commerce moderne',
        'Galerie de produits interactive',
        'Interface responsive',
        'CSS Grid avancé'
      ],
      github: 'https://github.com/Amolyy25/watch-store',
      demo: null,
      image: '/api/placeholder/600/400',
      status: 'completed',
      icon: Eye,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 6,
      title: 'Bots Discord Communautaires',
      description: 'Plusieurs bots Discord avec commandes de modération basiques comme /ban, /kick et fonctionnalités communautaires pour gérer des serveurs.',
      category: 'other',
      technologies: ['Python', 'Discord.py', 'SQLite', 'Bot Commands'],
      features: [
        'Commandes de modération',
        'Gestion de permissions',
        'Logs automatiques',
        'Interface intuitive'
      ],
      github: 'https://github.com/Amolyy25/discord-bots',
      demo: null,
      image: '/api/placeholder/600/400',
      status: 'completed',
      icon: Bot,
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les projets', count: projects.length },
    { id: 'python', name: 'Python', count: projects.filter(p => p.category === 'python').length },
    { id: 'web', name: 'Web', count: projects.filter(p => p.category === 'web').length },
    { id: 'other', name: 'Autres', count: projects.filter(p => p.category === 'other').length },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const ProjectCard = ({ project, index }) => {
    const IconComponent = project.icon;
    
    return (
      <motion.div
        layout
        variants={itemVariants}
        className="glass rounded-2xl overflow-hidden group hover:glow transition-all duration-300"
      >
        <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <IconComponent className="w-16 h-16 text-gray-500 group-hover:text-blue-400 transition-colors" />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-colors">
              {project.title}
            </h3>
            <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
              {project.status === 'completed' ? 'Terminé' : 'En cours'}
            </span>
          </div>
          
          <p className="text-gray-400 mb-4 line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-500/30"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={16} />
                <span className="text-sm">Code</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ExternalLink size={16} />
                <span className="text-sm">Demo</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Mes <span className="text-gradient">Projets</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Découvrez mes réalisations, des assistants vocaux intelligents aux sites web modernes
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white glow'
                    : 'glass text-gray-400 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Vous aimez mon travail ?
            </h3>
            <p className="text-gray-400 mb-6">
              Je suis toujours ouvert à de nouvelles opportunités et collaborations passionnantes.
              N'hésitez pas à me contacter pour discuter de votre alternance !
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 glow"
            >
              Discutons de votre alternance
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
