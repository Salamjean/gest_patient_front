"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHeartbeat,
  FaHospital,
  FaUserMd,
  FaStethoscope,
} from "react-icons/fa";
import Image from "next/image";
import {
  FaHome,
  FaCalendarAlt,
  FaFileMedical,
  FaSignOutAlt,
  FaUserCircle,
  FaUserEdit,
  FaHistory,
  FaClipboardList,
  FaCog,
  FaChevronLeft,
  FaChevronRight,
  FaIdCard,
} from "react-icons/fa";

// Variables de couleur
const PRIMARY_BLUE = "#06b6d4";
const ACCENT_GREEN = "#2da442";
const ERROR_RED = "#dc2626";

export default function Sidebar({ handleLogout, setIsSidebarOpen }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  // Mettre à jour l'item actif quand la route change
  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  const navItems = [
    {
      name: "Tableau de Bord",
      href: "/dashboard",
      icon: FaHome,
      description: "Vue d'ensemble",
    },
    {
      name: "Consultations",
      href: "/dashboard/consultations",
      icon: FaFileMedical,
      description: "Historique médical",
    },
    {
      name: "Déclarations",
      href: "/dashboard/declarations",
      icon: FaClipboardList,
      description: "Mes déclarations",
    },
    {
      name: "Rendez-vous",
      href: "/dashboard/rdv",
      icon: FaCalendarAlt,
      description: "Gérer mes RDV",
    },
    {
      name: "Ma Carte",
      href: "/dashboard/card",
      icon: FaIdCard,
      description: "Carte de Soin",
    },
  ];

  return (
    <>
      {/* Version Mobile */}
      <div className="md:hidden h-full bg-white w-64 shadow-2xl flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              {/* Logo à la place de l'icône utilisateur */}
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#2da442] flex items-center justify-center mr-3 overflow-hidden">
                {/* Option 1: Logo avec initiale */}
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  Espace Patient
                </h2>
                <p className="text-xs text-gray-500">Connecté</p>
              </div>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <FaChevronLeft className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Navigation mobile */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center p-4 rounded-xl transition-all duration-200 ${
                activeItem === item.href
                  ? "bg-gradient-to-r from-[#06b6d4]/10 to-[#2da442]/10 border-l-4 border-[#06b6d4] text-[#06b6d4]"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <item.icon
                className={`mr-3 text-lg ${
                  activeItem === item.href ? "text-[#06b6d4]" : "text-gray-500"
                }`}
              />
              <div className="flex-1">
                <span className="font-medium block">{item.name}</span>
                <span className="text-xs text-gray-500 hidden md:block">
                  {item.description}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Version Desktop */}
      <div
        className={`hidden md:flex flex-col h-full bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 shadow-lg transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        {/* En-tête */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center" style={{ marginLeft: "50px" }}>
                <div>
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={200}
                    height={100}
                    className="object-contain p-1"
                  />
                </div>
              </div>
            )}
            {isCollapsed && (
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#2da442] flex items-center justify-center mx-auto">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="object-contain p-1"
                />
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${
                isCollapsed ? "mx-auto" : ""
              }`}
            >
              {isCollapsed ? (
                <FaChevronRight className="text-gray-600" />
              ) : (
                <FaChevronLeft className="text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center p-3 rounded-xl transition-all duration-200 ${
                activeItem === item.href
                  ? "bg-gradient-to-r from-[#06b6d4] to-[#2da442] text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon
                className={`text-lg ${isCollapsed ? "mx-auto" : "mr-3"} ${
                  activeItem === item.href
                    ? "text-white"
                    : "text-gray-500 group-hover:text-[#06b6d4]"
                }`}
              />
              {!isCollapsed && (
                <div className="flex-1 min-w-0">
                  <span className="font-medium block truncate">
                    {item.name}
                  </span>
                  <span
                    className={`text-xs block truncate ${
                      activeItem === item.href
                        ? "text-white/80"
                        : "text-gray-500"
                    }`}
                  >
                    {item.description}
                  </span>
                </div>
              )}
              {!isCollapsed && activeItem === item.href && (
                <div className="w-2 h-2 bg-white rounded-full ml-2"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Info utilisateur (seulement quand non réduit) */}
        {!isCollapsed && (
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <FaUserCircle className="text-gray-500 text-xl" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">
                  Patient Connecté
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Styles pour custom scrollbar */}
      <style jsx>{`
        nav::-webkit-scrollbar {
          width: 4px;
        }
        nav::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        nav::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 10px;
        }
        nav::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }
      `}</style>
    </>
  );
}
