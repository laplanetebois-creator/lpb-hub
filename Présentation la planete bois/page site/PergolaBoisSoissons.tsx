import Layout from "@/components/Layout";
import ImageLightbox from "@/components/ImageLightbox";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import ProcessSteps from "@/components/ProcessSteps";
import ConversionBlock from "@/components/ConversionBlock";
import AvisClients from "@/components/AvisClients";
import { getDevisUrl, SITE_CONFIG } from "@/lib/config";
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
  MapPin,
  Hammer,
  Eye,
  Leaf,
  LayoutGrid,
  Phone,
  MessageSquare,
  FileText,
  FolderCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const pergolaHero = "/lovable-uploads/ddeac434-f6b0-40a7-8c8a-bf5404466ecc.jpg";
import galleryPer2 from "@/assets/gallery-pergola-2.jpg";
import heroMain from "@/assets/hero-main.jpg";

const benefits = [
  {
    icon: Shield,
    title: "Protection toute l'année",
    desc: "Protégez votre terrasse du soleil, de la pluie et du vent pour en profiter plus longtemps.",
  },
  {
    icon: Palette,
    title: "Esthétisme naturel",
    desc: "Le bois apporte un charme authentique et s'intègre naturellement à votre maison.",
  },
  {
    icon: Home,
    title: "Confort d'usage",
    desc: "Profitez de votre extérieur plus longtemps, même par temps changeant.",
  },
  {
    icon: UserCheck,
    title: "Intégration sur mesure",
    desc: "Dimensions, style et finitions adaptés à votre habitat et votre terrain.",
  },
];

const projectTypes = [
  {
    title: "Pergola adossée",
    desc: "Fixée contre la façade, elle prolonge naturellement votre intérieur vers l'extérieur.",
  },
  {
    title: "Pergola autoportée",
    desc: "Indépendante de la maison, idéale pour créer un espace détente au fond du jardin.",
  },
  {
    title: "Pergola avec couverture",
    desc: "Toiture pleine, polycarbonate ou lames orientables pour une protection optimale.",
  },
  { title: "Support végétal", desc: "Structure ouverte pour faire grimper glycine, vigne ou jasmin." },
  { title: "Espace spa / jacuzzi", desc: "Abritez votre spa sous une pergola pour intimité et confort." },
];

const reassurance = [
  {
    icon: MapPin,
    title: "Accompagnement local",
    desc: "Nous intervenons autour de Soissons avec un suivi clair du premier échange à la pose.",
  },
  {
    icon: UserCheck,
    title: "Projet sur mesure",
    desc: "Chaque pergola est pensée selon votre façade, votre terrain et vos usages.",
  },
  {
    icon: Hammer,
    title: "Fabrication et pose",
    desc: "Nous concevons, fabriquons et posons votre pergola. Aucune sous-traitance.",
  },
  {
    icon: Eye,
    title: "Lecture claire du projet",
    desc: "Plans détaillés et orientation claire avant le début des travaux.",
  },
  {
    icon: Leaf,
    title: "Matériaux sélectionnés",
    desc: "Essences de bois choisies pour leur durabilité et leur esthétique en extérieur.",
  },
  {
    icon: CheckCircle2,
    title: "Garantie décennale",
    desc: "Tous nos ouvrages sont couverts par la garantie décennale.",
  },
];

const faq = [
  {
    q: "Quelle différence entre pergola et tonnelle ?",
    a: "La pergola est une structure fixe et durable en bois massif, conçue sur mesure. La tonnelle est un abri temporaire et démontable.",
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
    a: "Le budget dépend des dimensions, du type de couverture et des finitions. Contactez-nous pour une estimation gratuite.",
  },
  {
    q: "Intervenez-vous sur terrain en pente ?",
    a: "Oui. Notre expérience des structures bois nous permet d'intervenir sur tous types de configurations.",
  },
  {
    q: "Proposez-vous une garantie décennale ?",
    a: "Oui, la garantie décennale couvre tous nos ouvrages pour votre tranquillité.",
  },
];

