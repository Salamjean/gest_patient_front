import Link from 'next/link';
import Image from 'next/image'; 
import NavbarHome from '@/components/NavbarHome';
import { FaUserMd, FaHeartbeat } from 'react-icons/fa'; 

const BenefitCard = ({ icon, title, description, color }) => (
    <div className={`p-6 rounded-lg bg-white bg-opacity-95 shadow-md border-t-4 border-[#06b6d4] transition duration-300 hover:shadow-lg`}> 
        <div className={`text-4xl text-[#06b6d4] mx-auto mb-3`}>
            {icon}
        </div>
        <h3 className={`text-lg font-semibold text-primary-blue mb-2`}>{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative"> 
        <div className="fixed top-[64px] inset-x-0 bottom-0 z-0"> 
            <Image
                src="/gemma.jpeg" 
                alt="Fond médical moderne"
                fill={true} 
                style={{objectFit: "cover"}} 
                quality={80}
            />
            <div className="fixed top-[64px] inset-x-0 bottom-0 bg-white opacity-60 backdrop-blur-sm"></div> 
        </div>
        
        <NavbarHome />

        <main className="flex flex-1 flex-col items-center justify-center p-4 sm:p-24 pt-24 sm:pt-32 relative z-10"> 
            
            <div className="w-full max-w-xl p-8 sm:p-12 bg-white bg-opacity-95 rounded-2xl shadow-2xl border border-gray-100 text-center transform hover:shadow-3xl transition duration-500 mt-8">
                
                <FaHeartbeat className="text-6xl text-[#06b6d4] mx-auto mb-6 animate-pulse" /> 

                <h1 className="text-5xl font-extrabold text-primary-blue mb-4">
                  Votre Espace Patient
                </h1>
                <p className="text-xl text-gray-700 mb-10 font-light">
                  Gérez votre santé en toute simplicité.
                </p>

                <Link href="/login" passHref>
                  <button 
                    className="w-full sm:w-auto px-12 py-4 
                               bg-[#06b6d4] text-white font-bold text-lg 
                               rounded-full shadow-xl 
                               hover:bg-primary-green/90 
                               transition duration-300 
                               transform hover:scale-105 hover:shadow-2xl 
                               focus:outline-none focus:ring-4 focus:ring-primary-green/50"
                  >
                    Se Connecter Maintenant
                  </button>
                </Link>
            </div>

            <div className="mt-16 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-8 text-center relative z-10">
                <BenefitCard icon={<FaUserMd />} title="Dossier Médical" description="Accédez à l'historique de vos consultations." color="primary-blue-600"/>
                <BenefitCard icon={<FaHeartbeat />} title="Rendez-vous" description="Prenez, modifiez et annulez vos RDV facilement." color="primary-green"/>
                <BenefitCard icon={<FaUserMd />} title="Sécurité" description="Connexion sécurisée par OTP pour votre confidentialité." color="primary-blue"/>
            </div>
        </main>
    </div>
  );
}