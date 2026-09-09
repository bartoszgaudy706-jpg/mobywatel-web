'use client';

import { CreditCard, FileText, BarChart3, Smartphone, MapPin, Calendar } from 'lucide-react';

const documents = [
  {
    icon: <CreditCard size={40} />,
    title: 'Dowód Osobisty',
    description: 'Cyfrowy odpowiednik dowodu osobistego z bezpiecznym QR kodem'
  },
  {
    icon: <FileText size={40} />,
    title: 'Prawo Jazdy',
    description: 'Posiadaj prawo jazdy zawsze przy sobie w cyfrowej formie'
  },
  {
    icon: <BarChart3 size={40} />,
    title: 'Ubezpieczenie OC',
    description: 'Potwierdzenie ważnego ubezpieczenia pojazdu'
  },
  {
    icon: <Smartphone size={40} />,
    title: 'Legitymacja Studencka',
    description: 'Cyfrowa legitymacja ze wszystkimi orzędzeniami'
  },
  {
    icon: <MapPin size={40} />,
    title: 'Rejestracja Pojazdu',
    description: 'Świadectwo rejestracji pojazdu zawsze pod ręką'
  },
  {
    icon: <Calendar size={40} />,
    title: 'Paszport',
    description: 'Cyfrowy dostęp do danych z Twojego paszportu'
  }
];

export default function Documents() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900">Obsługiwane Dokumenty</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Przechowuj najważniejsze dokumenty w jednym bezpiecznym miejscu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div key={index} className="card flex flex-col items-center text-center">
              <div className="text-mobywatel-primary mb-4">{doc.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{doc.title}</h3>
              <p className="text-gray-600 text-sm">{doc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
