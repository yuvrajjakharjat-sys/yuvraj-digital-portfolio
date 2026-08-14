import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Check, ChevronRight, ExternalLink, Instagram,
  Linkedin, Mail, Menu, Play, Sparkles, X, MessageCircle
} from "lucide-react";
import "./styles.css";

const A = "/images/";

const projects = [
  {
    id: "vama",
    tag: "SOCIAL MEDIA · CONTENT · REELS",
    title: "Vama Organics",
    subtitle: "Building a consistent visual system for a natural skincare brand.",
    image: A + "vama-grid.png",
    accent: "sage",
    bullets: ["Product-led creatives", "Educational & problem/solution content", "Short-form & UGC-style reels", "Instagram content system"],
    gallery: [A+"vama-profile.png", A+"vama-grid.png", A+"vama-performance.png"]
  },
  {
    id: "uddan",
    tag: "SOCIAL MEDIA · CREATIVE · VIDEO",
    title: "Uddan Promotions",
    subtitle: "Marketing-led social content for an IT & digital marketing company.",
    image: A + "uddan-work.png",
    accent: "blue",
    bullets: ["Marketing & tech creatives", "Short-form educational reels", "Promotional content", "Creative concepts & editing"],
    gallery: [A+"uddan-profile.png", A+"uddan-grid.png", A+"uddan-work.png", A+"uddan-work-2.png"]
  },
  {
    id: "gmb",
    tag: "LOCAL SEO · GOOGLE BUSINESS PROFILE",
    title: "Uda Ji Industries",
    subtitle: "Local visibility work using Google Business Profile.",
    image: A + "gmb.png",
    accent: "amber",
    bullets: ["Google Business Profile setup", "Business information & category", "Local presence optimization", "Search & Maps visibility"],
    gallery: [A+"gmb.png"]
  },
  {
    id: "personal",
    tag: "PERSONAL BRAND · SOCIAL MEDIA",
    title: "Yuvraj Jakhar",
    subtitle: "Building and experimenting with my own digital presence.",
    image: A + "personal-brand.png",
    accent: "orange",
    bullets: ["Personal positioning", "Educational content", "Service-led content", "Reels & short-form"],
    gallery: [A+"personal-brand.png"]
  }
];

const videoWork = [
  { title: "Uddan Reels", type: "Marketing / Talking Head", poster: A+"video-work.png", src: "/videos/uddan-reel.mp4" },
  { title: "Get Viral News", type: "News / Promotional", poster: A+"video-files.png", src: "/videos/get-viral-news.mp4" },
  { title: "UGC / Short-form", type: "Creator-led / Social", poster: A+"vama-video.png", src: "/videos/ugc-reel.mp4" }
];

