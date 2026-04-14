const linkStyle = {
  background: "transparent",
  border: "none",
  padding: 0,
  cursor: "pointer",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 12,
  letterSpacing: 1,
  color: "rgba(255,255,255,0.7)",
  textDecoration: "none",
};

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com/",
    bg: "#1877F2",
    path: "M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.24-1.46 1.49-1.46H16.5V4.44A20.9 20.9 0 0 0 14.35 4.3c-2.13 0-3.6 1.3-3.6 3.7v2.5H8v3h2.75V21h2.75Z",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    bg: "#1DA1F2",
    path: "M17.5 3h3.1l-6.77 7.74L22 21h-6.24l-4.88-6.4L5.2 21H2.1l7.24-8.28L2 3h6.4l4.41 5.83L17.5 3Zm-1.09 16.13h1.72L7.67 4.77H5.83L16.41 19.13Z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    bg: "#0A66C2",
    path: "M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.9l.04-1.69Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    bg: "linear-gradient(45deg, #feda75 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%)",
    path: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5.01-4.74.07-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.26.82-.38.38-.62.75-.82 1.26-.15.39-.33.97-.38 2.04C2.71 8.5 2.7 8.85 2.7 12s.01 3.5.07 4.74c.05 1.07.23 1.65.38 2.04.2.51.44.88.82 1.26.38.38.75.62 1.26.82.39.15.97.33 2.04.38 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.26-.82.38-.38.62-.75.82-1.26.15-.39.33-.97.38-2.04.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.07-.23-1.65-.38-2.04a3.4 3.4 0 0 0-.82-1.26 3.4 3.4 0 0 0-1.26-.82c-.39-.15-.97-.33-2.04-.38-1.24-.06-1.59-.07-4.74-.07Zm0 3.07a4.93 4.93 0 1 1 0 9.86 4.93 4.93 0 0 1 0-9.86Zm0 8.13a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm6.27-8.33a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z",
  },
];

export default function Footer({ onOpenLegal }) {
  return (
    <footer
      style={{
        background: "#3b4a57",
        color: "rgba(255,255,255,0.7)",
        padding: "32px 24px 28px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              className="luzze-footer-social"
              style={{ background: s.bg, borderColor: "transparent" }}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>

        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.08)",
            marginBottom: 20,
          }}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
          }}
        >
          <div>© {new Date().getFullYear()} Luzze Consultancy. All rights reserved.</div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <button style={linkStyle} onClick={() => onOpenLegal("privacy")}>
              Privacy
            </button>
            <button style={linkStyle} onClick={() => onOpenLegal("terms")}>
              Terms
            </button>
            <button style={linkStyle} onClick={() => onOpenLegal("refund")}>
              Refund policy
            </button>
            <a style={linkStyle} href="mailto:sauda.luzze@gmail.com">
              sauda.luzze@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
