import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";

const InfoSection = () => {
  const Info = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Kargo Bedava",
      description: "Fazladan ödemeden siparişlerinizi alın",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "7/24 Destek",
      description: "İstediğiniz zaman size yardım etmeye hazırız",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "%100 Para iadesi",
      description: "Memnun kalmazsanız paranız iade ediliyor",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Güvenli ödeme",
      description: "Ödeme bilgileriniz bizimle güvende",
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "İndirimler",
      description: "En iyi fiyatlar bizde",
    },
  ];

  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {Info.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-400 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default InfoSection;
