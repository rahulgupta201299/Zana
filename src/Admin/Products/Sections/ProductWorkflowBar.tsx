import React from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useProductCms } from "../ProductCmsContext";
import { UPDATE_ACTIONS } from "../Constant";

export default function ProductWorkflowBar() {
  const { dispatchAction, errors, isDirty, product } = useProductCms();
  const [searchQuery, setSearchQuery] = React.useState("");

  const pillSx = {
    px: 1.25,
    py: 0.5,
    border: "1px solid #dfe5eb",
    borderRadius: 999,
    color: "#4b5560",
    fontSize: "0.78rem",
    fontWeight: 750,
    bgcolor: "#f8fafb",
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedCode = searchQuery.trim().toUpperCase();

    // dispatchAction(UPDATE_ACTIONS.LOAD_PRODUCT, { product: matchedProduct });
  };

  async function handleSubmit() {
    // Implementation for handling form submission
  }

  const errorCount = Object.keys(errors).length;

  return (
    <Paper
      variant="outlined"
      sx={{
        borderColor: "#d8dde3",
        borderRadius: 2,
        boxShadow: "0 18px 50px rgba(24, 31, 38, 0.08)",
        p: 2.25,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", xl: "1fr auto" },
          gap: 2,
          alignItems: "start",
        }}
      >
        <Box>
          <Typography
            sx={{
              mb: 0.75,
              color: "#8a4b24",
              fontSize: "0.78rem",
              fontWeight: 800,
              textTransform: "uppercase",
            }}
          >
            Product CMS
          </Typography>
          <Typography variant="h1" sx={{ fontSize: "1.45rem", fontWeight: 850 }}>
            Create, edit, preview, save, and publish
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: { xs: "flex-start", xl: "flex-end" },
          }}
        >
          <Button
            variant="outlined"
            type="button"
            onClick={() => dispatchAction(UPDATE_ACTIONS.START_NEW_PRODUCT)}
          >
            New product
          </Button>
          <Button
            variant="outlined"
            type="button"
            onClick={() => dispatchAction(UPDATE_ACTIONS.RESET_PRODUCT)}
          >
            Reset edits
          </Button>
          <Button
            variant="contained"
            type="button"
            onClick={handleSubmit}
          >
            Publish
          </Button>
        </Box>
      </Box>

      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(220px, 1fr) auto" },
          gap: 1.5,
          mt: 2,
        }}
      >
        <TextField
          select
          size="small"
          label="Search product code"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          helperText="Load an existing product to preview, edit, save, or publish."
        >
          <MenuItem value="">Select product code</MenuItem>
          {/* {productCatalogSeed.map((item) => (
            <MenuItem key={item.productCode} value={item.productCode}>
              {item.productCode} - {item.name}
            </MenuItem>
          ))} */}
        </TextField>
        <Button sx={{ height: 40 }} variant="outlined" type="submit" disabled={!searchQuery.trim()}>
          Load product
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1.5 }}>
        <Typography sx={pillSx}>
          Code: {product.productCode || "New product"}
        </Typography>
        <Typography sx={pillSx}>Status: {product.isActive ? "Active" : "Draft"}</Typography>
        <Typography sx={pillSx}>{isDirty ? "Unsaved changes" : "Saved"}</Typography>
      </Box>

      {errorCount ? (
        <Alert severity="warning" sx={{ mt: 2 }}>
          Fix validation errors before saving or publishing.
        </Alert>
      ) : null}
    </Paper>
  );
}
