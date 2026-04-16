import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const MentionsLegales = () =>
<Layout>
    <SEOHead
    title="Mentions Légales — La Planète Bois"
    description="Mentions légales du site La Planète Bois, SAS DomeBulle. Informations sur l'éditeur, l'hébergeur, la propriété intellectuelle et la protection des données."
    canonical="https://laplanetebois.fr/mentions-legales" />
  

    <section className="py-16 md:py-24 bg-background">
      <div className="container-narrow px-4 max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
          Mentions Légales
        </h1>

        <div className="space-y-10 text-foreground/80 leading-relaxed text-sm md:text-base">
          {/* Propriétaire */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Propriétaire et éditeur du site
            </h2>
            <ul className="space-y-1">
              <li><strong>Nom commercial :</strong> La Planète Bois</li>
              <li><strong>Société exploitante :</strong> SAS DomeBulle</li>
              <li><strong>Capital social :</strong> 10 000 €</li>
              <li><strong>SIRET :</strong> 980 741 847 00019</li>
              <li><strong>TVA intracommunautaire :</strong> FR19980741847</li>
              <li><strong>RCS :</strong> Soissons</li>
            </ul>
            <p className="mt-3">
              <strong>Siège social :</strong><br />
              La Tuilerie – Route de Compiègne<br />
              02600 Taillefontaine – France
            </p>
            <p className="mt-2"><strong>Téléphone :</strong> 06 52 73 74 74</p>
            <p><strong>Email :</strong>Email : laplanetebois@gmail.com</p>
          </div>

          {/* Directeur de la publication */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Directeur de la publication
            </h2>
            <p>Le directeur de la publication est : <strong>Louvent Valiergue</strong></p>
          </div>

          {/* Hébergement */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Hébergement du site
            </h2>
            <p>
              IONOS SARL<br />
              7 Place de la Gare<br />
              57200 Sarreguemines – France
            </p>
            <p className="mt-1">
              Site web :{" "}
              <a
              href="https://www.ionos.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-accent/80 transition-colors">
              
                https://www.ionos.fr
              </a>
            </p>
          </div>

          {/* CGU */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Conditions générales d'utilisation du site
            </h2>
            <p>
              L'utilisation du site implique l'acceptation pleine et entière des conditions
              générales d'utilisation décrites ci-après.
            </p>
            <p className="mt-2">
              Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout
              moment. Les utilisateurs du site sont donc invités à les consulter régulièrement.
            </p>
            <p className="mt-2">
              Le site est normalement accessible à tout moment. Une interruption pour raison de
              maintenance technique peut être décidée par l'éditeur du site.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Description des services fournis
            </h2>
            <p>
              Le site a pour objet de fournir des informations concernant l'ensemble des activités
              de la société, notamment :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Fabrication et installation de terrasses bois</li>
              <li>Pergolas</li>
              <li>Carports</li>
              <li>Bardages</li>
              <li>Extensions bois</li>
              <li>Aménagements extérieurs bois</li>
            </ul>
            <p className="mt-2">
              La société s'efforce de fournir des informations aussi précises que possible.
              Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes ou
              des carences dans la mise à jour des informations.
            </p>
            <p className="mt-2">
              Les informations figurant sur le site sont données à titre indicatif et peuvent
              évoluer.
            </p>
          </div>

          {/* Limitations techniques */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Limitations contractuelles sur les données techniques
            </h2>
            <p>Le site utilise la technologie JavaScript.</p>
            <p className="mt-2">
              Le site Internet ne pourra être tenu responsable de dommages matériels liés à
              l'utilisation du site.
            </p>
            <p className="mt-2">L'utilisateur s'engage à accéder au site en utilisant :</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Un matériel récent</li>
              <li>Un navigateur à jour</li>
              <li>Un système informatique sécurisé</li>
            </ul>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              La société SAS DomeBulle, exploitant la marque La Planète Bois, est propriétaire des
              droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments
              accessibles sur le site, notamment :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Textes</li>
              <li>Images</li>
              <li>Graphismes</li>
              <li>Logos</li>
              <li>Vidéos</li>
              <li>Icônes</li>
              <li>Logiciels</li>
            </ul>
            <p className="mt-2">
              Toute reproduction, représentation, modification ou publication de tout ou partie des
              éléments du site est interdite sans autorisation écrite préalable.
            </p>
            <p className="mt-2">
              Toute exploitation non autorisée du site ou de son contenu sera considérée comme
              constitutive de contrefaçon.
            </p>
          </div>

          {/* Responsabilité */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Limitations de responsabilité
            </h2>
            <p>
              La société SAS DomeBulle ne pourra être tenue responsable des dommages directs ou
              indirects causés au matériel de l'utilisateur lors de l'accès au site.
            </p>
            <p className="mt-2">
              La société ne pourra également être tenue responsable des dommages indirects tels que :
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Perte de marché</li>
              <li>Perte de chance</li>
              <li>Perte d'exploitation</li>
            </ul>
            <p className="mt-1">consécutifs à l'utilisation du site.</p>
          </div>

          {/* Données personnelles */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Gestion des données personnelles
            </h2>
            <p>
              Les informations collectées sur le site sont destinées uniquement à l'usage de La
              Planète Bois / SAS DomeBulle dans le cadre de la relation commerciale avec les
              utilisateurs.
            </p>
            <p className="mt-2">
              Conformément au Règlement Général sur la Protection des Données (RGPD), les
              utilisateurs disposent :
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>D'un droit d'accès</li>
              <li>D'un droit de rectification</li>
              <li>D'un droit de suppression</li>
              <li>D'un droit d'opposition</li>
            </ul>
            <p className="mt-1">sur leurs données personnelles.</p>
            <p className="mt-2">
              Toute demande peut être adressée à l'adresse email indiquée dans les mentions légales.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Liens hypertextes et cookies
            </h2>
            <p>
              Le site peut contenir des liens hypertextes vers d'autres sites. La société ne dispose
              d'aucun moyen de contrôle sur ces sites et n'assume aucune responsabilité quant à leur
              contenu.
            </p>
            <p className="mt-2">
              La navigation sur le site peut entraîner l'installation de cookies. Un cookie est un
              fichier de petite taille permettant d'enregistrer des informations relatives à la
              navigation.
            </p>
            <p className="mt-2">
              L'utilisateur peut configurer son navigateur pour refuser l'installation des cookies.
            </p>
          </div>

          {/* Droit applicable */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Droit applicable et juridiction
            </h2>
            <p>
              Tout litige en relation avec l'utilisation du site est soumis au droit français.
            </p>
            <p className="mt-2">
              La juridiction compétente est celle du ressort du tribunal compétent de Soissons, sauf
              disposition légale contraire.
            </p>
          </div>

          {/* Lois */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Principales lois concernées
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés</li>
              <li>Loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique</li>
              <li>Règlement Général sur la Protection des Données (RGPD)</li>
            </ul>
          </div>

          {/* Lexique */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Lexique</h2>
            <p>
              <strong>Utilisateur :</strong> internaute se connectant au site.
            </p>
            <p>
              <strong>Informations personnelles :</strong> informations permettant l'identification
              directe ou indirecte d'une personne physique.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>;


export default MentionsLegales;