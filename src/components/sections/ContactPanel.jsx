import { Phone, Mail, MapPin } from 'lucide-react'
import SocialIcon from '../ui/SocialIcon'
import SmartLink from '../ui/SmartLink'
import { PHONE, ADDRESS, socialList } from '../../data/contact'
import { useBrandKey } from '../precision/brandContext'

/** One contact method as a small card: icon, label, value. Links when there is something to open. */
function Item({ href, icon, label, value }) {
  const body = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-tint text-brand-ink">{icon}</span>
      <span className="min-w-0">
        <span className="block text-[13px] text-muted">{label}</span>
        <span className="t-justify block break-words text-[15px] font-medium leading-snug text-ink group-hover:text-brand-ink">{value}</span>
      </span>
    </>
  )
  const cls = 'group flex h-full items-center gap-3 rounded-card border border-line bg-white p-4 shadow-soft transition-colors hover:border-line-strong'
  return <li>{href ? <SmartLink href={href} className={cls}>{body}</SmartLink> : <div className={cls}>{body}</div>}</li>
}

/**
 * Contact details: three equal cards (Call · Email · Location), then the company's social profiles as
 * small link buttons. `socials` = [{ key, label }] — label overrides (e.g. "Follow Our Stories").
 * Missing profiles are skipped.
 */
export default function ContactPanel({ email, socials = [], className = '' }) {
  const list = socialList(useBrandKey())
  const links = socials
    .map(({ key, label }) => {
      const s = list.find((x) => x.key === key)
      return s && { key, href: s.href, text: label ?? s.label, name: s.label }
    })
    .filter(Boolean)
  return (
    <div className={className}>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <Item href={PHONE.href} icon={<Phone aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />} label="Call" value={<span className="whitespace-nowrap">{PHONE.display}</span>} />
        <Item href={`mailto:${email}`} icon={<Mail aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />} label="Email" value={email} />
        <Item icon={<MapPin aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />} label="Location" value={ADDRESS} />
      </ul>
      {links.length > 0 && (
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-3" aria-label="Social profiles">
          {links.map((l) => (
            <li key={l.key}>
              <SmartLink
                href={l.href}
                aria-label={l.text === l.name ? l.name : `${l.text} on ${l.name}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-line bg-white px-4 text-[14px] font-medium text-ink shadow-soft transition-colors hover:border-line-strong hover:text-brand-ink"
              >
                <SocialIcon name={l.key} className="h-4 w-4 text-brand-ink" />
                {l.text}
              </SmartLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
