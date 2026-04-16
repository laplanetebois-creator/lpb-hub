import Layout from "@/components/Layout";
import ImageLightbox from "@/components/ImageLightbox";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import { getDevisUrl } from "@/lib/config";
import { TreePine, Sun, Mountain, UserCheck, CheckCircle2, Paintbrush, Layers, Settings2 } from "lucide-react";

const terrasseHero = "/lovable-uploads/a3c706c9-bca0-41dd-b446-2e1abbd0ffc8.png";
import galleryTer2 from "@/assets/gallery-terrasse-2.jpg";
import heroMain from "@/assets/hero-main.jpg";

const benefits = [
  {
    icon: Sun,
    title: "Valorisez votre extérieur",
    desc: "Une terrasse bois transforme votre jardin en véritable espace de vie.",
  },
  {
    icon: TreePine,
    title: "Créez un espace de vie",
    desc: "Repas en famille, détente, jeux d'enfants : profitez de chaque instant dehors.",
  },
  {
    icon: Mountain,
    title: "Adapté à votre terrain",
    desc: "Terrain en pente, sol irrégulier, accès particulier : nous trouvons la solution.",
  },
  {
    icon: UserCheck,
    title: "Du devis à la pose",
    desc: "Accompagnement complet, un seul interlocuteur local pour tout votre projet.",
  },
];

const projectTypes = [
  { title: "Terrasse de jardin", desc: "Extension naturelle de votre salon, posée au niveau du sol." },
  { title: "Terrasse sur pilotis", desc: "Idéale pour les terrains en pente ou les maisons surélevées." },
  { title: "Plage de piscine", desc: "Revêtement bois élégant et antidérapant autour de votre bassin." },
  { title: "Escalier et garde-corps", desc: "Accès sécurisé et esthétique en bois, intégré à votre terrasse." },
];

const faq = [
  {
    q: "Quel budget prévoir pour une terrasse bois ?",
    a: "Le budget dépend de la surface, du type de bois et de la complexité du terrain. Contactez-nous pour une estimation gratuite adaptée à votre projet.",
  },
  {
    q: "Quelle essence de bois choisir ?",
    a: "Nous vous conseillons selon votre usage, votre budget et l'esthétique souhaitée : pin traité, douglas, mélèze ou bois exotique.",
  },
  {
    q: "Faut-il un permis de construire ?",
    a: "Dans la plupart des cas, une déclaration préalable suffit. Nous vous accompagnons dans les démarches administratives.",
  },
  {
    q: "Combien de temps dure la pose ?",
    a: "Entre 3 et 10 jours selon la surface et la complexité, après validation du devis.",
  },
];

