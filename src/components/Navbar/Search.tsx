import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  Box,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
  Drawer,
  List,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import { debounce } from "@/Utils/Debounce";
import { TAppDispatch } from "@/Configurations/AppStore";
import SearchService from "@/Redux/Product/Services/SearchService";
import { SearchDataProductsType, SearchResponseType } from "@/Redux/Product/Types";
import { replaceSpacesWithHiphen, trimByLength } from "@/Utils/StringUtils";
import { SUB_ROUTES } from "@/Constants/Routes";

type SearchPropsType = {
  onClose: () => void;
};

export default function Search({ onClose }: SearchPropsType) {

  const navigate = useNavigate()

  const [query, setQuery] = useState("");

  const dispatch = useDispatch<TAppDispatch>()

  const [products, setProducts] = useState<SearchDataProductsType[]>([])

  const searchDebounce = useCallback(debounce(handleSearchService, 1000), []);

  async function handleSearchService(query: string) {
    // Perform API call
    try {
      const { data } = await dispatch(SearchService({ query, page: 1, limit: 5 })) as SearchResponseType
      setProducts(data)
    } catch (error: any) {
      console.error(error)
    }
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
    searchDebounce(val);
  }

  function handleNavigate(productCategory: string, productName: string, productId: string) {
    const category = replaceSpacesWithHiphen(productCategory)
    const name = replaceSpacesWithHiphen(productName)
    const routeName = `${SUB_ROUTES.PRODUCT}/${category}/${name}/${productId}`

    navigate(routeName)
    onClose()
  }

  return (
    <Drawer
      open={true}
      onClose={onClose}
      anchor="right"
      transitionDuration={350}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: "420px" },
          bgcolor: "#2f2f2f",
          animation: "slideIn 0.35s ease",
          overflow: "hidden",
        },
      }}
      ModalProps={{
        keepMounted: true,
        disableScrollLock: false
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: { xs: 3, sm: 4 },
          pb: 1,
        }}
      >
        <Typography sx={{ color: "white", fontSize: "1.8rem", fontWeight: 800 }}>
          Search
        </Typography>

        <IconButton onClick={onClose}>
          <CloseIcon sx={{ color: "white", fontSize: 30 }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 5,
          bgcolor: "#2f2f2f",
          px: { xs: 3, sm: 4 },
          py: 2,
        }}
      >
        <TextField
          fullWidth
          value={query}
          onChange={handleSearch}
          placeholder="Search products..."
          InputProps={{
            sx: {
              bgcolor: "#3a3a3a",
              borderRadius: "14px",
              height: "3.2rem",
              color: "white",
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#bdbdbd" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {query && (
                  <ClearIcon
                    sx={{ color: "#bdbdbd", cursor: "pointer" }}
                    onClick={() => setQuery("")}
                  />
                )}
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          px: { xs: 3, sm: 4 },
          pb: 12,
          pt: 1,
        }}
      >
        <Typography
          sx={{
            color: "#bdbdbd",
            fontSize: "0.7rem",
            letterSpacing: "2px",
            mt: 3,
            mb: 1,
          }}
        >
          SUGGESTIONS
        </Typography>

        <List sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
          {products.map((item, i) => (
            <Typography
              key={i}
              sx={{
                color: "white",
                fontSize: "1.05rem",
                cursor: "pointer",
                "&:hover": { color: "#cccccc" },
              }}
              onClick={() => handleNavigate(item.category, item.name, item._id)}
            >
              {item.name}
            </Typography>
          ))}

          {products.length === 0 && (
            <Typography sx={{ color: "#777", fontSize: "0.9rem" }}>
              No suggestions found.
            </Typography>
          )}
        </List>

        <Typography
          sx={{
            color: "#bdbdbd",
            fontSize: "0.7rem",
            letterSpacing: "2px",
            mt: 4,
            mb: 1,
          }}
        >
          PRODUCTS
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {products.map((item) => {
            const { _id, imageUrl, name, price, category, shortDescription } = item;

            return (
              <Box
                key={_id}
                sx={{ display: "flex", gap: 2, cursor: "pointer" }}
                onClick={() => handleNavigate(category, name, _id)}
              >
                <img
                  src={imageUrl}
                  className="w-20 h-20 rounded-xl bg-white object-cover"
                />

                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                  <Typography
                    sx={{ color: "white", fontSize: "1rem", lineHeight: 1.3 }}
                  >
                    {name}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#BBBBBB",
                      fontSize: "0.85rem",
                      lineHeight: 1.3,
                      maxWidth: "220px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {trimByLength(shortDescription, 35)}
                  </Typography>

                  <Typography sx={{ color: "#cccccc", mt: 0.3, fontSize: "0.9rem" }}>
                    ₹ {price.toLocaleString()}
                  </Typography>
                </Box>
              </Box>
            );
          })}

          {products.length === 0 && (
            <Typography sx={{ color: "#777", fontSize: "0.9rem" }}>
              No products found.
            </Typography>
          )}
        </Box>

      </Box>

      {/* FIXED BOTTOM BUTTON */}
      <Box
        sx={{
          p: { xs: 3, sm: 4 },
          position: "sticky",
          bottom: 0,
          bgcolor: "#2f2f2f",
          boxShadow: "0 -6px 30px rgba(0,0,0,0.3)",
        }}
      >
        <Button
          fullWidth
          sx={{
            bgcolor: "#e63946",
            color: "white",
            borderRadius: "50px",
            height: "3.2rem",
            fontSize: "1rem",
            textTransform: "none",
            "&:hover": { bgcolor: "#d62839" },
          }}
        >
          See all results →
        </Button>
      </Box>

      <style>
        {`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}
      </style>
    </Drawer>
  );
}
