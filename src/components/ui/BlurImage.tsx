import { useState } from "react";
import { motion } from "framer-motion";

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

const BlurImage: React.FC<BlurImageProps> = ({ src, alt, className, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative overflow-hidden w-full h-full">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="absolute inset-0 bg-gradient-to-bl from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800"
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        onClick={onClick}
      />
    </div>
  );
};

export default BlurImage; 