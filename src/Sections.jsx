import { useState } from 'react';
import Logo from './Logo.jsx';
import { school, nav, tickerWords, way } from './data.js';
import heroImg from './assets/lab-microscope.jpg';
import gateImg from './assets/gate.jpg';
import labImg from './assets/lab-group.jpg';
import libraryImg from './assets/library.jpg';

const rise = (ms) => ({ '--d': `${ms}ms` });
const reveal = (ms = 0) => ({ 'data-reveal': '', style: { '--d': `${ms}ms` } });

export function Hero() {
  return (
    <section className="hero" id="top">
      <img
        className="hero-img"
        src={heroImg}
        alt="Victorroti students in navy blazers and red ties looking through a microscope in the school laboratory"
        width="1080"
        height="707"
        fetchpriority="high"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="wrap hero-inner">
        <p className="eyebrow rise" style={rise(0)}>Secondary school &middot; Abeokuta, Ogun State</p>
        <h1 className="hero-title rise" style={rise(120)}>
          On God we
          <span>build.</span>
        </h1>
        <p className="hero-lede rise" style={rise(260)}>
          An approved private secondary school for boys and girls, raising students who are
          educationally and morally sound.
        </p>
        <div className="hero-cta rise" style={rise(380)}>
          <a className="btn btn-gold" href="#visit">Book a visit</a>
          <a className="btn btn-ghost" href="#about">Meet Victorroti</a>
        </div>
      </div>
    </section>
  );
}

