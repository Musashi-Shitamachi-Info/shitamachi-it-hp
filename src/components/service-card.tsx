interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <li className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
      <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-left">{description}</p>
    </li>
  );
}
