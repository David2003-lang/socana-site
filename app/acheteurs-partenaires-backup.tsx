export default function AcheteursPartenaires() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#1F5A36]">
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <a
            href="/"
            className="mb-10 inline-block font-semibold text-[#1F5A36] hover:underline"
          >
            ← Retour à l’accueil
          </a>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]">
            SOCANA COOP-CA
          </p>

          <h1 className="mb-6 text-3xl font-bold md:text-5xl">
            ACHETEURS &amp; PARTENAIRES
          </h1>

          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            Parlez-nous de votre besoin.
          </h2>

          <p className="mb-10 max-w-3xl leading-7 text-gray-700">
            Nous n’affichons pas de prix ou de capacité fixe en ligne.
            Chaque demande est étudiée selon le produit, le volume,
            les spécifications et la destination.
          </p>

          <form
            action="mailto:exportsocanacoopca@gmail.com"
            method="post"
            encType="text/plain"
            className="grid gap-6 md:grid-cols-2"
          >
            <div>
              <label className="mb-2 block font-medium">ENTREPRISE</label>
              <input
                type="text"
                name="Entreprise"
                required
                className="w-full rounded border border-gray-300 bg-white p-3 text-gray-900"
                placeholder="Nom de votre entreprise"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">NOM DU CONTACT</label>
              <input
                type="text"
                name="Contact"
                required
                className="w-full rounded border border-gray-300 bg-white p-3 text-gray-900"
                placeholder="Votre nom complet"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">EMAIL</label>
              <input
                type="email"
                name="Email"
                required
                className="w-full rounded border border-gray-300 bg-white p-3 text-gray-900"
                placeholder="vous@entreprise.com"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">PRODUIT</label>
              <select
                name="Produit"
                required
                defaultValue=""
                className="w-full rounded border border-gray-300 bg-white p-3 text-gray-900"
              >
                <option value="" disabled>
                  Choisissez un produit
                </option>
                <option>Caoutchouc naturel</option>
                <option>Cacao</option>
                <option>Noix de cajou</option>
                <option>Coques de cajou</option>
                <option>Café</option>
                <option>Autre</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">QUANTITÉ</label>
              <input
                type="text"
                name="Quantité"
                required
                className="w-full rounded border border-gray-300 bg-white p-3 text-gray-900"
                placeholder="Ex. : 20 tonnes"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">DESTINATION</label>
              <input
                type="text"
                name="Destination"
                required
                className="w-full rounded border border-gray-300 bg-white p-3 text-gray-900"
                placeholder="Pays ou port de destination"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block font-medium">CONDITIONS</label>
              <input
                type="text"
                name="Conditions"
                className="w-full rounded border border-gray-300 bg-white p-3 text-gray-900"
                placeholder="Incoterms ou conditions souhaitées (facultatif)"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block font-medium">MESSAGE</label>
              <textarea
                name="Message"
                rows={5}
                className="w-full rounded border border-gray-300 bg-white p-3 text-gray-900"
                placeholder="Précisez vos besoins ou spécifications."
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded bg-[#1F5A36] px-8 py-4 font-semibold text-white transition hover:bg-[#17452A]"
              >
                ENVOYER LA DEMANDE →
              </button>
              <p className="mt-3 text-sm text-gray-600">
                L’envoi nécessite une application de messagerie configurée.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}