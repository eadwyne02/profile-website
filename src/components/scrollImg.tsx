import { useRef, useCallback } from "react";

interface ScrollImageProps {
  imageSm: string;
  imageMd: string;
  imageLg: string;
  alt: string;
}

export default function ScrollImage({ imageSm, imageMd, imageLg, alt }: ScrollImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const vpRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHoveringRef = useRef(false);
  const isReadyRef = useRef(false); // tracks if image has loaded

  const getMaxScroll = useCallback(() => {
    const img = imgRef.current;
    const vp = vpRef.current;
    if (!img || !vp) return 0;
    const naturalRatio = img.naturalHeight / img.naturalWidth;
    const renderedHeight = img.offsetWidth * naturalRatio;
    return renderedHeight - vp.offsetHeight;
  }, []);

  const startScroll = useCallback(() => {
    const img = imgRef.current;
    if (!img || !isReadyRef.current) return;

    isHoveringRef.current = true;
    const max = getMaxScroll();
    if (max <= 0) return;

    const dur = Math.max(7000, max * 8);
    img.style.transition = `transform ${dur}ms linear`;
    img.style.transform = `translateY(-${max}px)`;

    timerRef.current = setTimeout(() => {
      if (!isHoveringRef.current) return;
      img.style.transition = "none";
      img.style.transform = "translateY(0)";
      void img.offsetHeight;
      setTimeout(() => {
        if (isHoveringRef.current) startScroll();
      }, 3000);
    }, dur);
  }, [getMaxScroll]);

  const stopScroll = useCallback(() => {
    const img = imgRef.current;
    if (!img) return;

    isHoveringRef.current = false;
    if (timerRef.current) clearTimeout(timerRef.current);
    img.style.transition = "transform 300ms ease";
    img.style.transform = "translateY(0)";
  }, []);

  const handleLoad = useCallback(() => {
    isReadyRef.current = true;
  }, []);

  return (
    <div
      ref={vpRef}
      className="img-viewport w-full h-48 sm:h-52 lg:h-56 overflow-hidden relative bg-[#0d1b2e] cursor-pointer"
      onMouseEnter={startScroll}
      onMouseLeave={stopScroll}
    >
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[rgba(15,23,42,0.6)]" />
      <picture>
        <source media="(min-width: 1024px)" srcSet={imageLg} />
        <source media="(min-width: 640px)" srcSet={imageMd} />
        <img
          ref={imgRef}
          src={imageSm}
          loading="lazy"
          alt={alt}
          onLoad={handleLoad}
          className="screenshot-img w-full h-auto block"
        />
      </picture>
    </div>
  );
}