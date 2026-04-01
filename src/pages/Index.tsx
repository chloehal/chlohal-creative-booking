import { Navigation } from "@/components/Navigation";
import { Reviews } from "@/components/Reviews";
import { ReviewForm } from "@/components/ReviewForm";
import { Link } from "react-router-dom";
import {
  Scissors,
  Palette,
  Star,
  Gem,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <div className="min-h-screen bg-base-100">
      <Navigation />

      {/* Hero */}
      <section className="relative py-28 px-4 bg-base-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-3xl mx-auto text-center relative">
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">
            Ateliers créatifs
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-base-content mb-6 leading-tight">
            Bienvenue
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto text-base-content/70 leading-relaxed">
            Hello, j'ai 27 ans et une passion dévorante pour tout ce qui touche
            à la créativité et à ce que je peux faire de mes dix doigts. Ce que
            j'aime encore plus, c'est de transmettre ma passion et de rendre
            quelque chose perçu d'inaccessible à la portée de tous.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="avatar mb-8">
            <div className="w-28 rounded-full ring-2 ring-primary/20 ring-offset-base-100 ring-offset-4">
              <img src="/moi.png" alt="ChloHal" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold font-serif text-base-content mb-6">
            À votre service
          </h2>
          <p className="mb-4 leading-relaxed text-base-content/70">
            Je vous propose des ateliers de couture et de linogravure, entre
            potes, où chaque groupe bénéficie d'une activité sur mesure et
            repart avec son propre projet.
          </p>
          <p className="leading-relaxed text-base-content/70">
            Chaque atelier est un moment où vous apprendrez les techniques
            fondamentales tout en créant votre propre projet. Que vous soyez
            débutant ou que vous souhaitiez perfectionner vos compétences, vous
            trouverez ici un espace pour créer, vous amuser, découvrir des
            passions et vous créer des souvenirs.
          </p>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-20 px-4 bg-base-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">
              Découvrir
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-base-content">
              Les Ateliers proposés
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Couture */}
            <div className="card bg-base-100 border border-base-300 hover:border-primary/30 transition-colors group">
              <figure className="px-6 pt-6">
                <div className="bg-secondary/10 rounded-box p-5 w-full flex justify-center">
                  <Scissors className="w-10 h-10 text-secondary" />
                </div>
              </figure>
              <div className="card-body items-center text-center gap-3">
                <h3 className="card-title font-serif text-base-content">
                  Atelier Couture
                </h3>
                <p className="text-sm text-base-content/60 leading-relaxed">
                  Découvrez les bases de la couture et créez votre premier
                  projet textile. En petit comité, apprenez les points
                  essentiels et repartez avec votre création unique.
                </p>
                <div className="flex gap-4 mt-2 text-xs text-base-content/50">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 4h
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" /> 1-5 pers.
                  </span>
                </div>
                <p className="font-semibold text-secondary text-sm">dès 50€</p>
                <div className="card-actions mt-2">
                  <Link
                    to="/couture"
                    className="btn btn-primary btn-sm gap-1 group-hover:gap-2 transition-all"
                  >
                    Découvrir
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Linogravure */}
            <div className="card bg-base-100 border border-base-300 hover:border-primary/30 transition-colors group">
              <figure className="px-6 pt-6">
                <div className="bg-accent/10 rounded-box p-5 w-full flex justify-center">
                  <Palette className="w-10 h-10 text-accent" />
                </div>
              </figure>
              <div className="card-body items-center text-center gap-3">
                <h3 className="card-title font-serif text-base-content">
                  Atelier Linogravure
                </h3>
                <p className="text-sm text-base-content/60 leading-relaxed">
                  Explorez la linogravure. Créez une fresque grâce aux motifs
                  que vous aurez imaginés et créés. Un atelier convivial, chez
                  moi ou chez vous.
                </p>
                <div className="flex gap-4 mt-2 text-xs text-base-content/50">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 3h
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" /> 1-8 pers.
                  </span>
                </div>
                <p className="font-semibold text-accent text-sm">dès 50€</p>
                <div className="card-actions mt-2">
                  <Link
                    to="/linogravure"
                    className="btn btn-primary btn-sm gap-1 group-hover:gap-2 transition-all"
                  >
                    Découvrir
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Fleurs en Perles */}
            <div className="card bg-base-100 border border-base-300 hover:border-primary/30 transition-colors group">
              <figure className="px-6 pt-6">
                <div className="bg-primary/10 rounded-box p-5 w-full flex justify-center">
                  <Gem className="w-10 h-10 text-primary" />
                </div>
              </figure>
              <div className="card-body items-center text-center gap-3">
                <h3 className="card-title font-serif text-base-content">
                  Fleurs en Perles
                </h3>
                <p className="text-sm text-base-content/60 leading-relaxed">
                  Créez des fleurs éternelles en assemblant des perles sur du
                  fil de laiton. Un atelier minutieux et zen, repartez avec une
                  composition florale unique.
                </p>
                <div className="flex gap-4 mt-2 text-xs text-base-content/50">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 3h
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" /> 1-6 pers.
                  </span>
                </div>
                <p className="font-semibold text-primary text-sm">dès 40€</p>
                <div className="card-actions mt-2">
                  <Link
                    to="/fleurs-en-perles"
                    className="btn btn-primary btn-sm gap-1 group-hover:gap-2 transition-all"
                  >
                    Découvrir
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-2">
                Témoignages
              </p>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-base-content">
                Avis des participants
              </h2>
            </div>
            <button
              className="btn btn-outline btn-primary btn-sm"
              onClick={() => setShowReviewForm(!showReviewForm)}
            >
              <Star className="w-4 h-4" />
              Laisser un avis
            </button>
          </div>

          {showReviewForm && (
            <div className="card bg-base-100 border border-base-300 mb-8">
              <div className="card-body">
                <h3 className="card-title text-base">
                  Partagez votre expérience
                </h3>
                <ReviewForm onSuccess={() => setShowReviewForm(false)} />
              </div>
            </div>
          )}

          <Reviews />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-base-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">
              Créations
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-base-content">
              Galerie
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "/couture6.webp",
              "/lino1.png",
              "/lino2.png",
              "/couture10.webp",
              "/couture11.webp",
              "/lino8.webp",
              "/lino9.webp",
              "/couture12.webp",
              "/lino3.png",
              "/couture9.webp",
              "/couture7.webp",
              "/lino10.JPEG",
              "/lino11.webp",
              "/lino12.JPEG",
              "/lino13.JPEG",
            ].map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg">
                <img
                  src={src}
                  alt={`Création ${idx + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-neutral text-neutral-content text-center text-sm">
        <p className="font-serif font-bold text-lg">ChloHal</p>
        <p className="mt-2 opacity-60">
          © 2026 ChloHal — Tous droits réservés
        </p>
      </footer>
    </div>
  );
};

export default Index;
