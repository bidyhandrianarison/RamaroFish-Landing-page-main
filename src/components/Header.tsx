import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash || "#";
    setActiveSection(hash);
  }, [location]);

  return (
    <header className="bg-white py-4 px-6 md:px-12 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/ramaroFish.svg" alt="Logo" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className={`font-medium px-1 py-1 ${
              activeSection === "#" ? "text-primary border-b-2 border-primary" : "text-gray-600 hover:text-primary transition"
            }`}
          >
            Accueil
          </a>
          <a
            href="#services"
            className={`font-medium px-1 py-1 ${
              activeSection === "#services" ? "text-primary border-b-2 border-primary" : "text-gray-600 hover:text-primary transition"
            }`}
          >
            Nos services
          </a>
          <a
            href="#recommandations"
            className={`font-medium px-1 py-1 ${
              activeSection === "#recommandations" ? "text-primary border-b-2 border-primary" : "text-gray-600 hover:text-primary transition"
            }`}
          >
            Recommandations
          </a>
          <a
            href="#contact"
            className={`font-medium px-1 py-1 ${
              activeSection === "#contact" ? "text-primary border-b-2 border-primary" : "text-gray-600 hover:text-primary transition"
            }`}
          >
            Contacts
          </a>
          <a href="/ramaro-fish-app.apk" download>

            <Button className="ml-4 bg-primary hover:bg-primary/90">Télécharger</Button>
          </a>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4 px-2">
            <a
              href="#"
              className={`font-medium px-3 py-2 ${
                activeSection === "#" ? "text-primary" : "text-gray-600 hover:text-primary"
              }`}
            >
              Accueil
            </a>
            <a
              href="#services"
              className={`font-medium px-3 py-2 ${
                activeSection === "#services" ? "text-primary" : "text-gray-600 hover:text-primary"
              }`}
            >
              Nos services
            </a>
            <a
              href="#recommandations"
              className={`font-medium px-3 py-2 ${
                activeSection === "#recommandations" ? "text-primary" : "text-gray-600 hover:text-primary"
              }`}
            >
              Recommandations
            </a>
            <a
              href="#contact"
              className={`font-medium px-3 py-2 ${
                activeSection === "#contact" ? "text-primary" : "text-gray-600 hover:text-primary"
              }`}
            >
              Contacts
            </a>
            <Button className="bg-primary hover:bg-primary/90 w-full">Télécharger</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
