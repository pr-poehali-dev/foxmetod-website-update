
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import StrategiyaIUpravlenie from "./pages/services/StrategiyaIUpravlenie";
import BiznesTreking from "./pages/services/strategiya-i-upravlenie/BiznesTreking";
import OperacionnayaDeyatelnost from "./pages/services/OperacionnayaDeyatelnost";
import OrganizacionnayaEffektivnost from "./pages/services/OrganizacionnayaEffektivnost";
import ProdazhiIMarketing from "./pages/services/ProdazhiIMarketing";
import CifrovayaTransformaciya from "./pages/services/CifrovayaTransformaciya";
import EkspressResheniya from "./pages/services/EkspressResheniya";
import OtraslevyeResheniya from "./pages/services/OtraslevyeResheniya";
import KorporativnyeTreningi from "./pages/services/KorporativnyeTreningi";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/strategiya-i-upravlenie" element={<StrategiyaIUpravlenie />} />
          <Route path="/services/strategiya-i-upravlenie/biznes-treking" element={<BiznesTreking />} />
          <Route path="/services/operacionnaya-deyatelnost" element={<OperacionnayaDeyatelnost />} />
          <Route path="/services/organizacionnaya-effektivnost" element={<OrganizacionnayaEffektivnost />} />
          <Route path="/services/prodazhi-i-marketing" element={<ProdazhiIMarketing />} />
          <Route path="/services/cifrovaya-transformaciya" element={<CifrovayaTransformaciya />} />
          <Route path="/services/ekspress-resheniya" element={<EkspressResheniya />} />
          <Route path="/services/otraslevye-resheniya" element={<OtraslevyeResheniya />} />
          <Route path="/services/korporativnye-treningi" element={<KorporativnyeTreningi />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;