
import { Button } from "@/components/ui/button";
import { ArrowLeft, Minus, Plus, Facebook, Instagram } from "lucide-react";
import CartIcon from "@/components/ui/cart-icon";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: 1,
    name: "Mobile Holder",
    price: 500,
    images: [
      "/uploads/217344ea-47af-4464-9cd6-c943037ad654.png",
      "/uploads/b67e9e8e-d696-4316-b2bb-11bd7bc13b81.png",
      "/uploads/7c5ed4c4-7038-4008-8660-219e1d51d61e.png",
      "/uploads/f61f70a5-d36b-4d2b-b524-96f52b70293d.png"
    ],
    shortDescription: "Built for riders who demand durability, quality, and effortless functionality everyday you hit the dusty lanes.",
    description: "Protect your engine and radiator from debris and impact with our premium Radiator Guard. The Zana Radiator Guard is built to protect your motorcycle's radiator against harsh road elements — so it's sturdy, durable and built to last. It's made from premium zinc-coated steel construction designed to shine with your bike's style, not against it. Our Radiator Guard is built to perfect your motorcycle's radiator against harsh road elements, and promises you outstanding durability and unmatched protection.",
    specification: "• Material: Premium aluminum alloy\n• Weight: 250g\n• Compatibility: Universal fit for all bike models\n• Water resistance: IPX4 rated\n• Installation: Tool-free mounting system",
    shipping: "• Free shipping on orders above ₹999\n• Standard delivery: 3-5 business days\n• Express delivery: 1-2 business days\n• Easy returns within 30 days\n• Warranty: 1 year manufacturer warranty",
    relatedProducts: [
      { name: "Tank Bag - Pluto", image: "/uploads/83ba68f0-f2ca-4ee6-a076-4689e0ac48a9.png", price: 500 },
      { name: "Aux Light Mounts", image: "/uploads/24fe0526-e33b-4ae3-bd7e-0831a759fb52.png", price: 500 },
      { name: "Saddle Bag", image: "/uploads/681f7126-6997-49d7-b7df-cfcbbefcee1f.png", price: 500 },
      { name: "Brake Oil Reservoir", image: "/uploads/565e17f1-53ab-4367-aa31-3448ba30c50b.png", price: 500 }
    ]
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out this ${product.name}`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'instagram':
        // Instagram doesn't have direct sharing, so copy to clipboard
        navigator.clipboard.writeText(`${text} ${url}`);
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, '_blank');
        break;
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#181818' }}>
      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left - Product Images List */}
          <div className="lg:col-span-2">
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:max-h-[600px] scrollbar-hide">
              {product.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 w-20 h-20 lg:w-full lg:h-24 border-2 rounded cursor-pointer transition-all bg-gradient-to-b from-[#7B7575] to-white ${
                    selectedImageIndex === index ? 'border-white' : 'border-gray-600'
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-contain p-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Center - Main Product Image */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-[#7B7575] to-white rounded-lg p-8 h-96 lg:h-[600px] flex items-center justify-center">
              <img 
                src={product.images[selectedImageIndex]} 
                alt={product.name} 
                className="max-w-full max-h-full object-contain" 
              />
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="lg:col-span-5">
            <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
            <p className="text-white text-lg mb-6 leading-relaxed">{product.shortDescription}</p>
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-bold text-white">₹ {product.price}</span>
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={decrementQuantity}
                  className="text-white hover:bg-white/10 w-10 h-10 border border-white"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-4 py-2 text-white font-semibold min-w-[50px] text-center">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={incrementQuantity}
                  className="text-white hover:bg-white/10 w-10 h-10 border border-white"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <Button 
                onClick={() => navigate("/cart")}
                className="bg-black text-white border-2 border-white hover:bg-white hover:text-black flex-1 py-3 text-lg font-bold"
              >
                ADD TO CART
              </Button>
              <Button className="bg-black text-white border-2 border-white hover:bg-white hover:text-black flex-1 py-3 text-lg font-bold">
                BUY NOW
              </Button>
            </div>

            {/* Share Section */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-white font-semibold">Share:</span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleShare('instagram')}
                className="text-white hover:bg-white/10 p-2"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleShare('facebook')}
                className="text-white hover:bg-white/10 p-2"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleShare('whatsapp')}
                className="text-white hover:bg-white/10 p-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </Button>
            </div>

            <Separator className="bg-white/20 mb-6" />

            {/* Info Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-[#7B7575] to-white">
                <TabsTrigger value="description" className="text-black font-medium">DESCRIPTION</TabsTrigger>
                <TabsTrigger value="specification" className="text-black font-medium">SPECIFICATION</TabsTrigger>
                <TabsTrigger value="shipping" className="text-black font-medium">SHIPPING & RETURN</TabsTrigger>
              </TabsList>
              
              <div className="bg-white rounded-b-lg p-6 min-h-[200px] max-h-[300px] overflow-y-auto">
                <TabsContent value="description" className="text-black text-sm leading-relaxed">
                  {product.description}
                </TabsContent>
                <TabsContent value="specification" className="text-black text-sm leading-relaxed whitespace-pre-line">
                  {product.specification}
                </TabsContent>
                <TabsContent value="shipping" className="text-black text-sm leading-relaxed whitespace-pre-line">
                  {product.shipping}
                </TabsContent>
                
                <div className="flex justify-center mt-6">
                  <Button className="bg-white text-black border-2 border-black hover:bg-black hover:text-white px-8 py-2 font-bold">
                    BROCHURE
                  </Button>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>

      {/* See It. Hear It. Shop It. */}
      <div className="max-w-7xl mx-auto px-2 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-8">See It. Hear It. Shop It.</h2>
        <div className="w-full">
          <img 
            src="/uploads/8b5fe37b-d6d5-4568-b733-e5fdd3369a23.png" 
            alt="See It. Hear It. Shop It." 
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* You may also like */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-8">You may also like</h2>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {[
            { name: "Aux Light Mounts", image: "/uploads/9ef7764a-c239-4d03-a7ae-e2edc6a2a058.png", price: 500 },
            { name: "Crash Guard", image: "/uploads/cb056aac-1376-49aa-819e-e05615a0730d.png", price: 750 },
            { name: "Engine Guard", image: "/uploads/c793cf04-04a0-4bfb-8745-36c7ef20c605.png", price: 850 },
            { name: "Jerry Can", image: "/uploads/cde51574-0e5b-44ff-92a7-71aacfa69aa8.png", price: 950 },
            { name: "Tail Bag", image: "/uploads/592eb4cd-cf02-406e-a21b-e56eea5a9be5.png", price: 650 },
            { name: "Saddle Bag", image: "/uploads/319a0a35-f426-4c34-add7-e2c3e1b5e13a.png", price: 700 },
            { name: "Side Stand Extension", image: "/uploads/67e168e0-9121-496f-8411-146fee126a09.png", price: 450 },
            { name: "Tank Bag - Pluto", image: "/uploads/397575c4-6ab5-411a-bce7-42fdc499e90b.png", price: 500 }
          ].map((relatedProduct, index) => (
            <div key={index} className="flex-shrink-0 w-64 bg-gradient-to-b from-[#7B7575] to-white rounded-lg overflow-hidden">
              <div className="relative p-2">
                <div className="aspect-square bg-white/10 overflow-hidden rounded-lg relative flex items-center justify-center">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name} 
                    className="max-w-full max-h-full object-contain" 
                  />
                  <div className="absolute bottom-2 left-2 group">
                    <div 
                      onClick={() => navigate("/cart")}
                      className="bg-white rounded-full p-2 cursor-pointer transition-all duration-300 ease-out overflow-hidden group-hover:pr-4 group-hover:rounded-full"
                    >
                      <div className="flex items-center gap-2">
                        <CartIcon className="w-4 h-4 text-black flex-shrink-0" />
                        <span className="text-black font-medium text-sm whitespace-nowrap opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto transition-all duration-300 ease-out">
                          Add to Cart
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 pb-2 flex justify-between items-center">
                <h3 className="font-bold text-black text-left text-sm">{relatedProduct.name}</h3>
                <span className="font-bold text-black text-sm">₹{relatedProduct.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Review */}
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <Button className="bg-black text-white border-2 border-white hover:bg-white hover:text-black px-8 py-3 font-bold mb-8">
          CUSTOMER REVIEW
        </Button>
        <Separator className="bg-white/20" />
      </div>
    </div>
  );
};

export default ProductDetailPage;
