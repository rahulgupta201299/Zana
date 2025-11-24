import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { bikeProductTraceActions } from "../Actions";

const network = new Network();

async function bikeProductService(
  modelId: string
): Promise<ShopByProductDetailsType[]> {
  const options = {
    url: `/api/v1/product/model/${modelId}`,
    method: API_METHOD_ENUM.GET,
  };

  const placeholderImages = [
    "/bike-placeholder.svg",
    "/uploads/Bikes Thumbnail/bsa-gold-star.png",
    "/uploads/Bikes Thumbnail/Royal-Enfield-Continental-GT-650.avif",
  ];

  const shopByBikeProducts = [
    /* ----------------------------- PROTECTION ----------------------------- */
    {
      _id: "p1",
      brand: "ZANA",
      model: "Generic",
      category: "Protection",
      name: "Bash Plate",
      shortDescription: "Heavy-duty aluminium bash plate for engine protection",
      longDescription:
        "A high-strength aluminium bash plate designed to protect the lower engine from debris, rocks, and impacts.",
      specifications:
        "Material: Premium-grade aluminium; Finish: Powder-coated; Fit: Precise OEM fit.",
      shippingAndReturn:
        "Ships in 2–3 days. Easy returns within 7 days if unused.",
      price: 5000,
      imageUrl: "/bike-placeholder.svg",
      images: placeholderImages,
      quantityAvailable: 12,
      isBikeSpecific: true,
      featured: true,
    },
    {
      _id: "p2",
      brand: "ZANA",
      model: "Generic",
      category: "Protection",
      name: "Engine Guard with Puck",
      shortDescription:
        "Heavy-duty steel engine guard with crash protection puck",
      longDescription:
        "Engineered for maximum durability, includes side crash protection pucks for safer rides.",
      specifications:
        "Material: Stainless steel; Crash Puck: High-density polymer; Corrosion-resistant.",
      shippingAndReturn:
        "Ships within 48 hours. Hassle-free returns within 7 days.",
      price: 6500,
      imageUrl: "/bike-placeholder.svg",
      images: placeholderImages,
      quantityAvailable: 20,
      isBikeSpecific: true,
      featured: true,
    },
    {
      _id: "p3",
      brand: "ZANA",
      model: "Generic",
      category: "Protection",
      name: "Radiator Grill Honeycomb",
      shortDescription: "Honeycomb mesh radiator protector",
      longDescription:
        "Protects your radiator from debris and stones while ensuring maximum airflow.",
      specifications:
        "Material: Steel honeycomb mesh; Finish: Matte black; Rust-proof.",
      shippingAndReturn: "Delivered in 2–4 days. 7-day returns applicable.",
      price: 2500,
      imageUrl: "/bike-placeholder.svg",
      images: placeholderImages,
      quantityAvailable: 18,
      isBikeSpecific: true,
    },

    /* ------------------------ LUGGAGE & TOURING ------------------------ */
    {
      _id: "p4",
      brand: "ZANA",
      model: "Generic",
      category: "Luggage & Touring",
      name: "Rear Luggage Rack",
      shortDescription: "Heavy-duty touring rear rack",
      longDescription:
        "Perfect for long rides; supports top-boxes and luggage up to 12kg.",
      specifications:
        "Material: Mild Steel; Load Capacity: 12kg; Finish: Black powder coat.",
      shippingAndReturn: "Dispatch in 48 hours; 7-day returns.",
      price: 3200,
      imageUrl: "/bike-placeholder.svg",
      images: placeholderImages,
      quantityAvailable: 25,
      isBikeSpecific: true,
    },
    {
      _id: "p5",
      brand: "ZANA",
      model: "Generic",
      category: "Luggage & Touring",
      name: "Saddle Stay Set",
      shortDescription: "Left–right saddle stay for touring bags",
      longDescription:
        "Sturdy steel saddle stays to protect luggage from the wheels.",
      specifications:
        "Material: Steel tubing; Coating: Anti-rust paint; Weight: 1.8kg.",
      shippingAndReturn: "Ships in 2–3 days.",
      price: 2700,
      imageUrl: "/bike-placeholder.svg",
      images: placeholderImages,
      quantityAvailable: 18,
      isBikeSpecific: true,
    },

    /* ----------------------------- BAGS ----------------------------- */
    {
      _id: "p6",
      brand: "ZANA",
      model: "Universal",
      category: "Bags",
      name: "Magnetic Tank Bag",
      shortDescription: "Expandable magnetic tank bag for touring",
      longDescription:
        "Durable touring tank bag with map window and quick-release system.",
      specifications: "Capacity: 20L; Material: 1680D Ballistic Nylon.",
      shippingAndReturn: "Fast delivery within 2 days.",
      price: 2899,
      imageUrl: "/bike-placeholder.svg",
      images: placeholderImages,
      quantityAvailable: 40,
      isBikeSpecific: false,
    },
    {
      _id: "p7",
      brand: "ZANA",
      model: "Universal",
      category: "Bags",
      name: "Tail Bag 60L",
      shortDescription: "Large waterproof tail bag",
      longDescription:
        "A universal-fit 60L tail bag perfect for long rides and touring adventures.",
      specifications: "Capacity: 60L; Waterproof: Yes; Straps included.",
      shippingAndReturn: "Ships next day.",
      price: 3500,
      imageUrl: "/bike-placeholder.svg",
      images: placeholderImages,
      quantityAvailable: 32,
      isBikeSpecific: false,
    },

    /* --------------------- UTILITY ACCESSORIES --------------------- */
    {
      _id: "p8",
      brand: "ZANA",
      model: "Universal",
      category: "Utility Accessories",
      name: "Mobile Holder with Charger",
      shortDescription: "Secure clamp mobile mount with fast charging",
      longDescription:
        "Reliable mobile holder with USB fast-charging support and vibration damping.",
      specifications: "Charging: USB QC3.0; Clamp: Stainless steel frame.",
      shippingAndReturn: "Ships within 24 hours.",
      price: 1599,
      imageUrl: "/bike-placeholder.svg",
      images: placeholderImages,
      quantityAvailable: 50,
      isBikeSpecific: false,
    },

    /* -------------------- COMFORT & ERGONOMICS -------------------- */
    {
      _id: "p9",
      brand: "ZANA",
      model: "Generic",
      category: "Comfort & Ergonomics",
      name: "Handlebar Risers",
      shortDescription: "Improves riding posture and comfort",
      longDescription:
        "Machined aluminium handlebar risers for improved upright posture on long rides.",
      specifications: "Height Increase: 30mm; Material: CNC Aluminium.",
      shippingAndReturn: "Delivered in 3 days.",
      price: 2200,
      imageUrl: "/bike-placeholder.svg",
      images: placeholderImages,
      quantityAvailable: 30,
      isBikeSpecific: true,
    },
    {
      _id: "p10",
      brand: "ZANA",
      model: "Generic",
      category: "Comfort & Ergonomics",
      name: "Wide Foot Pegs",
      shortDescription: "Anti-slip touring foot pegs",
      longDescription:
        "Wide aluminium foot pegs for improved comfort and better grip.",
      specifications: "Material: Aluminium; Surface: Anti-slip teeth.",
      shippingAndReturn: "Ships in 48 hours.",
      price: 1800,
      imageUrl: "/bike-placeholder.svg",
      images: placeholderImages,
      quantityAvailable: 22,
      isBikeSpecific: true,
    },
    {
      _id: "p11",
      brand: "ZANA",
      model: "Generic",
      category: "Comfort & Ergonomics",
      name: "Seat Cushion Gel",
      shortDescription: "Soft gel seat pad for long-distance comfort",
      longDescription:
        "Reduces fatigue and increases long-ride comfort with pressure-distributing gel.",
      specifications: "Material: Memory Gel; Fit: Universal Strap.",
      shippingAndReturn: "Delivered in 2–4 days.",
      price: 1500,
      imageUrl: "/bike-placeholder.svg",
      images: placeholderImages,
      quantityAvailable: 50,
      isBikeSpecific: false,
    },

    /* ----------------------------- LIGHTING ----------------------------- */
    {
      _id: "p12",
      brand: "ZANA",
      model: "Universal",
      category: "Lighting",
      name: "Windshield Dark",
      shortDescription: "Dark-tint aerodynamic windshield",
      longDescription:
        "Aerodynamic tinted windshield to reduce wind blast and improve looks.",
      specifications:
        "Material: Polycarbonate; Tint: Dark Smoke; Height: 14 inches.",
      shippingAndReturn: "Fast delivery within 48 hours.",
      price: 2999,
      imageUrl: "/bike-placeholder.svg",
      images: placeholderImages,
      quantityAvailable: 30,
      isBikeSpecific: true,
    },
    {
      _id: "p13",
      brand: "ZANA",
      model: "Universal",
      category: "Lighting",
      name: "Auxiliary Fog Light",
      shortDescription: "Premium LED fog lamps for improved visibility",
      longDescription:
        "Powerful auxiliary fog lamps ideal for night rides, fog, and rain.",
      specifications: "Power: 40W; Waterproof: IP67; Beam: Spot + Flood.",
      shippingAndReturn: "Ships quickly within 24 hours.",
      price: 4200,
      imageUrl: "/bike-placeholder.svg",
      images: placeholderImages,
      quantityAvailable: 15,
      isBikeSpecific: false,
    },
  ];

  return shopByBikeProducts

  // TODO
  //   const response = await network.request(options)
  //   return response
}

export default serviceActionCreator(
  bikeProductTraceActions,
  bikeProductService
);
