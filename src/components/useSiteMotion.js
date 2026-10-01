'use client';

import { useEffect, useRef } from 'react';

// Enhance the rendered page without hiding content before JavaScript is ready.
export default function useSiteMotion() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    let cleanup = () => {};

    function setup() {
      cleanup();
      if (preference.matches) return;
      const revealSelector = '.section-heading, .project-card, .service-card, .about-visual, .about-copy, .contact-inner, .gallery-end';
      const observed = new Set();
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      function observeElements() {
        root.querySelectorAll(revealSelector).forEach(element => {
          if (observed.has(element)) return;
          observed.add(element);
          element.classList.add('motion-reveal');
          if (element.parentElement?.matches('.project-grid, .services-grid')) {
            const index = [...element.parentElement.children].indexOf(element);
            element.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
          }
          observer.observe(element);
        });
      }
      observeElements();
      const mutationObserver = new MutationObserver(observeElements);
      mutationObserver.observe(root, { childList: true, subtree: true });
      root.classList.add('motion-enabled');
      let frame = 0;
      let activeElement = null;
      const tiltSelector = '.hero-visual, .project-card, .service-card, .about-visual';
      function reset() {
        cancelAnimationFrame(frame);
        if (activeElement) {
          activeElement.style.removeProperty('--tilt-x');
          activeElement.style.removeProperty('--tilt-y');
          activeElement.style.removeProperty('--glare-x');
          activeElement.style.removeProperty('--glare-y');
          activeElement.classList.remove('is-tilting');
          activeElement = null;
        }
      }
      function onPointerMove(event) {
        if (!finePointer.matches || event.pointerType === 'touch') return;
        const element = event.target instanceof Element ? event.target.closest(tiltSelector) : null;
        if (!element || !root.contains(element)) { reset(); return; }
        if (activeElement !== element) { reset(); activeElement = element; }
        cancelAnimationFrame(frame);
        const { clientX, clientY } = event;
        frame = requestAnimationFrame(() => {
          const bounds = element.getBoundingClientRect();
          const x = Math.max(-1, Math.min(1, ((clientX - bounds.left) / bounds.width - 0.5) * 2));
          const y = Math.max(-1, Math.min(1, ((clientY - bounds.top) / bounds.height - 0.5) * 2));
          element.style.setProperty('--tilt-x', `${-y * 6}deg`);
          element.style.setProperty('--tilt-y', `${x * 7}deg`);
          element.style.setProperty('--glare-x', `${(x + 1) * 50}%`);
          element.style.setProperty('--glare-y', `${(y + 1) * 50}%`);
          element.classList.add('is-tilting');
        });
      }
      root.addEventListener('pointermove', onPointerMove, { passive: true });
      root.addEventListener('pointerleave', reset);
      window.addEventListener('blur', reset);
      cleanup = () => {
        reset();
        observer.disconnect();
        mutationObserver.disconnect();
        root.removeEventListener('pointermove', onPointerMove);
        root.removeEventListener('pointerleave', reset);
        window.removeEventListener('blur', reset);
        root.classList.remove('motion-enabled');
        observed.forEach(element => {
          element.classList.remove('motion-reveal', 'is-revealed');
          element.style.removeProperty('--reveal-delay');
        });
      };
    }
    setup();
    preference.addEventListener('change', setup);
    return () => { cleanup(); preference.removeEventListener('change', setup); };
  }, []);

  return rootRef;
}
