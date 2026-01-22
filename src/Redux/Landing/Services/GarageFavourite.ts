import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import { garageFavoriteActions } from "../Actions";


const network = new Network();

async function garageFavoriteService(): Promise<any> {
  const options = {
    url: `/api/v1/product/garage-favorite`,
    method: API_METHOD_ENUM.GET,
  };

  const response = await network.request(options);
  const { data } = response;
  return  [      
    {
        "isNewArrival": false,
        "isGarageFavorite": false,
        "_id": "6955d4c4f25e97c2c9e14403",
        "brand": "692bd80b0d0d07941f3dc105",
        "model": "6955c9faf25e97c2c9e14344",
        "isBikeSpecific": true,
        "name": "Front Fork Slider For KTM Enduro 390",
        "shortDescription": "Front Fork Slider",
        "longDescription": "*]:pointer-events-auto scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]\" dir=\"auto\" tabindex=\"-1\" data-turn-id=\"request-WEB:eef50d85-5b43-41ee-8072-ff927b040857-5\" data-testid=\"conversation-turn-12\" data-scroll-anchor=\"true\" data-turn=\"assistant\"> Front Fork Slider for KTM Enduro 390 Provides superior crash protection for the fork tube and brake disc. Built with high-density material and comes with all hardware for quick, easy installation.",
        "category": "Safety & Protection",
        "categoryIcon": "https://www.pngrepo.com/svg/395741/safety-protection-security-shield",
        "price": 1049,
        "imageUrl": "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765448225.png",
        "images": [
            "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765448225.png"
        ],
        "quantityAvailable": 10,
        "specifications": "The Front Fork Slider for KTM Enduro 390 is an essential protection accessory designed to safeguard your motorcycle’s front forks, brake disc, and lower suspension components during falls or crashes. Built from high-density impact-resistant material, this slider ensures long-lasting durability and dependable performance for both aggressive off-road riding and daily road use. Key Features âœ” Optimized Shape for Controlled Sliding Specially engineered shape allows the bike to slide smoothly in the event of a fall, reducing the impact on critical components and minimizing damage. âœ” Brake Disc Protection Although not guaranteed, the fork slider has been proven in many cases to prevent direct impact to the brake disc, helping protect essential braking components. âœ” Fork Tube Protection Acts as a strong protective barrier for the fork tube, reducing the chances of dents, scratches, or bending during accidents—saving you from expensive repairs. âœ” High-Density Material Construction Manufactured using high-density, impact-resistant material that performs significantly better than standard rubber or nylon alternatives. Ideal for rugged terrains and high-speed rides. âœ” Easy & Quick Installation Comes with all required hardware and is designed for a simple DIY installation with minimal tools or effort. âœ” Critical Length for Maximum Coverage Carefully calibrated length ensures maximum protection for the fork tube and surrounding components for enhanced overall safety. âœ” Rider-Tested for Real-World Performance Tested by off-road and touring riders in challenging conditions to ensure proven reliability, durability, and performance when you need it the most.",
        "shippingAndReturn": "\"Free shipping within India. 7-day return policy. Easy installation with included tools\"",
        "createdAt": "2026-01-01T01:58:28.358Z",
        "__v": 0
    },
    {
        "isNewArrival": false,
        "isGarageFavorite": false,
        "_id": "6955d4bcf25e97c2c9e14401",
        "brand": "692bd80b0d0d07941f3dc105",
        "model": "6955c9faf25e97c2c9e14344",
        "isBikeSpecific": true,
        "name": "Front Fluid Reservoir Cover  for KTM Enduro 390",
        "shortDescription": "Front Fluid Reservoir Cover",
        "longDescription": "Enhance the durability and style of your KTM Enduro 390 with this premium Front Fluid Reservoir Cover. Expertly crafted from high-quality, rust-free aluminum, this accessory is designed to shield your motorcycle’s fluid reservoir from debris, road hazards, and minor impacts",
        "category": "Safety & Protection",
        "categoryIcon": "https://www.pngrepo.com/svg/395741/safety-protection-security-shield",
        "price": 499,
        "imageUrl": "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765447414.png",
        "images": [
            "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765447414.png"
        ],
        "quantityAvailable": 10,
        "specifications": "Front Fluid Reservoir Cover (Aluminum) for KTM Enduro 390 Enhance the durability and rugged style of your KTM Enduro 390 with this premium Front Fluid Reservoir Cover. Expertly crafted from high-quality, rust-free aluminum, this accessory is engineered to protect your motorcycle’s fluid reservoir from debris, trail hazards, and minor impacts. With its strong construction and sleek brushed finish, it not only offers reliable protection but also elevates the aggressive look of your Enduro 390. Key Features (KTM Enduro 390 Version): Superior Protection : Safeguards the fluid reservoir from debris, stones, dirt, and minor impacts. Rust-Free Guarantee: Made from high-quality, corrosion-resistant aluminum. Enduro-Ready Design: Brushed aluminum finish that adds a tough, premium aesthetic. Easy Installation: Simple, quick fit with no modifications needed. Durable Performance: Engineered to withstand harsh off-road terrain and daily usage.",
        "shippingAndReturn": "\"Free shipping within India. 7-day return policy. Easy installation with included tools\"",
        "createdAt": "2026-01-01T01:58:20.965Z",
        "__v": 0
    },
    {
        "isNewArrival": false,
        "isGarageFavorite": false,
        "_id": "6955d4b5f25e97c2c9e143ff",
        "brand": "692bd80b0d0d07941f3dc105",
        "model": "6955c9faf25e97c2c9e14344",
        "isBikeSpecific": true,
        "name": "Side Stand Extender VMC For  KTM Enduro 390",
        "shortDescription": "Side Stand Extender VMC",
        "longDescription": "Side Stand Extender VMC for KTM Enduro 390 Enhances stability and prevents sinking on soft ground. Features a non-slip surface and comes with a lifetime warranty covering powder coating, rusting, and welding defects.",
        "category": "Utility Accessories",
        "categoryIcon": "https://www.pngrepo.com/svg/395741/safety-protection-security-shield",
        "price": 1549,
        "imageUrl": "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765445260.png",
        "images": [
            "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765445260.png"
        ],
        "quantityAvailable": 10,
        "specifications": "Enhance your bike’s stability on any terrain with this premium Side Stand Extender for the KTM Enduro 390. Made from VMC CNC-machined aluminum with rust-proof stainless steel hardware, it increases the side stand’s footprint to prevent sinking on mud, sand, gravel, or wet surfaces. The non-slip surface ensures maximum grip, while the durable powder-coated finish provides long-lasting protection. Lightweight, strong, and adventure-ready, it installs easily with no tools or modifications needed—offering a perfect fit and reliable performance for Enduro riders. Key Features: âœ” Increased Stability – Enlarges the side stand footprint for improved balance on all terrains âœ” VMC CNC-Machined Aluminum – Lightweight, durable, and precision-engineered âœ” Non-Slip Surface – Provides superior grip and prevents the stand from sliding âœ” Rust-Proof Stainless Steel Hardware – Long-lasting, corrosion-resistant construction âœ” Powder-Coated Finish – Tough, weather-resistant, and aesthetically fitting âœ” Prevents Sinking – Perfect for mud, sand, gravel, slush, and wet ground âœ” Quick DIY Installation – No tools or modifications required âœ” Perfect Fit for KTM Enduro 390 – Designed for flawless compatibility âœ” Patented Zana Design – Ensures premium engineering and trusted performance âœ” Lifetime Warranty – Covers powder coating, rusting, and welding defects",
        "shippingAndReturn": "\"Free shipping within India. 7-day return policy. Easy installation with included tools\"",
        "createdAt": "2026-01-01T01:58:13.838Z",
        "__v": 0
    },
    {
        "isNewArrival": false,
        "isGarageFavorite": false,
        "_id": "6955d4aef25e97c2c9e143fd",
        "brand": "692bd80b0d0d07941f3dc105",
        "model": "6955c9faf25e97c2c9e14344",
        "isBikeSpecific": true,
        "name": "Top Rack With MS Plate  For KTM Enduro 390 (Black )",
        "shortDescription": "Top Rack With MS Plate",
        "longDescription": "Durable Top Rack with MS Plate for KTM Enduro 390 Secure luggage mounting with top-box compatibility. Works perfectly with Zana aluminum and plastic top boxes and features countersunk points for easy installation.",
        "category": "Utility Accessories",
        "categoryIcon": "https://www.pngrepo.com/svg/395741/safety-protection-security-shield",
        "price": 3349,
        "imageUrl": "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765442480.png",
        "images": [
            "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765442480.png"
        ],
        "quantityAvailable": 10,
        "specifications": "Top Rack with MS Plate for KTM Enduro 390 – Heavy-Duty Touring & Adventure Upgrade The Top Rack with MS Plate for KTM Enduro 390 is engineered to deliver maximum strength, stability, and reliability for long-distance touring and rugged off-road adventures. Built from heavy-duty mild steel (MS), this rack offers superior durability with a textured matte black powder-coated finish that resists corrosion and adds a premium look to your motorcycle. Key Features: âœ” Heavy-Duty MS Plate – Delivers superior load-bearing capacity and rugged strength. âœ” High Load Capacity: Engineered to support weights between 5 kg to 7 kg, ensuring stability and safety for all your gear. . âœ” 4-Point Mounting System – Ensures maximum stability with reduced vibrations. âœ” Matte Black Powder Coating – Rust-resistant, durable, and stylish. âœ” Easy DIY Installation – Comes with complete hardware for quick setup. âœ” Grab Rail Compatible – Fits perfectly without modification. âœ” Precision-Fit Design for KTM Enduro 390 – Engineered for seamless integration and perfect alignment. âœ” Universal Compatibility – Seamlessly fits all Zana top boxes and most plastic top boxes for maximum versatility. âœ” Durable Warranty & Finish – Comes with a 6-month paint/powder-coating warranty (does not cover accidental damage or unauthorized modifications). âœ” Complete Installation Kit – Includes all required hardware for a quick, hassle-free setup. âœ” Clear Warranty Conditions – Warranty becomes void if the rack is modified, welded, or used with non-Zana aluminum top boxes—ensuring long-lasting, proper performance.",
        "shippingAndReturn": "\"Free shipping within India. 7-day return policy. Easy installation with included tools\"",
        "createdAt": "2026-01-01T01:58:06.752Z",
        "__v": 0
    },
    {
        "isNewArrival": false,
        "isGarageFavorite": false,
        "_id": "6955d4a8f25e97c2c9e143fb",
        "brand": "692bd80b0d0d07941f3dc105",
        "model": "6955c9faf25e97c2c9e14344",
        "isBikeSpecific": true,
        "name": "Roadster Saddle Stay With Jerry Can Mount For KTM Enduro 390 (Black)",
        "shortDescription": "Roadster Saddle Stay",
        "longDescription": "Premium Saddle Stay with Jerry Can Mount for KTM Enduro 390 Built for added fuel storage, rugged durability, and rock-solid luggage support. Perfect fit for ZANA Roadster & Maximus Series bags—stable, secure, and wobble-free even on tough trails.",
        "category": "Utility Accessories",
        "categoryIcon": "https://www.pngrepo.com/svg/395741/safety-protection-security-shield",
        "price": 3799,
        "imageUrl": "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765434201.png",
        "images": [
            "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765434201.png"
        ],
        "quantityAvailable": 10,
        "specifications": "Roadster Saddle Stay for KTM Enduro 390 (Mild Steel with Integrated Jerry Can Mount) The Roadster Saddle Stay for KTM Enduro 390 is engineered to elevate your motorcycle’s touring and off-road capabilities. Built from high-quality mild steel, it delivers exceptional durability and strength—ideal for carrying luggage and essential gear on long-distance rides, mountain trails, and rugged terrains. Roadster Saddle Stay – Perfect Fit for Roadster & Maximus Bags! ✅ Designed for ZANA Bags – Perfectly fits ZANA Roadster and Maximus Series Bags, ensuring a secure, stable, and wobble-free setup even on rough off-road terrain. ✅ Minimal Width – Designed with a slim profile so even fully loaded bags maintain the smallest possible width, improving aerodynamics, lane filtering, and overall handling. ✅ Optimized Structure – Precision-engineered to align seamlessly with the KTM Enduro 390’s frame without interfering with the OEM grab rail or rear rack (the widest stock accessory). ✅ Universal Compatibility – Works with all strap-type saddle bags featuring an overlapping strap mechanism—compatible with ZANA as well as third-party brands. ✅ Future-Ready – Built with mounting points and spacing to support upcoming ZANA Universal Strap-Type Bag Stays for enhanced versatility. ✅ Reinforced Adventure Build – Specially designed for off-road endurance, minimizing lateral flex while providing strong support for heavy touring luggage. ✅ Jerry Can Mount Compatible – Select variants integrate a durable Jerry Can mounting solution for riders needing extra fuel on remote trails.",
        "shippingAndReturn": "\"Free shipping within India. 7-day return policy. Easy installation with included tools\"",
        "createdAt": "2026-01-01T01:58:00.367Z",
        "__v": 0
    },
    {
        "isNewArrival": false,
        "isGarageFavorite": false,
        "_id": "6955d4a1f25e97c2c9e143f9",
        "brand": "692bd80b0d0d07941f3dc105",
        "model": "6955c9faf25e97c2c9e14344",
        "isBikeSpecific": true,
        "name": "Bash Plate SS 304 Black for KTM Enduro 390",
        "shortDescription": "Bash Plate SS 304",
        "longDescription": "Protect your KTM Enduro 390 with Zana’s All-Black Bash Plate. Made from rust-free, durable SS304, it shields the chassis and underbody without reducing ground clearance. Super-strong mounts ensure stability, making it perfect for both off-road and touring rides.",
        "category": "Safety & Protection",
        "categoryIcon": "https://www.pngrepo.com/svg/395741/safety-protection-security-shield",
        "price": 3399,
        "imageUrl": "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765367329.png",
        "images": [
            "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765367329.png"
        ],
        "quantityAvailable": 10,
        "specifications": "Protect your KTM Enduro 390 with the Zana Bash Plate SS 304 Black —engineered to deliver maximum underbody protection for extreme off-road riding as well as daily use. Designed for adventure riders who demand durability, performance, and style, this bash plate safeguards your bike from rocks, debris, and harsh terrain impacts. Key Features of the Zana Bash Plate for KTM Enduro 390 : 100% Rust-Free Construction Manufactured from premium SS 304 stainless steel, ensuring unmatched strength and corrosion resistance in all riding conditions. Full Chassis & Underbody Protection Designed to shield vital components—including engine cases and frame—from potential damage during off-road trails or rough urban roads. No Ground Clearance Loss Precision-engineered to retain the KTM Enduro 390’s original ride height, ensuring agile handling and uncompromised performance. Heavy-Duty Mounts Equipped with ultra-strong mounting points that keep the bash plate firmly secured, even under the toughest riding situations. Premium All-Black Finish A sleek matte-black coating enhances the aggressive styling of the Enduro 390 while offering long-lasting aesthetic appeal. Manufacturer Warranty Comes with a 6-month limited warranty covering powder coating, rusting, and welding issues—ensuring reliability and peace of mind. With its lightweight yet tough construction, the Zana Bash Plate is the essential accessory for riders who demand both style and performance, whether navigating city streets or exploring off-road trails. Equip your KTM Enduro 390 with the Zana Bash Plate and ride with confidence!",
        "shippingAndReturn": "\"Free shipping within India. 7-day return policy. Easy installation with included tools\"",
        "createdAt": "2026-01-01T01:57:53.400Z",
        "__v": 0
    },
    {
        "isNewArrival": false,
        "isGarageFavorite": false,
        "_id": "6955d49bf25e97c2c9e143f7",
        "brand": "692bd80b0d0d07941f3dc105",
        "model": "6955c9faf25e97c2c9e14344",
        "isBikeSpecific": true,
        "name": "Upper & Lower Crash Guard Set With Slider For KTM Enduro 390 (Black)",
        "shortDescription": "Upper & Lower Crash Guard",
        "longDescription": "KTM Enduro 390 Black Upper & Lower Crash Guard Set with Round slider by Zana – a rugged touring-and-trail-ready crash guard setup designed to protect your engine, fairing, and vital components on highways and off-road terrain.Compatible with Puck Sliders also (sold separately).",
        "category": "Safety & Protection",
        "categoryIcon": "https://www.pngrepo.com/svg/395741/safety-protection-security-shield",
        "price": 5499,
        "imageUrl": "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765364442.png",
        "images": [
            "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765364442.png"
        ],
        "quantityAvailable": 10,
        "specifications": "KTM Enduro 390 Crash Bars – Touring & Off-Road Crash Guard Setup by Zana (Now Available in Black) Looking for the perfect crash guard setup for your KTM Enduro 390 for both long-distance touring and tough off-road trails? Zana brings you the ultimate Enduro-Ready Crash Bars, engineered to protect your engine, fairing, and critical components during highway rides, trail exploration, and low-speed falls—now available in a rugged Black finish. Key Features Full Protection Combo: Includes both upper fairing guard and lower engine guard for complete coverage of the KTM Enduro 390. Enduro-Specific Design: Built to withstand trail drops, off-road obstacles, and low-speed crashes during technical rides. Heavy-Duty Steel Construction: Reinforced, impact-resistant structure optimized for touring and rugged terrain. Universal Round Sliders Included: Pre-installed Zana sliders absorb impact and also function as comfortable leg rests on long rides. Compatible with Slider Pucks: Pre-marked mounting point allows easy upgrade to Zana’s Slider Puck (sold separately).ðŸ‘‰ Order now for â‚¹1600 : KTM ADV 390 2025 Slider Puck – Zana Motorcycles Modular Upper Guard: Removable upper section for weight reduction when riding technical off-road trails. High Clearance Engineering: Designed to maintain excellent ground and side clearance for aggressive off-road maneuverability. Durable Black Powder-Coated Finish: Scratch-resistant, rust-resistant, and designed to match the Enduro 390’s rugged styling. Sump Guard Ready: Fully compatible with Zana’s aluminum sump guard for enhanced under-engine protection. Easy Installation: Direct fit with all mounting hardware included; requires minimal tools. 6-Month Coating Warranty: Warranty on paint/powder coating (excluding accident damage). What’s Included: Full KTM crash bar assembly – Upper & Lower Guard Combo (Black finish) Universal round sliders (pre-installed) All hardware – nuts, bolts, spacers Easy-to-follow installation guide",
        "shippingAndReturn": "\"Free shipping within India. 7-day return policy. Easy installation with included tools\"",
        "createdAt": "2026-01-01T01:57:47.016Z",
        "__v": 0
    },
    {
        "isNewArrival": false,
        "isGarageFavorite": false,
        "_id": "6955d494f25e97c2c9e143f5",
        "brand": "692bd80b0d0d07941f3dc105",
        "model": "6955c9faf25e97c2c9e14344",
        "isBikeSpecific": true,
        "name": "Upper & Lower Crash Guard Set With Slider For KTM Enduro 390 (Orange)",
        "shortDescription": "Upper & Lower Crash Guard",
        "longDescription": "KTM Enduro 390 Upper & Lower Crash Guard Set with Round slider by Zana – a rugged touring-and-trail-ready crash guard setup designed to protect your engine, fairing, and vital components on highways and off-road terrain. Compatible with Puck Sliders(sold separately).",
        "category": "Safety & Protection",
        "categoryIcon": "https://www.pngrepo.com/svg/395741/safety-protection-security-shield",
        "price": 5499,
        "imageUrl": "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765358656.png",
        "images": [
            "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765358656.png"
        ],
        "quantityAvailable": 10,
        "specifications": "KTM Enduro 390 Crash Bars – Touring & Trail-Ready Crash Guard Setup by Zana (Now Available in Orange) Searching for the ideal crash guard setup for your KTM Enduro 390—one that protects your bike both on long-distance rides and rugged off-road trails? Zana brings you the ultimate Enduro-spec Crash Bars, engineered to shield your engine, fairing, and vital components from impacts, trail drops, and rough-terrain mishaps. Now also available in a bold KTM-style Orange finish. Key Features Full Protection Combo: Includes both upper fairing guard and lower engine guard for complete coverage of your KTM Enduro 390. Enduro-Grade Strength: Designed to handle trail drops, rocky terrain, and low-speed crashes with maximum impact absorption. Pre-Installed Universal Sliders: Zana round sliders provide extra slide protection and double as comfortable leg rests during long rides. Slider Puck Compatible: Pre-marked mounting point allows easy upgrade to Zana Slider Pucks (sold separately). ðŸ‘‰ Order now for â‚¹1600 : KTM ADV 390 2025 Slider Puck – Zana Motorcycles Modular & Lightweight: Detachable upper section for weight reduction during technical off-road riding. High Ground Clearance : Engineered to maintain full clearance for aggressive off-road maneuvering. Durable Orange Finish: KTM-inspired powder-coated orange for long-lasting resistance to rust, debris, and UV exposure. Sump Guard Friendly: Designed to pair seamlessly with Zana’s aluminum sump guard for additional underbody protection. Easy DIY Installation: Comes with all hardware and fits securely with minimal tools. 6-Month Coating Warranty: Warranty on paint/powder coating (excluding accident damage). What’s Included: Full KTM crash bar assembly – Upper & Lower Guard Combo (Orange finish) Universal round sliders (pre-installed) All hardware – nuts, bolts, spacers Easy-to-follow installation guide",
        "shippingAndReturn": "\"Free shipping within India. 7-day return policy. Easy installation with included tools\"",
        "createdAt": "2026-01-01T01:57:40.249Z",
        "__v": 0
    },
    {
        "isNewArrival": false,
        "isGarageFavorite": false,
        "_id": "6955d48df25e97c2c9e143f3",
        "brand": "692bd80b0d0d07941f3dc105",
        "model": "692c001d74bdc6e0a6bdf909",
        "isBikeSpecific": true,
        "name": "Upper & Lower Crash Guard (Orange) For KTM ADV 390 2025",
        "shortDescription": "Upper & Lower Crash Guard (Orange)",
        "longDescription": "Give your KTM unbeatable protection with Zana’s Touring Crash Guard Setup – a complete upper + lower crash bar combo, now in bold KTM Orange. Built for touring, it delivers maximum safety, stability, and style on every ride.",
        "category": "Safety & Protection",
        "categoryIcon": "https://www.pngrepo.com/svg/395741/safety-protection-security-shield",
        "price": 5499,
        "imageUrl": "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765355431.png",
        "images": [
            "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765355431.png"
        ],
        "quantityAvailable": 10,
        "specifications": "KTM Touring Crash Bars – Upper & Lower Guard Combo Give your KTM the ultimate protection for highway touring and long-distance rides with Zana’s premium Touring Crash Guard Setup – now available in a striking KTM Orange finish. Designed as a complete upper + lower crash bar combo, this setup offers maximum safety, stability, and style for every ride. Product Highlights Full Protection Setup (Upper + Lower Guard Combo) Comes as a complete kit with an upper fairing guard and lower engine guard for total motorcycle protection. Touring-Grade Crash Bars Built for long rides and inspired by our trusted BMW 310 design, offering excellent protection during low-speed impacts and tip-overs. Includes Universal Round Sliders Equipped with Zana’s signature round sliders that absorb impact and also function as leg rests. Easily replaceable via our website or support team. Slider Puck Compatible (Optional Upgrade) Pre-marked points allow upgrading to Zana’s Slider Puck for enhanced surface protection. Modular & Easy to Install Detachable upper crash guard for reduced weight when needed. User-friendly, strong, and secure mounting design. Expandable Protection Compatible with Zana’s aluminum sump guard for added lower-engine safety and improved impact absorption. Premium KTM Orange Finish Bold, durable paint designed to complement your bike’s aggressive styling. 6-Month Warranty Covers paint/powder coating issues (accident damage not included). In the Box Upper + Lower Crash Bar Assembly (Orange) Universal Round Sliders (Pre-installed) Complete Hardware Kit (Nuts, Bolts, Spacers) Easy Installation Guide",
        "shippingAndReturn": "\"Free shipping within India. 7-day return policy. Easy installation with included tools\"",
        "createdAt": "2026-01-01T01:57:33.003Z",
        "__v": 0
    },
    {
        "isNewArrival": false,
        "isGarageFavorite": false,
        "_id": "6955d486f25e97c2c9e143f1",
        "brand": "6955cab5f25e97c2c9e14346",
        "model": "6955cb4ef25e97c2c9e14348",
        "isBikeSpecific": true,
        "name": "Radiator Guard For Jawa Bobber 42 (Honeycomb Black,Aluminium )",
        "shortDescription": "Radiator Guard",
        "longDescription": "Radiator Guard For Jawa Bobber 42 Aluminium black offers superior protection with a Honeycomb design, high-quality aluminum, rust resistance, easy installation, and enhanced heat dissipation.",
        "category": "Safety & Protection",
        "categoryIcon": "https://www.pngrepo.com/svg/395741/safety-protection-security-shield",
        "price": 1999,
        "imageUrl": "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765190783.png",
        "images": [
            "https://www.zanamotorcycles.com/uploads/products/proMImg_12_1765190783.png"
        ],
        "quantityAvailable": 10,
        "specifications": "Radiator Guard for Jawa Bobber 42– Honeycomb Aluminum (Matte Black) by ZANA MOTORCYCLES Upgrade the protection and style of your Jawa Bobber 42 with the premium Zana Honeycomb Aluminum Radiator Guard . Built from high-quality, lightweight aluminum, this radiator guard is engineered to shield your bike’s radiator from stones, debris, and harsh road conditions—ensuring long-lasting performance without compromising cooling efficiency. The precision-cut honeycomb pattern enhances structural strength while maintaining maximum airflow, allowing your radiator to function at peak efficiency even during long rides or tough terrains. Finished in a sleek matte black coat, this guard adds a bold, premium look while providing exceptional corrosion resistance for all-weather durability. Designed with a perfect factory-fit profile, the Zana Radiator Guard requires no modifications during installation. It comes with all necessary mounting hardware for a quick, secure, and hassle-free setup. Whether you're cruising the streets or exploring off-road trails, this lightweight yet tough aluminum guard ensures uncompromised radiator safety. Key Features: ✅ Premium Honeycomb Aluminum Build Strong yet lightweight aluminum construction ensures superior durability while keeping your motorcycle agile. ✅ Maximum Airflow & Cooling Efficiency Precision-cut honeycomb pattern maintains optimal airflow to the radiator while blocking debris and road hazards. ✅ Matte Black Premium Finish Adds a stylish, aggressive look to your Jawa Bobber 42 while enhancing rust and corrosion resistance. ✅ Easy Installation Includes all required nuts, bolts, and clamps for a quick, secure installation—no modifications needed. ✅ Superior Debris & Impact Protection Shields the radiator from stones, gravel, sand, and road debris, ensuring long-term radiator performance. ✅ Rust-Free & Weather-Resistant High-grade aluminum construction prevents rust and withstands rain, dirt, and rugged riding conditions. ✅ Perfect Fit for Jawa Bobber 42 Designed specifically for the Jawa Bobber 42 for a seamless, vibration-free fit. This Radiator Guard for Jawa Bobber 42 is the ideal upgrade for riders seeking premium protection, rugged durability, and standout style—all backed by Zana’s trusted engineering.",
        "shippingAndReturn": "\"Free shipping within India. 7-day return policy. Easy installation with included tools\"",
        "createdAt": "2026-01-01T01:57:26.482Z",
        "__v": 0
    }
]
    
}

const garageFavoriteServiceAction = serviceActionCreator(garageFavoriteActions, garageFavoriteService);

export default garageFavoriteServiceAction