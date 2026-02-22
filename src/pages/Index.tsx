import { Navigation } from "@/components/Navigation";
import { Reviews } from "@/components/Reviews";
import { ReviewForm } from "@/components/ReviewForm";
import { Link } from "react-router-dom";
import { Scissors, Palette, Star, Gem } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 px-4 bg-base-200">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
            Bienvenue
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto">
            Hello, j'ai 27 ans et une passion dévorante pour tout ce qui touche
            à la créativité et à ce que je peux faire de mes dix doigts. Ce que
            j'aime encore plus, c'est de transmettre ma passion et de rendre
            quelque chose perçu d'inaccessible à la portée de tous.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="avatar mb-6">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="/moi.png" alt="ChloHal" />
            </div>
          </div>

          <h2 className="text-2xl font-bold font-serif text-primary mb-4">
            A votre service
          </h2>
          <p className="mb-3 leading-relaxed">
            Je vous propose des ateliers de couture et de linogravure, entre
            potes, où chaque groupe bénéficie d'une activité sur mesure et
            repart avec son propre projet.
          </p>
          <p className="leading-relaxed">
            Chaque atelier est un moment où vous apprendrez les techniques
            fondamentales tout en créant votre propre projet. Que vous soyez
            débutant ou que vous souhaitiez perfectionner vos compétences, vous
            trouverez ici un espace pour créer, vous amuser, découvrir des
            passions et vous créer des souvenirs.
          </p>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-16 px-4 bg-base-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold font-serif text-primary mb-10 text-center">
            Les Ateliers proposés
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Couture */}
            <div className="card bg-base-100 border border-base-300">
              <figure className="px-8 pt-8">
                <div className="bg-primary/10 rounded-box p-6 w-full flex justify-center">
                  <Scissors className="w-12 h-12 text-primary" />
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title font-serif text-primary">
                  Atelier Couture
                </h3>
                <p className="text-sm">
                  Découvrez les bases de la couture et créez votre premier
                  projet textile. En petit comité (1 à 5 personnes), apprenez
                  les points essentiels et repartez avec votre création unique.
                </p>
                <div className="flex gap-4 mt-3 text-sm">
                  <span>4h</span>
                  <span className="font-semibold text-primary">dès 50€</span>
                  <span>1-5 pers.</span>
                </div>
                <div className="card-actions mt-4">
                  <Link to="/couture" className="btn btn-primary btn-sm">
                    Découvrir et réserver
                  </Link>
                </div>
              </div>
            </div>

            {/* Linogravure */}
            <div className="card bg-base-100 border border-base-300">
              <figure className="px-8 pt-8">
                <div className="bg-primary/10 rounded-box p-6 w-full flex justify-center">
                  <Palette className="w-12 h-12 text-primary" />
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title font-serif text-primary">
                  Atelier Linogravure
                </h3>
                <p className="text-sm">
                  Explorez la linogravure. Créez une fresque grâce aux motifs
                  que vous aurez imaginés et créés. Un atelier convivial pour 1
                  à 8 personnes, chez moi ou chez vous.
                </p>
                <div className="flex gap-4 mt-3 text-sm">
                  <span>3h</span>
                  <span className="font-semibold text-primary">dès 50€</span>
                  <span>1-8 pers.</span>
                </div>
                <div className="card-actions mt-4">
                  <Link to="/linogravure" className="btn btn-primary btn-sm">
                    Découvrir et réserver
                  </Link>
                </div>
              </div>
            </div>

            {/* Fleurs en Perles */}
            <div className="card bg-base-100 border border-base-300">
              <figure className="px-8 pt-8">
                <div className="bg-primary/10 rounded-box p-6 w-full flex justify-center">
                  <Gem className="w-12 h-12 text-primary" />
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title font-serif text-primary">
                  Atelier Fleurs en Perles
                </h3>
                <p className="text-sm">
                  Créez des fleurs éternelles en assemblant des perles sur du
                  fil de laiton. Un atelier minutieux et zen pour 1 à 6
                  personnes, repartez avec une composition florale unique.
                </p>
                <div className="flex gap-4 mt-3 text-sm">
                  <span>3h</span>
                  <span className="font-semibold text-primary">dès 40€</span>
                  <span>1-6 pers.</span>
                </div>
                <div className="card-actions mt-4">
                  <Link
                    to="/fleurs-en-perles"
                    className="btn btn-primary btn-sm"
                  >
                    Découvrir et réserver
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <h2 className="text-2xl font-bold font-serif text-primary">
              Avis des participants
            </h2>
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

          <Reviews limit={6} />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4 bg-base-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold font-serif text-primary mb-8 text-center">
            Galerie
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
              <img
                key={idx}
                src={src}
                alt={`Création ${idx + 1}`}
                className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-base-200 border-t border-base-300 text-center text-sm">
        <p className="font-serif font-bold text-primary">ChloHal</p>
        <p className="mt-1 opacity-70">© 2026 ChloHal - Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default Index;
