import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ProjectsPage from "@/pages/ProjectsPage";
import CaseStudiesPage from "@/pages/CaseStudiesPage";
import ProjectDetailPage from "@/pages/ProjectDetailPage";
import CaseStudyDetailPage from "@/pages/CaseStudyDetailPage";
import ContactPage from "@/pages/ContactPage";
import CVPage from "@/pages/CVPage";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          transition={{ type: "spring", stiffness: 340, damping: 26 }}
          whileHover={{ scale: 1.12, boxShadow: "0 0 0 2px rgba(201,169,110,0.55), 0 12px 28px rgba(0,0,0,0.5)" }}
          className="fixed bottom-4 right-3 z-50 w-9 h-9 rounded-full bg-card border border-accent/40 flex items-center justify-center text-accent cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}


function Router() {
  const [location] = useLocation();
  return (
    <div className="pt-16 md:pt-20">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/projects/:slug" component={ProjectDetailPage} />
            <Route path="/case-studies" component={CaseStudiesPage} />
            <Route path="/case-studies/:slug" component={CaseStudyDetailPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/cv" component={CVPage} />
            <Route>
              <div className="flex items-center justify-center min-h-[50vh]">
                <h1 className="font-display text-4xl">404 Not Found</h1>
              </div>
            </Route>
          </Switch>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="bg-background min-h-screen text-foreground selection:bg-accent/20 selection:text-accent overflow-x-hidden">
            <Navigation />
            <ScrollToTop />
            <BackToTopButton />
            <Router />
            <footer className="border-t border-border-subtle py-8 mt-16 md:mt-24">
              <div className="container mx-auto px-5 sm:px-8 text-center space-y-6">
                <div>
                  <h3 className="font-display text-accent text-2xl">Channels Oladapo</h3>
                  <p className="text-text-secondary mt-1">Technical Product Manager</p>
                </div>
                <div className="flex justify-center gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/channels-oladapo-67253a187/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="footer-linkedin"
                    className="bg-card p-3 rounded-full"
                    whileHover={{ y: -4, scale: 1.1, boxShadow: "0 0 0 2px rgba(201,169,110,0.55), 0 8px 20px rgba(0,0,0,0.4)" }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  >
                    <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </motion.a>
                  <motion.a
                    href="https://github.com/codeconnoisseur-channels/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="footer-github"
                    className="bg-card p-3 rounded-full"
                    whileHover={{ y: -4, scale: 1.1, boxShadow: "0 0 0 2px rgba(201,169,110,0.55), 0 8px 20px rgba(0,0,0,0.4)" }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  >
                    <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </motion.a>
                  <motion.a
                    href="mailto:channelsokunade@gmail.com"
                    data-testid="footer-email"
                    className="bg-card p-3 rounded-full"
                    whileHover={{ y: -4, scale: 1.1, boxShadow: "0 0 0 2px rgba(201,169,110,0.55), 0 8px 20px rgba(0,0,0,0.4)" }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  >
                    <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </motion.a>
                </div>
                <div className="h-px bg-border-subtle max-w-sm mx-auto my-4"></div>
                <p className="text-text-secondary text-sm">© 2026 Channels Okunade Oladapo. All Rights Reserved.</p>
              </div>
            </footer>
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
