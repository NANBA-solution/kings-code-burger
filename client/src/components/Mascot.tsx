import { publicAsset } from "@/lib/assets";

const LOGO_SRC = publicAsset("images/geezer-logo.png");

type MascotSize = "xs" | "sm" | "md" | "lg" | "xl";

type MascotProps = {
  size?: MascotSize;
  className?: string;
  animated?: boolean;
};

export function Mascot({ size = "md", className = "", animated = false }: MascotProps) {
  return (
    <img
      src={LOGO_SRC}
      alt="geezer"
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
