import { ChangeEvent, useCallback, useState } from "react";
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

type SearchPropsType = {
  onClose: () => void;
};

export default function Search({ onClose }: SearchPropsType) {
  const [query, setQuery] = useState("");

  const suggestions = [
    "fog light",
    "top box for himalayan 450",
    "fog light clamp mount",
    "panniers for himalayan 450",
  ];

  const products = [
    {
      img: "https://via.placeholder.com/80",
      name: "Moto Loop Leather Keychain for Bike | Engina Lifestyle",
      price: 499,
    },
    {
      img: "https://via.placeholder.com/80",
      name: "Moto Seal Leather Keychain for Bike | Engina Lifestyle",
      price: 399,
    },
    {
      img: "https://via.placeholder.com/80",
      name: "Universal Fit - Fog Light Mounts Set | Auto Engina",
      price: 899,
    },
  ];

  const searchDebounce = useCallback(debounce(handleSearchService, 1000), []);

  async function handleSearchService(val: string) {
    // Perform API call
  }

  const filteredSuggestions = suggestions.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
    searchDebounce(val);
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
          {filteredSuggestions.map((item, i) => (
            <Typography
              key={i}
              sx={{
                color: "white",
                fontSize: "1.05rem",
                cursor: "pointer",
                "&:hover": { color: "#cccccc" },
              }}
            >
              {item}
            </Typography>
          ))}

          {filteredSuggestions.length === 0 && (
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
          {filteredProducts.map((p, i) => (
            <Box key={i} sx={{ display: "flex", gap: 2 }}>
              <img
                src={p.img}
                className="w-20 h-20 rounded-xl bg-white object-cover"
              />

              <Box>
                <Typography
                  sx={{ color: "white", fontSize: "1rem", lineHeight: 1.3 }}
                >
                  {p.name}
                </Typography>
                <Typography sx={{ color: "#cccccc", mt: 0.6 }}>
                  Rs. {p.price}.00
                </Typography>
              </Box>
            </Box>
          ))}

          {filteredProducts.length === 0 && (
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
