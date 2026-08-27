type QrCodeProps = {
  url: string;
  size?: number;
  alt?: string;
  className?: string;
};

/** 店舗用QR（印刷・表示）。外部QR APIで生成 */
export function QrCode({ url, size = 240, alt = "QR Code", className }: QrCodeProps) {
  const src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&margin=12&data=${encodeURIComponent(url)}`;
  return (
    <img
      src={src}
      width={size}
      height={size}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}
