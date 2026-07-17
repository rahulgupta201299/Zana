import { useNavigate } from "react-router-dom";
import TriumphLogo from "@/Assets/Images/Triumph.webp";
import KTMLogo from "@/Assets/Images/KTM.webp";
import RoyalEnfieldLogo from "@/Assets/Images/RoyalEnfield.webp";
import HondaLogo from "@/Assets/Images/Honda.webp";
import TVSLogo from "@/Assets/Images/TVS.webp";

type BrandItem = {
  name: string;
  logo: string; // path/import to the brand's logo image
  route: string;
};

type BrandShowcasePropsType = {
  brands?: BrandItem[];
  seeAllRoute?: string;
};

// Replace these with your real logo imports, e.g.:
// import RoyalEnfieldLogo from "@/Assets/Brands/RoyalEnfield.webp";
const DEFAULT_BRANDS: BrandItem[] = [
  {
    name: "Royal Enfield",
    logo: RoyalEnfieldLogo,
    route: "/zana/bikes/royal-enfield",
  },
  {
    name: "KTM",
    logo: KTMLogo,
    route: "/zana/bikes/ktm",
  },
  {
    name: "Triumph",
    logo: TriumphLogo,
    route: "/zana/bikes/triumph",
  },
  {
    name: "Honda",
    logo: HondaLogo,
    route: "/zana/bikes/honda",
  },
  {
    name: "TVS",
    logo: TVSLogo,
    route: "/zana/bikes/tvs",
  },
];

function BrandShowcase({
  brands = DEFAULT_BRANDS,
  seeAllRoute = "/zana/bikes/all",
}: BrandShowcasePropsType) {
  const navigate = useNavigate();

  return (
    <section className="bg-[#0d0d0d] text-white px-6 md:px-16 py-20 md:py-28">
      {/* Kicker */}
      <span
        className="block text-white/40 text-[11px] md:text-xs font-serif tracking-[0.3em] uppercase mb-4 md:mb-6 font-semibold"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Start With The Badge On Your Tank
      </span>

      {/* Headline */}
      <h2
        className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-4 md:mb-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Built for the motorcycles{" "}
        <span className="italic">India actually rides</span>
      </h2>

      {/* Subtitle */}
      <p
        className="text-white/50 text-base md:text-xl max-w-3xl mb-12 md:mb-16"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Select your brand to see accessories engineered, test-fitted and torque-checked.
      </p>

      {/* Brand Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 border border-white/10 divide-x divide-y divide-white/10">
        {brands.map((brand) => (
          <button
            key={brand.name}
            onClick={() => navigate(brand.route)}
            aria-label={brand.name}
            className="group flex items-center justify-center h-[220px] md:h-[260px] cursor-pointer transition-colors duration-300 hover:bg-white/[0.02] focus:outline-none"
          >
            <div className="flex items-center justify-center w-[180px] h-20 md:w-[240px] md:h-28">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                loading="lazy"
               className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] object-contain transition-all duration-300"
              />
            </div>
          </button>
        ))}

        {/* See all brands */}
        <button
          onClick={() => navigate(seeAllRoute)}
          aria-label="See all brands"
          className="group flex items-center justify-center h-[220px] md:h-[260px] cursor-pointer transition-colors duration-300 hover:bg-white/[0.02] focus:outline-none"
        >
          <span
            className="italic text-xl md:text-3xl text-white/40 group-hover:text-white transition-colors duration-300 flex items-center gap-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            See all brands
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}

export default BrandShowcase;
