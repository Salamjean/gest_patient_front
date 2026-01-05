'use client';

import { useState } from 'react';
import NavbarHome from '@/components/NavbarHome';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Swal from 'sweetalert2';

const PRIMARY_BLUE = '#06b6d4';
const ACCENT_GREEN = '#2da442';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi (remplacer par votre API)
    setTimeout(() => {
      Swal.fire({
        icon: 'success',
        title: 'Message envoyé !',
        text: 'Nous vous répondrons dans les plus brefs délais.',
        confirmButtonColor: PRIMARY_BLUE
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Téléphone',
      details: ['+225 27 XX XX XX XX', '+225 07 XX XX XX XX'],
      color: PRIMARY_BLUE
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['contact@gemma-ci.com', 'support@gemma-ci.com'],
      color: ACCENT_GREEN
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Adresse',
      details: ['Abidjan, Côte d\'Ivoire', 'Cocody, Riviera Palmeraie'],
      color: PRIMARY_BLUE
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <NavbarHome />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#06b6d4] to-[#2da442] bg-clip-text text-transparent">
            Contactez-Nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Notre équipe est à votre écoute. N'hésitez pas à nous contacter pour toute question ou assistance.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div 
                  className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-4"
                  style={{ backgroundColor: `${info.color}20` }}
                >
                  <info.icon size={28} style={{ color: info.color }} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-1">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: PRIMARY_BLUE }}>
              Envoyez-nous un Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#06b6d4] to-[#2da442] text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Envoyer le Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: PRIMARY_BLUE }}>
            Notre Localisation
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-96 flex items-center justify-center border border-gray-200">
            <div className="text-center p-8">
              <FaMapMarkerAlt size={48} className="mx-auto mb-4" style={{ color: PRIMARY_BLUE }} />
              <p className="text-gray-600 text-lg">
                Carte interactive à venir
              </p>
              <p className="text-gray-500 mt-2">
                Abidjan, Cocody - Riviera Palmeraie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Suivez-nous sur les Réseaux Sociaux
          </h3>
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="flex items-center justify-center h-12 w-12 rounded-full bg-[#06b6d4] text-white hover:bg-[#2da442] transition-all duration-300 hover:scale-110"
            >
              <FaFacebook size={24} />
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center h-12 w-12 rounded-full bg-[#06b6d4] text-white hover:bg-[#2da442] transition-all duration-300 hover:scale-110"
            >
              <FaTwitter size={24} />
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center h-12 w-12 rounded-full bg-[#06b6d4] text-white hover:bg-[#2da442] transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
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