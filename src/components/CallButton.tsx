
import { Phone } from "lucide-react";

const CallButton = () => {
  const phoneNumber = "+919360457743";
  
  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <button
      onClick={handleCallClick}
      className="fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Call us"
    >
      <Phone size={24} />
    </button>
  );
};

export default CallButton;
