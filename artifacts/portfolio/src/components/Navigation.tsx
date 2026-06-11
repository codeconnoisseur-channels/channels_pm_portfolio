import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/",             label: "Home"         },
  { href: "/about",        label: "About Me"     },
  { href: "/projects",     label: "Projects"     },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/cv",           label: "CV"           },
  { href: "/contact",      label: "Contact"      },
];

export function Navigation() {
  const [location] = useLocation();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => { setMobileOpen(false); }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  const isDark = resolvedTheme === "dark";

  const themeButton = (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.88 }}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
      className="w-8 h-8 rounded-full border border-border-subtle bg-card flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-colors cursor-pointer shrink-0"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border-subtle"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 h-16 md:h-20 flex items-center justify-between">

          <Link href="/" className="text-foreground font-medium text-base tracking-wide hover:text-accent transition-colors shrink-0" data-testid="nav-logo">
            Channels Oladapo
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative pb-1">
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href) ? "text-accent" : "text-text-secondary hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
                {isActive(link.href) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            ))}
            {themeButton}
          </nav>

          {/* Mobile right side */}
          <div className="flex items-center gap-2 md:hidden">
            {themeButton}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.88 }}
              className="w-9 h-9 rounded-lg border border-border-subtle bg-card flex items-center justify-center text-text-secondary hover:text-accent transition-colors cursor-pointer"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "x" : "menu"}
                  initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 15, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.nav
              key="mobile-nav"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-16 left-0 right-0 z-40 bg-background/[98%] backdrop-blur-md border-b border-border-subtle md:hidden"
            >
              <div className="px-5 py-3">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-colors mb-1 ${
                        isActive(link.href)
                          ? "text-accent bg-accent/10"
                          : "text-text-secondary hover:text-foreground hover:bg-card"
                      }`}
                    >
                      {isActive(link.href) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      )}
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
