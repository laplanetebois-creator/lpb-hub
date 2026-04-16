import Layout from "@/components/Layout";
import ImageLightbox from "@/components/ImageLightbox";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import { getDevisUrl } from "@/lib/config";
import { Car, Ruler, Home, UserCheck, CheckCircle2, TreePine, Settings2, Layers, Mountain, Shield } from "lucide-react";

const carportHero = "/lovable-uploads/bab29595-ded7-4fea-89b4-42edbb7665b1.jpg";
import galleryCar2 from "@/assets/gallery-carport-2.jpg";
const gallerySur = "/lovable-uploads/3f41b903-027b-42f5-b477-c5d3db5eacb9.jpg";

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
  {
    icon: Ruler,
    title: "Sur mesure",
    desc: "Dimensions adaptées à votre allée, simple ou double, avec ou sans rangement.",
  },
  {
    icon: UserCheck,
    title: "Accompagnement local",
    desc: "Un interlocuteur unique, du devis à la pose, basé à Soissons.",
  },
];

const faq = [
  {
    q: "Faut-il un permis pour un carport ?",
    a: "Selon la surface, une déclaration préalable ou un permis de construire peut être nécessaire. Nous vous accompagnons dans les démarches.",
  },
  {
    q: "Quelles dimensions pour un carport ?",
    a: "En général, 3 × 5 m minimum pour un véhicule, 6 × 5 m pour deux. Nous adaptons les dimensions à votre espace.",
  },
  {
    q: "Quel entretien pour un carport bois ?",
    a: "Un traitement tous les 3 à 5 ans selon l'essence de bois choisie pour maintenir sa durabilité et son aspect.",
  },
  {
    q: "Quel budget prévoir pour un carport bois ?",
    a: "Le budget dépend des dimensions, du type de couverture et des options. Contactez-nous pour une estimation gratuite adaptée à votre projet.",
  },
];

