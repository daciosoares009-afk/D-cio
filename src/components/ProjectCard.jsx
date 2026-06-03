import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ image, title, description, results, featured = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="heading-font text-xl md:text-2xl font-semibold mb-2" style={{ textWrap: 'balance' }}>
            {title}
          </h3>
          <p className="text-sm leading-relaxed mb-3 opacity-90">
            {description}
          </p>
          {results && (
            <p className="text-xs font-medium text-primary">
              {results}
            </p>
          )}
        </div>
      </div>

      <div className="p-6 bg-card">
        <h3 className="heading-font text-lg font-semibold" style={{ textWrap: 'balance' }}>
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;