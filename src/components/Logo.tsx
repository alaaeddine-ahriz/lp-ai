type Props = { name: string; logo?: string; size?: number; className?: string };

/** Logo d'un outil tiers (SVG de /public/logos), ou son initiale s'il n'y en a pas. */
export function Logo({ name, logo, size = 20, className = "" }: Props) {
  if (!logo) {
    return (
      <span
        aria-hidden="true"
        className={`grid place-items-center rounded-md bg-ink font-display font-bold text-white ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.6 }}
      >
        {name.charAt(0)}
      </span>
    );
  }
  return (
    <img
      src={`/logos/${logo}.svg`}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      className={`object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
