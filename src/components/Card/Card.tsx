import { FC } from "react";

type CardProps = {
  title: string;
  content: string;
  featured?: boolean;
  imageUrl?: string;
};

// Define the Card component
export const Card: FC<CardProps> = ({ title, content, featured, imageUrl }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${featured ? "border-4 border-blue-500" : ""} shadow-md`}>
      {imageUrl && <img className="w-full h-32 object-cover object-center" src={imageUrl} alt="Card" />}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};
