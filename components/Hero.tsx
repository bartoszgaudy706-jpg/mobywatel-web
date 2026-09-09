'use client';

import { ArrowRight, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-mobywatel-primary to-mobywatel-primary-dark text-white py-20 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="section-title text-white mb-6">
              Twoje dokumenty zawsze<br />pod ręką
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              mObywatel to mobilna aplikacja, która umożliwia bezpieczne przechowywanie i okazywanie ważnych dokumentów tożsamości.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-mobywatel-primary font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition flex items-center gap-2">
                Pobierz aplikację
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-mobywatel-primary transition">
                Dowiedz się więcej
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-4 w-64 h-auto">
                <div className="bg-gradient-to-br from-mobywatel-primary to-mobywatel-primary-dark rounded-lg p-6 text-white text-center">
                  <Smartphone size={48} className="mx-auto mb-4" />
                  <p className="font-bold">Twoje Dokumenty</p>
                  <p className="text-sm text-blue-100">zawsze z Tobą</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
