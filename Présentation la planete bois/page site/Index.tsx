import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import ImageLightbox from "@/components/ImageLightbox";
import ProcessSteps from "@/components/ProcessSteps";
import ConversionBlock from "@/components/ConversionBlock";
import { getDevisUrl, SITE_CONFIG } from "@/lib/config";
import {
  MapPin,
  Ruler,
  ShieldCheck,
  Eye,
  Wrench,
  TreePine,
  Gem,
  BadgeCheck,
  Phone,
  Clock,
  Hammer,
  CheckCircle2,
  MessageSquare,
  Camera,
  FileText,
  HardHat,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroMain from "@/assets/hero-main.jpg";
const terrasseImg = "/lovable-uploads/d646ca1c-baad-483e-b22b-ad14cc7b6368.png";
const pergolaImg = "/lovable-uploads/ddeac434-f6b0-40a7-8c8a-bf5404466ecc.jpg";
const carportImg = "/lovable-uploads/82e0d016-5a5f-4970-afac-4c5cac59ff30.jpg";
const galleryTer2 = "/lovable-uploads/74b05ecc-bb25-4f6e-8752-b70c41573f3b.jpg";
const gallerySur = "/lovable-uploads/d1c17c39-0027-4dd4-b4b8-da6948ccc4ab.jpg";
import atelierWide from "@/assets/atelier-wide.jpg";
import atelierDetail from "@/assets/atelier-detail.jpg";
const terrasseReal1 = "/lovable-uploads/bbdd7638-3f38-40e9-bc3a-6f5a14fe94e8.png";

/* ─── DATA ─── */

const microProofs = [
  { icon: MapPin, label: "Atelier local" },
  { icon: Wrench, label: "Fabrication + pose" },

  { icon: Ruler, label: "Visite technique" },
  { icon: ShieldCheck, label: "Garantie décennale" },
  { icon: Clock, label: "Devis sous 24h" },
];

const whyUs = [
  { icon: Building2, title: "Atelier réel près de Soissons", desc: "Fabrication locale, pas de sous-traitance." },
  {
    icon: HardHat,
    title: "Maîtrise technique",
    desc: "Structure, portance, ancrage : chaque projet est étudié avec rigueur.",
  },
  { icon: Wrench, title: "Fabrication + pose", desc: "Nos charpentiers posent ce qu'ils ont fabriqué." },
  { icon: Eye, title: "Interlocuteur unique", desc: "Un seul contact du devis à la réception du chantier." },
];

const galleryImages = [
  { src: terrasseReal1, alt: "Terrasse bois réalisation – La Planète Bois", legend: "Terrasse bois – réalisation" },
  {
    src: "/lovable-uploads/3750b98c-150d-4a24-a6e4-59dc382a02ff.png",
    alt: "Terrasse bois maison en pierre",
    legend: "Terrasse bois – maison pierre",
  },
  {
    src: "/lovable-uploads/8bbc1793-ccfd-4647-83e6-83b6ec9aa701.jpg",
    alt: "Terrasse bois avec jardin fleuri",
    legend: "Terrasse bois – jardin",
  },
  { src: terrasseImg, alt: "Terrasse bois sur mesure – Soissons", legend: "Terrasse bois sur mesure" },
  { src: pergolaImg, alt: "Pergola bois – région de Soissons", legend: "Pergola bois adossée" },
  { src: carportImg, alt: "Carport bois double – Aisne", legend: "Carport bois double" },
  {
    src: "/lovable-uploads/e31a0042-b2d9-4340-bb75-06aba18dd411.png",
    alt: "Aménagement terrasse bois extérieur",
    legend: "Terrasse et aménagement",
  },
  { src: gallerySur, alt: "Projet bois sur mesure", legend: "Projet sur mesure" },
];

const faq = [
  {
    q: "Faites-vous seulement des dômes ?",
    a: "Non. La Planète Bois est spécialisée dans les terrasses bois, pergolas et carports sur mesure. Notre expérience des structures bois complexes (dont des dômes géodésiques) est un atout technique que nous mettons au service de projets d'aménagements extérieurs durables.",
  },
  {
    q: "Combien coûte une terrasse / pergola / carport ?",
    a: "Le budget dépend de la surface, de l'essence de bois, de la complexité du terrain et des finitions. Contactez-nous avec vos dimensions approximatives pour une estimation rapide et gratuite.",
  },
  {
    q: "Intervenez-vous sur terrain en pente ?",
    a: "Oui. Notre maîtrise des structures porteuses et des pilotis nous permet d'intervenir sur tous types de terrains, y compris en pente ou en dénivelé.",
  },
  {
    q: "Est-ce que vous gérez la prise de mesures ?",
    a: "Oui. Nous nous déplaçons gratuitement chez vous pour relever les dimensions exactes, évaluer les contraintes du terrain et vous conseiller sur la meilleure solution.",
  },
  {
    q: "Comment se passe le devis ?",
    a: "Après un premier échange (par téléphone ou formulaire), nous qualifions votre projet, organisons une visite si nécessaire, puis vous envoyons un devis détaillé avec plans et chiffrage précis.",
  },
  {
    q: "Quelle est votre zone d'intervention ?",
    a: "Nous intervenons autour de Soissons dans un rayon d'environ 60 km : Laon, Reims, Château-Thierry, Compiègne, Villers-Cotterêts, Chauny et communes environnantes.",
  },
  {
    q: "Quelles garanties proposez-vous ?",
    a: "Tous nos ouvrages sont couverts par la garantie décennale. Nous respectons les DTU en vigueur et les règles de l'art pour chaque réalisation.",
  },
];

const cities = ["Soissons", "Villers-Cotterêts", "Laon", "Compiègne", "Chauny", "Château-Thierry"];

/* ─── COMPONENT ─── */

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Terrasses, Pergolas, Carports Bois Sur Mesure à Soissons | La Planète Bois"
        description="La Planète Bois : terrasses, pergolas et carports bois sur mesure à Soissons et 60 km. Fabrication locale, pose maîtrisée, garantie décennale. Devis gratuit."
        canonical="https://laplanetebois.fr/"
      />

      {/* ═══ 1. HERO ULTRA CLAIR ═══ */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroMain} alt="Terrasse bois sur mesure à Soissons" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/65 to-foreground/30" />
        </div>
        <div className="relative z-10 container-narrow px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 font-medium">
              Terrasses bois, pergolas et carports sur mesure à Soissons et dans l'Aisne
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-8 max-w-xl">
              Fabricant local basé à Villeneuve-Saint-Germain. Fabrication en atelier, pose maîtrisée, visite technique
              gratuite, garantie décennale. Devis sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={getDevisUrl()}
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg text-lg hover:bg-accent/90 transition-colors"
              >
                Demander un devis
              </a>
              <a
                href={SITE_CONFIG.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground/15 text-primary-foreground font-semibold rounded-lg text-lg hover:bg-primary-foreground/25 transition-colors backdrop-blur-sm border border-primary-foreground/20"
              >
                <Phone className="w-5 h-5" />
                Appeler
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. BLOC DE PREUVE IMMÉDIATE ═══ */}
      <section className="bg-card border-b border-border">
        <div className="container-narrow px-4 py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {microProofs.map((p, i) => (
            <div key={p.label} className="flex items-center gap-2 text-sm font-medium text-foreground">
              <p.icon className="w-5 h-5 text-accent shrink-0" />
              <span>{p.label}</span>
              {i < microProofs.length - 1 && <span className="hidden lg:inline-block ml-6 w-px h-4 bg-border" />}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 3. BLOC SERVICES ═══ */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionTitle
            title="Nos services"
            subtitle="Terrasses, pergolas et carports bois conçus, fabriqués et posés par notre équipe."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ServiceCard
              title="Terrasse bois"
              description="Créez un espace de vie extérieur chaleureux et durable, adapté à votre terrain et vos usages."
              image="/lovable-uploads/a3c706c9-bca0-41dd-b446-2e1abbd0ffc8.png"
              href="/terrasse-bois-soissons"
            />
            <ServiceCard
              title="Pergola bois"
              description="Protégez et embellissez votre terrasse avec une pergola bois sur mesure, élégante et solide."
              image="/lovable-uploads/ddeac434-f6b0-40a7-8c8a-bf5404466ecc.jpg"
              href="/pergola-bois-soissons"
            />
            <ServiceCard
              title="Carport bois"
              description="Abritez vos véhicules avec un carport bois intégré à l'architecture de votre maison."
              image={carportImg}
              href="/carport-bois-soissons"
            />
            <ServiceCard
              title="Aménagements sur mesure"
              description="Un projet unique ? Nous concevons et réalisons votre aménagement personnalisé."
              image={gallerySur}
              href="/contact"
            />
          </div>
        </div>
      </section>

      {/* ═══ BLOC NOTRE ATELIER ═══ */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-card">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-lg">
              <img
                alt="Atelier La Planète Bois près de Soissons"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
                src="/lovable-uploads/87fedf39-291d-45cc-a6f4-1d0b7ee3c4a4.jpg"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Notre atelier</h2>
              <p className="text-muted-foreground mb-4">
                Nous concevons, fabriquons et posons chaque ouvrage dans notre atelier de Villeneuve-Saint-Germain, à
                deux pas de Soissons. Pas de sous-traitance, pas d'intermédiaire : nos charpentiers posent ce qu'ils ont
                eux-mêmes fabriqué.
              </p>
              <p className="text-muted-foreground text-sm mb-6 italic">
                Chaque projet est unique. Nous prenons le temps de comprendre votre terrain, vos usages et vos attentes
                avant de concevoir une solution adaptée — pas un catalogue, pas un kit standard.
              </p>
              <Link
                to="/notre-atelier"
                className="inline-flex items-center px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-lg text-sm hover:bg-accent/90 transition-colors"
              >
                Découvrir notre atelier
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BLOC RÉALISATIONS ═══ */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionTitle title="Nos réalisations" subtitle="Quelques-uns de nos projets récents autour de Soissons." />
          <ImageLightbox
            images={galleryImages.map((img) => ({ src: img.src, alt: img.alt }))}
            gridClassName="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
            itemClassName="overflow-hidden rounded-lg"
            renderOverlay={(_, i) => (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-3">
                <span className="text-primary-foreground text-sm font-medium">{galleryImages[i].legend}</span>
              </div>
            )}
          />
          <div className="text-center mt-8">
            <Link
              to="/realisations"
              className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 6. BLOC PROCESS ═══ */}
      <ProcessSteps />

      {/* ═══ 7. MATÉRIAUX / QUALITÉ / GARANTIES ═══ */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <SectionTitle
            title="Matériaux, qualité et garanties"
            subtitle="Des choix exigeants pour des projets qui durent."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TreePine,
                title: "Essences sélectionnées",
                desc: "Pin traité autoclave, douglas, mélèze ou bois exotique selon votre projet et votre budget.",
                img: terrasseImg,
              },
              {
                icon: Gem,
                title: "Finitions soignées",
                desc: "Chaque détail est travaillé pour un rendu esthétique durable et une intégration parfaite à votre habitat.",
                img: galleryTer2,
              },
              {
                icon: ShieldCheck,
                title: "Garantie décennale",
                desc: "Vos ouvrages sont couverts par notre garantie décennale pour une tranquillité totale sur le long terme.",
                img: "/lovable-uploads/e8b8959a-5ba7-419c-aff5-9868ae283025.png",
              },
              {
                icon: BadgeCheck,
                title: "Normes & conformité",
                desc: "Nos réalisations respectent les DTU en vigueur et les règles de l'art du métier. Chantier suivi de bout en bout.",
                img: carportImg,
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg overflow-hidden border border-border bg-background">
                <div className="h-40 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-5 h-5 text-accent shrink-0" />
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8. ZONE D'INTERVENTION ═══ */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <SectionTitle title="Zone d'intervention" />
          <div className="flex items-center justify-center gap-2 text-foreground mb-4">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-lg font-medium">
              Nous intervenons autour de Soissons dans un rayon d'environ 60 km.
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {cities.map((city) => (
              <span
                key={city}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground"
              >
                {city}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Et toutes les communes environnantes dans l'Aisne et l'Oise. Vous êtes dans notre zone d'intervention ?
            Contactez-nous, nous vous répondons sous 24h.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            Vérifier ma zone
          </Link>
        </div>
      </section>

      {/* ═══ 9. FAQ OBJECTIONS ═══ */}
      <section className="section-padding bg-card">
        <div className="container-narrow max-w-3xl">
          <SectionTitle title="Questions fréquentes" />
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="group bg-background rounded-lg border border-border">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-foreground list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 pb-4 text-muted-foreground text-sm">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ConversionBlock />
    </Layout>
  );
};

export default Index;
