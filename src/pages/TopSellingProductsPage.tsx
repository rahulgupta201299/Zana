
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TopSellingProductsPage = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Radiator Guard",
      description: "Shields the radiator from debris and impact.",
      image: "/uploads/217344ea-47af-4464-9cd6-c943037ad654.png"
    },
    {
      id: 2,
      name: "Saddle Stay", 
      description: "Keeps saddle bags stable and secure.",
      image: "/uploads/7c5ed4c4-7038-4008-8660-219e1d51d61e.png"
    },
    {
      id: 3,
      name: "Paddock Spool",
      description: "Helps lift the rear wheel for maintenance.",
      image: "/uploads/24fe0526-e33b-4ae3-bd7e-0831a759fb52.png"
    },
    {
      id: 4,
      name: "Top Rack",
      description: "Secure luggage for daily use or touring.",
      image: "/uploads/f61f70a5-d36b-4d2b-b524-96f52b70293d.png"
    },
    {
      id: 5,
      name: "Crash Guard",
      description: "Protects your bike during falls and crashes.",
      image: "/uploads/b67e9e8e-d696-4316-b2bb-11bd7bc13b81.png"
    }
  ];

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-theme text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className="text-white hover:bg-white/10 p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-4xl font-bold">TOP-SELLING PRODUCTS</h1>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="border-4 border-theme rounded-lg overflow-hidden bg-white cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="bg-white p-8 h-64 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="bg-theme text-white p-6">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="mb-4">{product.description}</p>
                <Button className="bg-white text-theme hover:bg-gray-100 rounded-full font-bold w-full">
                  SHOP NOW
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSellingProductsPage;
