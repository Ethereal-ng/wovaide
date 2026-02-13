import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import EstherYakubuSule from "./pages/team/EstherYakubuSule";
import SarahDavidIbi from "./pages/team/SarahDavidIbi";
import EuodiasDavidLuther from "./pages/team/EuodiasDavidLuther";
import JessicaJidankeOffia from "./pages/team/JessicaJidankeOffia";
import EtemiJoshuaGarba from "./pages/team/EtemiJoshuaGarba";
import VincentEmmanuelChidera from "./pages/team/VincentEmmanuelChidera";
import SamDavidKuritsi from "./pages/team/SamDavidKuritsi";
import RhodaKwanchi from "./pages/team/RhodaKwanchi";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/esther-yakubu-sule" element={<EstherYakubuSule />} />
          <Route path="/team/sarah-david-ibi" element={<SarahDavidIbi />} />
          <Route path="/team/euodias-david-luther" element={<EuodiasDavidLuther />} />
          <Route path="/team/jessica-jidanke-offia" element={<JessicaJidankeOffia />} />
          <Route path="/team/etemi-joshua-garba" element={<EtemiJoshuaGarba />} />
          <Route path="/team/vincent-emmanuel-chidera" element={<VincentEmmanuelChidera />} />
          <Route path="/team/sam-david-kuritsi" element={<SamDavidKuritsi />} />
          <Route path="/team/rhoda-kwanchi" element={<RhodaKwanchi />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
