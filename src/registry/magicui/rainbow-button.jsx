export function RainbowButton({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) {
  const buttonClass = [
    "rainbow-button",
    `rainbow-button-${variant}`,
    `rainbow-button-size-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <button type="button" className={buttonClass} {...props}>
      <span className="rainbow-button-content">{children}</span>
    </button>
  )
}
