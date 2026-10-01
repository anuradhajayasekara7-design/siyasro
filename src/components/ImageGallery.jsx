'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import BrandLogo from './BrandLogo';
import useSiteMotion from './useSiteMotion';
import { galleryImages } from '../data/galleryData';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function ImageGallery() {
  const motionRef = useSiteMotion();
  const [category, setCategory] = useState('All projects');
  const [openIndex, setOpenIndex] = useState(-1);
  const categories = ['All projects', ...new Set(galleryImages.map(image => image.category))];
  const displayed = category === 'All projects' ? galleryImages : galleryImages.filter(image => image.category === category);
  return (
    <main className="wrap gallery-page" ref={motionRef}>
      <div className="gallery-page-top"><Link className="logo-link" href="/" aria-label="Siyasro Advertising home"><BrandLogo priority /></Link><Link href="/#gallery" className="text-link"><ArrowLeft size={16} /> Back to home</Link></div>
      <div className="section-heading"><div><p className="eyebrow">CRAFTED BY SIYASRO</p><h1>Ideas made <span className="orange">visible.</span></h1></div><p className="section-intro">Explore our signage, branding and custom creations. Select a project to take a closer look.</p></div>
      <div className="gallery-filters" aria-label="Filter projects">{categories.map(item => <button key={item} aria-pressed={category === item} className={category === item ? 'selected' : ''} onClick={() => { setCategory(item); setOpenIndex(-1); }}>{item}</button>)}</div>
      <p className="gallery-count">{displayed.length} projects</p>
      <div className="project-grid full-gallery">{displayed.map((image, index) => <button className="project-card" key={image.id} onClick={() => setOpenIndex(index)} aria-label={`View ${image.title}`}><div className="project-image"><Image src={image.src} alt={image.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" /><span className="project-open"><ArrowUpRight size={22} /></span></div><div className="project-info"><span>{image.category}</span><h3>{image.title}</h3></div></button>)}</div>
      <div className="gallery-end"><h2>Have something in mind?</h2><Link className="button button-orange" href="/#contact">Let’s bring it to life <ArrowUpRight size={18} /></Link></div>
      <Lightbox open={openIndex >= 0} close={() => setOpenIndex(-1)} index={openIndex} slides={displayed.map(image => ({ src: image.src.src, alt: image.title }))} />
    </main>
  );
}
