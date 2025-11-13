
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import TopSellingProductsPage from "./pages/TopSellingProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import ProductCatalogPage from "./pages/ProductCatalogPage";
import BikesPage from "./pages/BikesPage";
import BikeDetailPage from "./pages/BikeDetailPage";
import BikeAccessoriesPage from "./pages/BikeAccessoriesPage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import OurStoriesPage from "./pages/OurStoriesPage";
import BikeViewPage from "./pages/BikeViewPage";
import CartCheckoutPage from "./pages/CartCheckoutPage";
import SearchPage from "./pages/SearchPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <div className="overflow-x-hidden w-full">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/top-selling-products" element={<TopSellingProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/accessories" element={<AccessoriesPage />} />
            <Route path="/product-catalog" element={<ProductCatalogPage />} />
            <Route path="/bikes" element={<BikesPage />} />
            <Route path="/bike/:bikeId" element={<BikeDetailPage />} />
            <Route path="/bike-accessories" element={<BikeAccessoriesPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/our-stories" element={<OurStoriesPage />} />
            <Route path="/bike-view" element={<BikeViewPage />} />
            <Route path="/cart" element={<CartCheckoutPage />} />
            <Route path="/search" element={<SearchPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </div>
);

export default App;
