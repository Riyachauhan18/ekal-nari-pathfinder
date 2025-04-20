
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, IndianRupee, Book } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const languages = ["English", "हिंदी", "বাংলা", "தமிழ்", "తెలుగు", "ಕನ್ನಡ", "മലയാളം"];

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col bg-ekalNari-light">
      {/* Language Selector */}
      <div className="bg-white p-2 flex justify-end shadow-sm">
        <select 
          className="text-sm border border-ekalNari-orange rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-ekalNari-orange"
          defaultValue="English"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <Link to="/" className="flex items-center gap-2 mb-4 sm:mb-0">
            <div className="w-12 h-12 rounded-full bg-ekalNari-orange flex items-center justify-center">
              <span className="text-white text-2xl font-bold">EN</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-ekalNari-dark">Ekal Nari Pathfinder</h1>
              <p className="text-xs text-ekalNari-brown">Support for Single Women</p>
            </div>
          </Link>
          
          <nav className="flex flex-wrap gap-2 justify-center">
            <Button asChild variant={pathname === "/" ? "default" : "ghost"} size="sm">
              <Link to="/" className="flex items-center gap-1">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
            </Button>
            <Button asChild variant={pathname === "/about" ? "default" : "ghost"} size="sm">
              <Link to="/about">About The Scheme</Link>
            </Button>
            <Button asChild variant={pathname === "/eligibility" ? "default" : "ghost"} size="sm">
              <Link to="/eligibility">Check Eligibility</Link>
            </Button>
            <Button asChild variant={pathname === "/apply" ? "default" : "ghost"} size="sm">
              <Link to="/apply">How to Apply</Link>
            </Button>
            <Button asChild variant={pathname === "/stories" ? "default" : "ghost"} size="sm">
              <Link to="/stories" className="flex items-center gap-1">
                <Book className="w-4 h-4" />
                <span>Stories</span>
              </Link>
            </Button>
            <Button asChild variant={pathname === "/contact" ? "default" : "ghost"} size="sm">
              <Link to="/contact">Contact</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-ekalNari-dark text-white p-4 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2025 Ekal Nari Pathfinder</p>
            <p className="text-xs text-gray-300">Helping single women access government schemes</p>
          </div>
          <div className="flex gap-4 text-sm">
            <Link to="/privacy" className="hover:text-ekalNari-orange transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-ekalNari-orange transition">Terms</Link>
            <Link to="/contact" className="hover:text-ekalNari-orange transition">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
