export default function TargetArea() {
  const areas = ["府中市", "国分寺市", "小金井市", "国立市", "立川市", "調布市", "三鷹市", "武蔵野市", "狛江市", "多摩市", "稲城市", "その他多摩地区"];

  return (
    <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 list-none">
      {areas.map((area) => (
        <li key={area} className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 rounded-full font-medium text-sm sm:text-base">
          {area}
        </li>
      ))}
    </ul>
  );
}
