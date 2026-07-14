import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

import { ROUTES } from "@/Constants/Routes";
import { clearAdminSession, getAdminEmail } from "./AdminAuth";
import zanaLogo from "@/Assets/Icons/Zana.webp";

const drawerWidth = 264;

const navItems = [
  {
    label: "Dashboard",
    to: ROUTES.ADMIN_DASHBOARD,
    icon: <DashboardOutlinedIcon fontSize="small" />,
  },
  {
    label: "Products",
    to: ROUTES.ADMIN_PRODUCTS,
    icon: <Inventory2OutlinedIcon fontSize="small" />,
  },
  {
    label: "Active Carts",
    to: ROUTES.ADMIN_ACTIVE_CARTS,
    icon: <ShoppingCartOutlinedIcon fontSize="small" />,
  },
  {
    label: "Create Order",
    to: ROUTES.ADMIN_CREATE_ORDER,
    icon: <AddShoppingCartOutlinedIcon fontSize="small" />,
  },
  {
    label: "Order list",
    to: ROUTES.ADMIN_ORDER_LIST,
    icon: <ReceiptLongOutlinedIcon fontSize="small" />,
  },
];



function AdminSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const navigate = useNavigate();
  const adminEmail = getAdminEmail();

  const handleLogout = () => {
    clearAdminSession();
    navigate(ROUTES.ADMIN, { replace: true });
  };

  return (
    <Box
      sx={{
        bgcolor: "#111827",
        color: "#f8fafc",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: 0,
      }}
    >
      <Box sx={{ p: 2.5 }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            component="img"
            src={zanaLogo}
            alt="Zana"
            sx={{
              bgcolor: "#ffffff",
              borderRadius: 1,
              display: "block",
              height: 42,
              objectFit: "contain",
              p: 0.75,
              width: 42,
            }}
          />
          <Box sx={{ minWidth: 0 }}>
            <Typography noWrap sx={{ color: "#aeb8c7", fontSize: "0.78rem" }}>
              {adminEmail}
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

      <List sx={{ flex: 1, minHeight: 0, overflowY: "auto", px: 1.5, py: 2 }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item.to}
            component={NavLink}
            to={item.to}
            onClick={onNavigate}
            sx={{
              borderRadius: 1.5,
              color: "#d8dee9",
              mb: 0.5,
              "&.active": {
                bgcolor: "#ffffff",
                color: "#111827",
                "& .MuiListItemIcon-root": { color: "#e10600" },
              },
              "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
            }}
          >
            <ListItemIcon sx={{ color: "inherit", minWidth: 38 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 750 }}
            />
          </ListItemButton>
        ))}

      
       
      </List>

      <Box sx={{ p: 1.5 }}>
        <Button
          fullWidth
          color="inherit"
          onClick={handleLogout}
          startIcon={<LogoutRoundedIcon />}
          sx={{
            borderColor: "rgba(255,255,255,0.18)",
            color: "#f8fafc",
            justifyContent: "flex-start",
          }}
          variant="outlined"
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:900px)");

  return (
    <Box sx={{ bgcolor: "#eef2f6", display: "flex", minHeight: "100vh" }}>
      {isDesktop ? (
        <Box
          component="aside"
          sx={{
            bottom: 0,
            height: "100dvh",
            left: 0,
            overflow: "hidden",
            position: "fixed",
            top: 0,
            width: drawerWidth,
            zIndex: (theme) => theme.zIndex.drawer,
          }}
        >
          <AdminSidebar />
        </Box>
      ) : (
        <Drawer
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          PaperProps={{ sx: { width: drawerWidth } }}
        >
          <AdminSidebar onNavigate={() => setMobileOpen(false)} />
        </Drawer>
      )}

      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          minWidth: 0,
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Box
          component="header"
          sx={{
            alignItems: "center",
            bgcolor: "#ffffff",
            borderBottom: "1px solid #dbe2ea",
            display: "flex",
            gap: 1.5,
            minHeight: 64,
            px: { xs: 1.5, md: 3 },
          }}
        >
          {!isDesktop ? (
            <IconButton
              aria-label="Open admin navigation"
              onClick={() => setMobileOpen(true)}
            >
              <MenuRoundedIcon />
            </IconButton>
          ) : null}
         
        </Box>
        <Box component="main" sx={{ flex: 1, minWidth: 0 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
