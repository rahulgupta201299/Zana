import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import {
  SearchRequestType,
  SearchResponseType,
} from "@/Redux/Product/Types";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { allProductTraceActions } from "../Actions";

const network = new Network();

async function searchService(queryParams: SearchRequestType): Promise<SearchResponseType> {
  const options = {
	url: `api/v1/product/search`,
	method: API_METHOD_ENUM.GET,
	queryParams,
  };

  const placeholderImages = [
	"/bike-placeholder.svg",
	"/uploads/Bikes Thumbnail/bsa-gold-star.png",
	"/uploads/Bikes Thumbnail/Royal-Enfield-Continental-GT-650.avif",
  ];

  return {
	data: [
	  /* ----------------------------- PROTECTION ----------------------------- */
	  {
		_id: "p1",
		brand: "ZANA",
		model: "Generic",
		category: "Protection",
		categoryIcon: "",
		name: "Bash Plate",
		shortDescription:
		  "Heavy-duty aluminium bash plate for engine protection",
		longDescription:
		  "A high-strength aluminium bash plate designed to protect the lower engine from debris, rocks, and impacts.",
		specifications:
		  "Material: Premium-grade aluminium; Finish: Powder-coated; Fit: Precise OEM fit.",
		shippingAndReturn:
		  "Ships in 2–3 days. Easy returns within 7 days if unused.",
		price: 5000,
		imageUrl: "/bike-placeholder.svg",
		images: [],
		quantityAvailable: 12,
		isBikeSpecific: true,
	  },
	  {
		_id: "p2",
		brand: "ZANA",
		model: "Generic",
		category: "Protection",
		categoryIcon: "",
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
		images: [],
		quantityAvailable: 20,
		isBikeSpecific: true,
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
	],
	pagination: {
	  totalPages: 2,
	  productsPerPage: 10,
	  currentPage: 2,
	},
  };

  // TODO
  //   const response = await network.request(options)
  //   const { data } = response
  //   return data
}

export default serviceActionCreator(
  allProductTraceActions,
  searchService
);
