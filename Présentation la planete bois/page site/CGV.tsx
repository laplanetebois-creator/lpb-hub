import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const CGV = () => (
  <Layout>
    <SEOHead
      title="Conditions Générales de Vente — La Planète Bois"
      description="Conditions générales de vente de La Planète Bois (SAS DomeBulle) : prix, paiement, garanties, livraison, rétractation et litiges."
      canonical="https://laplanetebois.fr/cgv"
    />

    <section className="py-16 md:py-24 bg-background">
      <div className="container-narrow px-4 max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Conditions Générales de Vente
        </h1>
        <p className="text-accent font-medium mb-12">LA PLANÈTE BOIS</p>

        <div className="space-y-10 text-foreground/80 leading-relaxed text-sm md:text-base">
          {/* Article 1 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Article 1 – Objet des services
            </h2>
            <p>
              La marque La Planète Bois, exploitée par la société SAS DomeBulle, conçoit, fabrique
              et réalise des travaux d'aménagement et de construction en bois comprenant notamment :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Terrasses bois</li>
              <li>Pergolas</li>
              <li>Carports</li>
              <li>Bardages</li>
              <li>Extensions bois</li>
              <li>Isolation par l'extérieur</li>
              <li>Structures et constructions bois</li>
            </ul>
            <p className="mt-2">
              Les prestations peuvent inclure la conception, la fabrication, la fourniture des
              matériaux et l'installation sur site.
            </p>
          </div>

          {/* Article 2 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Article 2 – Prix
            </h2>
            <p>Le prix des prestations est indiqué sur le devis remis au client.</p>
            <p className="mt-2">Les prix peuvent varier en fonction :</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>De la nature du projet</li>
              <li>Des contraintes techniques</li>
              <li>De l'accessibilité du chantier</li>
              <li>Des matériaux choisis</li>
              <li>Des conditions de réalisation</li>
            </ul>
            <p className="mt-2">
              Seul le prix figurant sur le devis signé par le client est contractuel.
            </p>
            <p className="mt-2">
              Toute prestation supplémentaire non prévue au devis initial fera l'objet d'un devis
              complémentaire accepté par le client.
            </p>
          </div>

          {/* Article 3 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Article 3 – Modalités de paiement
            </h2>
            <p>
              Les modalités de paiement sont indiquées sur le devis. Sauf mention contraire :
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Paiement par virement bancaire</li>
              <li>Ou carte bancaire</li>
            </ul>
            <p className="mt-2">
              Les paiements peuvent être répartis selon un échéancier figurant sur le devis.
            </p>
            <p className="mt-2">Tout retard de paiement pourra entraîner :</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>La suspension du chantier</li>
              <li>
                La facturation de pénalités de retard conformément à la réglementation en vigueur
              </li>
            </ul>
            <p className="mt-2">
              La société conserve la propriété des matériaux et ouvrages réalisés jusqu'au paiement
              complet du prix.
            </p>
          </div>

          {/* Article 4 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Article 4 – Livraison et exécution des travaux
            </h2>

            <h3 className="font-semibold text-foreground mt-4 mb-2">a) Exécution des travaux</h3>
            <p>
              La société La Planète Bois peut faire appel à des prestataires ou sous-traitants
              qualifiés pour l'exécution de tout ou partie de ses prestations.
            </p>
            <p className="mt-2">
              La livraison des fournitures et matériaux nécessaires au chantier intervient, sauf
              mention contraire, au moment de l'exécution des travaux sur site.
            </p>
            <p className="mt-2">
              Le délai de production est généralement compris entre 2 et 7 jours ouvrés selon la
              nature de l'ouvrage, les matériaux commandés et la charge de production.
            </p>
            <p className="mt-2">
              La durée de pose dépend de l'étendue du projet et est communiquée au client avant
              validation du devis.
            </p>
            <p className="mt-2">
              Les délais indiqués au devis sont donnés à titre indicatif. Ils peuvent être ajustés
              en cas :
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>D'intempéries</li>
              <li>De difficultés d'accès au chantier</li>
              <li>De retard fournisseur</li>
              <li>De contraintes techniques imprévues</li>
              <li>De modification du projet par le client</li>
              <li>D'intervention d'autres corps de métier</li>
            </ul>
            <p className="mt-2">
              Dans ces situations, la responsabilité de l'entreprise ne pourra être engagée.
            </p>

            <h3 className="font-semibold text-foreground mt-6 mb-2">
              b) Autorisations administratives
            </h3>
            <p>
              La société peut apporter des conseils concernant les démarches administratives liées
              au projet.
            </p>
            <p className="mt-2">
              Toutefois, sauf mention contraire au devis, le client reste seul responsable de
              l'obtention des autorisations administratives nécessaires, notamment :
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Déclaration préalable</li>
              <li>Permis de construire</li>
              <li>Conformité au PLU</li>
              <li>Règles d'urbanisme</li>
              <li>Prescriptions ABF</li>
            </ul>
            <p className="mt-2">
              L'entreprise ne peut être tenue responsable d'un refus administratif ou d'un refus de
              financement.
            </p>
          </div>

          {/* Article 5 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Article 5 – Garanties et responsabilités
            </h2>
            <p>
              Les travaux réalisés bénéficient des garanties légales prévues par la réglementation
              française :
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Garantie de parfait achèvement</li>
              <li>Garantie biennale</li>
              <li>Garantie décennale lorsque les travaux y sont soumis</li>
            </ul>
            <p className="mt-2">
              L'entreprise est couverte par une assurance responsabilité civile professionnelle et
              décennale.
            </p>

            <h3 className="font-semibold text-foreground mt-6 mb-2">Matériaux bois</h3>
            <p>Le bois étant un matériau naturel, peuvent apparaître :</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Variations de teinte</li>
              <li>Fissures superficielles</li>
              <li>Légères déformations</li>
              <li>Remontées de résine ou tanins</li>
              <li>Évolution de couleur</li>
            </ul>
            <p className="mt-2">Ces phénomènes sont naturels et ne constituent pas un défaut.</p>

            <h3 className="font-semibold text-foreground mt-6 mb-2">Entretien</h3>
            <p>
              Les ouvrages bois nécessitent un entretien régulier. L'absence d'entretien peut
              entraîner :
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Vieillissement prématuré</li>
              <li>Modification esthétique</li>
            </ul>
            <p className="mt-2">
              Dans ce cas, la responsabilité de l'entreprise ne pourra être engagée.
            </p>

            <h3 className="font-semibold text-foreground mt-6 mb-2">Signalement des défauts</h3>
            <p>
              Toute malfaçon apparente doit être signalée dans un délai de 30 jours suivant la
              réception des travaux.
            </p>
          </div>

          {/* Article 6 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Article 6 – Modifications et annulation
            </h2>

            <h3 className="font-semibold text-foreground mt-4 mb-2">Droit de rétractation</h3>
            <p>
              Le client consommateur dispose d'un délai de rétractation de 14 jours calendaires à
              compter de la signature du devis. Passé ce délai, aucune annulation ne pourra être
              acceptée.
            </p>

            <h3 className="font-semibold text-foreground mt-6 mb-2">Travaux sur mesure</h3>
            <p>
              Les prestations proposées concernent des ouvrages réalisés sur mesure, notamment :
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Terrasses</li>
              <li>Pergolas</li>
              <li>Carports</li>
              <li>Bardages</li>
              <li>Extensions bois</li>
            </ul>
            <p className="mt-2">
              Ces éléments sont fabriqués spécifiquement pour le client.
            </p>

            <h3 className="font-semibold text-foreground mt-6 mb-2">Démarrage anticipé</h3>
            <p>
              Si le client demande le démarrage des travaux avant la fin du délai de rétractation,
              il reconnaît renoncer à son droit de rétractation.
            </p>

            <h3 className="font-semibold text-foreground mt-6 mb-2">Annulation après lancement</h3>
            <p>
              Toute annulation après commande des matériaux, fabrication ou début du chantier
              entraînera la facturation :
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Des matériaux</li>
              <li>Des prestations réalisées</li>
              <li>Des frais engagés</li>
            </ul>

            <h3 className="font-semibold text-foreground mt-6 mb-2">Modification du projet</h3>
            <p>
              Toute modification demandée après signature du devis pourra entraîner :
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Un ajustement du prix</li>
              <li>Une modification des délais</li>
              <li>Un devis complémentaire</li>
            </ul>
          </div>

          {/* Article 7 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Article 7 – Assurance du client
            </h2>
            <p>
              Le client doit disposer d'une assurance couvrant les risques liés à son bien et au
              chantier.
            </p>
          </div>

          {/* Article 8 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Article 8 – Communication et propriété intellectuelle
            </h2>
            <p>
              L'entreprise se réserve le droit d'utiliser les photos et visuels des réalisations à
              des fins de communication commerciale sauf opposition écrite du client.
            </p>
          </div>

          {/* Article 9 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Article 9 – Litiges
            </h2>
            <p>
              En cas de litige, une solution amiable sera privilégiée. À défaut d'accord, le litige
              pourra être porté devant les tribunaux compétents.
            </p>
          </div>

          {/* Article 10 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Article 10 – Loi applicable
            </h2>
            <p>Les présentes CGV sont régies par la loi française.</p>
          </div>

          {/* Article 11 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Article 11 – Médiation
            </h2>
            <p>Le consommateur peut contacter le médiateur suivant :</p>
            <p className="mt-2">
              <strong>CNPM MÉDIATION CONSOMMATION</strong><br />
              27 Avenue de la Libération<br />
              42400 SAINT-CHAMOND
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default CGV;
