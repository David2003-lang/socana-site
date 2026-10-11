export default function Home() {
  const products = [
    "Caoutchouc naturel",
    "Cacao",
    "Noix de cajou",
    "Coques de cajou",
    "Café",
  ];

  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#1F5A36]">
      <header className="flex items-center justify-between px-6 py-6 md:px-12">
        
<a href="#accueil" className="flex items-center">
  <img
    src="/socana-logo.jpeg"
    alt="SOCANA COOP-CA"
    className="h-16 w-auto object-contain"
  />
</a>


        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <a href="#accueil">Accueil</a>
          <a href="#apropos">À propos</a>
          <a href="#produits">Nos produits</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
            <section
        id="accueil"
        className="relative overflow-hidden px-6 py-24 md:px-12 md:py-36"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#B66B32]">
              Coopérative agricole · Côte d’Ivoire
            </p>

            <h2 className="text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
              Cultivons
              <span className="block text-[#B66B32]">l’avenir,</span>
              ensemble.
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-gray-600">
              De la terre aux marchés, SOCANA COOP-CA s’engage à valoriser
              les richesses agricoles et à bâtir des partenariats durables.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#produits"
                className="rounded-full bg-[#1F5A36] px-7 py-4 font-semibold text-white transition hover:bg-[#17452A]"
              >
                Découvrir nos produits →
              </a>

              <a
                href="#apropos"
                className="rounded-full border border-[#1F5A36]/30 px-7 py-4 font-semibold transition hover:bg-white"
              >
                Qui sommes-nous ?
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-gray-500">
              <span>● Qualité</span>
              <span>● Engagement</span>
              <span>● Durabilité</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#E8E2D5]" />

            <div className="relative flex min-h-[360px] items-end overflow-hidden rounded-[1.5rem] bg-cover bg-center p-8 md:min-h-[480px]" style={{ backgroundImage: "url('/NewHomepage.png')" }}>
              <div className="absolute right-8 top-8 text-7xl opacity-30">
                🌿
              </div>

              <div className="relative max-w-sm text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E7C49D]">
                  Notre terre, notre richesse
                </p>

                <p className="mt-3 text-3xl font-bold leading-tight">
                  Des produits agricoles au potentiel durable.
                </p>
              </div>
            </div>

<div className="absolute -bottom-5 right-3 rounded-2xl bg-white px-5 py-4 shadow-lg md:right-4">             <p className="text-sm font-bold text-[#1F5A36]">
                SOCANA COOP-CA
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Ensemble, allons plus loin.
              </p>
            </div>
          </div>
        </div>
      </section>
            <section id="apropos" className="bg-white px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B66B32]">
            Qui sommes-nous ?
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            À propos de SOCANA COOP-CA
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            SOCANA COOP-CA est une coopérative agricole engagée dans la
            valorisation des produits locaux. Notre ambition est de
            développer des partenariats durables et de contribuer au
            développement du secteur agricole.
          </p>
        </div>
      </section>
            <section id="produits" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B66B32]">
              Notre savoir-faire
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Nos produits
            </h2>

            <p className="mt-4 text-gray-600">
              Découvrez les produits agricoles que nous valorisons.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
  <div
    key={product}
    className="rounded-2xl border border-[#E8E2D5] bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
  >
    {product === "Cacao" ? (
      <img
        src="/cacao.jpg"
        alt="Cacao"
        className="mb-4 h-40 w-full rounded-xl object-cover"
      />
   ) : product === "Caoutchouc naturel" ? (
  <img
    src="/caoutchouc.jpg"
    alt="Caoutchouc naturel"
    className="mb-4 h-40 w-full rounded-xl object-cover"
  />
) : product === "Noix de cajou" ? (
  <img
    src="/cajou.Jpg"
    alt="Noix de cajou"
    className="mb-4 h-40 w-full rounded-xl object-cover"
  />
) : product === "Coques de cajou" ? (
  <img
    src="/coques-cajou.Jpg"
    alt="Coques de cajou"
    className="mb-4 h-40 w-full rounded-xl object-cover"
  />
) : product === "Café" ? (
  <img
    src="/cafe.Jpg"
    alt="Café"
    className="mb-4 h-40 w-full rounded-xl object-cover"
  />
) : (
  <div className="mb-4 text-3xl">🌿</div>
)}
    <h3 className="text-xl font-bold">{product}</h3>
    <p className="mt-3 text-sm leading-6 text-gray-600">
      Un produit agricole au cœur de notre engagement pour la
      qualité et le développement durable.
    </p>
  </div>
))}
          </div>
        </div>
      </section>
            <section
        id="contact"
        className="bg-[#1F5A36] px-6 py-20 text-center text-white md:py-24"
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#E7C49D]">
            Parlons ensemble
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Construisons de nouveaux partenariats.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-white/80">
            Vous souhaitez collaborer avec SOCANA COOP-CA ? Contactez-nous
            pour échanger sur les possibilités de partenariat.
          </p>

          <a
            href="mailto:contact@socana.ci"
            className="mt-8 inline-block rounded-full bg-[#F8F5EF] px-8 py-4 font-semibold text-[#1F5A36] transition hover:bg-white"
          >
            Envoyer un e-mail
          </a>
        </div>
      </section>
            <footer className="bg-[#17452A] px-6 py-7 text-center text-sm text-white/70">
        SOCANA COOP-CA. Tous droits réservés.
      </footer>
    </main>
  );
}