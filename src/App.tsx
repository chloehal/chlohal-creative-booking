import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Couture from "./pages/Couture";
import Linogravure from "./pages/Linogravure";
import FleursEnPerles from "./pages/FleursEnPerles";
import NotFound from "./pages/NotFound";
import { SuspendedOverlay } from "./components/SuspendedOverlay";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/couture" element={<Couture />} />
          <Route path="/linogravure" element={<Linogravure />} />
          <Route path="/fleurs-en-perles" element={<FleursEnPerles />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <SuspendedOverlay />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
