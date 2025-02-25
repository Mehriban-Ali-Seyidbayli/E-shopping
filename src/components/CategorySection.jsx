import ManCategory from "../assets/images/man.jpg";
import WomanCategory from "../assets/images/woman.jpg";
import KidsCategory from "../assets/images/kids.jpg";

const categories = [
  { title: "Men", imageUrl: ManCategory },
  { title: "Women", imageUrl: WomanCategory },
  { title: "Kids", imageUrl: KidsCategory },
];

const CategorySection = () => {
  return (
    <div className="conatiner mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 ">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={category.imageUrl}
            alt=""
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
