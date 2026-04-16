import { useState } from "react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import ImageLightbox from "@/components/ImageLightbox";

const terrasseHero = "/lovable-uploads/a3c706c9-bca0-41dd-b446-2e1abbd0ffc8.png";
const pergolaHero = "/lovable-uploads/ddeac434-f6b0-40a7-8c8a-bf5404466ecc.jpg";
const carportHero = "/lovable-uploads/bab29595-ded7-4fea-89b4-42edbb7665b1.jpg";
import galleryTer2 from "@/assets/gallery-terrasse-2.jpg";
import galleryPer2 from "@/assets/gallery-pergola-2.jpg";
import galleryCar2 from "@/assets/gallery-carport-2.jpg";
const gallerySur = "/lovable-uploads/3f41b903-027b-42f5-b477-c5d3db5eacb9.jpg";
import heroMain from "@/assets/hero-main.jpg";

type Category = "all" | "terrasse" | "pergola" | "carport" | "surmesure";

const projects = [
  { src: terrasseHero, alt: "Terrasse bois sur mesure", cat: "terrasse" as Category },
  { src: pergolaHero, alt: "Pergola bois élégante", cat: "pergola" as Category },
  { src: carportHero, alt: "Carport bois double", cat: "carport" as Category },
  { src: galleryTer2, alt: "Terrasse bois avec aménagements", cat: "terrasse" as Category },
  { src: galleryPer2, alt: "Pergola bois végétalisée", cat: "pergola" as Category },
  { src: galleryCar2, alt: "Carport bois avec rangement", cat: "carport" as Category },
  { src: gallerySur, alt: "Projet bois sur mesure", cat: "surmesure" as Category },
  { src: heroMain, alt: "Terrasse et pergola combinées", cat: "terrasse" as Category },
];

const filters: { label: string; value: Category }[] = [
  { label: "Tous", value: "all" },
  { label: "Terrasses", value: "terrasse" },
  { label: "Pergolas", value: "pergola" },
  { label: "Carports", value: "carport" },
  { label: "Sur mesure", value: "surmesure" },
];

const Realisations = () => {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.cat === active);

  return (
    <Layout>
      <SEOHead
        title="Nos Réalisations | La Planète Bois Soissons"
        description="Découvrez nos réalisations de terrasses, pergolas, carports et aménagements bois sur mesure à Soissons et alentours."
        canonical="https://laplanetebois.fr/realisations"
      />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="mb-10 md:mb-14 text-center">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-balance">
              Nos réalisations — terrasses, pergolas et carports à Soissons
            </h1>
            <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto">
              Découvrez nos projets récents d'aménagements extérieurs bois autour de Soissons.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === f.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <ImageLightbox
            images={filtered.map((p) => ({ src: p.src, alt: p.alt }))}
            gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          />
        </div>
      </section>

      <CTASection title="Vous avez un projet en tête ?" subtitle="Parlez-nous de votre projet et recevez une estimation rapide." />
    </Layout>
  );
};

export default Realisations;
