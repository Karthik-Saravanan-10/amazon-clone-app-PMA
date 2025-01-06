import { varity } from "../lists/informations";
const FilterRequirements = ({ category }: { category: string }) => {
  const content = varity.filter((elem: string) => {
    return category.includes(elem);
  });

  const clothing: React.ReactNode = (
    <div>
      <p className="font-bold text-sm">Size:</p>
      <select
        className="w-10 border-2 rounded h-8 bg-[#d5d9d9] p-1 text-sm"
        id="selectBox-category-1"
      >
        <option value="1">s</option>
        <option value="2">m</option>
        <option value="3">l</option>
        <option value="4">xl</option>
      </select>
    </div>
  );

  const electronics: React.ReactNode = (
    <div>
      <p className="font-bold text-sm">Storage:</p>
      <select
        className="w-20 border-2 rounded h-8 bg-[#d5d9d9] p-1 text-sm"
        id="selectBox-category-2"
      >
        <option value="1">256GB</option>
        <option value="2">512GB</option>
        <option value="3">1TB</option>
        <option value="4">2TB</option>
      </select>
    </div>
  );

  return <>{content[0] == "clothing" ? clothing : electronics}</>;
};

export default FilterRequirements;
