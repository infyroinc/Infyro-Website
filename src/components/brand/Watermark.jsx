import FacetMark from './FacetMark'

/**
 * Large faint outline of the Infyro mark, centred behind a section's content.
 * The parent section needs `isolate overflow-hidden` so it sits behind the content and is clipped.
 */
export default function Watermark({ color, className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 ${className}`}>
      <FacetMark size={540} outline color={color} />
    </div>
  )
}
