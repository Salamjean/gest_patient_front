// src/app/dashboard/page.js
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/DashboardLayout";

import Link from "next/link";
import {
  FaCalendarCheck,
  FaStethoscope,
  FaUserEdit,
  FaFileMedical,
  FaPrescription,
  FaChartLine,
  FaHistory,
  FaNotesMedical,
  FaClipboardCheck,
  FaBell,
  FaUserMd,
  FaHospital,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaIdCard,
} from "react-icons/fa";

// Variables de couleur
const PRIMARY_BLUE = "#06b6d4";
const ACCENT_GREEN = "#2da442";
const ERROR_RED = "#dc2626";

export default function DashboardPage() {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    consultations: 0,
    rendezVous: 0,
    prescriptions: 0,
    prochainRdv: null,
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("patient_token");
    const patientData = localStorage.getItem("patient_data");

    if (!token || !patientData) {
      router.replace("/login");
      return;
    }

    try {
      const parsedData = JSON.parse(patientData);
      setPatient(parsedData);

      // Simulation de données (remplacez par vos appels API)
      fetchStats(token);
      fetchRecentActivity(token);
    } catch (e) {
      console.error("Erreur de parsing des données patient", e);
    } finally {
      setLoading(false);
    }

    const validateToken = async () => {
      try {
        const response = await fetch(
          "https://gestpatients-bf.com/api/v1/patient/show",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Token invalide");
        }

        const data = await response.json();
        if (data.patient) {
          setPatient(data.patient);
          // Update local storage to keep it fresh
          localStorage.setItem("patient_data", JSON.stringify(data.patient));
        }
      } catch (error) {
        console.error("Erreur de validation du token:", error);
      }
    };

    validateToken();
  }, [router]);

  const fetchStats = async (token) => {
    try {
      // Récupérer les consultations
      const consultationsResponse = await fetch(
        "https://gestpatients-bf.com/api/v1/patient/consultations",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Récupérer les rendez-vous
      const rdvResponse = await fetch(
        "https://gestpatients-bf.com/api/v1/patient/rdv",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (consultationsResponse.ok && rdvResponse.ok) {
        const consultationsData = await consultationsResponse.json();
        const rdvData = await rdvResponse.json();

        setStats({
          consultations: consultationsData.consultations?.length || 0,
          rendezVous: rdvData.rdv?.length || 0,
        });
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des statistiques:", error);
      // Garder les valeurs par défaut en cas d'erreur
      setStats({
        consultations: 0,
        rendezVous: 0,
      });
    }
  };

  const fetchRecentActivity = async (token) => {
    // Remplacez par vos appels API réels
    setTimeout(() => {
      setRecentActivity([
        {
          id: 1,
          type: "consultation",
          date: "2024-01-10",
          description: "Consultation générale",
          doctor: "Dr. Martin",
        },
        {
          id: 2,
          type: "prescription",
          date: "2024-01-08",
          description: "Ordonnance renouvelée",
          doctor: "Dr. Laurent",
        },
        {
          id: 3,
          type: "rdv",
          date: "2024-01-05",
          description: "Prise de sang programmée",
          doctor: "Infirmier Dupont",
        },
      ]);
    }, 300);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Aucun RDV prévu";
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            style={{ color: PRIMARY_BLUE }}
          ></div>
          <p className="mt-4 text-gray-600 font-medium">
            Chargement de votre espace patient...
          </p>
        </div>
      </div>
    );
  }

  if (!patient) {
    return null;
  }

  // Cartes de services
  const serviceCards = [
    {
      href: "/dashboard/consultations",
      title: "Consultations",
      description: "Historique et détails de vos consultations",
      icon: FaStethoscope,
      color: PRIMARY_BLUE,
      stats: `${stats.consultations} consultations`,
    },
    {
      href: "/dashboard/rdv",
      title: "Rendez-vous",
      description: "Gérer vos rendez-vous médicaux",
      icon: FaCalendarCheck,
      color: ACCENT_GREEN,
      stats: `${stats.rendezVous} RDV à venir`,
    },
    {
      href: "/dashboard/update",
      title: "Mettre à jour",
      description: "Modifier vos informations personnelles",
      icon: FaUserEdit,
      color: PRIMARY_BLUE,
      stats: "Profil à jour",
    },
  ];

  return (
    <DashboardLayout>
      {/* En-tête du dashboard */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Bonjour,{" "}
              <span style={{ color: PRIMARY_BLUE }}>
                {patient.user?.prenom} {patient.user?.name}
              </span>
            </h1>
            <p className="text-gray-600 mt-1">
              Bienvenue dans votre espace patient personnalisé
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              style={{
                backgroundColor: `${ACCENT_GREEN}10`,
                color: ACCENT_GREEN,
                border: `1px solid ${ACCENT_GREEN}30`,
              }}
            >
              <FaClipboardCheck className="inline mr-2" />
              Patient actif
            </div>
            {stats.prochainRdv && (
              <div
                className="px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                style={{
                  backgroundColor: `${PRIMARY_BLUE}10`,
                  color: PRIMARY_BLUE,
                  border: `1px solid ${PRIMARY_BLUE}30`,
                }}
              >
                <FaBell className="inline mr-2" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section informations patient */}
      <div className="mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <FaUserMd className="mr-3" style={{ color: PRIMARY_BLUE }} />
              Vos informations personnelles
            </h2>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <InfoCard
                icon={FaIdCard}
                label="Code Patient"
                value={patient.code_patient}
                color={PRIMARY_BLUE}
              />
              <InfoCard
                icon={FaPhoneAlt}
                label="Téléphone"
                value={patient.telephone}
                color={ACCENT_GREEN}
              />
              <InfoCard
                icon={FaEnvelope}
                label="Email"
                value={patient.user?.email || "Non spécifié"}
                color={PRIMARY_BLUE}
              />
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <Link
                href="/dashboard/update"
                className="inline-flex items-center text-sm font-medium hover:opacity-80 transition duration-200"
                style={{ color: PRIMARY_BLUE }}
              >
                <FaUserEdit className="mr-2" />
                Mettre à jour mes informations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section Services */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Vos services médicaux
          </h2>
          <div className="text-sm text-gray-500">
            {serviceCards.length} services disponibles
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((service, index) => (
            <ServiceCard
              key={index}
              href={service.href}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              stats={service.stats}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

// Composant InfoCard
const InfoCard = ({ icon: Icon, label, value, color }) => (
  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition duration-200">
    <div className="flex items-start">
      <div
        className="p-2 rounded-lg mr-4"
        style={{ backgroundColor: `${color}10` }}
      >
        <Icon className="text-lg" style={{ color }} />
      </div>
      <div>
        <p className="text-xs font-medium text-gray-500 mb-1">{label}</p>
        <p className="text-sm font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

// Composant ServiceCard
const ServiceCard = ({
  href,
  title,
  description,
  icon: Icon,
  color,
  stats,
}) => (
  <Link href={href}>
    <div className="group bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg transition-all duration-300 hover:border-transparent cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div
          className="p-3 rounded-xl"
          style={{ backgroundColor: `${color}10` }}
        >
          <Icon className="text-xl" style={{ color }} />
        </div>
        <div
          className="text-xs font-medium px-3 py-1 rounded-full"
          style={{
            backgroundColor: `${color}10`,
            color: color,
          }}
        >
          {stats}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:opacity-80 transition duration-200">
        {title}
      </h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      <div className="flex items-center text-sm font-medium" style={{ color }}>
        <span>Accéder</span>
        <svg
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </div>
  </Link>
);

// Composant ActivityItem
const ActivityItem = ({ type, date, description, doctor }) => {
  const getIcon = () => {
    switch (type) {
      case "consultation":
        return FaStethoscope;
      case "prescription":
        return FaPrescription;
      case "rdv":
        return FaCalendarCheck;
      default:
        return FaNotesMedical;
    }
  };

  const getColor = () => {
    switch (type) {
      case "consultation":
        return PRIMARY_BLUE;
      case "prescription":
        return ACCENT_GREEN;
      case "rdv":
        return "#8b5cf6";
      default:
        return "#6b7280";
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case "consultation":
        return "Consultation";
      case "prescription":
        return "Ordonnance";
      case "rdv":
        return "Rendez-vous";
      default:
        return "Activité";
    }
  };

  const Icon = getIcon();
  const color = getColor();

  return (
    <div className="flex items-center p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition duration-200">
      <div
        className="p-2 rounded-lg mr-4"
        style={{ backgroundColor: `${color}10` }}
      >
        <Icon className="text-sm" style={{ color }} />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-gray-900">
            {description}
          </span>
          <span className="text-xs text-gray-500">
            {new Date(date).toLocaleDateString("fr-FR")}
          </span>
        </div>
        <div className="flex items-center text-xs text-gray-600">
          <span
            className="px-2 py-1 rounded mr-2"
            style={{ backgroundColor: `${color}10`, color }}
          >
            {getTypeLabel()}
          </span>
          <span>Avec {doctor}</span>
        </div>
      </div>
    </div>
  );
};
