import ContactForm from "../components/ContactForm.jsx";

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3EA8C8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3EA8C8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3EA8C8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const contactInfo = [
  { Icon: MapPinIcon, label: "Address", value: "Plot 1207, Namanve-Kiwanga, Mukono" },
  { Icon: PhoneIcon, label: "Phone", value: "+256 778 962 504" },
  { Icon: MailIcon, label: "Email", value: "sauda.luzze@gmail.com" },
];

const cardStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: 10,
  padding: "28px 20px",
  textAlign: "center",
};

export default function Contact() {
  return (
    <section style={{ background: "#4A5C6A", flex: 1, paddingTop: 100 }}>
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "60px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: 3,
            color: "#3EA8C8",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Get in touch
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "#fff",
            fontWeight: 400,
            marginTop: 0,
            marginBottom: 16,
            fontStyle: "italic",
          }}
        >
          Have Questions? Let's Connect!
        </h2>
        <div
          style={{
            width: 60,
            height: 1,
            background: "#3EA8C8",
            margin: "0 auto 48px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
            marginBottom: 48,
          }}
        >
          {contactInfo.map(({ Icon, label, value }) => (
            <div key={label} style={cardStyle}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(62,168,200,0.1)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                }}
              >
                <Icon />
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  letterSpacing: 3,
                  color: "rgba(255,255,255,0.7)",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {label}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.6,
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            maxWidth: 560,
            margin: "0 auto",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 12,
            padding: "40px 32px",
          }}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
