import { useRef, useState, type PointerEvent, type ReactNode } from "react";

type SwipeImagesProps = {
  images: string[];
  alt: string;
  className?: string;
  imageClassName?: string;
  dotsClassName?: string;
  dotClassName?: string;
  overlay?: ReactNode;
};

export function SwipeImages({
  images,
  alt,
  className = "",
  imageClassName = "",
  dotsClassName = "",
  dotClassName = "",
  overlay,
}: SwipeImagesProps) {
  const shots = images.filter(Boolean);
  const [index, setIndex] = useState(0);
  const dragRef = useRef<{ x: number; y: number; active: boolean } | null>(null);
  const hasMultiple = shots.length > 1;
  const current = shots[index] ?? shots[0];

  if (!current) return null;

  const go = (next: number) => {
    const len = shots.length;
    if (len < 2) return;
    setIndex(((next % len) + len) % len);
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (!hasMultiple) return;
    dragRef.current = { x: e.clientX, y: e.clientY, active: true };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!hasMultiple || !dragRef.current?.active) return;
    const dx = e.clientX - dragRef.current.x;
    const dy = e.clientY - dragRef.current.y;
    dragRef.current = null;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    e.preventDefault();
    go(index + (dx < 0 ? 1 : -1));
  };

  return (
    <div
      className={`${className}${hasMultiple ? " is-swipeable" : ""}`.trim()}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        dragRef.current = null;
      }}
      onKeyDown={
        hasMultiple
          ? (e) => {
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                go(index - 1);
              } else if (e.key === "ArrowRight") {
                e.preventDefault();
                go(index + 1);
              }
            }
          : undefined
      }
      tabIndex={hasMultiple ? 0 : undefined}
      role={hasMultiple ? "group" : undefined}
      aria-roledescription={hasMultiple ? "carousel" : undefined}
      aria-label={hasMultiple ? alt : undefined}
    >
      <img
        src={current}
        alt={alt}
        className={imageClassName}
        loading="lazy"
        draggable={false}
      />
      {overlay}
      {hasMultiple && (
        <div className={dotsClassName} role="group" aria-label={alt}>
          {shots.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`${dotClassName}${i === index ? " is-active" : ""}`}
              aria-label={`${i + 1} / ${shots.length}`}
              aria-pressed={i === index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIndex(i);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
