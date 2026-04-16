import { useState } from "react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { SITE_CONFIG, TYPE_PROJET_OPTIONS } from "@/lib/config";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({
    nom: "", telephone: "", email: "", commune: "",
    type_projet: "", dimensions: "", message: ""
  });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nom.trim() || !form.email.trim() || !form.message.trim()) return;
    setSending(true);

    try {
      const response = await fetch(SITE_CONFIG.makeWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.nom,
          phone: form.telephone,
          email: form.email,
          city: form.commune,
          projectType: form.type_projet,
          dimensions: form.dimensions,
          message: form.message,
          pageUrl: window.location.href,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast({ title: "Demande envoyée ✅", description: "Nous vous recontactons rapidement." });
        setForm({ nom: "", telephone: "", email: "", commune: "", type_projet: "", dimensions: "", message: "" });
      } else {
        toast({ title: "Erreur", description: "Une erreur s'est produite. Veuillez réessayer.", variant: "destructive" });
      }
    } catch (err) {
      console.error("Erreur webhook:", err);
      toast({ title: "Erreur", description: "Une erreur s'est produite. Veuillez réessayer.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [field]: e.target.value });

  const inputClass =
    "w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent";

  return (
    <Layout>
      <SEOHead
        title="Demande de Devis Gratuit | Terrasse Pergola Carport Soissons | La Planète Bois"
        description="Demandez un devis gratuit pour votre terrasse, pergola ou carport bois à Soissons et 60 km. Réponse rapide, étude de projet offerte."
        canonical="https://laplanetebois.fr/contact"
      />

      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left: Info */}
            <div className="flex flex-col justify-center">
              <p className="text-sm font-medium text-accent mb-2">Contact</p>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Parlez-nous de votre projet bois
              </h1>
              <p className="text-muted-foreground mb-6 max-w-md">
                Réponse rapide. Étude de projet offerte pour les demandes qualifiées dans notre zone.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Atelier (ligne directe)</p>
                    <a href={SITE_CONFIG.phoneHref} className="font-semibold text-foreground text-lg">{SITE_CONFIG.phone}</a>
                    <p className="text-xs text-muted-foreground mt-1">Fixe</p>
                    <a href={SITE_CONFIG.phoneSecondaryHref} className="font-medium text-foreground">{SITE_CONFIG.phoneSecondary}</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="font-semibold text-foreground">{SITE_CONFIG.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Adresse</p>
                    <p className="font-semibold text-foreground">{SITE_CONFIG.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Horaires</p>
                    <p className="font-semibold text-foreground">Lun-Ven : 8h-18h | Sam : 9h-13h</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Garantie décennale</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Atelier local</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Fabrication + pose</span>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-background rounded-xl p-8 border border-border shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Demande de devis</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Nom / Prénom *</label>
                    <input type="text" placeholder="Votre nom" value={form.nom} onChange={update("nom")} maxLength={100} required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Téléphone</label>
                    <input type="tel" placeholder="06 XX XX XX XX" value={form.telephone} onChange={update("telephone")} maxLength={20} className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <input type="email" placeholder="votre@email.fr" value={form.email} onChange={update("email")} maxLength={255} required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Commune</label>
                    <input type="text" placeholder="Votre commune" value={form.commune} onChange={update("commune")} maxLength={100} className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Type de projet *</label>
                    <select value={form.type_projet} onChange={update("type_projet")} required className={inputClass}>
                      <option value="">Sélectionner...</option>
                      {TYPE_PROJET_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Dimensions approx.</label>
                    <input type="text" placeholder="ex : 4 x 6 m" value={form.dimensions} onChange={update("dimensions")} maxLength={50} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                  <textarea placeholder="Décrivez votre projet, vos envies, vos contraintes..." value={form.message} onChange={update("message")} maxLength={1000} required rows={4} className={`${inputClass} resize-none`} />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 rounded-lg bg-accent text-accent-foreground font-bold text-base hover:bg-accent/90 transition-colors disabled:opacity-50"
                >
                  {sending ? "Envoi en cours…" : "Envoyer ma demande"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
