const MASCOT_SRC = "/images/invader-mascot.png";

type MascotSize = "xs" | "sm" | "md" | "lg" | "xl";

type MascotProps = {
  size?: MascotSize;
  className?: string;
  animated?: boolean;
};

export function Mascot({ size = "md", className = "", animated = false }: MascotProps) {
  return (
    <img
      src={MASCOT_SRC}
      alt=""
      aria-hidden="true"
      className={[
        "kcb-mascot",
        `kcb-mascot--${size}`,
        animated ? "kcb-mascot--float" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
