import Link from "next/link";
import styles from "./page.module.css";

const quickFacts = [
  {
    label: "Location",
    value: "ICEA Building, Kenyatta Ave, Nairobi CBD",
    href: "https://maps.google.com/?q=CPK+Real+Estate",
  },
  {
    label: "Office Hours",
    value: "Mon – Fri: 8:30am – 6:00pm",
  },
  {
    label: "Contact",
    value: "+254 709 123456",
    href: "tel:+254709123456",
  },
];

const services = [
  {
    title: "Commercial Leasing",
    description:
      "Prime CBD spaces tailored for financial, legal, and professional service brands.",
  },
  {
    title: "Property Advisory",
    description:
      "Strategic market guidance, valuation, and transaction support for institutional investors.",
  },
  {
    title: "Facilities Management",
    description:
      "End-to-end building operations ensuring every tenant enjoys a seamless workspace experience.",
  },
];

const highlights = [
  {
    title: "Iconic CBD Presence",
    detail:
      "Located on Kenyatta Avenue with immediate access to government, banking, and transport hubs.",
  },
  {
    title: "Modern Space Planning",
    detail:
      "Flexible floor plates with abundant natural light, smart security, and high-speed connectivity.",
  },
  {
    title: "Neighbourhood Amenities",
    detail:
      "Steps away from five-star hotels, fine dining, cultural landmarks, and premium retail anchors.",
  },
];

const metrics = [
  { label: "Total Floors", value: "15" },
  { label: "Grade-A Offices", value: "21" },
  { label: "Average Floor Plate", value: "6,500 sq.ft." },
  { label: "Parking Ratio", value: "1:1,000 sq.ft." },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.badge}>Nairobi CBD Landmark</p>
          <h1>CPK Real Estate</h1>
          <p className={styles.subtitle}>
            Premium commercial real estate partner anchoring Nairobi&apos;s
            central business district with tailored leasing, advisory, and
            facilities management solutions.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="mailto:leasing@cpk.co.ke">
              Talk to Leasing
            </Link>
            <Link
              className={styles.secondaryButton}
              href="https://maps.google.com/?q=-1.266345,36.8016281"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </Link>
          </div>
        </div>
        <div className={styles.heroPane}>
          <div className={styles.heroPaneHeader}>
            <h2>Quick Facts</h2>
            <span>Trusted by blue-chip tenants across East Africa</span>
          </div>
          <ul className={styles.quickFacts}>
            {quickFacts.map((fact) => (
              <li key={fact.label}>
                <span>{fact.label}</span>
                {fact.href ? (
                  <Link href={fact.href} target="_blank" rel="noopener noreferrer">
                    {fact.value}
                  </Link>
                ) : (
                  <strong>{fact.value}</strong>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.metricsSection}>
          {metrics.map((metric) => (
            <div key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>What We Deliver</p>
            <h2>Integrated real estate services built for enterprise scale</h2>
            <p>
              From leasing Grade-A office towers to managing complex
              fit-outs, CPK Real Estate keeps organisations fully operational
              in Nairobi&apos;s most strategic address.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {services.map((service) => (
              <article key={service.title} className={styles.card}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Neighbourhood</p>
            <h2>Work where Nairobi&apos;s business pulse is the strongest</h2>
            <p>
              Positioned among embassies, premium hospitality, and major
              financial institutions, the ICEA Building keeps teams connected to
              key decision makers and amenities within minutes.
            </p>
          </div>
          <div className={styles.highlightGrid}>
            {highlights.map((highlight) => (
              <div key={highlight.title} className={styles.highlight}>
                <h3>{highlight.title}</h3>
                <p>{highlight.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Visit Us</p>
            <h2>Find CPK Real Estate at the heart of Nairobi</h2>
            <p>
              The ICEA Building is easily accessible from Uhuru Highway, Moi
              Avenue, and Kenyatta Avenue with dedicated parking, on-site
              security, and concierge support.
            </p>
          </div>
          <div className={styles.mapWrapper}>
            <iframe
              title="CPK Real Estate Map"
              src="https://maps.google.com/maps?q=-1.266345,36.8016281&z=16&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className={styles.mapDetails}>
              <div>
                <h3>ICEA Building</h3>
                <p>4th Floor, Kenyatta Avenue, Nairobi, Kenya</p>
              </div>
              <div>
                <h3>Access & Transit</h3>
                <ul>
                  <li>2 min walk to Kencom and Ambassador bus termini</li>
                  <li>5 min drive to Nairobi Expressway entry/exit</li>
                  <li>20 min drive from Jomo Kenyatta International Airport</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contactBanner}>
          <div>
            <p>Schedule a tour</p>
            <h2>Secure a bespoke workspace at CPK Real Estate</h2>
          </div>
          <div className={styles.bannerActions}>
            <Link href="mailto:leasing@cpk.co.ke">Email Leasing</Link>
            <Link href="https://wa.me/254709123456" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <strong>CPK Real Estate</strong>
          <p>ICEA Building, Kenyatta Avenue, Nairobi</p>
        </div>
        <div className={styles.footerLinks}>
          <Link href="tel:+254709123456">+254 709 123456</Link>
          <Link href="mailto:info@cpk.co.ke">info@cpk.co.ke</Link>
          <Link
            href="https://maps.google.com/?q=ICEA+Building+Nairobi"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </Link>
        </div>
      </footer>
    </div>
  );
}
