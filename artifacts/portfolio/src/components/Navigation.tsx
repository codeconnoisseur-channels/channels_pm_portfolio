import { Link, useLocation } from "wouter";

export function Navigation() {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-12 md:px-20 h-20 flex items-center justify-between">
        <Link href="/" className="text-foreground font-medium text-base tracking-wide hover:text-accent transition-colors" data-testid="nav-logo">
          Channels Oladapo
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={`text-sm font-medium transition-colors ${isActive("/") ? "text-accent" : "text-text-secondary hover:text-accent"}`}>
            Home
          </Link>
          <Link href="/about" className={`text-sm font-medium transition-colors ${isActive("/about") ? "text-accent" : "text-text-secondary hover:text-accent"}`}>
            About Me
          </Link>
          <Link href="/projects" className={`text-sm font-medium transition-colors ${isActive("/projects") ? "text-accent" : "text-text-secondary hover:text-accent"}`}>
            Projects
          </Link>
          <Link href="/case-studies" className={`text-sm font-medium transition-colors ${isActive("/case-studies") ? "text-accent" : "text-text-secondary hover:text-accent"}`}>
            Case Studies
          </Link>
          <Link href="/cv" className={`text-sm font-medium transition-colors ${isActive("/cv") ? "text-accent" : "text-text-secondary hover:text-accent"}`}>
            CV
          </Link>
          <Link href="/contact" className={`text-sm font-medium transition-colors ${isActive("/contact") ? "text-accent" : "text-text-secondary hover:text-accent"}`}>
            Contact
          </Link>
          <Link href="/contact" className="px-5 py-2.5 border border-accent text-accent rounded-full text-sm font-medium hover:bg-accent hover:text-background transition-colors" data-testid="nav-cta">
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  );
}
