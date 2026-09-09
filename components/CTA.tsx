'use client';

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-mobywatel-primary to-mobywatel-primary-dark py-16 md:py-24 text-white">
      <div className="container text-center">
        <h2 className="section-title text-white mb-6">
          Gotowy na Cyfrową Rewolucję?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Dołącz do milionów Polaków, którzy już korzystają z mObywatela i ciesz się wygodą posiadania dokumentów zawsze w kieszeni.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-white text-mobywatel-primary font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition">
            Pobierz z App Store
          </button>
          <button className="bg-white text-mobywatel-primary font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition">
            Pobierz z Google Play
          </button>
        </div>
      </div>
    </section>
  );
}
