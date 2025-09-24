import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, Smartphone, Tool, Brain } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML/CSS', color: 'from-orange-500 to-red-500' },
        { name: 'JavaScript', color: 'from-yellow-500 to-orange-500' },
        { name: 'React', color: 'from-cyan-500 to-blue-500' },
        { name: 'Tailwind CSS', color: 'from-teal-500 to-cyan-500' },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Python', color: 'from-blue-500 to-yellow-500' },
        { name: 'Node.js', color: 'from-green-500 to-teal-500' },
        { name: 'API Development', color: 'from-purple-500 to-pink-500' },
        { name: 'FastAPI', color: 'from-emerald-500 to-green-500' },
      ],
    },
    {
      title: 'Base de données & Outils',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git/GitHub', color: 'from-gray-600 to-gray-800' },
        { name: 'VS Code', color: 'from-blue-600 to-blue-800' },
        { name: 'SQLite', color: 'from-indigo-500 to-purple-500' },
        { name: 'JSON APIs', color: 'from-pink-500 to-rose-500' },
      ],
    },
    {
      title: 'Spécialisations',
      icon: Brain,
      color: 'from-rose-500 to-orange-500',
      skills: [
        { name: 'Discord Bots', color: 'from-indigo-600 to-purple-600' },
        { name: 'AI Integration', color: 'from-pink-500 to-rose-500' },
        { name: 'Voice Recognition', color: 'from-green-500 to-cyan-500' },
        { name: 'IoT Control', color: 'from-blue-500 to-purple-500' },
      ],
    },
  ];

  const learningTechnologies = [
    'TypeScript',
    'Next.js',
    'GraphQL',
    'Docker',
    'AWS',
    'MongoDB',
    'Vue.js',
    'Laravel',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

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
            Mes <span className="text-gradient">Compétences</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Technologies que je maîtrise à travers mes projets et mes années d'expérience
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass rounded-2xl p-8 hover:glow transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillCardVariants}
                      whileHover={{ scale: 1.05 }}
                      className={`p-4 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-20 border border-opacity-20 border-current text-center group/skill hover:bg-opacity-30 transition-all duration-300`}
                    >
                      <span className="text-white font-medium text-sm group-hover/skill:text-lg transition-all duration-300">
                        {skill.name}
                      </span>
                      <div className={`w-full h-1 bg-gradient-to-r ${skill.color} rounded-full mt-2 opacity-50 group-hover/skill:opacity-100 transition-opacity`}></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technologies en apprentissage */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Technologies en <span className="text-gradient">apprentissage</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {learningTechnologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 glass rounded-full text-gray-300 hover:text-white hover:glow transition-all duration-300 cursor-pointer relative overflow-hidden group"
              >
                <span className="relative z-10 font-medium">{tech}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section expérience */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="glass rounded-xl p-6 text-center group hover:glow transition-all duration-300">
            <div className="text-4xl font-bold text-gradient mb-2">6+</div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors">Années de passion</div>
          </div>
          <div className="glass rounded-xl p-6 text-center group hover:glow transition-all duration-300">
            <div className="text-4xl font-bold text-gradient mb-2">15+</div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors">Projets réalisés</div>
          </div>
          <div className="glass rounded-xl p-6 text-center group hover:glow transition-all duration-300">
            <div className="text-4xl font-bold text-gradient mb-2">5+</div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors">Langages maîtrisés</div>
          </div>
        </motion.div>

        {/* Quote inspirante */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 italic mb-4 leading-relaxed">
              "Chaque ligne de code est une opportunité d'apprendre quelque chose de nouveau. 
              La passion pour la technologie me pousse à explorer constamment de nouveaux horizons."
            </p>
            <div className="text-blue-400 font-semibold text-lg">- Ma philosophie de développeur</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;