function App() {
  const [menu, setMenu] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [video, setVideo] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = useMemo(() => [
    ["Work", "#work"], ["Services", "#services"], ["About", "#about"], ["Contact", "#contact"]
  ], []);

  const filters = ["All", "Social Media", "Content", "Local SEO", "Personal Brand"];
  const filterMap = {
    vama: ["Social Media", "Content"],
    uddan: ["Social Media", "Content"],
    gmb: ["Local SEO"],
    personal: ["Personal Brand", "Social Media"]
  };
  const visibleProjects = projects.filter(p => filter === "All" || filterMap[p.id]?.includes(filter));

  const closeAll = () => { setActiveProject(null); setVideo(null); };

  return (
    <div className="app">
      <div className="grain" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      <header className={scrolled ? "nav scrolled" : "nav"}>
        <a href="#" className="brand" onClick={() => setMenu(false)}>
          <span className="brand-mark">YJ</span>
          <span>Yuvraj Jakhar</span>
        </a>

        <nav className={menu ? "nav-links open" : "nav-links"}>
          {nav.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenu(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenu(false)}>
            Let's talk <ArrowUpRight size={15}/>
          </a>
        </nav>

        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          {menu ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="pulse" /> DIGITAL MARKETING · CONTENT · GROWTH</div>
            <h1>
              I make brands
              <span className="outline"> impossible </span>
              to scroll past.
            </h1>
            <p className="hero-text">
              I'm Yuvraj Jakhar — a digital marketer focused on social media,
              short-form content, paid media and local visibility.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#work">View selected work <ArrowUpRight size={18}/></a>
              <a className="btn ghost" href="#contact">Let's work together <ChevronRight size={18}/></a>
            </div>
            <div className="micro-proof">
              <span>Social Media</span><i>•</i><span>Meta Ads</span><i>•</i><span>Reels</span><i>•</i><span>Local SEO</span>
            </div>
          </div>

          <div className="hero-visual reveal delay">
            <div className="photo-wrap">
              <div className="photo-ring" />
              <img src={A+"portrait.png"} alt="Yuvraj Jakhar" />
              <div className="floating-card card-top">
                <Sparkles size={15}/>
                <div><b>Content</b><span>that gets attention</span></div>
              </div>
              <div className="floating-card card-bottom">
                <div className="mini-dot" />
                <div><b>Digital Marketer</b><span>Strategy → Execution</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Skills">
          <div className="ticker-track">
            {["SOCIAL MEDIA", "META ADS", "CONTENT CREATION", "VIDEO EDITING", "LOCAL SEO", "REELS", "SOCIAL MEDIA", "META ADS"].map((x,i) =>
              <React.Fragment key={i}><span>{x}</span><b>✦</b></React.Fragment>
            )}
          </div>
        </section>

        <section className="numbers section">
          <div className="section-label">01 / CAPABILITIES</div>
          <div className="numbers-grid">
            <div><strong>04</strong><span>Core service areas</span></div>
            <div><strong>∞</strong><span>Creative combinations</span></div>
            <div><strong>01</strong><span>Clear goal: business growth</span></div>
            <div><strong>100%</strong><span>Proof-first portfolio</span></div>
          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="section-head">
            <div>
              <div className="section-label">02 / SELECTED WORK</div>
              <h2>Work that shows<br/><em>what I can do.</em></h2>
            </div>
            <p>Real projects, real creative work. No invented ad metrics, no inflated claims.</p>
          </div>

          <div className="filter-bar">
            {filters.map(f => <button key={f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>{f}</button>)}
          </div>
          <div className="project-grid">
            {visibleProjects.map((p, i) => (
              <button className={`project-card ${p.accent} ${i === 0 ? "featured" : ""}`} key={p.id} onClick={() => setActiveProject(p)}>
                <div className="project-image">
                  <img src={p.image} alt={p.title} />
                  <div className="project-overlay"><span>View case study</span><ArrowUpRight size={18}/></div>
                </div>
                <div className="project-meta">
                  <span>{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section id="services" className="section services">
          <div className="section-label">03 / WHAT I DO</div>
          <div className="services-head">
            <h2>Strategy is only useful<br/><em>when it gets executed.</em></h2>
            <p>I combine planning, creative production and distribution instead of treating them as separate jobs.</p>
          </div>
          <div className="service-list">
            {[
              ["01", "Social Media", "Strategy, content calendars, posts, reels, captions and account management."],
              ["02", "Meta Ads", "Audience research, campaign structure, creative testing and conversion-focused messaging."],
              ["03", "Content Creation", "Product creatives, carousels, educational content, UGC concepts and campaigns."],
              ["04", "Video Editing", "Short-form reels, talking-head edits, UGC, promotional and social-first videos."],
              ["05", "Local SEO / GMB", "Google Business Profile setup, optimization and local visibility fundamentals."]
            ].map(([num,title,desc]) =>
              <div className="service-row" key={num}>
                <span className="service-num">{num}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ArrowUpRight className="service-arrow" size={22}/>
              </div>
            )}
          </div>
        </section>

        <section className="section video-section">
          <div className="section-head">
            <div>
              <div className="section-label">04 / VIDEO WORK</div>
              <h2>Short-form built to<br/><em>stop the scroll.</em></h2>
            </div>
            <p>Selected editing work across marketing, product, UGC and news-style formats.</p>
          </div>

          <div className="video-grid">
            {videoWork.map((v) => (
              <button className="video-card" key={v.title} onClick={() => setVideo(v)}>
                <div className="video-poster">
                  <img src={v.poster} alt={v.title}/>
                  <span className="play"><Play size={20} fill="currentColor"/></span>
                </div>
                <div className="video-info"><div><small>{v.type}</small><h3>{v.title}</h3></div><ArrowUpRight size={18}/></div>
              </button>
            ))}
          </div>
          <div className="video-note">
            <span className="dot" /> V2 includes three lightweight preview videos. Replace them with your best edits in <code>public/videos/</code> anytime.
          </div>
        </section>

        <section className="split-section">
          <div className="split-visual"><img src={A+"vama-performance.png"} alt="Vama Organics content performance visuals"/></div>
          <div className="split-copy">
            <div className="section-label">05 / CONTENT SYSTEM</div>
            <h2>Don't just post.<br/><em>Build a content engine.</em></h2>
            <p>For product and service brands, content works best when every format has a job: attract, educate, build trust, create desire and drive action.</p>
            <div className="flow">
              {["Attention", "Education", "Trust", "Desire", "Action"].map((x,i) => <div key={x}><b>0{i+1}</b><span>{x}</span></div>)}
            </div>
          </div>
        </section>

        <section className="section paid">
          <div className="paid-copy">
            <div className="section-label">06 / PAID MEDIA</div>
            <h2>Meta Ads without<br/><em>made-up numbers.</em></h2>
            <p>I don't publish private company dashboards or invent ROAS/CPL figures. Until permissioned campaign data is available, this section shows the approach I use to think about paid growth.</p>
            <div className="paid-cards">
              <div><b>01</b><strong>Audience</strong><span>Research & targeting</span></div>
              <div><b>02</b><strong>Creative</strong><span>Hooks & testing</span></div>
              <div><b>03</b><strong>Optimize</strong><span>Learn & iterate</span></div>
            </div>
          </div>
          <div className="paid-visual">
            <div className="ad-window">
              <div className="window-top"><i/><i/><i/><span>campaign-system</span></div>
              <div className="ad-chart">
                <div className="chart-line" />
                <div className="chart-bars"><i/><i/><i/><i/><i/><i/><i/></div>
              </div>
              <div className="ad-metrics"><span><b>HOOK</b><small>ATTENTION</small></span><span><b>OFFER</b><small>DESIRE</small></span><span><b>CTA</b><small>ACTION</small></span></div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="about-photo"><img src={A+"portrait.png"} alt="Yuvraj Jakhar"/></div>
          <div className="about-copy">
            <div className="section-label">07 / ABOUT</div>
            <h2>I'm Yuvraj.<br/><em>I build the work.</em></h2>
            <p>I'm a digital marketer and content creator working across social media, short-form video, paid-media thinking and local business visibility.</p>
            <p>My approach is simple: understand the business, make the message clear, create content people want to consume, then improve what the audience responds to.</p>
            <div className="about-tags"><span>Jaipur</span><span>Social Media</span><span>Reels</span><span>Content</span><span>Local SEO</span></div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-inner">
            <div className="section-label">08 / CONTACT</div>
            <h2>Have a brand that<br/><em>needs attention?</em></h2>
            <p>Let's talk about what you're trying to grow — and what is getting in the way.</p>
            <div className="contact-actions">
              <a className="btn primary" href="https://www.instagram.com/yuvi_jakhar_9/" target="_blank" rel="noreferrer"><Instagram size={18}/> DM on Instagram</a>
              <a className="btn ghost" href="https://www.linkedin.com/in/yuvraj-jakhar-b19979396/" target="_blank" rel="noreferrer"><Linkedin size={18}/> Connect on LinkedIn</a>
            </div>
            <div className="socials">
              <a href="https://www.instagram.com/yuvi_jakhar_9/" target="_blank" rel="noreferrer"><Instagram size={18}/> Instagram</a>
              <a href="https://www.linkedin.com/in/yuvraj-jakhar-b19979396/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Yuvraj Jakhar</span>
        <span>Digital Marketing · Content · Growth</span>
      </footer>

      {activeProject && (
        <div className="modal-backdrop" onClick={closeAll}>
          <div className="modal project-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeAll}><X size={20}/></button>
            <div className="modal-tag">{activeProject.tag}</div>
            <h2>{activeProject.title}</h2>
            <p className="modal-subtitle">{activeProject.subtitle}</p>
            <div className="modal-main-image"><img src={activeProject.image} alt={activeProject.title}/></div>
            <div className="modal-content-grid">
              <div><h4>WHAT I WORKED ON</h4>{activeProject.bullets.map(x => <div className="check" key={x}><Check size={15}/>{x}</div>)}</div>
              <div><h4>PROJECT NOTE</h4><p>Selected visual work from the project. The portfolio intentionally avoids claiming private performance numbers without permissioned evidence.</p></div>
            </div>
            <div className="modal-gallery">{activeProject.gallery.map((img,i) => <img src={img} key={img} alt={`${activeProject.title} ${i+1}`}/>)}</div>
          </div>
        </div>
      )}

      {video && (
        <div className="modal-backdrop" onClick={closeAll}>
          <div className="modal video-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeAll}><X size={20}/></button>
            <video controls autoPlay playsInline src={video.src} poster={video.poster}/>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
export default App;