import { Navigation } from "@/components/Navigation";
import { Reviews } from "@/components/Reviews";
import { ReviewForm } from "@/components/ReviewForm";
import {
  Clock,
  Users,
  MapPin,
  Coffee,
  Package,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

const FleursEnPerles = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-16 px-4 bg-base-200 text-center">
        <h1 className="text-3xl font-bold font-serif text-primary mb-2">
          Atelier Fleurs en Perles
        </h1>
        <p className="text-base mb-6">
          Créez une fleurs éternelles, perle par perle !
        </p>
        <a
          href="https://calendar.app.google/qXQQJ4ghfSfR6bG49"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          Réserver votre atelier
        </a>
      </section>

      {/* Quick info */}
      <section className="py-6 px-4">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-8 text-center text-sm">
          <div>
            <p className="opacity-60">Durée</p>
            <p className="text-lg font-bold">3 heures</p>
          </div>
          <div>
            <p className="opacity-60">Participants</p>
            <p className="text-lg font-bold">
              1-6 <span className="font-normal text-sm">pers.</span>
            </p>
          </div>
          <div>
            <p className="opacity-60">À partir de</p>
            <p className="text-lg font-bold text-primary">40€</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-10 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold font-serif text-primary mb-3">
            Le principe
          </h2>
          <p className="leading-relaxed">
            La technique des fleurs en perles consiste à assembler des petites
            perles de coraille sur du fil de fer pour former des pétales, des
            feuilles et des tiges, créant ainsi des fleurs qui ne se fanent
            jamais. Chaque participant choisit son modèle et ses couleurs pour
            repartir avec une fleur unique et personnalisée. Un atelier zen,
            minutieux et terriblement satisfaisant !
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-10 px-4 bg-base-200">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold font-serif text-primary mb-6 text-center">
            Le déroulé
          </h2>

          <ul className="steps steps-vertical lg:steps-horizontal w-full mb-6 text-sm">
            <li className="step step-primary">Introduction</li>
            <li className="step step-primary">Choix</li>
            <li className="step step-primary">Création</li>
            <li className="step step-primary">Finitions</li>
          </ul>

          <div className="space-y-3">
            {[
              "Découverte de la technique et des matériaux (perles, fils de laiton, techniques d'enfilage...)",
              "Choix de votre modèle de fleur et de votre palette de couleurs",
              "Réalisation guidée, pétale par pétale, à votre propre rythme",
              "Assemblage de la tige et mise en bouquet de votre création",
              "Repartez avec votre fleur (ou petit bouquet !) terminée et prête à décorer votre intérieur",
            ].map((step, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-10 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold font-serif text-primary mb-6 text-center">
            Informations pratiques
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Clock, title: "Durée", text: "3 heures" },
              { icon: Users, title: "Participants", text: "1 à 6 personnes" },
              {
                icon: Package,
                title: "Matériel",
                text: "Tout le matériel est fourni (perles, fils de fer, pinces, tiges florales...)",
              },
              {
                icon: Coffee,
                title: "Collation",
                text: "Thé et café à volonté ainsi qu'une petite pause gourmande prévue : sucré ou salé, à décider ensemble à l'avance.",
              },
              {
                icon: MapPin,
                title: "Lieu",
                text: "Chez moi (quartier La Chasse à Etterbeek)",
              },
              {
                icon: CheckCircle2,
                title: "Niveau",
                text: "Tous niveaux, débutants bienvenus",
              },
            ].map(({ icon: Icon, title, text }, idx) => (
              <div
                key={idx}
                className="flex gap-3 items-start p-3 rounded-lg bg-base-200"
              >
                <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">{title}</p>
                  <p className="text-sm opacity-80">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="mt-6 p-4 rounded-lg bg-primary text-primary-content">
            <h3 className="font-bold text-center mb-3">Tarifs</h3>
            <div className="space-y-1 text-sm">
              {[
                ["1 personne", "40€"],
                ["2 personnes", "60€"],
                ["3 personnes", "70€"],
                ["4 personnes", "80€"],
                ["5 personnes", "90€"],
                ["6 personnes", "100€"],
              ].map(([label, price]) => (
                <div key={label} className="flex justify-between">
                  <span>{label}</span>
                  <span className="font-bold">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 px-4 bg-base-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold font-serif text-primary mb-6 text-center">
            Galerie
          </h2>
          <div className="carousel carousel-center max-w-full space-x-3 p-2">
            {[
              "/perles1.webp",
              "/perles2.webp",
              "/perles3.webp",
              "/perles4.webp",
              "/perles5.webp",
              "/perles6.webp",
            ].map((src, idx) => (
              <div key={idx} className="carousel-item">
                <img
                  src={src}
                  alt={`Fleurs en Perles ${idx + 1}`}
                  className="rounded-lg w-64 h-64 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-3">
            <h2 className="text-xl font-bold font-serif text-primary">Avis</h2>
            <button
              className="btn btn-outline btn-primary btn-sm"
              onClick={() => setShowReviewForm(!showReviewForm)}
            >
              Laisser un avis
            </button>
          </div>

          {showReviewForm && (
            <div className="card bg-base-100 border border-base-300 mb-6">
              <div className="card-body">
                <ReviewForm
                  workshopType="fleurs-en-perles"
                  onSuccess={() => setShowReviewForm(false)}
                />
              </div>
            </div>
          )}

          <Reviews workshopType="fleurs-en-perles" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-primary text-primary-content text-center">
        <h2 className="text-xl font-bold font-serif mb-4">
          Prêt à créer vos premières fleurs éternelles ?
        </h2>
        <a
          href="https://calendar.app.google/qXQQJ4ghfSfR6bG49"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-secondary"
        >
          Réserver votre atelier
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-base-200 border-t border-base-300 text-center text-sm">
        <p className="font-serif font-bold text-primary">ChloHal</p>
        <p className="mt-1 opacity-70">© 2026 ChloHal - Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default FleursEnPerles;
