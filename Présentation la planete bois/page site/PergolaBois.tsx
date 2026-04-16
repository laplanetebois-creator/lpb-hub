import Layout from "@/components/Layout";
import ImageLightbox from "@/components/ImageLightbox";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import { getDevisUrl } from "@/lib/config";
import {
  Shield,
  Palette,
  Home,
  UserCheck,
  CheckCircle2,
  TreePine,
  Settings2,
  Layers,
  Mountain,
  Sun,
} from "lucide-react";

const pergolaHero = "/lovable-uploads/ddeac434-f6b0-40a7-8c8a-bf5404466ecc.jpg";
import galleryPer2 from "@/assets/gallery-pergola-2.jpg";
import heroMain from "@/assets/hero-main.jpg";

const benefits = [
  {
    icon: Shield,
    title: "Protection toute l'année",
    desc: "Protégez votre terrasse du soleil, de la pluie légère et du vent.",
  },
  {
    icon: Palette,
    title: "Esthétisme naturel",
    desc: "Le bois apporte un charme authentique et s'intègre parfaitement à votre maison.",
  },
  {
    icon: Home,
    title: "Confort d'usage",
    desc: "Profitez de votre extérieur plus longtemps, même par temps changeant.",
  },
  { icon: UserCheck, title: "Intégration sur mesure", desc: "Dimensions, style et finitions adaptés à votre habitat." },
];

const faq = [
  {
    q: "Quelle différence entre pergola et tonnelle ?",
    a: "La pergola est une structure fixe et durable en bois massif, conçue sur mesure. La tonnelle est généralement un abri temporaire et démontable.",
  },
  {
    q: "Faut-il un permis pour une pergola ?",
    a: "Selon la surface et votre commune, une déclaration préalable peut être nécessaire. Nous vous accompagnons dans les démarches.",
  },
  {
    q: "Peut-on ajouter une pergola sur une terrasse existante ?",
    a: "Oui, nous adaptons la pergola à votre terrasse et à la configuration de votre terrain.",
  },
  {
    q: "Quel budget prévoir pour une pergola bois ?",
    a: "Le budget dépend des dimensions, du type de couverture et des finitions. Contactez-nous pour une estimation gratuite adaptée à votre projet.",
  },
];

const PergolaBois = () => (
  <Layout>
    <SEOHead
      title="Pergola Bois sur Mesure | Fabricant Local | La Planète Bois"
      description="Fabricant et poseur de pergolas bois sur mesure. Adossée, autoportée, avec couverture au choix. Conception, fabrication et pose. Garantie décennale. Devis gratuit sous 24h."
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
              name: "Quelle différence entre pergola et tonnelle ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "La pergola est une structure fixe et durable en bois massif, conçue sur mesure. La tonnelle est généralement un abri temporaire et démontable.",
              },
            },
            {
              "@type": "Question",
              name: "Faut-il un permis pour une pergola ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Selon la surface et votre commune, une déclaration préalable peut être nécessaire. Nous vous accompagnons dans les démarches.",
              },
            },
            {
              "@type": "Question",
              name: "Peut-on ajouter une pergola sur une terrasse existante ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Oui, nous adaptons la pergola à votre terrasse et à la configuration de votre terrain.",
              },
            },
            {
              "@type": "Question",
              name: "Quel budget prévoir pour une pergola bois ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Le budget dépend des dimensions, du type de couverture et des finitions. Contactez-nous pour une estimation gratuite adaptée à votre projet.",
              },
            },
          ],
        }),
      }}
    />

    {/* HERO */}
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img src={pergolaHero} alt="Pergola bois sur mesure Soissons" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>
      <div className="relative z-10 container-narrow px-4 py-20">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4">
            Pergola bois sur mesure à Soissons et alentours
          </h1>
          <p className="text-lg text-primary-foreground/85 mb-8">
            Protection, esthétisme et confort pour profiter de vos extérieurs.
          </p>
          <a
            href={getDevisUrl("Pergola bois")}
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
        <SectionTitle title="Pourquoi une pergola bois ?" />
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
              src={pergolaHero}
              alt="Savoir-faire pergola bois La Planète Bois"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Un savoir-faire structure bois éprouvé
            </h2>
            <p className="text-muted-foreground mb-4">
              Notre expertise en charpente et structure bois nous permet de concevoir des pergolas robustes, esthétiques
              et parfaitement intégrées à votre habitat.
            </p>
            <p className="text-muted-foreground mb-6">
              Chaque pergola est pensée pour résister aux contraintes climatiques tout en offrant un rendu élégant et
              durable dans le temps.
            </p>
            <ul className="space-y-3">
              {[
                "Conception structurelle adaptée à votre façade",
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
          subtitle="Une pergola bois s'adapte à toutes les configurations et tous les usages."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Repas à l'abri",
              desc: "Profitez de déjeuners et dîners en extérieur, protégés du soleil et des intempéries légères.",
            },
            {
              title: "Salon de jardin ombragé",
              desc: "Créez un espace détente confortable sous une pergola, avec canapés et fauteuils.",
            },
            {
              title: "Extension de la maison",
              desc: "Prolongez votre pièce de vie vers l'extérieur avec un espace couvert et lumineux.",
            },
            {
              title: "Support végétal",
              desc: "Faites grimper glycine, vigne ou jasmin pour un ombrage naturel et parfumé.",
            },
            {
              title: "Espace spa / jacuzzi",
              desc: "Abritez votre spa sous une pergola pour une intimité et un confort optimal.",
            },
            {
              title: "Coin barbecue & cuisine",
              desc: "Aménagez un espace cuisine d'été protégé pour vos grillades et réceptions.",
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
              img: galleryPer2,
            },
            {
              icon: Palette,
              title: "Couvertures & toitures",
              desc: "Polycarbonate, canisses, lames orientables, toile tendue ou toiture pleine : choisissez le niveau de protection souhaité.",
              img: heroMain,
            },
            {
              icon: Settings2,
              title: "Options & accessoires",
              desc: "Éclairage LED intégré, stores latéraux, gouttières, prises électriques : chaque détail est pensé pour votre confort.",
              img: pergolaHero,
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
              title: "Ossature & assemblages",
              desc: "Poteaux, poutres et chevrons dimensionnés selon la portée, les charges de vent et de neige.",
            },
            {
              icon: Settings2,
              title: "Évacuation des eaux",
              desc: "Pente de toiture, gouttières intégrées et drainage pour une gestion optimale des eaux pluviales.",
            },
            {
              icon: Mountain,
              title: "Ancrage au sol",
              desc: "Platines, scellement chimique ou fondations béton selon la nature du sol et la configuration.",
            },
            {
              icon: CheckCircle2,
              title: "Fixation en façade",
              desc: "Sabots, équerres renforcées et chevilles adaptées pour un ancrage solide et durable sur votre mur.",
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
          title="Nos réalisations pergolas"
          subtitle="Quelques projets récents de pergolas bois réalisés autour de Soissons."
        />
        <ImageLightbox
          images={[pergolaHero, galleryPer2, heroMain].map((src, i) => ({ src, alt: `Pergola bois sur mesure — réalisation La Planète Bois n°${i + 1}` }))}
        />
      </div>
    </section>

    <ProcessSteps />

    {/* FAQ */}
    <section className="section-padding bg-card">
      <div className="container-narrow max-w-3xl">
        <SectionTitle title="Questions fréquentes — Pergola bois" />
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

    <CTASection ctaLabel="Demander mon estimation pergola" />
  </Layout>
);

export default PergolaBois;
