import { Mail, Phone, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-navy dark:bg-gray-900 text-white py-6 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-serif font-bold">Portfolio</h3>
            <p className="text-sm text-gray-300 max-w-xs">
              A showcase of my professional journey, accomplishments, and
              academic background.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                to="/achievements"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Achievements
              </Link>
              <Link
                to="/timeline"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Timeline
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <Phone
                  size={16}
                  className="text-portfolio-blue dark:text-indigo-400"
                />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  +91 9007910106
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail
                  size={16}
                  className="text-portfolio-blue dark:text-indigo-400"
                />
                <a
                  href="arkapravodas03@gmail.com"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin
                  size={16}
                  className="text-portfolio-blue dark:text-indigo-400"
                />
                <a
                  href="https://www.linkedin.com/in/arkapravo-das-981995318/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  linkedin.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-xs text-gray-400">
          &copy; {currentYear} Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