const TerrasseBois = () => (
  <Layout>
    <SEOHead
      title="Terrasse Bois sur Mesure | Fabricant Local | La Planète Bois"
      description="Fabricant et poseur de terrasses bois sur mesure. Pin traité, douglas, mélèze. Conception, fabrication et pose. Garantie décennale. Devis gratuit sous 24h."
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
              name: "Quel budget prévoir pour une terrasse bois ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Le budget dépend de la surface, du type de bois et de la complexité du terrain. Contactez-nous pour une estimation gratuite adaptée à votre projet.",
              },
            },
            {
              "@type": "Question",
              name: "Quelle essence de bois choisir pour une terrasse ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Nous vous conseillons selon votre usage, votre budget et l'esthétique souhaitée : pin traité, douglas, mélèze ou bois exotique.",
              },
            },
            {
              "@type": "Question",
              name: "Faut-il un permis de construire pour une terrasse bois ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Dans la plupart des cas, une déclaration préalable suffit. Nous vous accompagnons dans les démarches administratives.",
              },
            },
            {
              "@type": "Question",
              name: "Combien de temps dure la pose d'une terrasse bois ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Entre 3 et 10 jours selon la surface et la complexité, après validation du devis.",
              },
            },
          ],
        }),
      }}
    />

    {/* HERO */}
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img src={terrasseHero} alt="Terrasse bois sur mesure Soissons" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>
      <div className="relative z-10 container-narrow px-4 py-20">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4">
            Terrasse bois sur mesure à Soissons et alentours
          </h1>
          <p className="text-lg text-primary-foreground/85 mb-8">Étude rapide, projet personnalisé, pose locale.</p>
          <a
            href={getDevisUrl("Terrasse bois")}
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg text-lg hover:bg-accent/90 transition-colors"
          >
            Obtenir mon estimation
          </a>
        </div>
      </div>
    </section>

    {/* BENEFITS */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionTitle title="Pourquoi une terrasse bois ?" />
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
              src={terrasseHero}
              alt="Savoir-faire terrasse bois La Planète Bois"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Un savoir-faire structure bois éprouvé
            </h2>
            <p className="text-muted-foreground mb-4">
              Notre expérience du travail de structures bois techniquement exigeantes nous permet d'aborder chaque
              projet avec rigueur : portance, niveau, ancrage, pente, finitions et intégration au site.
            </p>
            <p className="text-muted-foreground mb-6">
              Cette maîtrise technique, acquise sur des chantiers variés et complexes, se retrouve dans chaque terrasse
              que nous réalisons — qu'il s'agisse d'un projet simple ou d'une configuration plus exigeante.
            </p>
            <ul className="space-y-3">
              {[
                "Conception structurelle adaptée au terrain",
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
          subtitle="Une terrasse bois s'adapte à toutes les configurations et tous les usages."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Repas en extérieur",
              desc: "Installez une grande table et profitez de déjeuners en famille ou de dîners entre amis, du printemps à l'automne.",
            },
            {
              title: "Espace détente & lecture",
              desc: "Créez un coin salon avec transats ou fauteuils pour vous relaxer au calme dans votre jardin.",
            },
            {
              title: "Jeux d'enfants",
              desc: "Offrez aux enfants un espace de jeu propre, confortable et sécurisé, directement accessible depuis la maison.",
            },
            {
              title: "Plage de piscine",
              desc: "Entourez votre bassin d'un revêtement bois élégant, antidérapant et agréable pieds nus.",
            },
            {
              title: "Extension du salon",
              desc: "Prolongez votre pièce de vie vers l'extérieur avec une terrasse au même niveau que le seuil de porte.",
            },
            {
              title: "Réception & événements",
              desc: "Accueillez vos invités sur un bel espace aménagé pour les anniversaires, barbecues ou apéritifs.",
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

    {/* MATÉRIAUX / OPTIONS */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionTitle
          title="Matériaux & options"
          subtitle="Des essences et finitions choisies pour durer en extérieur."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: TreePine,
              title: "Essences de bois",
              desc: "Pin traité autoclave, douglas, mélèze ou bois exotique : nous vous conseillons l'essence adaptée à votre usage et votre budget.",
              img: galleryTer2,
            },
            {
              icon: Paintbrush,
              title: "Finitions & teintes",
              desc: "Saturateur, lasure, bois brut ou pré-grisé : personnalisez l'aspect de votre terrasse selon vos goûts.",
              img: heroMain,
            },
            {
              icon: Settings2,
              title: "Options & accessoires",
              desc: "Éclairage LED intégré, garde-corps, escalier, trappe d'accès : chaque détail est pensé pour votre confort.",
              img: terrasseHero,
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
              title: "Structure porteuse",
              desc: "Lambourdes, solives et poteaux dimensionnés selon la portée, la charge et la nature du sol.",
            },
            {
              icon: Settings2,
              title: "Ventilation & drainage",
              desc: "Espacement des lames, pente d'écoulement et ventilation sous terrasse pour éviter l'humidité stagnante.",
            },
            {
              icon: Mountain,
              title: "Adaptation au terrain",
              desc: "Plots réglables, pilotis ou fondations béton : chaque configuration de terrain a sa solution technique.",
            },
            {
              icon: CheckCircle2,
              title: "Fixations invisibles",
              desc: "Clips inox ou visserie cachée pour un rendu esthétique sans vis apparentes en surface.",
            },
            {
              icon: TreePine,
              title: "Traitement du bois",
              desc: "Autoclave classe 4, traitement haute température ou essence naturellement imputrescible selon le projet.",
            },
            {
              icon: UserCheck,
              title: "Normes & DTU",
              desc: "Respect des Documents Techniques Unifiés (DTU 51.4) et des règles de l'art pour une garantie décennale.",
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
          title="Nos réalisations terrasses"
          subtitle="Quelques projets récents de terrasses bois réalisés autour de Soissons."
        />
        <ImageLightbox
          images={[terrasseHero, galleryTer2, heroMain].map((src, i) => ({ src, alt: `Terrasse bois sur mesure — réalisation La Planète Bois n°${i + 1}` }))}
        />
      </div>
    </section>

    {/* PROJECT TYPES */}

    <ProcessSteps />

    {/* FAQ */}
    <section className="section-padding bg-card">
      <div className="container-narrow max-w-3xl">
        <SectionTitle title="Questions fréquentes — Terrasse bois" />
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

    <CTASection ctaLabel="Demander mon estimation terrasse" />
  </Layout>
);

export default TerrasseBois;
