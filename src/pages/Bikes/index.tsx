import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BikePlaceholderImage from "@/Assets/Images/BikePlaceholder.svg";
import { ALL_CATEGORY, BikeCategoryEnum } from "@/Constants/AppConstant";
import {
  shopByBikeSelector,
  zProBikeSelector,
} from "@/Redux/Product/Selectors";
import { ShopByBikeModelsType } from "@/Redux/Product/Types";
import { ROUTES } from "@/Constants/Routes";
import CategorySkeleton from "@/components/Skeleton/CategorySkeleton";
import ProductSkeleton from "@/components/Skeleton/ProductSkeleton";
import { TAppStore } from "@/Configurations/AppStore";
import {
  shopByBikeServiceName,
  zProBikeServiceName,
} from "@/Redux/Product/Actions";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { encodedGeneratedPath } from "@/Utils/global";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";

function Bikes() {
  const params = useParams();
  const { bikeType: bikeTypeParams = "" } = params;

  const isZProPath = bikeTypeParams.toLowerCase() === BikeCategoryEnum.ZPRO;
  const bikeType = isZProPath ? BikeCategoryEnum.ZPRO : BikeCategoryEnum.ZANA;

  const bikeSelector = useSelector(
    isZProPath ? zProBikeSelector : shopByBikeSelector,
  );
  const isBikeProductLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [shopByBikeServiceName, zProBikeServiceName]),
  );

  const location = useLocation();
  const { brand: initialBikeBrand = "" } = location.state || {};

  const [selectedBrand, setSelectedBrand] = useState<string>(
    initialBikeBrand || ALL_CATEGORY,
  );
  const [filteredBrandDetails, setFilteredBrandDetails] = useState<
    ShopByBikeModelsType[]
  >([]);

  const navigate = useNavigate();

  const allBrandDetails = useMemo(() => {
    return bikeSelector.reduce((acc, curr) => {
      return [...acc, ...curr.models];
    }, []);
  }, [bikeSelector.length]);

  const categoriesWithCount: { name: string; count: number }[] = useMemo(() => {
    if (!bikeSelector.length) return [];

    const result = [{ name: ALL_CATEGORY, count: allBrandDetails.length }];

    bikeSelector.forEach((item) => {
      result.push({ name: item.name.toLowerCase(), count: item.models.length });
    });

    return result;
  }, [bikeSelector.length]);

  function handleBikeClick(
    bikeBrand: string,
    bikeModel: string,
    bikeId: string,
  ) {
    const path = encodedGeneratedPath(ROUTES.BIKE_DETAIL, {
      bikeType,
      bikeBrand,
      bikeModel,
      bikeId,
    });

    navigate(path);
  }

  function handleBrandCategoryClick(brand: string) {
    setSelectedBrand(brand);

    if (brand === ALL_CATEGORY) {
      setFilteredBrandDetails(allBrandDetails);
      return;
    }

    const data = bikeSelector.find((item) => item.name.toLowerCase() === brand)?.models || [];
    setFilteredBrandDetails(data);

    navigate(location.pathname, { state: { brand }, replace: true });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    handleBrandCategoryClick(initialBikeBrand);
  }, [allBrandDetails.length, initialBikeBrand]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#2a2a2a" }}>
      <div className="py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
              BIKES
            </h1>
            <p className="text-white/70 text-sm md:text-base">
              Explore our range of {allBrandDetails.length} bike models from{" "}
              {bikeSelector.length} premium brands
            </p>
          </div>

          <div className="mb-8 flex gap-3 justify-start items-center overflow-x-auto whitespace-nowrap scrollbar-hide">
            {categoriesWithCount.map((brand) => {
              const { name, count } = brand;
              const brandName = name.toLowerCase();

              return (
                <button
                  key={name}
                  onClick={() => handleBrandCategoryClick(brandName)}
                  className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all ${selectedBrand === brandName
                    ? "bg-yellow-400 text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                >
                  {brandName.toUpperCase()} ({count})
                </button>
              );
            })}
            {categoriesWithCount.length === 0 && <CategorySkeleton />}
          </div>

          <Grid container spacing={3}>
            {filteredBrandDetails.map((brand) => {
              const { _id, name, description, type, brandName, imageUrl } =
                brand;
              return (
                <Grid size={{ xs: 12, md: 4, sm: 6 }} key={_id}>
                  <Card
                    onClick={() => handleBikeClick(brandName, name, _id)}
                    sx={{
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 3,
                      overflow: "hidden",
                      p: "8px",
                      cursor: "pointer",
                      background: "#2a2a2a",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "#facc15",
                        transform: "scale(1.05)",
                        boxShadow: "0 25px 50px rgba(250,204,21,0.2)",
                      },
                    }}
                  >
                    <CardActionArea disableRipple>
                      <Box
                        sx={{
                          width: "100%",
                          height: "auto",
                          overflow: "hidden",
                          backgroundColor: "#1a1a1a",
                          borderRadius: 2,
                        }}
                      >
                        <Box
                          component="img"
                          src={imageUrl}
                          alt={name}
                          onError={(e) =>
                          ((e.currentTarget as HTMLImageElement).src =
                            BikePlaceholderImage)
                          }
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            display: "block",
                          }}
                        />
                      </Box>

                      <CardContent
                        sx={{
                          backgroundColor: "#2a2a2a",
                          color: "#facc15",
                          p: { xs: 1, md: 1 },
                          "&:last-child": { pb: { xs: 2, md: 3 } },
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            display: "block",

                            opacity: 0.8,
                            fontWeight: 600,
                            letterSpacing: 1.5,
                            color: "#facc15",
                          }}
                        >
                          {brandName.toUpperCase()}
                        </Typography>

                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: { xs: "1.1rem", md: "1.4rem" },
                            textTransform: "capitalize",
                            color: "#facc15",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            minHeight: { xs: "2.6rem", md: "3.4rem" },
                          }}
                        >
                          {name}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            opacity: 0.75,
                            mb: 1,
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            color: "#facc15",
                          }}
                        >
                          {description}
                        </Typography>

                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Chip
                            label={type}
                            size="small"
                            sx={{
                              backgroundColor: "transparent",
                              border: "1px solid #facc15",
                              color: "#facc15",
                              fontWeight: 600,
                              textTransform: "capitalize",
                              fontSize: { xs: "0.7rem", md: "0.8rem" },
                            }}
                          />
                          <Box display="flex" alignItems="center" gap={0.5}>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 700,
                                color: "#facc15",
                                fontSize: { xs: "0.7rem", md: "0.8rem" },
                              }}
                            >
                              View Products →
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrandDetails.length === 0 && isBikeProductLoading && (
              <ProductSkeleton />
            )}
          </div>

          {filteredBrandDetails.length === 0 && !isBikeProductLoading && (
            <div className="text-center py-16">
              <p className="text-white/50 text-lg">
                No bikes found for {selectedBrand.toUpperCase()}
              </p>
              <button
                onClick={() => handleBrandCategoryClick(ALL_CATEGORY)}
                className="mt-4 px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition-colors"
              >
                View All Bikes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bikes;
