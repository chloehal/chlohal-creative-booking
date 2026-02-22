import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import Index from "./pages/Index";
import Couture from "./pages/Couture";
import Linogravure from "./pages/Linogravure";
import FleursEnPerles from "./pages/FleursEnPerles";
import NotFound from "./pages/NotFound";

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

        {/* Floating booking button */}
        <a
          href="https://calendar.app.google/qXQQJ4ghfSfR6bG49"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-circle fixed bottom-6 right-6 z-50"
          aria-label="Réserver un créneau"
        >
          <CalendarDays className="w-5 h-5" />
        </a>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
