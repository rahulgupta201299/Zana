import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Grid, Skeleton } from "@mui/material";
import ShowcaseItem from "./ShowcaseItem";
import { getBikeSpecificList, getUniversalList } from "@/Redux/Landing/Selectors";
import { bikeSpecificName, universalName } from "@/Redux/Landing/Actions";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import bikeSpecificServiceAction from "@/Redux/Landing/Services/BikeSpecific";
import universalServiceAction from "@/Redux/Landing/Services/Universal";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { autoRetry } from "@/Utils/AutoRetryMechanism";

type Props = {
  sectionTitle: string;
  sectionSubtitle: string;
  type: "bike" | "product";
  sectionSupertitle?: string;
};

function ShowcaseSkeleton() {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Desktop Skeleton */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Grid container spacing={1.5} alignItems="stretch">
          <Grid size={{ md: 6, lg: 6 }} sx={{ display: "flex" }}>
            <Skeleton
              variant="rounded"
              sx={{
                width: "100%",
                height: 440,
                bgcolor: "rgba(255,255,255,0.03)",
                borderRadius: 3,
              }}
              animation="wave"
            />
          </Grid>
          <Grid size={{ md: 6, lg: 6 }}>
            <Grid container spacing={1.5} sx={{ height: "100%" }}>
              {[1, 2, 3, 4].map((i) => (
                <Grid key={i} size={{ xs: 6 }} sx={{ display: "flex" }}>
                  <Skeleton
                    variant="rounded"
                    sx={{
                      width: "100%",
                      height: 210,
                      bgcolor: "rgba(255,255,255,0.03)",
                      borderRadius: 2,
                    }}
                    animation="wave"
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Mobile Skeleton */}
      <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: 1.5 }}>
        <Skeleton
          variant="rounded"
          sx={{
            width: "100%",
            height: 340,
            bgcolor: "rgba(255,255,255,0.03)",
            borderRadius: 3,
          }}
          animation="wave"
        />
        <Grid container spacing={1.5}>
          {[1, 2, 3, 4].map((i) => (
            <Grid key={i} size={{ xs: 6 }} sx={{ display: "flex" }}>
              <Skeleton
                variant="rounded"
                sx={{
                  width: "100%",
                  height: 160,
                  bgcolor: "rgba(255,255,255,0.03)",
                  borderRadius: 2,
                }}
                animation="wave"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default function ShowcaseSection({
  sectionTitle,
  sectionSubtitle,
  type,
  sectionSupertitle,
}: Props) {

  const bikeSpecificData = useSelector(getBikeSpecificList);
  const universalData = useSelector(getUniversalList);
  const isBikeSpecificLoading = useSelector((state: TAppStore) =>
    isServiceLoading(state, [bikeSpecificName]),
  );
  const isUniversalLoading = useSelector((state: TAppStore) =>
    isServiceLoading(state, [universalName]),
  );
  const dispatch = useDispatch<TAppDispatch>();

  const retry = autoRetry()

  async function pageOps() {
    try {
      if (!bikeSpecificData.length && type === "bike") retry(() => dispatch(bikeSpecificServiceAction()));
      if (!universalData.length && type === "product") retry(() => dispatch(universalServiceAction()));
    } catch (error: any) {}
  }

  useEffect(() => {
    pageOps();
  }, [])

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#141416",
        py: { xs: 5, md: 8 },
        px: { xs: 2, sm: 3, md: 5, lg: 8 },
      }}
    >
      {/* Section header */}
      <Box sx={{ mb: { xs: 3, md: 5 } }}>
        {sectionSupertitle && (
          <Typography
            sx={{
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.45)",
              mb: 1.5,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            {sectionSupertitle}
          </Typography>
        )}
        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: "rgba(255,255,255,0.92)",
            fontFamily: "'Georgia', serif",
            fontWeight: 400,
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
            mb: 1.5,
            lineHeight: 1.2,
          }}
        >
          {sectionTitle}
        </Typography>
        <Typography
          sx={{
            color: "rgba(255,255,255,0.5)",
            fontSize: { xs: "0.85rem", md: "0.95rem" },
            maxWidth: "100%",
            lineHeight: 1.7,
          }}
        >
          {sectionSubtitle}
        </Typography>
      </Box>

      {/* Bike/Product Kit Items */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 5, md: 8 } }}>
        {type === "bike" && (
          isBikeSpecificLoading ? <ShowcaseSkeleton /> : (
            bikeSpecificData.map((data, ind) => {
              const { model, brandName, modelName, imageUrl, catalogue } = data;
              const imagePosition = ind % 2 === 0 ? "left" : "right";

              return (
                <ShowcaseItem
                  key={model}
                  tag={brandName}
                  title={modelName}
                  heroImageUrl={imageUrl}
                  catalogue={catalogue}
                  imagePosition={imagePosition}
                  type="bike"
                  brandName={brandName}
                  modelName={modelName}
                  model={model}
                />
              )
            })
          )
        )}

        {type === "product" && (
          isUniversalLoading ? <ShowcaseSkeleton /> : (
            universalData.map((data, ind) => {
              const { productName, imageUrl, catalogue } = data;
              const imagePosition = ind % 2 === 0 ? "left" : "right";

              return (
                <ShowcaseItem
                  key={productName}
                  tag={"UNIVERSAL PRODUCT"}
                  title={productName}
                  heroImageUrl={imageUrl}
                  catalogue={catalogue}
                  imagePosition={imagePosition}
                  type="product"
                />
              )
            })
          )
        )}
      </Box>
    </Box>
  );
}
