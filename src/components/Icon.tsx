type IconProps = { name: string; className?: string; filled?: boolean; style?: React.CSSProperties };

export function Icon({ name, className = "", filled = false, style }: IconProps) {
  const combinedStyle = filled
    ? { fontVariationSettings: "'FILL' 1", ...(style || {}) }
    : style;
  return (
    <span
  aria-hidden="true"
  className={`material-symbols-outlined ${className}`}
  style={combinedStyle}
>
  {name}
</span>
  );
}
