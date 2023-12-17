import React from 'react';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor' }) => {
  const iconPath = getIconPath(name);

  if (!iconPath) {
    console.error(`Icon '${name}' not found.`);
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
    >
      {iconPath}
    </svg>
  );
};

const getIconPath = (name: string): JSX.Element | null => {
  switch (name) {
    case 'arrow-up':
      return <path d="M12 4l-8 8h6v8h4v-8h6z" />;
    case 'check':
      return <path d="M20 6L9 17l-5-5" />;
    // Add more cases for additional icons
    default:
      return null;
  }
};

export default Icon;
