
import { useState, useRef, useEffect, useCallback } from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import CollapsibleShopByBike from "@/components/CollapsibleShopByBike";
import CollapsibleShopByProduct from "@/components/CollapsibleShopByProduct";
import Footer from "@/components/Footer";

interface BikeData {
  id: string;
  brand: string;
  model: string;
  image: string;
}

const bikes: BikeData[] = [
  {
    id: 'royal-enfield',
    brand: 'Royal Enfield',
    model: 'Classic 350',
    image: '/uploads/678585e7-a765-403c-87e7-18f91091169e.png'
  },
  {
    id: 'honda',
    brand: 'Honda',
    model: 'CB Shine',
    image: '/uploads/b67e9e8e-d696-4316-b2bb-11bd7bc13b81.png'
  },
  {
    id: 'yamaha',
    brand: 'Yamaha',
    model: 'FZ-S',
    image: '/uploads/217344ea-47af-4464-9cd6-c943037ad654.png'
  },
  {
    id: 'new-bike',
    brand: 'Custom',
    model: 'New Bike',
    image: '/uploads/308eca5a-6835-43b4-a78d-255bfc062c42.png'
  }
];

const BikeViewPage = () => {
  const [selectedBike, setSelectedBike] = useState(bikes[3]); // Default to New Bike
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouseX, setLastMouseX] = useState(0);
  const [lastMouseY, setLastMouseY] = useState(0);
  const [isShopByBikeOpen, setIsShopByBikeOpen] = useState(false);
  const [isShopByProductOpen, setIsShopByProductOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleShopByBike = () => {
    setIsShopByBikeOpen(!isShopByBikeOpen);
    setIsShopByProductOpen(false);
  };

  const toggleShopByProduct = () => {
    setIsShopByProductOpen(!isShopByProductOpen);
    setIsShopByBikeOpen(false);
  };

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMouseX(e.clientX);
    setLastMouseY(e.clientY);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMouseX;
    const deltaY = e.clientY - lastMouseY;
    const rotationSpeed = 0.5;
    
    setRotationY(prev => prev + (deltaX * rotationSpeed));
    setRotationX(prev => prev - (deltaY * rotationSpeed));
    setLastMouseX(e.clientX);
    setLastMouseY(e.clientY);
  }, [isDragging, lastMouseX, lastMouseY]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleBikeChange = (bikeId: string) => {
    const bike = bikes.find(b => b.id === bikeId);
    if (bike) {
      setSelectedBike(bike);
      setRotationX(0);
      setRotationY(0);
    }
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - lastMouseX;
      const deltaY = e.clientY - lastMouseY;
      const rotationSpeed = 0.5;
      
      setRotationY(prev => prev + (deltaX * rotationSpeed));
      setRotationX(prev => prev - (deltaY * rotationSpeed));
      setLastMouseX(e.clientX);
      setLastMouseY(e.clientY);
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, lastMouseX, lastMouseY]);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        isShopByBikeOpen={isShopByBikeOpen}
        onToggleShopByBike={toggleShopByBike}
        isShopByProductOpen={isShopByProductOpen}
        onToggleShopByProduct={toggleShopByProduct}
      />
      <CollapsibleShopByBike 
        isOpen={isShopByBikeOpen}
        onClose={() => setIsShopByBikeOpen(false)}
      />
      <CollapsibleShopByProduct 
        isOpen={isShopByProductOpen}
        onClose={() => setIsShopByProductOpen(false)}
      />
      
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bike 360 View Section */}
          <div className="lg:col-span-2">
            <div className="rounded-lg p-8 min-h-[500px] flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#181818' }}>
              {/* Combined Bike and Base Container */}
              <div
                ref={containerRef}
                className="relative cursor-grab active:cursor-grabbing select-none z-10 flex flex-col items-center"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                style={{ userSelect: 'none' }}
              >
                {/* Bike Image with 360 Rotation */}
                <div
                  className="transition-transform duration-75 ease-out mb-[-60px] z-10 relative"
                  style={{
                    transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <img
                    src={selectedBike.image}
                    alt={`${selectedBike.brand} ${selectedBike.model}`}
                    className="max-w-full max-h-[400px] object-contain pointer-events-none"
                    draggable={false}
                  />
                </div>
                
                {/* Floor/Base Image - Positioned below bike */}
                <div className="z-0">
                  <img
                    src="/uploads/bb7ce9ac-78b5-4460-831b-e884268c5e89.png"
                    alt="Bike Floor"
                    className="w-80 h-80 object-contain opacity-90"
                  />
                </div>
                
                {/* Rotation Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 text-black px-4 py-2 rounded-full text-sm flex items-center gap-2">
                  <span>🖱️</span>
                  <span>Drag to rotate 360° (X & Y axis)</span>
                </div>
              </div>
            </div>

            {/* Rotation Controls */}
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={() => setRotationY(prev => prev - 90)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
              >
                ← Rotate Left
              </button>
              <button
                onClick={() => setRotationX(prev => prev - 90)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
              >
                ↑ Rotate Up
              </button>
              <button
                onClick={() => {
                  setRotationX(0);
                  setRotationY(0);
                }}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                Reset View
              </button>
              <button
                onClick={() => setRotationX(prev => prev + 90)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
              >
                ↓ Rotate Down
              </button>
              <button
                onClick={() => setRotationY(prev => prev + 90)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
              >
                Rotate Right →
              </button>
            </div>
          </div>

          {/* Bike Selection Section */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Bike</h2>
              
              <RadioGroup value={selectedBike.id} onValueChange={handleBikeChange} className="space-y-4">
                {bikes.map((bike) => (
                  <div key={bike.id} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value={bike.id} id={bike.id} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor={bike.id} className="cursor-pointer">
                        <div className="font-semibold text-gray-900">{bike.brand}</div>
                        <div className="text-sm text-gray-600">{bike.model}</div>
                      </Label>
                    </div>
                    <img
                      src={bike.image}
                      alt={`${bike.brand} ${bike.model}`}
                      className="w-16 h-16 object-contain rounded"
                    />
                  </div>
                ))}
              </RadioGroup>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Currently Viewing:</h3>
                <p className="text-lg font-bold text-blue-600">{selectedBike.brand} {selectedBike.model}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Rotation X: {Math.round(rotationX)}°
                </p>
                <p className="text-sm text-gray-600">
                  Rotation Y: {Math.round(rotationY)}°
                </p>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">How to use:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Click and drag on the bike to rotate in 3D</li>
                  <li>• Horizontal drag rotates left/right (Y-axis)</li>
                  <li>• Vertical drag rotates up/down (X-axis)</li>
                  <li>• Use the rotation buttons for precise control</li>
                  <li>• Reset view to return to original position</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BikeViewPage;
