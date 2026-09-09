'use client';

import { Lock, Eye, Fingerprint, Eye2 } from 'lucide-react';

export default function Security() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title text-gray-900">Bezpieczeństwo na Pierwszym Miejscu</h2>
            <p className="text-lg text-gray-600 mb-8">
              Twoje dane są chronione najnowoczesnymi technologiami szyfrowania i bezpieczeństwa. Kontrolujesz w pełni dostęp do swoich dokumentów.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <Lock className="text-mobywatel-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900">Szyfrowanie End-to-End</h3>
                  <p className="text-gray-600 text-sm">Wszystkie dane szyfrowane są na urządzeniu użytkownika</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Fingerprint className="text-mobywatel-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900">Biometryczne Zabezpieczenie</h3>
                  <p className="text-gray-600 text-sm">Dostęp do aplikacji wymagany poprzez odcisk palca lub twarz</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Eye className="text-mobywatel-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900">Pełna Kontrola</h3>
                  <p className="text-gray-600 text-sm">Możliwość sprawdzenia historii dostępu do Twoich dokumentów</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-mobywatel-primary rounded-2xl p-12 text-white text-center">
            <Lock size={64} className="mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Chronione Zgodnie z Prawem</h3>
            <p className="text-blue-100 mb-6">
              mObywatel funkcjonuje zgodnie z ustawą o aplikacji mObywatel (Dz. U. z 2023 r. poz. 1234) i spełnia najwyższe standardy bezpieczeństwa określone przez rządowe instytucje bezpieczeństwa.
            </p>
            <button className="bg-white text-mobywatel-primary font-bold py-2 px-6 rounded-lg hover:bg-blue-50 transition">
              Czytaj dokumenty bezpieczeństwa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
