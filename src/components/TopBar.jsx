import { useState, useRef, useEffect, useContext } from "react";
import { useTranslation } from "../../src/hooks/useTranslation";
import { AuthContext } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import {
  MessageCircle,
  Bell,
  UserCircle,
  Settings,
  LogOut,
  Activity,
  Sun,
  Moon,
} from "lucide-react";
import { Link } from "react-router-dom";
import Tooltip from "../components/Tooltip";

const languageOptions = [
  {
    value: "en",
    label: "English",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  },
  {
    value: "km",
    label: "ខ្មែរ",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg",
  },
];

const SearchBar = ({ t }) => (
  <div className="flex-1 max-w-xs">
    <input
      type="text"
      placeholder={t("topbar.search")}
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
      aria-label={t("topbar.search")}
    />
  </div>
);

const IconButton = ({ Icon, tooltip, ariaLabel, onClick }) => (
  <Tooltip text={tooltip}>
    <button
      className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all hover:scale-110"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <Icon size={24} />
    </button>
  </Tooltip>
);

const LanguageSelector = ({
  langCode,
  onLanguageChange,
  open,
  setOpen,
  selectorRef,
  t,
}) => {
  const handleLanguageChange = (value) => {
    onLanguageChange(value);
    setOpen(false);
  };

  return (
    <div className="relative inline-block" ref={selectorRef}>
      <button
        onClick={() => setOpen(!open)}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && setOpen(!open)
        }
        className="flex items-center bg-white dark:bg-gray-800 border border-green-500 dark:border-green-400 rounded-md px-3 py-1 shadow-sm hover:border-green-600 dark:hover:border-green-300 transition-all duration-200 w-36 justify-between"
        aria-expanded={open}
        aria-label={t("topbar.selectLanguage")}
      >
        <div className="flex items-center space-x-2">
          <img
            src={languageOptions.find((lang) => lang.value === langCode)?.flag}
            alt={langCode}
            className="w-5 h-5 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
            {languageOptions.find((lang) => lang.value === langCode)?.label}
          </span>
        </div>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${
            open ? "rotate-180" : ""
          } text-green-600 dark:text-green-400`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && (
        <ul className="absolute z-50 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg animate-fade-in">
          {languageOptions.map((lang) => (
            <li
              key={lang.value}
              onClick={() => handleLanguageChange(lang.value)}
              className={`flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400 cursor-pointer ${
                langCode === lang.value
                  ? "bg-green-100 dark:bg-gray-700 font-semibold"
                  : ""
              }`}
            >
              <img
                src={lang.flag}
                alt={lang.label}
                className="w-5 h-5 rounded-full mr-2 object-cover"
              />
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ProfileDropdown = ({
  user,
  isDropdownOpen,
  setIsDropdownOpen,
  dropdownRef,
  handleLogout,
  t,
}) => {
  const getInitials = (name) => {
    if (!name) return "U";
    const names = name.split(" ");
    return names
      .map((n) => n.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Tooltip text={t("topbar.profile")}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") &&
            setIsDropdownOpen(!isDropdownOpen)
          }
          className="bg-green-500 dark:bg-green-600 text-white hover:scale-105 p-1.5 rounded-full cursor-pointer flex items-center justify-center hover:bg-green-600 dark:hover:bg-green-500"
          aria-expanded={isDropdownOpen}
          aria-label={t("topbar.profile")}
        >
          <span className="text-sm font-medium">{getInitials(user?.name)}</span>
        </button>
      </Tooltip>
      {isDropdownOpen && (
        <div className="absolute z-50 right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-green-200 dark:border-gray-600 shadow-lg rounded-lg py-2 animate-fade-in">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
            <p className="font-semibold text-gray-800 dark:text-gray-200">
              {user?.name || "User Name"}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {user?.email || "user@email.com"}
            </p>
          </div>
          <Link to="/aboutuser">
            <button
              className="w-full flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsDropdownOpen(false)}
            >
              <UserCircle className="mr-2" size={18} />
              {t("topbar.viewProfile")}
            </button>
          </Link>
          <Link to="/settingpage">
            <button
              className="w-full flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsDropdownOpen(false)}
            >
              <Settings className="mr-2" size={18} />
              {t("topbar.accountSetting")}
            </button>
          </Link>
          <Link to="/activity">
            <button
              className="w-full flex items-center px-4 py-2 text-green-600 dark:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsDropdownOpen(false)}
            >
              <Activity className="mr-2" size={18} />
              {t("topbar.loginActivity")}
            </button>
          </Link>
          <button
            className="w-full flex items-center px-4 py-2 text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={handleLogout}
          >
            <LogOut className="mr-2" size={18} />
            {t("topbar.signOut")}
          </button>
        </div>
      )}
    </div>
  );
};

const AuthButtons = ({ t }) => (
  <div className="flex items-center space-x-3">
    <Link to="/login">
      <button
        className="px-4 py-2 bg-green-500 dark:bg-green-600 text-white rounded-md hover:bg-green-600 dark:hover:bg-green-500 transition-colors"
        aria-label={t("topbar.login")}
      >
        {t("topbar.login")}
      </button>
    </Link>
    <Link to="/register">
      <button
        className="px-4 py-2 border border-green-500 dark:border-green-400 text-green-500 dark:text-green-400 rounded-md hover:bg-green-50 dark:hover:bg-gray-700 transition-colors"
        aria-label={t("topbar.register")}
      >
        {t("topbar.register")}
      </button>
    </Link>
  </div>
);

const TopBar = () => {
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selectorRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    if (window.confirm(t("topbar.logoutConfirm"))) {
      logout();
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 z-10 p-4 flex flex-col sm:flex-row items-center justify-between relative shadow-sm dark:shadow-gray-800">
      <SearchBar t={t} />
      <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 mt-4 sm:mt-0">
        <IconButton
          Icon={MessageCircle}
          tooltip={t("topbar.messages")}
          ariaLabel={t("topbar.messages")}
        />
        <IconButton
          Icon={Bell}
          tooltip={t("topbar.notifications")}
          ariaLabel={t("topbar.notifications")}
        />
        <IconButton
          Icon={theme === "light" ? Moon : Sun}
          tooltip={
            theme === "light" ? t("topbar.darkMode") : t("topbar.lightMode")
          }
          ariaLabel={
            theme === "light" ? t("topbar.darkMode") : t("topbar.lightMode")
          }
          onClick={toggleTheme}
        />
        <LanguageSelector
          langCode={language}
          onLanguageChange={changeLanguage}
          open={open}
          setOpen={setOpen}
          selectorRef={selectorRef}
          t={t}
        />
        {isAuthenticated ? (
          <ProfileDropdown
            user={user}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
            dropdownRef={dropdownRef}
            handleLogout={handleLogout}
            t={t}
          />
        ) : (
          <AuthButtons t={t} />
        )}
      </div>
    </div>
  );
};

export default TopBar;
