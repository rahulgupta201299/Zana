
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRouter from "@/Configurations/Routing/AppRouter";
import { CartProvider } from "./Context/CartProvider";
import { SnackbarProvider } from 'notistack';

const App = () => (
  <div className="overflow-x-hidden w-full">
<SnackbarProvider>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppRouter />
      </TooltipProvider>
      </CartProvider>
      </SnackbarProvider>
  </div>
);

export default App;