const CarportBois = () => (
  <Layout>
    <SEOHead
      title="Carport Bois sur Mesure | Fabricant Local | La Planète Bois"
      description="Fabricant et poseur de carports bois sur mesure. Simple, double, avec rangement. Conception, fabrication et pose. Garantie décennale. Devis gratuit sous 24h."
    />

    {/* Schema FAQPage — rich snippets Google */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Faut-il un permis pour un carport ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Selon la surface, une déclaration préalable ou un permis de construire peut être nécessaire. Nous vous accompagnons dans les démarches.",
              },
            },
            {
              "@type": "Question",
              name: "Quelles dimensions pour un carport bois ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "En général, 3 × 5 m minimum pour un véhicule, 6 × 5 m pour deux. Nous adaptons les dimensions à votre espace.",
              },
            },
            {
              "@type": "Question",
              name: "Quel entretien pour un carport bois ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Un traitement tous les 3 à 5 ans selon l'essence de bois choisie pour maintenir sa durabilité et son aspect.",
              },
            },
            {
              "@type": "Question",
              name: "Quel budget prévoir pour un carport bois ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Le budget dépend des dimensions, du type de couverture et des options. Contactez-nous pour une estimation gratuite adaptée à votre projet.",
              },
            },
          ],
        }),
      }}
    />

    {/* HERO */}
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img src={carportHero} alt="Carport bois sur mesure Soissons" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>
      <div className="relative z-10 container-narrow px-4 py-20">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4">
            Carport bois sur mesure à Soissons et alentours
          </h1>
          <p className="text-lg text-primary-foreground/85 mb-8">
            Protection, intégration et sur mesure pour votre véhicule.
          </p>
          <a
            href={getDevisUrl("Carport bois")}
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg text-lg hover:bg-accent/90 transition-colors"
          >
            Devis gratuit en 24h
          </a>
        </div>
      </div>
    </section>

    {/* BENEFITS */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionTitle title="Pourquoi un carport bois ?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-4">
              <div className="w-11 h-11 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                <b.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SAVOIR-FAIRE */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-lg">
            <img
              src={carportHero}
              alt="Savoir-faire carport bois La Planète Bois"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Un savoir-faire structure bois éprouvé
            </h2>
            <p className="text-muted-foreground mb-4">
              Notre maîtrise des structures bois de grande portée nous permet de concevoir des carports solides,
              esthétiques et parfaitement adaptés à votre propriété.
            </p>
            <p className="text-muted-foreground mb-6">
              Chaque carport est dimensionné pour résister aux charges de vent et de neige, tout en offrant un design
              épuré qui valorise votre habitation.
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
        <SectionTitle
          title="Cas d'usage"
          subtitle="Un carport bois s'adapte à tous les besoins et toutes les configurations."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Abri voiture",
              desc: "Protégez votre véhicule du gel, de la grêle et du soleil sans construire de garage fermé.",
            },
            {
              title: "Abri camping-car",
              desc: "Dimensions adaptées pour accueillir un camping-car ou un utilitaire en toute sécurité.",
            },
            {
              title: "Abri deux-roues",
              desc: "Protégez motos, scooters ou vélos avec un carport compact et fonctionnel.",
            },
            {
              title: "Espace de stockage",
              desc: "Combinez abri véhicule et local de rangement pour le bois de chauffage, outils ou matériel.",
            },
            {
              title: "Préau & espace couvert",
              desc: "Utilisez votre carport comme espace couvert pour bricoler, recevoir ou se détendre à l'abri.",
            },
            {
              title: "Double stationnement",
              desc: "Carport double pour abriter deux véhicules côte à côte avec une structure élégante.",
            },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-background rounded-lg border border-border">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* MATÉRIAUX & OPTIONS */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionTitle
          title="Matériaux & options"
          subtitle="Des essences et couvertures choisies pour durer en extérieur."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: TreePine,
              title: "Essences de bois",
              desc: "Pin traité autoclave, douglas, mélèze ou chêne : nous vous conseillons l'essence adaptée à votre projet et votre budget.",
              img: "/lovable-uploads/carport-monnet.png",
            },
            {
              icon: Shield,
              title: "Couvertures & toitures",
              desc: "Bac acier, tuiles, polycarbonate ou toiture végétalisée : choisissez la couverture adaptée à votre environnement.",
              img: gallerySur,
            },
            {
              icon: Settings2,
              title: "Options & accessoires",
              desc: "Parois latérales, gouttières, éclairage, local de rangement intégré : personnalisez votre carport selon vos besoins.",
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
        <SectionTitle title="Points techniques" subtitle="Les détails qui font la différence sur chaque chantier." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Layers,
              title: "Charpente & portée",
              desc: "Poteaux, pannes et chevrons dimensionnés pour des portées libres jusqu'à 6 m sans poteau intermédiaire.",
            },
            {
              icon: Settings2,
              title: "Évacuation des eaux",
              desc: "Pente de toiture calculée, gouttières et descentes intégrées pour une gestion optimale des eaux pluviales.",
            },
            {
              icon: Mountain,
              title: "Ancrage au sol",
              desc: "Platines sur dés béton, scellement chimique ou fondations selon la nature du sol et les contraintes de vent.",
            },
            {
              icon: CheckCircle2,
              title: "Résistance au vent",
              desc: "Contreventement et renforts dimensionnés selon les normes Eurocode pour résister aux vents de votre zone.",
            },
            {
              icon: TreePine,
              title: "Traitement du bois",
              desc: "Autoclave classe 3 ou 4, traitement haute température ou essence naturellement durable selon le projet.",
            },
            {
              icon: UserCheck,
              title: "Normes & DTU",
              desc: "Respect des Documents Techniques Unifiés et des règles de l'art pour une garantie décennale.",
            },
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

    {/* GALLERY */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <SectionTitle
          title="Nos réalisations carports"
          subtitle="Quelques projets récents de carports bois réalisés autour de Soissons."
        />
        <ImageLightbox
          images={[carportHero, "/lovable-uploads/8035a56c-4a34-462f-80dd-5c9f8ecc31e8.png", gallerySur].map((src, i) => ({ src, alt: `Carport bois sur mesure — réalisation La Planète Bois n°${i + 1}` }))}
        />
      </div>
    </section>

    <ProcessSteps />

    {/* FAQ */}
    <section className="section-padding bg-card">
      <div className="container-narrow max-w-3xl">
        <SectionTitle title="Questions fréquentes — Carport bois" />
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

    <CTASection ctaLabel="Demander mon estimation carport" />
  </Layout>
);

export default CarportBois;