export function InfoStrip() {
  const items = [
    { k: 'Where', v: school.location },
    { k: 'Students', v: 'Boys and girls' },
    { k: 'Office hours', v: school.hours },
  ];
  return (
    <div className="infostrip">
      <div className="wrap infostrip-row">
        {items.map((i) => (
          <div className="info-cell" key={i.k}>
            <span className="label">{i.k}</span>
            <strong>{i.v}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Ticker() {
  const group = (suffix) => (
    <div className="ticker-group" key={suffix}>
      {tickerWords.map((w) => (
        <span key={w + suffix}>{w}<i aria-hidden="true" /></span>
      ))}
    </div>
  );
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">{[group('a'), group('b')]}</div>
    </div>
  );
}

export function Welcome() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div {...reveal()}>
          <p className="eyebrow">Welcome to Victorroti</p>
          <h2 className="h2">Students built up in mind and character.</h2>
          <p className="body">
            Victorroti Private Secondary School is an approved school for boys and girls in
            Abeokuta. Certified teachers, a working laboratory and a library help each student
            grow in knowledge, and in the values that carry them through life.
          </p>
          <p className="body">
            Our motto says it plainly. <strong>On God We Build.</strong> Good results matter, and
            so does the kind of person a student becomes.
          </p>
          <a className="link-arrow" href="#way">See the Victorroti way <span aria-hidden="true">&rarr;</span></a>
        </div>
        <figure className="about-figure" {...reveal(140)}>
          <img src={gateImg} alt="The entrance gate and signboard of Victorroti Private Secondary School, Abeokuta" width="1080" height="780" loading="lazy" />
          <figcaption className="about-badge">
            <Logo size={52} />
            <span>
              <strong>{school.motto}</strong>
              <small>{school.name}</small>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Way() {
  return (
    <section className="section section-alt" id="way">
      <div className="wrap">
        <div className="section-head" {...reveal()}>
          <p className="eyebrow">The Victorroti way</p>
          <h2 className="h2">How your child learns here.</h2>
        </div>
        <ol className="way-grid">
          {way.map((w, i) => (
            <li className="way-card" key={w.title} {...reveal(i * 90)}>
              <span className="way-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Moments() {
  const items = [
    {
      img: labImg,
      alt: 'Students in navy blazers gathered in the Victorroti science laboratory',
      tag: 'Science',
      title: 'Learning by doing',
      meta: 'In the school laboratory',
      pos: '50% 35%',
    },
    {
      img: libraryImg,
      alt: 'A teacher showing a book to a group of Victorroti students in the school library',
      tag: 'Reading',
      title: 'Reading and research',
      meta: 'In the school library',
      pos: '50% 30%',
    },
  ];
  return (
    <section className="section" id="moments">
      <div className="wrap">
        <div className="section-head" {...reveal()}>
          <p className="eyebrow">Moments</p>
          <h2 className="h2">Life at Victorroti, inside the classroom and out.</h2>
        </div>
        <div className="moments-grid">
          {items.map((m, i) => (
            <article className="moment" key={m.title} {...reveal(i * 120)}>
              <img src={m.img} alt={m.alt} style={{ objectPosition: m.pos }} />
              <div className="moment-shade" aria-hidden="true" />
              <div className="moment-text">
                <span className="tag">{m.tag}</span>
                <h3>{m.title}</h3>
                <p>{m.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="wrap cta-row" {...reveal()}>
        <h2 className="cta-title">Come and see Victorroti for yourself.</h2>
        <a className="btn btn-dark" href="#visit">Plan a visit</a>
      </div>
    </section>
  );
}

export function Visit() {
  const [msg, setMsg] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (!String(f.get('name') || '').trim() || !String(f.get('phone') || '').trim()) {
      setMsg('Please add your name and phone number.');
      return;
    }
    setMsg('Demo only: on the live site this request goes straight to the school.');
  };

  const row = (k, v) => (
    <div className="visit-row">
      <dt>{k}</dt>
      <dd>{v || <span className="tbc">To be confirmed with the school</span>}</dd>
    </div>
  );

  return (
    <section className="section" id="visit">
      <div className="wrap visit-grid">
        <div {...reveal()}>
          <p className="eyebrow">Visit</p>
          <h2 className="h2">Meet the school in person.</h2>
          <p className="body">Leave your details and the school will get back to you to arrange a visit.</p>
          <dl className="visit-list">
            {row('Location', school.location)}
            {row('Address', school.address)}
            {row('Phone', school.phone)}
            {row('Email', school.email)}
          </dl>
          <p className="visit-note">Phone and email are taken from the school&rsquo;s current public listing and will be confirmed.</p>
        </div>

        <form className="form" onSubmit={onSubmit} noValidate {...reveal(140)}>
          <div className="field-row">
            <label htmlFor="v-name">Parent's name
              <input id="v-name" name="name" type="text" autoComplete="name" placeholder="Full name" />
            </label>
            <label htmlFor="v-phone">Phone number
              <input id="v-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="080..." />
            </label>
          </div>
          <label htmlFor="v-class">Class of interest
            <select id="v-class" name="class" defaultValue="">
              <option value="" disabled>Choose a class</option>
              <option>JSS 1 to JSS 3</option>
              <option>SSS 1 to SSS 3</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <label htmlFor="v-note">Anything you would like to ask?
            <textarea id="v-note" name="note" rows="3" placeholder="Your question" />
          </label>
          <button className="btn btn-gold" type="submit">Request a visit</button>
          <p className="form-msg" role="status">{msg}</p>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#top" aria-label="Back to top">
            <Logo size={44} />
            <span className="brand-text">
              <span className="brand-name">Victorroti</span>
              <span className="brand-sub">Secondary School</span>
            </span>
          </a>
          <p>{school.motto}. {school.location}.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>
        <div className="footer-social">
          <span className="footer-line">{school.phone}</span>
          <span className="footer-line">{school.email}</span>
          <span className="footer-line">{school.hours}</span>
        </div>
      </div>
      <div className="wrap">
        <div className="footer-base">
          <span>&copy; 2026 {school.name}</span>
          <span>
            Sample website by TAG. Items marked &ldquo;to be confirmed&rdquo; will be replaced with the school&rsquo;s own details.
          </span>
        </div>
      </div>
    </footer>
  );
}
