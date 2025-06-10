
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Mail, Phone, Linkedin, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // This effect handles the scroll event to change the navbar style

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Achievements", path: "/achievements" },
    { name: "Timeline", path: "/timeline" },
    { name: "Projects", path: "/projects" },
  ];

  const contactLinks = [
    {
      icon: Phone,
      href: "+91 9007910106",
      label: "+91 9007910106",
    },
    {
      icon: Mail,
      href: "arkapravodas03@gmail.com",
      label: "Email",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/arkapravo-das-981995318/",
      label: "LinkedIn",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-serif font-bold text-portfolio-navy dark:text-gray-100 animate-fade-in"
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav-link active dark:text-indigo-300 dark:after:bg-indigo-300" : "nav-link dark:text-gray-200 dark:after:bg-indigo-300"
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          {/* Contact Links */}
          <div className="flex items-center space-x-4 ml-4">
            {contactLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                target={link.icon === Linkedin ? "_blank" : undefined} 
                rel={link.icon === Linkedin ? "noopener noreferrer" : undefined}
                className="text-gray-600 hover:text-portfolio-blue dark:text-gray-300 dark:hover:text-indigo-300 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
          
          {/* Theme Toggle */}
          <Button 
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Theme Toggle (Mobile) */}
          <Button 
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          
          <Button
            variant="ghost"
            className="p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white dark:bg-gray-900 z-30 transition-transform duration-300 transform md:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ top: "60px" }}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-lg ${isActive ? "text-primary dark:text-indigo-400 font-semibold" : "dark:text-gray-200"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          {/* Contact Links (Mobile) */}
          <div className="pt-4 border-t dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">Contact Me</h3>
            <div className="flex flex-col space-y-4">
              {contactLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  target={link.icon === Linkedin ? "_blank" : undefined} 
                  rel={link.icon === Linkedin ? "noopener noreferrer" : undefined}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <link.icon size={18} className="mr-3 text-portfolio-blue dark:text-indigo-400" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
