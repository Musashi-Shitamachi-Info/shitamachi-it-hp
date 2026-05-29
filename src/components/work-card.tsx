import Link from "next/link";

import type { WorkItem } from "@/types";

export default function WorkCard({ title, description, tags, link }: WorkItem) {
  return (
    <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
      {tags && tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-4 list-none">
          {tags.map((tag) => (
            <li key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {tag}
            </li>
          ))}
        </ul>
      )}
      {link && (
        <div className="flex justify-center">
          <Link href={link} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-600 hover:underline">
            詳細を見る →
          </Link>
        </div>
      )}
    </div>
  );
}
