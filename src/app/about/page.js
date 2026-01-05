'use client';

import NavbarHome from '@/components/NavbarHome';
import { FaHospital, FaUserMd, FaHeartbeat, FaAward, FaUsers, FaGlobe } from 'react-icons/fa';

const PRIMARY_BLUE = '#06b6d4';
const ACCENT_GREEN = '#2da442';

export default function AboutPage() {
  const features = [
    {
      icon: FaHospital,
      title: 'Infrastructure Moderne',
      description: 'Des équipements de pointe pour des soins de qualité supérieure'
    },
    {
      icon: FaUserMd,
      title: 'Équipe Qualifiée',
      description: 'Des professionnels de santé expérimentés et dévoués'
    },
    {
      icon: FaHeartbeat,
      title: 'Soins Personnalisés',
      description: 'Une approche centrée sur le patient et ses besoins'
    },
    {
      icon: FaAward,
      title: 'Excellence Médicale',
      description: 'Des standards de qualité reconnus et certifiés'
    },
    {
      icon: FaUsers,
      title: 'Accompagnement',
      description: 'Un suivi continu et un soutien à chaque étape'
    },
    {
      icon: FaGlobe,
      title: 'Accessibilité',
      description: 'Des services accessibles à tous, partout'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <NavbarHome />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#06b6d4] to-[#2da442] bg-clip-text text-transparent">
              À Propos de GEMMA
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Votre partenaire de confiance pour une gestion moderne et efficace de vos soins de santé
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: PRIMARY_BLUE }}>
                Notre Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                GEMMA (Gestion Électronique des Maladies et du Monitoring Automatisé) est une plateforme innovante 
                conçue pour révolutionner la gestion des soins de santé en Côte d'Ivoire et au-delà.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Notre mission est de rendre les soins de santé plus accessibles, plus efficaces et plus transparents 
                grâce à la technologie numérique.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nous croyons que chaque patient mérite un accès facile à ses informations médicales et 
                un suivi personnalisé de sa santé.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#06b6d4]/10 to-[#2da442]/10 rounded-2xl p-8 border border-gray-200">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#06b6d4] text-white">
                      <FaHeartbeat size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Innovation</h3>
                    <p className="mt-2 text-gray-600">
                      Des solutions technologiques de pointe pour améliorer les soins
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#2da442] text-white">
                      <FaUsers size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Accessibilité</h3>
                    <p className="mt-2 text-gray-600">
                      Des services de santé accessibles à tous, partout
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#06b6d4] text-white">
                      <FaAward size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Excellence</h3>
                    <p className="mt-2 text-gray-600">
                      Un engagement constant vers la qualité et l'amélioration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: PRIMARY_BLUE }}>
            Nos Atouts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#06b6d4]/50"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#2da442] text-white mb-4">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#06b6d4] to-[#2da442]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-xl opacity-90">Patients Actifs</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl opacity-90">Professionnels de Santé</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl opacity-90">Établissements Partenaires</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 GEMMA - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
}