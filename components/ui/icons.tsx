import React from 'react';

interface IconItem {
  src: string;
  label: string;
}

interface IconShowcaseProps {
  title: string;
  icons: IconItem[];
}

const IconShowcase: React.FC<IconShowcaseProps> = ({ title, icons }) => {
  return (
    <div className="text-center py-12 bg-transparent rounded-xl">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-400 tracking-wide uppercase">
        {title}
      </h2>
      <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="relative group cursor-pointer transform transition duration-300 hover:scale-110 hover:-translate-y-1 hover:translate-x-1"
          >
            <img src={icon.src} alt={icon.label} className="h-12 w-auto" />
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {icon.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconShowcase;
