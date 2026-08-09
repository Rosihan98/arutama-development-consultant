import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const services = [
    {
      number: "01",
      icon: "fa-solid fa-users",
      title: "People Development",
      description:
        "Program pengembangan individu dan tim untuk meningkatkan kompetensi, kapasitas, dan kontribusi profesional.",
    },
    {
      number: "02",
      icon: "fa-solid fa-user-tie",
      title: "Leadership Development",
      description:
        "Pengembangan kemampuan pemimpin agar mampu mengambil keputusan, mengelola tim, dan menghadapi perubahan secara strategis.",
    },
    {
      number: "03",
      icon: "fa-solid fa-building",
      title: "Organizational Development",
      description:
        "Membantu organisasi membangun struktur, budaya, sistem, dan proses kerja yang lebih efektif.",
    },
    {
      number: "04",
      icon: "fa-solid fa-chart-line",
      title: "Performance Improvement",
      description:
        "Pendekatan pengembangan kinerja untuk meningkatkan efektivitas individu, tim, dan organisasi.",
    },
    {
      number: "05",
      icon: "fa-solid fa-handshake",
      title: "Consulting",
      description:
        "Pendampingan konsultatif untuk memahami tantangan organisasi dan merancang solusi yang relevan.",
    },
    {
      number: "06",
      icon: "fa-solid fa-layer-group",
      title: "Capacity Building",
      description:
        "Penguatan kapasitas organisasi melalui program yang dirancang sesuai kebutuhan dan tujuan strategis.",
    },
  ];

  const expertise = [
    "Human Capital Development",
    "Leadership & Management",
    "Organizational Development",
    "Performance Management",
    "People & Culture",
    "Capacity Building",
  ];

  const reasons = [
    {
      number: "01",
      title: "Berbasis Kebutuhan",
      text: "Kami memulai setiap program dengan memahami kebutuhan, karakteristik, dan tantangan organisasi.",
    },
    {
      number: "02",
      title: "Pendekatan Profesional",
      text: "Setiap proses dirancang secara terstruktur dengan komunikasi yang terbuka dan profesional.",
    },
    {
      number: "03",
      title: "Praktis & Aplikatif",
      text: "Solusi diarahkan agar dapat dipahami, diterapkan, dan memberikan manfaat nyata.",
    },
    {
      number: "04",
      title: "Berorientasi Dampak",
      text: "Pengembangan tidak berhenti pada kegiatan, tetapi diarahkan pada perubahan dan peningkatan kinerja.",
    },
  ];
  const handleContactSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const nama = form.nama.value.trim();
    const perusahaan = form.perusahaan.value.trim();
    const whatsapp = form.whatsapp.value.trim();
    const kebutuhan = form.kebutuhan.value;
    const pesan = form.pesan.value.trim();

    if (!nama || !whatsapp || !kebutuhan || !pesan) {
      alert("Mohon lengkapi data yang wajib diisi.");
      return;
    }

    const message = `
Halo ARUTAMA Development & Consulting,

Saya ingin berkonsultasi mengenai layanan ARUTAMA.

Nama: ${nama}
Perusahaan / Instansi: ${perusahaan || "-"}
WhatsApp: ${whatsapp}
Kebutuhan: ${kebutuhan}

Pesan:
${pesan}

Mohon informasi lebih lanjut.

Terima kasih.
    `.trim();

    const whatsappNumber = "6281311897389";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="site">
      {" "}
      <a
        href="https://wa.me/6281311897389"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Hubungi ARUTAMA melalui WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#beranda" className="nav-brand">
            <img
              src="/images/logo-arutama-white.png"
              alt="ARUTAMA Development & Consultant"
              className="nav-logo"
            />
          </a>

          <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <a href="#beranda" onClick={() => setMenuOpen(false)}>
              Beranda
            </a>

            <a href="#tentang" onClick={() => setMenuOpen(false)}>
              Tentang Kami
            </a>

            <a href="#layanan" onClick={() => setMenuOpen(false)}>
              Layanan
            </a>

            <a href="#expertise" onClick={() => setMenuOpen(false)}>
              Expertise
            </a>

            <a href="#portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>

            <a href="#kontak" onClick={() => setMenuOpen(false)}>
              Kontak
            </a>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Buka menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <a href="#kontak" className="nav-button">
            Konsultasi
          </a>
        </div>
      </header>
      <main>
        {/* ================= HERO ================= */}
        <section id="beranda" className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow">ARUTAMA DEVELOPMENT & CONSULTANT</span>

              <h1>
                Mengembangkan Manusia.
                <span> Memperkuat Organisasi.</span>
              </h1>

              <p className="hero-description">
                Partner strategis bagi perusahaan, instansi, dan organisasi
                dalam mengembangkan potensi manusia, memperkuat kapasitas
                organisasi, dan menciptakan kinerja yang berkelanjutan.
              </p>

              <div className="hero-actions">
                <a href="#layanan" className="button button-primary">
                  Jelajahi Layanan
                  <span>→</span>
                </a>

                <a href="#tentang" className="button button-secondary">
                  Tentang ARUTAMA
                </a>
              </div>

              <div className="trust-points">
                <div>
                  <strong>People</strong>
                  <span>Pengembangan manusia</span>
                </div>

                <div>
                  <strong>Organization</strong>
                  <span>Penguatan organisasi</span>
                </div>

                <div>
                  <strong>Impact</strong>
                  <span>Berorientasi dampak</span>
                </div>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="hero-visual">
              <div className="visual-card">
                <div className="visual-top">
                  <span>ARUTAMA</span>
                  <span className="status-dot"></span>
                </div>

                <div className="visual-main">
                  <div className="big-letter">A</div>

                  <h2>
                    Development
                    <br />
                    <span>& Consulting</span>
                  </h2>

                  <p>
                    Developing people.
                    <br />
                    Strengthening organization.
                  </p>
                </div>

                <div className="visual-bottom">
                  <span>PEOPLE</span>
                  <span>ORGANIZATION</span>
                  <span>IMPACT</span>
                </div>
              </div>

              <div className="floating-card floating-card-one">
                <strong>01</strong>
                <span>People Development</span>
              </div>

              <div className="floating-card floating-card-two">
                <strong>02</strong>
                <span>Strategic Partner</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRUST BAR ================= */}
        <section className="trust-bar">
          <div className="container trust-bar-inner">
            <div>
              <span>01</span>
              <strong>Professional Approach</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Relevant Solutions</strong>
            </div>

            <div>
              <span>03</span>
              <strong>Experienced Professionals</strong>
            </div>

            <div>
              <span>04</span>
              <strong>Impact Oriented</strong>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="tentang" className="section about-section">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="section-label">TENTANG ARUTAMA</span>

                <h2>
                  Partner untuk
                  <span> berkembang lebih baik.</span>
                </h2>
              </div>

              <p>
                ARUTAMA Development & Consultant hadir sebagai partner
                profesional dalam pengembangan manusia dan organisasi. Kami
                membantu organisasi memahami kebutuhan, membangun kapasitas, dan
                menciptakan perubahan yang relevan.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-highlight">
                <span className="quote-mark">“</span>

                <h3>
                  Pengembangan manusia adalah fondasi dari organisasi yang kuat.
                </h3>

                <p>
                  Kami percaya bahwa organisasi yang berkembang dimulai dari
                  manusia yang terus belajar, bertumbuh, dan mampu memberikan
                  kontribusi terbaik.
                </p>
              </div>

              <div className="about-content">
                <p>
                  ARUTAMA menggabungkan pendekatan development dan consulting
                  untuk membantu perusahaan, instansi, serta organisasi
                  menghadapi kebutuhan pengembangan SDM dan tantangan
                  organisasi.
                </p>

                <p>
                  Setiap solusi dirancang berdasarkan konteks dan kebutuhan
                  nyata sehingga proses pengembangan tidak berhenti pada
                  kegiatan, tetapi dapat memberikan manfaat yang berkelanjutan.
                </p>

                <a href="#kontak" className="text-link">
                  Diskusikan kebutuhan organisasi Anda →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="layanan" className="section services-section">
          <div className="container">
            <div className="section-heading center-heading">
              <span className="section-label">LAYANAN ARUTAMA</span>

              <h2>
                Solusi pengembangan untuk
                <span> manusia & organisasi.</span>
              </h2>

              <p>
                Kami menyediakan berbagai layanan yang dapat disesuaikan dengan
                kebutuhan strategis perusahaan, instansi, dan organisasi.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-top">
                    <span className="service-number">{service.number}</span>

                    <div className="service-icon">
                      <i className={service.icon}></i>
                    </div>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a href="#kontak" className="service-link">
                    Diskusikan Layanan
                    <span>→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= EXPERTISE ================= */}
        <section id="expertise" className="section expertise-section">
          <div className="container expertise-grid">
            <div className="expertise-intro">
              <span className="section-label">AREA OF EXPERTISE</span>

              <h2>
                Kompetensi yang
                <span> relevan dengan kebutuhan organisasi.</span>
              </h2>

              <p>
                Fokus kami adalah membantu organisasi mengembangkan manusia,
                meningkatkan efektivitas kerja, dan membangun organisasi yang
                mampu beradaptasi terhadap perubahan.
              </p>

              <a href="#kontak" className="button button-light">
                Konsultasikan Kebutuhan
                <span>→</span>
              </a>
            </div>

            <div className="expertise-list">
              {expertise.map((item, index) => (
                <div className="expertise-item" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <strong>{item}</strong>

                  <b>↗</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHY ARUTAMA ================= */}
        <section className="section why-section">
          <div className="container">
            <div className="section-heading center-heading">
              <span className="section-label">WHY ARUTAMA</span>

              <h2>
                Bukan sekadar memberikan program.
                <span> Kami membangun solusi.</span>
              </h2>

              <p>
                Setiap proses dirancang untuk memahami kebutuhan dan
                menghasilkan solusi yang relevan bagi organisasi.
              </p>
            </div>

            <div className="reasons-grid">
              {reasons.map((reason) => (
                <div className="reason-card" key={reason.number}>
                  <span className="reason-number">{reason.number}</span>

                  <h3>{reason.title}</h3>

                  <p>{reason.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PORTFOLIO ================= */}
        <section id="portfolio" className="section portfolio-section">
          <div className="container">
            <div className="portfolio-box">
              <div className="portfolio-intro">
                <span className="section-label">PORTFOLIO & EXPERIENCE</span>

                <h2>
                  Pengalaman yang
                  <span> membangun kepercayaan.</span>
                </h2>

                <p>
                  Area ini dapat dikembangkan menjadi dokumentasi program,
                  project experience, partner organization, dan testimonial
                  klien ARUTAMA.
                </p>
              </div>

              <div className="portfolio-stats">
                <div>
                  <strong>500+</strong>
                  <span>Development Program</span>
                </div>

                <div>
                  <strong>900+</strong>
                  <span>Organization</span>
                </div>

                <div>
                  <strong>1000+</strong>
                  <span>Participants</span>
                </div>

                <div>
                  <strong>20</strong>
                  <span>Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRUST & CREDIBILITY ================= */}
        <section className="section trust-section">
          <div className="container">
            <div className="section-heading center-heading">
              <span className="section-label">TRUST & CREDIBILITY</span>

              <h2>
                Membangun kepercayaan
                <span> melalui kolaborasi.</span>
              </h2>

              <p>
                Hubungan profesional dibangun melalui kualitas layanan,
                komunikasi yang baik, dan komitmen untuk memberikan solusi yang
                relevan.
              </p>
            </div>

            <div className="trust-values">
              <div className="trust-value">
                <div className="trust-value-icon">
                  <i className="fa-solid fa-handshake"></i>
                </div>

                <h3>Partnership</h3>

                <p>
                  Membangun hubungan profesional dan jangka panjang dengan
                  setiap mitra.
                </p>
              </div>

              <div className="trust-value">
                <div className="trust-value-icon">
                  <i className="fa-solid fa-medal"></i>
                </div>

                <h3>Quality</h3>

                <p>Menjaga kualitas proses dan layanan dalam setiap program.</p>
              </div>

              <div className="trust-value">
                <div className="trust-value-icon">
                  <i className="fa-solid fa-comments"></i>
                </div>

                <h3>Communication</h3>

                <p>Mengutamakan komunikasi terbuka untuk memahami kebutuhan.</p>
              </div>

              <div className="trust-value">
                <div className="trust-value-icon">
                  <i className="fa-solid fa-arrow-trend-up"></i>
                </div>

                <h3>Impact</h3>

                <p>Mengarahkan setiap program agar memberikan manfaat nyata.</p>
              </div>
            </div>

            <div className="client-area">
              <span>OUR PARTNERS</span>

              <h3>Dipercaya untuk Bertumbuh Bersama</h3>

              <p>
                Area ini nantinya dapat diisi dengan logo perusahaan, instansi,
                atau organisasi yang menjadi mitra ARUTAMA.
              </p>

              <div className="client-logos">
                <div>CLIENT</div>
                <div>CLIENT</div>
                <div>CLIENT</div>
                <div>CLIENT</div>
                <div>CLIENT</div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="kontak" className="contact-section">
          <div className="container">
            <div className="contact-header">
              <span className="section-label">LET'S WORK TOGETHER</span>

              <h2>
                Siap mengembangkan
                <span> SDM & organisasi Anda?</span>
              </h2>

              <p>
                Ceritakan kebutuhan pengembangan SDM, organisasi, atau
                consulting Anda kepada tim ARUTAMA.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-info">
                <h3>Mari Diskusikan Kebutuhan Anda</h3>

                <p>
                  Kami siap berdiskusi untuk memahami kebutuhan, tantangan, dan
                  tujuan organisasi Anda.
                </p>

                <a
                  href="https://wa.me/6281311897389"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-whatsapp"
                >
                  <div className="contact-icon">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>

                  <div>
                    <span>HUBUNGI KAMI</span>
                    <strong>Konsultasi via WhatsApp</strong>
                  </div>

                  <span className="contact-arrow">→</span>
                </a>

                <div className="contact-detail">
                  <div className="contact-small-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>

                  <div>
                    <span>EMAIL</span>
                    <strong>arutamadevelopment@gmail.com</strong>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-small-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>

                  <div>
                    <span>LOCATION</span>
                    <strong>GD. Jaya Lt.9 Menteng Jakarta Pusat</strong>
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <div className="form-heading">
                  <span>QUICK INQUIRY</span>
                  <h3>Ceritakan Kebutuhan Anda</h3>
                </div>
                <form onSubmit={handleContactSubmit}>
                  <div className="form-row">
                    {/* NAMA */}
                    <div className="form-group">
                      <label>Nama</label>

                      <input
                        type="text"
                        name="nama"
                        placeholder="Nama lengkap"
                        required
                      />
                    </div>

                    {/* PERUSAHAAN */}
                    <div className="form-group">
                      <label>Perusahaan / Instansi</label>

                      <input
                        type="text"
                        name="perusahaan"
                        placeholder="Nama perusahaan"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    {/* WHATSAPP */}
                    <div className="form-group">
                      <label>WhatsApp</label>

                      <input
                        type="tel"
                        name="whatsapp"
                        placeholder="08xxxxxxxxxx"
                        required
                      />
                    </div>

                    {/* KEBUTUHAN */}
                    <div className="form-group">
                      <label>Kebutuhan</label>

                      <select name="kebutuhan" required>
                        <option value="">Pilih kebutuhan</option>

                        <option>People Development</option>
                        <option>Leadership Development</option>
                        <option>Organizational Development</option>
                        <option>Consulting</option>
                        <option>Capacity Building</option>
                        <option>Customized Program</option>
                      </select>
                    </div>
                  </div>

                  {/* PESAN */}
                  <div className="form-group">
                    <label>Pesan</label>

                    <textarea
                      name="pesan"
                      rows="5"
                      placeholder="Ceritakan kebutuhan Anda..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="contact-submit">
                    Kirim Permintaan
                    <span>→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <img
                src="/images/logo-arutama-white.png"
                alt="ARUTAMA Development & Consultant"
                className="footer-logo"
              />
            </div>

            <p>Partner strategis dalam pengembangan manusia dan organisasi.</p>
          </div>

          <div className="footer-column">
            <h4>Navigation</h4>

            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang Kami</a>
            <a href="#layanan">Layanan</a>
            <a href="#expertise">Expertise</a>
            <a href="#portfolio">Portfolio</a>
          </div>

          <div className="footer-column">
            <h4>Services</h4>

            <a href="#layanan">People Development</a>
            <a href="#layanan">Leadership Development</a>
            <a href="#layanan">Organizational Development</a>
            <a href="#layanan">Consulting</a>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>

            <a
              href="https://wa.me/6281311897389"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a href="mailto:arutamadevelopment@gmail.com">
              arutamadevelopment@gmail.com
            </a>

            <span>GD. Jaya Lt.9 Menteng Jakarta Pusat</span>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>
              © {new Date().getFullYear()} Arutama Development & Consultant. All
              rights reserved.
            </span>

            <a href="#beranda">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