const PergolaBoisSoissons = () => (
  <Layout>
    <SEOHead
      title="Pergola Bois Sur Mesure à Soissons | Devis Gratuit | La Planète Bois"
      description="Pergola bois sur mesure à Soissons et 60 km. Fabrication locale, pose par notre équipe, garantie décennale. Devis gratuit et rapide."
      canonical="https://laplanetebois.fr/pergola-bois-soissons"
    />

    {/* HERO */}
    <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-center">
      <div className="absolute inset-0">
        <img src={pergolaHero} alt="Pergola bois sur mesure à Soissons" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
      </div>
      <div className="relative z-10 container-narrow px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5">
            Pergola bois sur mesure à Soissons — Fabricant local dans l'Aisne
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed">
            Fabricant de pergolas bois sur mesure basé à Villeneuve-Saint-Germain. Adossée à votre façade ou autoportée
            au jardin, chaque pergola est fabriquée dans notre atelier et posée par notre équipe. Devis sous 24h,
            garantie décennale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={getDevisUrl("Pergola bois")}
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
        <SectionTitle title="Une pergola bois conçue pour votre maison et votre terrain" />
        <div className="prose prose-lg text-muted-foreground mx-auto text-center space-y-4">
          <p>
            Chez La Planète Bois, nous fabriquons des pergolas bois sur mesure à Soissons et dans l'Aisne. Adossée
            contre votre façade ou autoportée au fond du jardin, avec ou sans couverture — chaque pergola est
            dimensionnée pour votre espace, fabriquée en atelier à Villeneuve-Saint-Germain et posée par notre équipe.
            Pin traité autoclave, douglas ou bois exotique, structures conformes aux DTU, garantie décennale sur tous
            nos ouvrages.
          </p>
        </div>
      </div>
    </section>

    {/* BÉNÉFICES */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <SectionTitle title="Pourquoi choisir une pergola bois sur mesure ?" />
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
              alt="Savoir-faire pergola bois"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
              src="/lovable-uploads/c43fed33-d05a-41be-a637-86cbfbc7ec62.jpg"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Un savoir-faire structure bois éprouvé
            </h2>
            <p className="text-muted-foreground mb-4">
              Notre expertise en charpente et structures bois nous permet de concevoir des pergolas robustes,
              esthétiques et parfaitement intégrées à votre façade ou votre jardin, à Soissons comme dans toute l'Aisne.
            </p>
            <p className="text-muted-foreground mb-6">
              Chaque pergola est calculée selon les charges de vent et de neige, avec des assemblages solides, une
              évacuation des eaux intégrée et un traitement du bois adapté à l'extérieur. Nous intervenons à Soissons,
              Laon, Compiègne, Château-Thierry et dans un rayon de 60 km.
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
        <SectionTitle title="Quel type de pergola bois pour votre projet ?" />
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
        <SectionTitle
          title="Matériaux & options"
          subtitle="Des essences et couvertures choisies pour durer en extérieur."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: TreePine,
              title: "Essences de bois",
              desc: "Pin traité autoclave, douglas, mélèze ou chêne selon votre projet et budget.",
              img: galleryPer2,
            },
            {
              icon: Palette,
              title: "Couvertures & toitures",
              desc: "Polycarbonate, canisses, lames orientables, toile tendue ou toiture pleine.",
              img: heroMain,
            },
            {
              icon: Settings2,
              title: "Options & accessoires",
              desc: "Éclairage LED, stores latéraux, gouttières intégrées : confort personnalisé.",
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
              desc: "Poteaux, poutres et chevrons dimensionnés selon la portée, charges de vent et de neige.",
            },
            {
              icon: Settings2,
              title: "Évacuation des eaux",
              desc: "Pente, gouttières intégrées et drainage pour une gestion optimale des eaux pluviales.",
            },
            {
              icon: Mountain,
              title: "Ancrage au sol",
              desc: "Platines, scellement chimique ou fondations béton selon la nature du sol.",
            },
            {
              icon: CheckCircle2,
              title: "Fixation en façade",
              desc: "Sabots, équerres renforcées et chevilles adaptées pour un ancrage solide et durable.",
            },
            {
              icon: TreePine,
              title: "Traitement du bois",
              desc: "Autoclave classe 3 ou 4 ou essence naturellement durable selon le projet.",
            },
            {
              icon: UserCheck,
              title: "Normes & DTU",
              desc: "Respect des DTU et règles de l'art pour une garantie décennale.",
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

    {/* RÉALISATIONS */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionTitle title="Nos réalisations pergolas" subtitle="Quelques projets récents autour de Soissons." />
        <ImageLightbox
          images={[pergolaHero, galleryPer2, heroMain].map((src, i) => ({ src, alt: `Réalisation pergola bois ${i + 1}` }))}
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

    <AvisClients type="pergola" />

    {/* FAQ */}
    <section className="section-padding bg-card">
      <div className="container-narrow max-w-3xl">
        <SectionTitle title="Questions fréquentes — Pergola bois" />
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

    <ConversionBlock defaultProject="Pergola bois" />
  </Layout>
);

export default PergolaBoisSoissons;
