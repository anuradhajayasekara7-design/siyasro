'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Menu, X, Sparkles, Layers, Sun, Award, Check, Phone, Mail, MapPin, Play } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galleryImages } from '../data/galleryData';
import WhatsAppButton from './WhatsAppButton';
import BrandLogo from './BrandLogo';
import useSiteMotion from './useSiteMotion';

import workshopImage from '../assets/cinematic-workshop.png';

const projects = [
  { image: galleryImages[11], title: 'A brighter brand presence', category: 'Illuminated signage' },
  { image: galleryImages[0], title: 'Made to stand out', category: 'Custom restaurant signage' },
  { image: galleryImages[15], title: 'Celebrating every achievement', category: 'Custom awards & trophies' },
  { image: galleryImages[18], title: 'Your identity, beautifully lit', category: 'Light boards & branding' },
];
const services = [
  { icon: Layers, title: 'Signs with dimension.', text: 'Precision-crafted 3D letters, dealer boards, direction boards and pylons that give your business a distinctive presence.', tags: '3D lettering / CNC & laser cutting', number: '01' },
  { icon: Sun, title: 'Let your brand shine.', text: 'From vibrant LED signs to elegant backlit boards, make a lasting impression by day and after dark.', tags: 'LED signs / Light boards', number: '02' },
  { icon: Sparkles, title: 'Brand every touchpoint.', text: 'Bring your identity into the real world with shop, vehicle, event, interior and exterior branding.', tags: 'Shop branding / Events / Vehicles', number: '03' },
  { icon: Award, title: 'Make it personal.', text: 'Thoughtfully made trophies, badges, display racks and custom pieces, finished with attention to every detail.', tags: 'Trophies / Badges / Custom displays', number: '04' },
];
const specialties = ['3D Signage', 'Branding', 'Laser Cutting', 'Light Boards', 'Custom Creations', 'LED Signs', 'Vehicle Branding', 'Trophies & Awards'];
const nav = [['Home', '#home'], ['Our work', '#gallery'], ['Services', '#services'], ['About us', '#about']];
const whatsapp = 'https://wa.me/94777881715?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20project.';

