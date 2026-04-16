import Layout from "@/components/Layout";
import ImageLightbox from "@/components/ImageLightbox";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import ProcessSteps from "@/components/ProcessSteps";
import ConversionBlock from "@/components/ConversionBlock";
import AvisClients from "@/components/AvisClients";
import { getDevisUrl, SITE_CONFIG } from "@/lib/config";
import {
  Car,
  Ruler,
  Home,
  UserCheck,
  CheckCircle2,
  TreePine,
  Settings2,
  Layers,
  Mountain,
  Shield,
  MapPin,
  Hammer,
  Eye,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const carportHero = "/lovable-uploads/07e789bf-3c76-4842-a891-adf789b6d799.png";
import galleryCar2 from "@/assets/gallery-carport-2.jpg";
// Updated usage below with specific images

const benefits = [
  {
    icon: Car,
    title: "Protection véhicule",
    desc: "Protégez votre voiture des intempéries, du gel et du soleil toute l'année.",
  },
  {
    icon: Home,
    title: "Intégration harmonieuse",
    desc: "Le bois s'intègre naturellement à l'architecture de votre maison.",
  },
  { icon: Ruler, title: "Sur mesure", desc: "Dimensions adaptées : simple, double, avec ou sans rangement intégré." },
  {
    icon: UserCheck,
    title: "Accompagnement local",
    desc: "Un interlocuteur unique, du devis à la pose, basé à Soissons.",
  },
];

const projectTypes = [
  {
    title: "Abri voiture simple",
    desc: "Protection d'un véhicule contre les intempéries, sans construction de garage.",
  },
  { title: "Carport double", desc: "Deux véhicules côte à côte sous une structure élégante et solide." },
  { title: "Abri camping-car", desc: "Dimensions adaptées pour camping-car ou utilitaire en toute sécurité." },
  {
    title: "Carport avec rangement",
    desc: "Combinaison abri véhicule + local de rangement pour bois, outils ou matériel.",
  },
  { title: "Préau couvert", desc: "Espace polyvalent pour bricoler, recevoir ou se détendre à l'abri." },
];

const reassurance = [
  { icon: MapPin, title: "Accompagnement local", desc: "Intervention autour de Soissons avec suivi clair du projet." },
  {
    icon: UserCheck,
    title: "Projet sur mesure",
    desc: "Chaque carport est conçu selon votre allée, votre terrain et vos véhicules.",
  },
  {
    icon: Hammer,
    title: "Fabrication et pose",
    desc: "Nous fabriquons et posons votre carport. Aucune sous-traitance.",
  },
  {
    icon: Eye,
    title: "Étude technique",
    desc: "Charges de vent, portée, ancrage : tout est dimensionné avec rigueur.",
  },
  {
    icon: TreePine,
    title: "Matériaux sélectionnés",
    desc: "Essences de bois choisies pour résister aux conditions extérieures.",
  },
  {
    icon: CheckCircle2,
    title: "Garantie décennale",
    desc: "Tous nos ouvrages sont couverts par la garantie décennale.",
  },
];

const faq = [
  {
    q: "Faut-il un permis pour un carport ?",
    a: "Selon la surface, une déclaration préalable ou un permis de construire peut être nécessaire. Nous vous accompagnons dans les démarches.",
  },
  {
    q: "Quelles dimensions pour un carport ?",
    a: "3 × 5 m minimum pour un véhicule, 6 × 5 m pour deux. Nous adaptons les dimensions à votre espace.",
  },
  {
    q: "Quel entretien pour un carport bois ?",
    a: "Un traitement tous les 3 à 5 ans selon l'essence choisie pour maintenir durabilité et aspect.",
  },
  {
    q: "Quel budget prévoir pour un carport bois ?",
    a: "Le budget dépend des dimensions, de la couverture et des options. Contactez-nous pour une estimation gratuite.",
  },
  {
    q: "Intervenez-vous sur terrain en pente ?",
    a: "Oui. Notre maîtrise des structures porteuses nous permet d'intervenir sur tous types de terrains.",
  },
  { q: "Proposez-vous une garantie décennale ?", a: "Oui, la garantie décennale couvre tous nos ouvrages." },
];

const CarportBoisSoissons = () => (
  <Layout>
    <SEOHead
      title="Carport Bois Sur Mesure à Soissons | Devis Gratuit | La Planète Bois"
      description="Carport bois sur mesure à Soissons et 60 km. Fabrication locale, pose par notre équipe, garantie décennale. Devis gratuit et rapide."
      canonical="https://laplanetebois.fr/carport-bois-soissons"
    />

    {/* HERO */}
    <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-center">
      <div className="absolute inset-0">
        <img src={carportHero} alt="Carport bois sur mesure à Soissons" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
      </div>
      <div className="relative z-10 container-narrow px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5">
            Carport bois sur mesure à Soissons — Fabricant local dans l'Aisne
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed">
            Fabricant de carports bois sur mesure basé à Villeneuve-Saint-Germain. Simple ou double, avec rangement
            intégré — chaque carport est fabriqué dans notre atelier et posé par notre équipe. Devis sous 24h, garantie
            décennale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={getDevisUrl("Carport bois")}
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg text-lg hover:bg-accent/90 transition-colors"
            >
              Devis gratuit en 24h
            </a>
            <a
              href={SITE_CONFIG.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground/15 text-primary-foreground font-semibold rounded-lg text-lg hover:bg-primary-foreground/25 transition-colors backdrop-blur-sm border border-primary-foreground/20"
            >
              <Phone className="w-5 h-5" />
              Appeler
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-primary-foreground/80 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" /> Artisan local
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" /> Projet sur mesure
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" /> Garantie décennale
            </span>
          </div>
        </div>
      </div>
    </section>

    {/* INTRO */}
    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <SectionTitle title="Un carport bois conçu pour votre propriété et vos véhicules" />
        <div className="prose prose-lg text-muted-foreground mx-auto text-center space-y-4">
          <p>
            Chez La Planète Bois, nous fabriquons des carports bois sur mesure à Soissons et dans l'Aisne. Que vous ayez
            besoin d'un abri simple, d'un carport double ou d'une structure avec rangement intégré, nous dimensionnons
            chaque projet selon votre allée, vos véhicules et les contraintes de votre terrain. Fabrication en atelier à
            Villeneuve-Saint-Germain, pose soignée, garantie décennale.
          </p>
        </div>
      </div>
    </section>

    {/* BÉNÉFICES */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <SectionTitle title="Pourquoi choisir un carport bois sur mesure ?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                <b.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SAVOIR-FAIRE */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-lg">
            <img
              alt="Savoir-faire carport bois"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
              src="/lovable-uploads/46fdcf6c-0a4f-4042-b709-8df095f4f4b5.jpg"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Un savoir-faire structure bois éprouvé
            </h2>
            <p className="text-muted-foreground mb-4">
              Notre maîtrise des structures bois de grande portée nous permet de concevoir des carports solides, bien
              intégrés à l'architecture de votre maison et adaptés aux contraintes de votre terrain à Soissons ou dans
              toute l'Aisne.
            </p>
            <p className="text-muted-foreground mb-6">
              Chaque carport est calculé selon les Eurocodes : charges de vent, portée libre, ancrage au sol. Bac acier,
              polycarbonate ou tuiles — la couverture est choisie selon votre environnement et votre budget. Nous
              intervenons à Soissons, Laon, Compiègne, Villers-Cotterêts et dans un rayon de 60 km.
            </p>
            <ul className="space-y-3">
              {[
                "Conception structurelle adaptée aux contraintes",
                "Fabrication en atelier à Villeneuve-Saint-Germain",
                "Pose soignée par notre équipe",
                "Garantie décennale sur tous nos ouvrages",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* CAS D'USAGE */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <SectionTitle title="Quel type de carport bois pour votre projet ?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectTypes.map((t) => (
            <div key={t.title} className="p-6 bg-background rounded-lg border border-border">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{t.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* MATÉRIAUX */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionTitle title="Matériaux & options" subtitle="Des essences et couvertures choisies pour durer." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: TreePine,
              title: "Essences de bois",
              desc: "Pin traité autoclave, douglas, mélèze ou chêne selon votre projet et budget.",
              img: "/lovable-uploads/carport-monnet.png",
            },
            {
              icon: Shield,
              title: "Couvertures & toitures",
              desc: "Bac acier, tuiles, polycarbonate ou toiture végétalisée selon votre environnement.",
              img: "/lovable-uploads/7f8ff99b-72d7-4bcc-9aa3-1a8c2b3ac2cb.jpg",
            },
            {
              icon: Settings2,
              title: "Options & accessoires",
              desc: "Parois latérales, gouttières, éclairage, local de rangement intégré.",
              img: carportHero,
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg overflow-hidden border border-border bg-card">
              <div className="h-44 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="w-5 h-5 text-accent shrink-0" />
                  <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* POINTS TECHNIQUES */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <SectionTitle title="Points techniques" subtitle="Les détails qui font la différence." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Layers,
              title: "Charpente & portée",
              desc: "Poteaux, pannes et chevrons dimensionnés pour portées libres jusqu'à 6 m.",
            },
            {
              icon: Settings2,
              title: "Évacuation des eaux",
              desc: "Pente calculée, gouttières et descentes intégrées.",
            },
            {
              icon: Mountain,
              title: "Ancrage au sol",
              desc: "Platines sur dés béton, scellement ou fondations selon le sol et le vent.",
            },
            {
              icon: CheckCircle2,
              title: "Résistance au vent",
              desc: "Contreventement dimensionné selon les normes Eurocode.",
            },
            {
              icon: TreePine,
              title: "Traitement du bois",
              desc: "Autoclave classe 3 ou 4 ou essence naturellement durable.",
            },
            { icon: UserCheck, title: "Normes & DTU", desc: "Respect des DTU et règles de l'art, garantie décennale." },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-5 bg-background rounded-lg border border-border">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* RÉALISATIONS */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionTitle title="Nos réalisations carports" subtitle="Quelques projets récents autour de Soissons." />
        <ImageLightbox
          images={[carportHero, "/lovable-uploads/8035a56c-4a34-462f-80dd-5c9f8ecc31e8.png", "/lovable-uploads/3dceb2c3-36f6-4c8d-9f67-9e4ae83df8ca.png"].map((src, i) => ({ src, alt: `Réalisation carport bois ${i + 1}` }))}
        />
        <div className="text-center mt-8">
          <Link
            to="/realisations"
            className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors"
          >
            Voir toutes nos réalisations
          </Link>
        </div>
      </div>
    </section>

    {/* RÉASSURANCE */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <SectionTitle title="Pourquoi faire appel à La Planète Bois ?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reassurance.map((r) => (
            <div key={r.title} className="flex gap-4">
              <div className="w-11 h-11 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                <r.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ProcessSteps />

    <AvisClients type="carport" />

    {/* FAQ */}
    <section className="section-padding bg-card">
      <div className="container-narrow max-w-3xl">
        <SectionTitle title="Questions fréquentes — Carport bois" />
        <Accordion type="single" collapsible className="w-full">
          {faq.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background rounded-lg border border-border mb-3 px-6"
            >
              <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <ConversionBlock defaultProject="Carport bois" />
  </Layout>
);

export default CarportBoisSoissons;
