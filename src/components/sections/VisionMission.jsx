import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Watermark from '../brand/Watermark'
import FeatureCard from '../precision/FeatureCard'
import { BlockRise, Block } from '../precision/Primitives'

/**
 * Vision & Mission — its own section: dark band, heading, two cards side by side, faint logo watermark.
 * The same section on the home page, Infyro Studios and Infyro Construction.
 * `items` = [{ label, text, icon }]
 */
export default function VisionMission({ items, id = 'vision', eyebrow = 'Our Direction', title = 'Vision & Mission' }) {
  return (
    <Section id={id} tone="navy" labelledBy={`${id}-title`} className="isolate overflow-hidden">
      <Watermark color="#FFFFFF" className="opacity-[0.06]" />
      <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} tone="light" />
      <BlockRise as="ul" className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
        {items.map(({ label, text, icon }, i) => (
          <Block as="li" key={label}>
            <FeatureCard accent={i} icon={icon} title={label}>
              {text}
            </FeatureCard>
          </Block>
        ))}
      </BlockRise>
    </Section>
  )
}
