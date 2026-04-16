import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { MapPin, CheckCircle2, Navigation, Phone } from "lucide-react";
import { getDevisUrl, SITE_CONFIG } from "@/lib/config";

const mainCities = [
  { name: "Soissons", distance: "0 km" },
  { name: "Villers-Cotterêts", distance: "25 km" },
  { name: "Laon", distance: "35 km" },
  { name: "Compiègne", distance: "45 km" },
  { name: "Chauny", distance: "35 km" },
  { name: "Château-Thierry", distance: "40 km" },
];

const otherCities = [
  "Vic-sur-Aisne",
  "Crouy",
  "Cuffies",
  "Billy-sur-Aisne",
  "Braine",
  "Vailly-sur-Aisne",
  "Coucy-le-Château",
  "Crépy-en-Valois",
  "Villeneuve-Saint-Germain",
  "Coyolles",
  "Fère-en-Tardenois",
];

const ZoneIntervention = () => (
  <Layout>
    <SEOHead
      title="Zone d'Intervention | Soissons et 60 km | La Planète Bois"
      description="La Planète Bois intervient à Soissons, Laon, Compiègne, Château-Thierry, Villers-Cotterêts et 60 km autour pour vos terrasses, pergolas et carports bois."
      canonical="https://laplanetebois.fr/zone-intervention"
    />

    {/* HERO SECTION */}
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--primary-foreground)) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      <div className="relative z-10 container-narrow text-center px-4">
        <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-accent/30">
          <Navigation className="w-4 h-4 text-accent" />
          Rayon de 60 km autour de Soissons
        </div>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5">
          Zone d'intervention — Terrasses, pergolas et carports bois autour de Soissons
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Fabricant basé à Villeneuve-Saint-Germain, nous intervenons à Soissons et dans un rayon de 60 km pour la
          conception, la fabrication et la pose de terrasses bois, pergolas et carports sur mesure. Déplacement gratuit,
          devis sous 24h.
        </p>
      </div>
    </section>

    {/* VILLES PRINCIPALES */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionTitle
          title="Villes principales desservies"
          subtitle="Nous intervenons régulièrement dans ces villes et leurs environs."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {mainCities.map((city) => (
            <div
              key={city.name}
              className="group relative bg-card rounded-xl border border-border p-6 text-center hover:border-accent/50 hover:shadow-[var(--card-shadow-hover)] transition-all duration-300"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{city.name}</h3>
              <span className="text-sm text-muted-foreground">≈ {city.distance}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* AUTRES COMMUNES */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <SectionTitle title="Et aussi dans ces communes" />
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {otherCities.map((city) => (
            <span
              key={city}
              className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-foreground hover:border-accent/40 transition-colors"
            >
              {city}
            </span>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-6">
          Votre commune n'est pas listée ? Contactez-nous, nous intervenons peut-être chez vous.
        </p>
      </div>
    </section>

    {/* AVANTAGES */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-[var(--card-shadow)]">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Terrasses, pergolas et carports bois dans l'Aisne et alentours
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              La Planète Bois est une entreprise artisanale basée à Villeneuve-Saint-Germain, à côté de Soissons, dans
              l'Aisne. Nous fabriquons et posons des terrasses bois, pergolas et carports sur mesure dans toutes les
              communes situées dans un rayon d'environ 60 km autour de notre atelier. Chaque déplacement pour visite
              technique est gratuit.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Que vous soyez à Laon, Compiègne, Château-Thierry, Villers-Cotterêts, Chauny ou dans n'importe quelle
              commune de l'Aisne et de l'Oise, contactez-nous pour vérifier que votre projet entre dans notre zone. Nous
              répondons sous 24h et nous déplaçons gratuitement pour étudier votre terrain.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Déplacement gratuit", icon: Navigation },
                { label: "Prise de mesures sur place", icon: CheckCircle2 },
                { label: "Étude de projet offerte", icon: CheckCircle2 },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-background rounded-lg px-4 py-3 border border-border"
                >
                  <item.icon className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground text-sm font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection
      title="Vous êtes dans notre zone ?"
      subtitle="Contactez-nous pour vérifier et obtenir votre devis gratuit."
    />
  </Layout>
);

export default ZoneIntervention;
