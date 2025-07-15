interface StrengthCardProps {
  title: string;
  description: string;
}

export default function StrengthCard({ title, description }: StrengthCardProps) {
  return (
    <li className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg">
      <h3 className="text-lg sm:text-xl font-bold text-blue-700 mb-3 sm:mb-4 text-center">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 leading-loose">{description}</p>
    </li>
  );
}
