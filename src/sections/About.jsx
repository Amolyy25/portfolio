import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Rocket, Heart, Target } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { value: '6+', label: 'Années de passion', icon: Heart },
    { value: '15+', label: 'Projets réalisés', icon: Code },
    { value: '5+', label: 'Technologies maîtrisées', icon: Rocket },
    { value: '100%', label: 'Motivation', icon: Target },
  ];

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

  return (
    <section id="about" className="py-20 bg-slate-800 relative overflow-hidden">
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
            À propos de <span className="text-gradient">moi</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Mon parcours</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Passionné par le développement depuis l'âge de <span className="text-blue-400 font-semibold">14 ans</span>, 
                j'ai commencé mon aventure en créant mes premiers sites sur Shopify avant de me plonger 
                dans l'univers du code avec HTML, CSS et JavaScript.
              </p>
              <p>
                Actuellement en <span className="text-blue-400 font-semibold">BTS SIO à Ynov Campus Lyon</span>, 
                je continue d'approfondir mes compétences en me spécialisant dans les technologies modernes 
                comme React pour le frontend et Python pour le backend.
              </p>
              <p>
                Mon objectif ? Créer des <span className="text-blue-400 font-semibold">expériences web innovantes</span> 
                et des applications intelligentes qui font la différence. De l'assistant vocal Hyrule aux sites 
                web professionnels, chaque projet est une nouvelle opportunité d'apprendre et de grandir.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {['Bac Pro SN', 'BTS SIO', 'Ynov Campus', 'Autodidacte'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="glass rounded-xl p-6 text-center group hover:glow transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ma philosophie</h3>
            <blockquote className="text-lg text-gray-300 italic">
              "Le code n'est pas seulement un langage, c'est un moyen de donner vie à des idées. 
              Chaque ligne écrite est une opportunité de résoudre un problème, d'améliorer une expérience 
              ou de créer quelque chose d'unique."
            </blockquote>
            <div className="mt-4 text-blue-400 font-semibold">- Amaury Meiller</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
