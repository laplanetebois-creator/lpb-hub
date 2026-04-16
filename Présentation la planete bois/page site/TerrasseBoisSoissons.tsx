import Layout from "@/components/Layout";
import ImageLightbox from "@/components/ImageLightbox";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import ProcessSteps from "@/components/ProcessSteps";
import ConversionBlock from "@/components/ConversionBlock";
import AvisClients from "@/components/AvisClients";
import { getDevisUrl, SITE_CONFIG } from "@/lib/config";
import { Link } from "react-router-dom";
import {
  Sun,
  TreePine,
  Mountain,
  UserCheck,
  Ruler,
  MapPin,
  Hammer,
  Eye,
  Leaf,
  LayoutGrid,
  Phone,
  CheckCircle2,
  Layers,
  Settings2,
  Palette,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import heroMain from "@/assets/hero-main.jpg";
import terrasseReal1 from "@/assets/terrasse-realisation-1.png";

const terrasseHero = "/lovable-uploads/f5428590-9d55-4d19-8964-0200e6f44e18.jpg";

const benefits = [
  {
    icon: Sun,
    title: "Créer un vrai espace de vie extérieur",
    desc: "Profitez d'un espace confortable et chaleureux pour recevoir, déjeuner, circuler ou vous détendre au quotidien.",
  },
  {
    icon: TreePine,
    title: "Valoriser votre maison",
    desc: "Une terrasse bien conçue améliore l'usage de votre extérieur et renforce la qualité perçue de votre habitation.",
  },
  {
    icon: Mountain,
    title: "S'adapter à votre terrain",
    desc: "Chaque projet est pensé selon la configuration du jardin, le niveau, l'accès, les contraintes techniques et vos envies.",
  },
  {
    icon: Ruler,
    title: "Obtenir un projet cohérent",
    desc: "Dimensions, structure, finitions, circulation, escaliers, garde-corps ou plage piscine : tout doit être pensé ensemble, pas ajouté au hasard.",
  },
];

const projectTypes = [
  {
    title: "Terrasse de jardin",
    desc: "Pour créer un espace de vie extérieur simple, élégant et agréable à utiliser au quotidien.",
  },
  {
    title: "Terrasse sur pilotis",
    desc: "Pour s'adapter à une hauteur, une pente, un accès particulier ou un besoin de structure porteuse.",
  },
  { title: "Plage de piscine", desc: "Pour aménager un contour de piscine cohérent, pratique et esthétique." },
  {
    title: "Accès / escalier / garde-corps",
    desc: "Pour compléter le projet avec des finitions utiles, sûres et bien intégrées.",
  },
  {
    title: "Projet extérieur sur mesure",
    desc: "Pour aller plus loin avec claustra, transitions, circulation, zones repas ou ensemble plus global.",
  },
];

const reassurance = [
  {
    icon: MapPin,
    title: "Accompagnement local",
    desc: "Nous intervenons autour de Soissons avec un suivi clair, du premier échange jusqu'à la réalisation.",
  },
  {
    icon: UserCheck,
    title: "Projet sur mesure",
    desc: "Chaque terrasse est pensée selon votre terrain, vos usages, vos contraintes et votre budget.",
  },
  {
    icon: Hammer,
    title: "Fabrication et pose",
    desc: "Nous pensons le projet pour qu'il soit réalisable, cohérent et proprement exécuté.",
  },
  {
    icon: Eye,
    title: "Lecture claire du projet",
    desc: "Nous privilégions une approche simple, compréhensible et concrète.",
  },
  {
    icon: Leaf,
    title: "Matériaux sélectionnés",
    desc: "Le choix des matériaux et finitions se fait selon l'usage, l'esthétique et la durabilité.",
  },
  {
    icon: CheckCircle2,
    title: "Garantie décennale",
    desc: "Tous nos ouvrages sont couverts par la garantie décennale. Structures, fixations, matériaux : vous êtes protégé sur 10 ans.",
  },
];

const faq = [
  {
    q: "Intervenez-vous uniquement à Soissons ?",
    a: "Nous intervenons autour de Soissons et étudions les projets dans un rayon d'environ 60 km selon leur nature.",
  },
  {
    q: "Faites-vous uniquement des terrasses standards ?",
    a: "Non. Nous réalisons des projets sur mesure selon la configuration du terrain, la structure nécessaire et le rendu recherché.",
  },
  {
    q: "Puis-je demander un devis avec seulement quelques photos ?",
    a: "Oui. Des photos, quelques dimensions approximatives et votre commune suffisent pour un premier échange utile.",
  },
  {
    q: "Pouvez-vous intégrer escalier, garde-corps ou autres éléments ?",
    a: "Oui, selon le projet, nous pouvons intégrer les éléments nécessaires à une terrasse cohérente et fonctionnelle.",
  },
  {
    q: "Faites-vous la pose ?",
    a: "Oui. Notre approche inclut la conception, la fabrication et la pose pour un projet cohérent de bout en bout.",
  },
  {
    q: "Sous quel délai puis-je avoir un premier retour ?",
    a: "Nous répondons à chaque demande sous 24h. Des photos de votre extérieur et vos dimensions approximatives suffisent pour démarrer.",
  },
  {
    q: "Proposez-vous une garantie décennale ?",
    a: "Oui, la garantie décennale fait partie des éléments essentiels de réassurance sur nos projets.",
  },
];

const TerrasseBoisSoissons = () => (
  <Layout>
    <SEOHead
      title="Terrasse Bois Soissons | Devis Rapide | La Planète Bois"
      description="Terrasse bois sur mesure à Soissons — Fabricant local dans l'Aisne. Étude rapide, accompagnement local, fabrication et pose. Demandez votre devis gratuit."
      canonical="https://laplanetebois.fr/terrasse-bois-soissons"
    />

    {/* HERO */}
    <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-center">
      <div className="absolute inset-0">
        <img src={terrasseReal1} alt="Terrasse bois sur mesure à Soissons" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
      </div>
      <div className="relative z-10 container-narrow px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5">
            Terrasse bois sur mesure à Soissons — Fabricant local dans l'Aisne
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed">
            Fabricant de terrasses bois sur mesure basé à Villeneuve-Saint-Germain. Nous intervenons à Soissons et dans
            un rayon de 60 km : étude gratuite sur site, fabrication en atelier, pose soignée par notre équipe. Devis
            sous 24h, garantie décennale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={getDevisUrl("Terrasse bois")}
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
        <SectionTitle title="Un projet clair, un interlocuteur local, une terrasse adaptée à votre extérieur" />
        <div className="prose prose-lg text-muted-foreground mx-auto text-center space-y-4">
          <p>
            Chez La Planète Bois, nous concevons et fabriquons des terrasses bois sur mesure à Soissons et dans l'Aisne.
            Notre approche : se déplacer chez vous, comprendre votre terrain et vos usages, puis fabriquer et poser une
            terrasse durable, esthétique et parfaitement intégrée à votre maison. Pin traité autoclave, douglas ou bois
            exotique — chaque projet est pensé pour votre espace, pas pour un catalogue.
          </p>
        </div>
      </div>
    </section>

    {/* BÉNÉFICES */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <SectionTitle title="Pourquoi choisir une terrasse bois ?" />
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
              alt="Savoir-faire terrasse bois"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
              src="/lovable-uploads/9a5d7c45-93a0-41f4-8c6f-409b8812e6dd.jpg"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Un savoir-faire structure bois éprouvé
            </h2>
            <p className="text-muted-foreground mb-4">
              Notre expertise en structures bois nous permet de concevoir des terrasses robustes, esthétiques et
              parfaitement intégrées à votre habitat et votre terrain, qu'il soit plat, en pente ou avec un accès
              complexe.
            </p>
            <p className="text-muted-foreground mb-6">
              Chaque terrasse est dimensionnée selon les règles de l'art : portance, lambourdes, drainage, traitement du
              bois et fixations invisibles. Nous intervenons autour de Soissons, Laon, Compiègne, Château-Thierry et
              Villers-Cotterêts.
            </p>
            <ul className="space-y-3">
              {[
                "Conception structurelle adaptée à votre terrain",
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
        <SectionTitle title="Quel type de terrasse bois pour votre projet ?" />
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
          subtitle="Des essences et finitions choisies pour durer en extérieur."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: TreePine,
              title: "Essences de bois",
              desc: "Pin traité autoclave, douglas, mélèze, ipé ou cumaru selon votre projet et budget.",
              img: "/lovable-uploads/8bec83d7-ace5-4a3f-9dfe-7700479b6b9f.png",
            },
            {
              icon: Palette,
              title: "Types de lames",
              desc: "Lames lisses, rainurées ou bombées. Largeurs et profils adaptés à l'usage et au rendu souhaité.",
              img: "/lovable-uploads/232e8fbe-f9a2-4fa0-ab03-c57692c779d7.png",
            },
            {
              icon: Settings2,
              title: "Accessoires & finitions",
              desc: "Garde-corps, escaliers, éclairage intégré, claustra : des finitions cohérentes et soignées.",
              img: terrasseHero,
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl overflow-hidden border border-border bg-card">
              <div className={item.title === "Types de lames" ? "overflow-hidden" : "h-64 sm:h-72 overflow-hidden"}>
                <img
                  src={item.img}
                  alt={item.title}
                  className={
                    item.title === "Types de lames" ? "w-full h-auto object-contain" : "w-full h-full object-cover"
                  }
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <item.icon className="w-6 h-6 text-accent shrink-0" />
                  <h3 className="font-heading font-bold text-lg text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">{item.desc}</p>
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
              title: "Structure et lambourdes",
              desc: "Ossature dimensionnée selon la portée, l'entraxe et les charges d'usage prévues.",
            },
            {
              icon: Settings2,
              title: "Ventilation et drainage",
              desc: "Espacement des lames, pente et drainage pour une évacuation optimale des eaux.",
            },
            {
              icon: Mountain,
              title: "Ancrage au sol",
              desc: "Plots béton, vis de fondation ou pilotis selon la nature du terrain et la hauteur.",
            },
            {
              icon: CheckCircle2,
              title: "Fixation invisible",
              desc: "Clips ou fixations invisibles pour un rendu propre et une surface sans vis apparentes.",
            },
            {
              icon: TreePine,
              title: "Traitement du bois",
              desc: "Autoclave classe 3 ou 4, ou essence naturellement imputrescible selon le projet.",
            },
            {
              icon: UserCheck,
              title: "Normes et DTU",
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
        <SectionTitle title="Nos réalisations terrasses" subtitle="Quelques projets récents autour de Soissons." />
        <ImageLightbox
          images={[
            terrasseReal1,
            "/lovable-uploads/bb87ea7f-c1bb-429a-ad56-a4cda32807db.png",
            "/lovable-uploads/03983f60-bdbe-46aa-a554-5c73aac6f2a4.png",
            "/lovable-uploads/3750b98c-150d-4a24-a6e4-59dc382a02ff.png",
            "/lovable-uploads/8bbc1793-ccfd-4647-83e6-83b6ec9aa701.jpg",
          ].map((src, i) => ({ src, alt: `Réalisation terrasse bois ${i + 1}` }))}
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

    <AvisClients type="terrasse" />

    {/* FAQ */}
    <section className="section-padding bg-card">
      <div className="container-narrow max-w-3xl">
        <SectionTitle title="Questions fréquentes — Terrasse bois" />
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

    <ConversionBlock defaultProject="Terrasse bois" />
  </Layout>
);

export default TerrasseBoisSoissons;
