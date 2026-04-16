import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { CheckCircle2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { getDevisUrl } from "@/lib/config";

// Removed unused import: atelierWide

const engagements = [
  {
    emoji: "🪵",
    title: "Fabrication locale",
    desc: "Tout est fabriqué dans notre atelier de Villeneuve-Saint-Germain. Matériaux sélectionnés, découpe précise, assemblage soigné.",
  },
  {
    emoji: "🔨",
    title: "Pose par notre équipe",
    desc: "Nos artisans posent ce qu'ils ont fabriqué. Pas de sous-traitance, une seule équipe responsable de A à Z.",
  },
  {
    emoji: "📋",
    title: "Garantie décennale",
    desc: "Tous nos chantiers sont couverts par notre garantie décennale. Vous investissez en toute sérénité.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Sélection du bois",
    desc: "Chaque planche est inspectée et choisie selon l'usage prévu : structure, terrasse, bardage.",
  },
  {
    step: "2",
    title: "Découpe & usinage",
    desc: "Nos machines permettent des coupes précises, des assemblages solides et des finitions nettes.",
  },
  {
    step: "3",
    title: "Pré-assemblage",
    desc: "Les éléments sont montés à blanc en atelier pour vérifier l'ajustement avant le chantier.",
  },
  {
    step: "4",
    title: "Contrôle qualité",
    desc: "Chaque pièce est vérifiée : dimensions, traitement, finition. Rien ne part sans validation.",
  },
  {
    step: "5",
    title: "Préparation chantier",
    desc: "Les éléments sont numérotés, protégés et organisés pour une pose rapide et propre sur site.",
  },
];

const galleryItems = [
  {
    src: "/lovable-uploads/fcfbbe4a-e8f0-44ff-b717-912008c201e8.png",
    alt: "Vue générale de l'atelier La Planète Bois",
    span: "md:col-span-2",
  },
  {
    src: "/lovable-uploads/acace443-3e1e-4567-b560-52ffd7e36cfb.jpg",
    alt: "Assemblage bois artisanal en atelier",
    span: "",
  },
  {
    src: "/lovable-uploads/dbb9c56c-d748-49ce-96f9-c1d6b5abc44b.jpg",
    alt: "Découpe bois sur machine professionnelle",
    span: "",
  },
  {
    src: "/lovable-uploads/5fc20f86-61de-454d-b4d7-46a2362c5270.jpg",
    alt: "Stockage des essences de bois en atelier",
    span: "",
  },
  {
    src: "/lovable-uploads/9a94199a-4aa5-444f-a51c-6025f92835ad.jpg",
    alt: "Équipe de charpentiers au travail",
    span: "md:col-span-2",
  },
  {
    src: "/lovable-uploads/5d7b36a6-a2f9-4093-98a9-f9728ad79003.jpg",
    alt: "Contrôle et finition d'une pièce bois",
    span: "",
  },
];

const NotreAtelier = () => (
  <Layout>
    <SEOHead
      title="Notre Atelier Bois près de Soissons | La Planète Bois"
      description="Découvrez l'atelier La Planète Bois : fabrication locale de terrasses, pergolas et carports en bois sur mesure près de Soissons. Savoir-faire artisanal et qualité."
      canonical="https://laplanetebois.fr/notre-atelier"
    />

    {/* HERO */}
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/atelier-hero-main.jpg"
          alt="Atelier de fabrication bois La Planète Bois"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/20" />
      </div>
      <div className="relative z-10 container-narrow px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Fabriqué ici, posé par nous
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-8 max-w-lg">
            Terrasses, pergolas et carports en bois sur mesure — conçus et fabriqués dans notre atelier près de Soissons.
          </p>
          <a
            href={getDevisUrl()}
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg text-lg hover:bg-accent/90 transition-colors"
          >
            Devis gratuit en 24h
          </a>
        </div>
      </div>
    </section>

    {/* QUI SOMMES-NOUS */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle title="Qui sommes-nous ?" center={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">La Planète Bois</strong>, c'est un atelier de fabrication installé
                à Villeneuve-Saint-Germain, dans l'Aisne. Nous concevons et réalisons des terrasses bois, pergolas et
                carports sur mesure pour les particuliers et professionnels de la région soissonnaise et au-delà.
              </p>
              <p>
                Chaque projet commence par une <strong className="text-foreground">visite technique gratuite</strong> sur
                votre chantier. Nos fabrications sortent de notre atelier — pas d'intermédiaire, pas de sous-traitance.
                On maîtrise chaque étape, de la conception à la pose.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              alt="L'équipe La Planète Bois dans l'atelier"
              className="w-full h-80 object-cover"
              src="/lovable-uploads/cdf82a87-38be-4399-9ff9-e71f115f5358.jpg"
            />
          </div>
        </div>
      </div>
    </section>

    {/* CE QUE NOUS FABRIQUONS */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <SectionTitle
          title="Ce que nous fabriquons"
          subtitle="Des ouvrages bois conçus et réalisés intégralement dans notre atelier."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Terrasses bois",
              desc: "Lames, lambourdes, structures porteuses : tout est préparé sur mesure avant la pose.",
            },
            {
              title: "Pergolas",
              desc: "Poteaux, traverses, couverture : chaque élément est usiné et pré-assemblé en atelier.",
            },
            {
              title: "Carports",
              desc: "Structures solides, charpentes précises, dimensions adaptées à vos véhicules.",
            },
            {
              title: "Bardages & habillages",
              desc: "Finitions extérieures en bois naturel pour un rendu esthétique durable.",
            },
            {
              title: "Clôtures & portails",
              desc: "Découpes personnalisées, traitements adaptés pour résister aux intempéries.",
            },
            {
              title: "Projets sur mesure",
              desc: "Tout ce que vous imaginez en bois, nous pouvons le concevoir et le fabriquer.",
            },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-background rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* COMMENT NOUS TRAVAILLONS */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionTitle
          title="Comment nous travaillons"
          subtitle="De la sélection du bois au départ sur chantier, chaque étape compte."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            {processSteps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-accent/10 flex items-center justify-center font-bold text-accent">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="overflow-hidden rounded-lg">
              <img
                alt="Stockage bois en atelier"
                className="w-full h-48 object-cover"
                src="/lovable-uploads/397ef25b-2eb6-4a8e-8f33-8a2ecd99290b.jpg"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                alt="Découpe bois professionnelle"
                className="w-full h-48 object-cover"
                src="/lovable-uploads/c3c70aed-7af6-4387-b76f-c0c9edf07ced.jpg"
              />
            </div>
            <div className="overflow-hidden rounded-lg col-span-2">
              <img
                alt="Contrôle qualité et finition"
                className="w-full h-48 object-cover"
                src="/lovable-uploads/3f4e3a91-25d0-422c-8673-c99de47f82e8.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* POURQUOI L'ATELIER CHANGE LA QUALITÉ */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <SectionTitle
          title="Pourquoi l'atelier change tout"
          subtitle="Un projet fabriqué en atelier, c'est un projet maîtrisé de bout en bout."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-lg">
            <img
              alt="Détail assemblage bois en atelier"
              className="w-full h-80 object-cover"
              src="/lovable-uploads/900287af-547c-4ad0-b605-2d78a1786d4a.jpg"
            />
          </div>
          <div className="space-y-4">
            {[
              "Pré-assemblage en atelier = ajustements parfaits sur chantier",
              "Contrôle qualité avant départ = zéro mauvaise surprise",
              "Découpe précise = moins de chutes, moins de gaspillage",
              "Numérotation des pièces = pose rapide et organisée",
              "Traitement en conditions contrôlées = durabilité optimale",
              "Équipe formée sur ses propres fabrications = cohérence totale",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-foreground text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* NOS ENGAGEMENTS */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionTitle title="Nos engagements" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engagements.map((e) => (
            <div key={e.title} className="p-6 bg-card rounded-lg border border-border text-center">
              <span className="text-4xl mb-4 block">{e.emoji}</span>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{e.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* GALERIE ATELIER */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <SectionTitle title="L'atelier en images" subtitle="Un aperçu de notre espace de travail et de nos méthodes." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {galleryItems.map((img, i) => (
            <div key={i} className={`overflow-hidden rounded-lg ${img.span}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ZONE D'INTERVENTION */}
    <section className="section-padding bg-background">
      <div className="container-narrow text-center">
        <SectionTitle
          title="Zone d'intervention"
          subtitle="Nous intervenons dans un rayon de 60 km autour de Soissons : Laon, Compiègne, Reims, Château-Thierry et leurs environs."
        />
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="w-5 h-5 text-accent" />
          <Link to="/zone-intervention" className="text-accent font-semibold hover:underline">
            Voir toutes les villes desservies
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <CTASection
      title="Votre projet mérite un artisan local"
      subtitle="Nos devis sont entièrement gratuits. Réponse sous 24h."
      ctaLabel="Demander un devis gratuit"
    />
  </Layout>
);

export default NotreAtelier;
