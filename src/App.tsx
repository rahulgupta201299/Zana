
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRouter from "@/Configurations/Routing/AppRouter";
import { CartProvider } from "./Context/CartProvider";

const App = () => (
  <div className="overflow-x-hidden w-full">
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppRouter />
      </TooltipProvider>
      </CartProvider>
  </div>
);

export default App;
