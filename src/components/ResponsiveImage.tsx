interface ResponsiveImageProps {
  src: string;
  mobileSrc: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  width?: string | number;
  height?: string | number;
}

export const ResponsiveImage = ({
  src,
  mobileSrc,
  alt,
  className,
  loading = "lazy",
  fetchPriority,
  width,
  height,
}: ResponsiveImageProps) => {
  return (
    <picture>
      <source srcSet={mobileSrc} media="(max-width: 767px)" type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding={loading === "eager" ? "sync" : "async"}
        width={width}
        height={height}
        style={width && height ? { height: "auto" } : undefined}
        // @ts-ignore - fetchpriority is a valid HTML attribute
        fetchpriority={fetchPriority}
      />
    </picture>
  );
};