export default function HomePage() {
  const motionRef = useSiteMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <div className="site-shell" id="home" ref={motionRef}>
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="logo-link" href="#home" aria-label="Siyasro Advertising home"><BrandLogo priority /></a>
          <nav className="desktop-nav" aria-label="Main navigation">{nav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
          <a className="button button-dark header-cta" href="#contact">Let’s talk <ArrowUpRight size={17} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{[...nav, ['Let’s talk', '#contact']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={18} /></a>)}</nav>}
      </header>
      <main>
        <section className="hero-stage cinematic-hero" aria-labelledby="hero-heading">
          <div className="cinematic-backdrop">
            <Image src={workshopImage} alt="Cinematic Siyasro signage workshop with illuminated lettering and a laser cutting machine" fill priority sizes="100vw" />
          </div>
          <div className="cinematic-overlay" aria-hidden="true" />
          <div className="cinematic-grain" aria-hidden="true" />
          <div className="hero wrap">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" /> YOUR IDEAS. OUR CRAFT.</p>
              <h1 id="hero-heading">Made to shine.<br />Built to <span className="accent-word">stand out.<svg viewBox="0 0 360 22" aria-hidden="true"><path d="M4 15 Q160 -5 354 10" /></svg></span></h1>
              <p className="hero-description">Exceptional signage starts with a bold idea. We bring yours to life with creative design, precision laser cutting, and a finish that makes an impression.</p>
              <div className="hero-actions"><a className="button button-orange" href="#gallery">Discover our work <ArrowUpRight size={19} /></a><a className="text-link cinematic-secondary" href="#contact">Let’s create something <ArrowRight size={17} /></a></div>
              <div className="hero-note"><span className="note-icon"><Check size={17} /></span><span>Designed with imagination. Made with precision.<br /><strong>From concept to installation.</strong></span></div>
            </div>
            <div className="cinematic-detail"><span className="cinematic-detail-icon"><Sparkles size={24} /></span><div><small>THE ART OF MAKING AN IMPRESSION</small><strong>Where creativity<br />meets craftsmanship.</strong></div><ArrowUpRight size={23} /></div>
          </div>
          <div className="cinematic-bottom wrap"><div className="cinematic-tags"><span>3D LETTERING</span><span>LED SIGNAGE</span><span>LASER CUTTING</span></div><a href="#gallery" className="cinematic-scroll">SCROLL TO EXPLORE <span>↓</span></a></div>
        </section>
        <div className="specialty-strip" aria-label="Our specialties"><div className="marquee-track">{[0, 1].map(copy => <div className="marquee-group" key={copy} aria-hidden={copy === 1 || undefined}>{specialties.map(item => <span key={item}>{item} <i>✳</i></span>)}</div>)}</div></div>
        <section id="gallery" className="section wrap">
          <div className="section-heading"><div><p className="eyebrow">THE WORK SPEAKS FOR ITSELF</p><h2>Real projects.<br /><span className="muted">Lasting impressions.</span></h2></div><div className="section-intro"><p>A closer look at the signs, spaces and details we bring to life for businesses across Sri Lanka.</p><Link className="text-link" href="/image-gallery">View all projects <ArrowUpRight size={18} /></Link></div></div>
          <div className="project-grid">{projects.map((project, i) => <button className="project-card" key={project.image.id} onClick={() => setOpenIndex(i)} aria-label={`View ${project.title}`}><div className="project-image"><Image src={project.image.src} alt={project.category} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw" /><span className="project-open"><ArrowUpRight size={22} /></span></div><div className="project-info"><span>{project.category}</span><h3>{project.title}</h3></div></button>)}</div>
        </section>
        <section id="services" className="services-section"><div className="wrap section"><div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>One creative partner.<br /><span className="muted">So many possibilities.</span></h2></div><p className="section-intro">Whatever your brand needs to stand out, we combine thoughtful design with hands-on craftsmanship to make it happen.</p></div><div className="services-grid">{services.map(({ icon: Icon, title, text, tags, number }) => <a href="#contact" className="service-card" key={number}><div className="service-top"><span className="service-icon"><Icon size={22} strokeWidth={1.8} /></span><span>{number}</span></div><h3>{title}</h3><p>{text}</p><div className="service-bottom"><span>{tags}</span><ArrowUpRight size={20} /></div></a>)}</div></div></section>
        <section id="about" className="section wrap about-section"><div className="about-visual"><Image src={galleryImages[16].src} alt="Close-up of custom three-dimensional lettering in the Siyasro workshop" fill sizes="(max-width: 760px) 100vw, 45vw" /><div className="about-label"><Sparkles size={22} /> SMALL DETAILS. BIG DIFFERENCE.</div></div><div className="about-copy"><p className="eyebrow">THE PEOPLE BEHIND THE SIGNS</p><h2>A creative eye.<br />A craftsman’s touch.</h2><p>At Siyasro, we believe your brand deserves more than just a sign. It deserves something people remember.</p><p>Based in Dankotuwa, we bring creativity, precision cutting and careful finishing together to make branding that feels distinctly yours.</p><div className="values"><span><Check size={17} /> Thoughtful design</span><span><Check size={17} /> Quality materials</span><span><Check size={17} /> Precision craftsmanship</span><span><Check size={17} /> Concept to installation</span></div><a className="text-link" href="https://www.youtube.com/watch?v=2n2bpmBU7ho" target="_blank" rel="noopener noreferrer"><span className="play-icon"><Play size={14} fill="currentColor" /></span>See our craft in action <ArrowUpRight size={18} /></a></div></section>
        <section id="contact" className="contact-section"><div className="contact-floor" aria-hidden="true" /><div className="contact-glow" aria-hidden="true" /><div className="wrap contact-inner"><div><p className="eyebrow">LET’S MAKE SOMETHING GREAT</p><h2>Got an idea?<br />Let’s make it <span>real.</span></h2><p>A new sign. A fresh identity. Something completely custom.<br />We’d love to hear what you have in mind.</p><a className="button button-orange" href={whatsapp} target="_blank" rel="noopener noreferrer">Start a conversation <ArrowUpRight size={19} /></a></div><div className="contact-details"><a href="tel:+94777881715"><Phone size={22} /><div><small>GIVE US A CALL</small><span>+94 77 788 1715</span></div><ArrowUpRight size={21} /></a><a href="mailto:siyasroads@gmail.com"><Mail size={22} /><div><small>DROP US A LINE</small><span>siyasroads@gmail.com</span></div><ArrowUpRight size={21} /></a><a href="https://www.google.com/maps/search/?api=1&query=117%2FB%20Metikotuwa%20Dankotuwa%20Sri%20Lanka" target="_blank" rel="noopener noreferrer"><MapPin size={22} /><div><small>COME SAY HELLO</small><span>117/B, Metikotuwa, Dankotuwa</span></div><ArrowUpRight size={21} /></a></div></div></section>
      </main>
      <footer className="site-footer wrap"><div className="footer-top"><a href="#home" className="logo-link" aria-label="Siyasro Advertising home"><BrandLogo /></a><p>Made with care. Made to stand out.</p><a className="text-link" href="#home">Back to top ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Siyasro Advertising. All rights reserved.</span><span>Crafted by <a href="https://alphagencoding.com" target="_blank" rel="noopener noreferrer">Alpha Gen Coding ↗</a></span></div></footer>
      <WhatsAppButton />
      <Lightbox open={openIndex >= 0} close={() => setOpenIndex(-1)} index={openIndex} slides={projects.map(({ image, category }) => ({ src: image.src.src, alt: category }))} />
    </div>
  );
}
