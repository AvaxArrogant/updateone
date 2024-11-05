import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronDown, 
  Globe2, 
  Megaphone, 
  Users2, 
  BarChart2, 
  Target, 
  Menu,
  X,
  Building2,
  ShoppingBag,
  Rocket,
  BookOpen,
  FileText,
  Play,
  LogIn,
  Laptop,
  Code,
  Brain
} from 'lucide-react';
import { useModalStore } from '../store/modalStore';

interface NavLinkProps {
  label: string;
  items: any[];
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { setActiveModal } = useModalStore();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setActiveModal('onboarding');
  };

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: 'Digital Marketing Services',
      items: [
        { title: 'SEO Services', icon: Globe2, href: '/services/seo', description: 'Boost your search rankings and organic traffic' },
        { title: 'PPC Management', icon: Target, href: '/services/ppc', description: 'Maximize ROI with targeted paid advertising' },
        { title: 'Social Media', icon: Users2, href: '/services/social-media', description: 'Build brand awareness and engagement' },
        { title: 'Content Marketing', icon: Megaphone, href: '/services/content-marketing', description: 'Create compelling content that converts' },
        { title: 'Analytics', icon: BarChart2, href: '/services/analytics', description: 'Data-driven insights and reporting' },
        { title: 'Web Design', icon: Laptop, href: '/services/web-design', description: 'Beautiful, responsive website design' },
        { title: 'Custom Development', icon: Code, href: '/services/custom-development', description: 'Tailored software solutions' },
        { title: 'AI Consulting', icon: Brain, href: '/services/ai-consulting', description: 'AI strategy and implementation' }
      ],
      info: {
        title: 'Why Choose OneTap Media?',
        description: 'We deliver measurable results through data-driven strategies and innovative solutions.',
        stats: [
          { label: 'Client Retention', value: '98%' },
          { label: 'Revenue Growth', value: '150%' },
          { label: 'ROI Average', value: '300%' }
        ]
      }
    }
  ];

  const solutions = [
    {
      title: 'Industry Solutions',
      items: [
        { title: 'Enterprise', icon: Building2, href: '/solutions/enterprise', description: 'Solutions for large organizations' },
        { title: 'Small Business', icon: Rocket, href: '/solutions/small-business', description: 'Growth strategies for small businesses' },
        { title: 'Healthcare', icon: Users2, href: '/solutions/healthcare', description: 'Specialized healthcare marketing' },
        { title: 'E-commerce', icon: ShoppingBag, href: '/solutions/ecommerce', description: 'Drive online sales and growth' }
      ],
      info: {
        title: 'Success Stories',
        description: "See how we have helped businesses like yours achieve remarkable growth.",
        cta: {
          text: 'View Case Studies',
          link: '/case-studies'
        }
      }
    }
  ];

  const resources = [
    {
      title: 'Marketing Resources',
      items: [
        { title: 'Blog', icon: BookOpen, href: '/resources/blog', description: 'Latest marketing insights and tips' },
        { title: 'Case Studies', icon: FileText, href: '/resources/case-studies', description: 'Real client success stories' },
        { title: 'Webinars', icon: Play, href: '/resources/webinars', description: 'Educational marketing webinars' }
      ],
      info: {
        title: 'Free Marketing Assessment',
        description: 'Get a comprehensive analysis of your digital marketing strategy.',
        cta: {
          text: 'Get Started Free',
          link: '/assessment'
        }
      }
    }
  ];

  const NavLink = ({ label, items, isActive, onMouseEnter, onMouseLeave }: NavLinkProps) => (
    <div 
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 font-medium transition-colors"
      >
        <span>{label}</span>
        <ChevronDown 
          size={16} 
          className={`transform transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} 
        />
      </button>
    </div>
  );

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8" style={{ height: '72px' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">OneTap Media</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink 
              label="Services" 
              items={services}
              isActive={activeDropdown === 'services'}
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            />
            <NavLink 
              label="Solutions" 
              items={solutions}
              isActive={activeDropdown === 'solutions'}
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            />
            <NavLink 
              label="Resources" 
              items={resources}
              isActive={activeDropdown === 'resources'}
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            />
            <Link 
              to="/contact"
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
            <Link 
              to="/portal/login"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 font-medium transition-colors"
              onClick={handleLinkClick}
            >
              <LogIn size={20} />
              <span>Client Portal</span>
            </Link>
            <button 
              onClick={handleGetStarted}
              className="px-6 py-2.5 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Dropdown Menus */}
        {activeDropdown && (
          <div 
            className="absolute left-0 w-full bg-white shadow-lg border-t border-gray-100"
            onMouseEnter={() => handleMouseEnter(activeDropdown)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {(activeDropdown === 'services' ? services : 
                activeDropdown === 'solutions' ? solutions : 
                resources).map((section, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-8">
                  <div className="col-span-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {section.items.map((item, index) => (
                        <Link
                          key={index}
                          to={item.href}
                          className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={handleLinkClick}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <item.icon className="w-5 h-5 text-primary-600 group-hover:text-primary-700" />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 group-hover:text-primary-600">
                              {item.title}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-4 bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {section.info.title}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {section.info.description}
                    </p>
                    {section.info.stats ? (
                      <div className="space-y-3">
                        {section.info.stats.map((stat, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-gray-600">{stat.label}</span>
                            <span className="font-semibold text-primary-600">{stat.value}</span>
                          </div>
                        ))}
                      </div>
                    ) : section.info.cta && (
                      <Link
                        to={section.info.cta.link}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                        onClick={handleLinkClick}
                      >
                        {section.info.cta.text}
                        <ChevronDown className="ml-1 w-4 h-4 rotate-[-90deg]" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-4 py-6 space-y-4">
              <MobileNavSection title="Services" items={services[0].items} onLinkClick={handleLinkClick} />
              <MobileNavSection title="Solutions" items={solutions[0].items} onLinkClick={handleLinkClick} />
              <MobileNavSection title="Resources" items={resources[0].items} onLinkClick={handleLinkClick} />
              <Link 
                to="/contact"
                className="block py-2 text-gray-600 hover:text-primary-600"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
              <Link 
                to="/portal/login"
                className="flex items-center space-x-2 py-2 text-gray-600 hover:text-primary-600"
                onClick={handleLinkClick}
              >
                <LogIn size={20} />
                <span>Client Portal</span>
              </Link>
              <button 
                onClick={() => {
                  handleGetStarted();
                  handleLinkClick();
                }}
                className="w-full px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const MobileNavSection = ({ title, items, onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center justify-between w-full py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-900 font-medium">{title}</span>
        <ChevronDown 
          size={16} 
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="pl-4 space-y-2 mt-2">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="flex items-center space-x-3 p-2 text-gray-600 hover:text-primary-600"
              onClick={() => {
                onLinkClick();
                setIsOpen(false);
              }}
            >
              <item.icon size={20} />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;