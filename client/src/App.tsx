import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import BurgerDetailPage from "./pages/BurgerDetailPage";
import RecruitPage from "./pages/RecruitPage";

function AppRouter() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/recruit"} component={RecruitPage} />
      <Route path={"/menu/:slug/qr"} component={BurgerDetailPage} />
      <Route path={"/menu/:slug"} component={BurgerDetailPage} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router base={routerBase === "/" ? "" : routerBase}>
              <AppRouter />
            </Router>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
