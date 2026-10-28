import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
        isEven '' : 'md:flex-row-reverse'
      }`}
    >
      <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <div className="bg-primary/10 rounded-2xl p-8 flex items-center justify-center aspect-square max-w-md mx-auto">
          <Icon className="h-24 w-24 text-primary" strokeWidth={1.5} />
        </div>
      </div>

      <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <h3 className="heading-font text-2xl md:text-3xl font-semibold mb-4 leading-snug" style={{ textWrap: 'balance' }}>
          {title}
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground max-w-prose">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
