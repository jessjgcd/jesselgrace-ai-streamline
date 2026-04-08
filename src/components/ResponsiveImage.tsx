interface ResponsiveImageProps {
  src: string;
  mobileSrc: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
}

export const ResponsiveImage = ({
  src,
  mobileSrc,
  alt,
  className,
  loading = "lazy",
  width,
  height,
}: ResponsiveImageProps) => {
  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={mobileSrc} type="image/webp" />
      <source media="(min-width: 768px)" srcSet={src} />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        width={width}
        height={height}
      />
    </picture>
  );
};
