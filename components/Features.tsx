'use client';

import { Lock, Smartphone, FileText, Shield, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: <Lock size={32} />,
    title: 'Bezpieczne Przechowywanie',
    description: 'Twoje dokumenty chronimy przy pomocy najnowszych standardów szyfrowania i bezpieczeństwa.'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobilna Wersja',
    description: 'Dostęp do dokumentów na smartfonie w każdym miejscu i o każdej porze.'
  },
  {
    icon: <FileText size={32} />,
    title: 'Wiele Dokumentów',
    description: 'Przechowuj dokumenty tożsamości, prawo jazdy, ubezpieczenie i wiele innych.'
  },
  {
    icon: <Shield size={32} />,
    title: 'Potwierdzony Obywatel',
    description: 'Uwierzytelnianie poprzez profil zaufany, bank lub eID dla maksymalnego bezpieczeństwa.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Szybka Identyfikacja',
    description: 'Błyskawiczne potwierdzenie tożsamości w urzędach i instytucjach publicznych.'
  },
  {
    icon: <Users size={32} />,
    title: 'Wsparcie 24/7',
    description: 'Profesjonalny zespół wsparcia dostępny dla Ciebie w każdej chwili.'
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900">Dlaczego wybrać mObywatela?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aplikacja łączy bezpieczeństwo, wygodę i nowoczesną technologię dla Twojej wygody.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card text-center group hover:shadow-xl">
              <div className="text-mobywatel-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
