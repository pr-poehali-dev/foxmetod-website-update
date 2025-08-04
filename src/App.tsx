
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";

// Main service category pages
import StrategiyaIUpravlenie from "./pages/services/StrategiyaIUpravlenie";
import OperacionnayaDeyatelnost from "./pages/services/OperacionnayaDeyatelnost";
import OrganizacionnayaEffektivnost from "./pages/services/OrganizacionnayaEffektivnost";
import ProdazhiIMarketing from "./pages/services/ProdazhiIMarketing";
import CifrovayaTransformaciya from "./pages/services/CifrovayaTransformaciya";
import EkspressResheniya from "./pages/services/EkspressResheniya";
import OtraslevyeResheniya from "./pages/services/OtraslevyeResheniya";
import KorporativnyeTreningi from "./pages/services/KorporativnyeTreningi";

// Strategiya i upravlenie sub-pages
import BiznesTreking from "./pages/services/strategiya-i-upravlenie/BiznesTreking";
import StrategicheskieSessii from "./pages/services/strategiya-i-upravlenie/StrategicheskieSessii";
import VnedrenieOkr from "./pages/services/strategiya-i-upravlenie/VnedrenieOkr";
import VnedrenieSspBsc from "./pages/services/strategiya-i-upravlenie/VnedrenieSspBsc";
import InterimMenedzhment from "./pages/services/strategiya-i-upravlenie/InterimMenedzhment";
import KorporativnayaStrategiya from "./pages/services/strategiya-i-upravlenie/KorporativnayaStrategiya";

// Operacionnaya deyatelnost sub-pages
import DiagnostikaProcessov from "./pages/services/operacionnaya-deyatelnost/DiagnostikaProcessov";
import RazrabotkaReglamentov from "./pages/services/operacionnaya-deyatelnost/RazrabotkaReglamentov";
import OkmSistema from "./pages/services/operacionnaya-deyatelnost/OkmSistema";
import PereobucheniePersonala from "./pages/services/operacionnaya-deyatelnost/PereobucheniePersonala";

// Organizacionnaya effektivnost sub-pages
import OrganizacionnyjDizajn from "./pages/services/organizacionnaya-effektivnost/OrganizacionnyjDizajn";
import SistemyMotivacii from "./pages/services/organizacionnaya-effektivnost/SistemyMotivacii";
import SistemnyjHr from "./pages/services/organizacionnaya-effektivnost/SistemnyjHr";
import KorporativnayaKultura from "./pages/services/organizacionnaya-effektivnost/KorporativnayaKultura";

// Prodazhi i marketing sub-pages
import SistemnyjOtdelProdazh from "./pages/services/prodazhi-i-marketing/SistemnyjOtdelProdazh";
import MarketingovyeStrategii from "./pages/services/prodazhi-i-marketing/MarketingovyeStrategii";
import CrmAvtomatizaciya from "./pages/services/prodazhi-i-marketing/CrmAvtomatizaciya";
import AnalitikaProdazh from "./pages/services/prodazhi-i-marketing/AnalitikaProdazh";

// Cifrovaya transformaciya sub-pages
import IntegraciyaIi from "./pages/services/cifrovaya-transformaciya/IntegraciyaIi";
import MigraciyaRossijskoePo from "./pages/services/cifrovaya-transformaciya/MigraciyaRossijskoePo";

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
          
          {/* Main service category pages */}
          <Route path="/services/strategiya-i-upravlenie" element={<StrategiyaIUpravlenie />} />
          <Route path="/services/operacionnaya-deyatelnost" element={<OperacionnayaDeyatelnost />} />
          <Route path="/services/organizacionnaya-effektivnost" element={<OrganizacionnayaEffektivnost />} />
          <Route path="/services/prodazhi-i-marketing" element={<ProdazhiIMarketing />} />
          <Route path="/services/cifrovaya-transformaciya" element={<CifrovayaTransformaciya />} />
          <Route path="/services/ekspress-resheniya" element={<EkspressResheniya />} />
          <Route path="/services/otraslevye-resheniya" element={<OtraslevyeResheniya />} />
          <Route path="/services/korporativnye-treningi" element={<KorporativnyeTreningi />} />
          
          {/* Strategiya i upravlenie sub-pages */}
          <Route path="/services/strategiya-i-upravlenie/biznes-treking" element={<BiznesTreking />} />
          <Route path="/services/strategiya-i-upravlenie/strategicheskie-sessii" element={<StrategicheskieSessii />} />
          <Route path="/services/strategiya-i-upravlenie/vnedrenie-okr" element={<VnedrenieOkr />} />
          <Route path="/services/strategiya-i-upravlenie/vnedrenie-ssp-bsc" element={<VnedrenieSspBsc />} />
          <Route path="/services/strategiya-i-upravlenie/interim-menedzhment" element={<InterimMenedzhment />} />
          <Route path="/services/strategiya-i-upravlenie/korporativnaya-strategiya" element={<KorporativnayaStrategiya />} />
          
          {/* Operacionnaya deyatelnost sub-pages */}
          <Route path="/services/operacionnaya-deyatelnost/diagnostika-processov" element={<DiagnostikaProcessov />} />
          <Route path="/services/operacionnaya-deyatelnost/razrabotka-reglamentov" element={<RazrabotkaReglamentov />} />
          <Route path="/services/operacionnaya-deyatelnost/okm-sistema" element={<OkmSistema />} />
          <Route path="/services/operacionnaya-deyatelnost/pereobuchenie-personala" element={<PereobucheniePersonala />} />
          
          {/* Organizacionnaya effektivnost sub-pages */}
          <Route path="/services/organizacionnaya-effektivnost/organizacionnyj-dizajn" element={<OrganizacionnyjDizajn />} />
          <Route path="/services/organizacionnaya-effektivnost/sistemy-motivacii" element={<SistemyMotivacii />} />
          <Route path="/services/organizacionnaya-effektivnost/sistemnyj-hr" element={<SistemnyjHr />} />
          <Route path="/services/organizacionnaya-effektivnost/korporativnaya-kultura" element={<KorporativnayaKultura />} />
          
          {/* Prodazhi i marketing sub-pages */}
          <Route path="/services/prodazhi-i-marketing/sistemnyj-otdel-prodazh" element={<SistemnyjOtdelProdazh />} />
          <Route path="/services/prodazhi-i-marketing/marketingovye-strategii" element={<MarketingovyeStrategii />} />
          <Route path="/services/prodazhi-i-marketing/crm-avtomatizaciya" element={<CrmAvtomatizaciya />} />
          <Route path="/services/prodazhi-i-marketing/analitika-prodazh" element={<AnalitikaProdazh />} />
          
          {/* Cifrovaya transformaciya sub-pages */}
          <Route path="/services/cifrovaya-transformaciya/integraciya-ii" element={<IntegraciyaIi />} />
          <Route path="/services/cifrovaya-transformaciya/migraciya-rossijskoe-po" element={<MigraciyaRossijskoePo />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;