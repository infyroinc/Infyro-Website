import { Check } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import ContactForm from '../forms/ContactForm'
import ContactPanel from '../sections/ContactPanel'
import PCard from '../precision/PCard'
import { Badge } from '../precision/FeatureCard'

/** Tech "How Can We Help You?" — toggle cards in a row that pre-select the form's Enquiry Type. */
function HelpTiles({ title, tiles, selected, onSelect }) {
  return (
    <div>
      <h3 className="t-h4 text-center">{title}</h3>
      <ul className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {tiles.map((h, i) => {
          const on = selected === h.type
          return (
            <li key={h.type}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => onSelect(h.type)}
                className={`flex h-full w-full flex-col rounded-card border bg-white p-5 text-left shadow-soft transition-colors hover:border-line-strong ${on ? 'border-brand ring-1 ring-brand' : 'border-line'}`}
              >
                <span className="flex items-start justify-between">
                  <Badge accent={i} icon={h.icon} className="!h-10 !w-10" />
                  <span aria-hidden="true" className={`grid h-6 w-6 place-items-center rounded-full ${on ? 'bg-[#0A78F2] text-white' : 'text-transparent ring-1 ring-inset ring-line-strong'}`}>
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                </span>
                <span className="mt-4 block text-[16px] font-semibold text-ink">{h.title}</span>
                <span className="t-justify mt-1.5 block text-[14px] leading-[1.6] text-muted">{h.text}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/**
 * Contact section — the same layout on every company page (Technologies, Studios, Construction):
 *
 *   heading
 *   [Tech only] "How Can We Help You?" options in one row
 *   the enquiry form — one wide card
 *   the closing line
 *   contact details — a row of small cards (Call · Email · Location · socials)
 *
 * Every block is as tall as its own content (nothing is stretched to match a neighbour),
 * so there is no empty space at any screen size. No scroll animation on the form.
 */
export default function ContactSplit({
  id = 'contact', title, tagline, lead, formTitle, formIntro, form, inbox, preset, help,
  asideTitle, asideBody, socials, below, tone = 'alt',
}) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <SectionHeading id={`${id}-title`} eyebrow="Contact" title={title} tagline={tagline} lead={lead} />

      <div className="mx-auto mt-10 max-w-5xl space-y-10 lg:mt-12">
        {help && <HelpTiles {...help} />}

        <div>
          <PCard className="p-6 sm:p-8 lg:p-10">
            {formTitle && <h3 className="t-h3">{formTitle}</h3>}
            {formIntro && <p className="mt-2 text-[15px] leading-[1.65] text-muted">{formIntro}</p>}
            <div className={formTitle || formIntro ? 'mt-6' : ''}>
              <ContactForm config={form} inbox={inbox} preset={preset} />
            </div>
          </PCard>
          {below && <p className="mx-auto mt-5 max-w-3xl text-center text-[14px] leading-[1.65] text-muted">{below}</p>}
        </div>

        <section aria-labelledby={`${id}-details`}>
          <h3 id={`${id}-details`} className="t-h4 text-center">
            {asideTitle}
          </h3>
          {asideBody && <p className="mx-auto mt-2 max-w-2xl text-center text-[14px] leading-[1.7] text-muted">{asideBody}</p>}
          <ContactPanel email={inbox} socials={socials} className="mt-5" />
        </section>
      </div>
    </Section>
  )
}
