import React from "react";
import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";


import { ProductCmsProvider } from "./ProductCmsContext";
import PreviewPanel from "./PreviewPanel";
import AdminPanel from "./AdminPanel";

function ProductCMS() {


  return (
    <ProductCmsProvider>
      <Box
        component="main"
        sx={{
          gap: 3,
          minHeight: "100vh",
          p: { xs: 1.75, md: 3 },
        }}
      >
        

        <AdminPanel />
      </Box>

     
    </ProductCmsProvider>
  );
}

export default ProductCMS;
