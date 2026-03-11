import { buttonHover, fadeInRight } from '@/animations/variants'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { DOCUMENTS } from '../constants'
import HighlightCard from './HighlightCard'
import Section from './layout/Section'

const Experience: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Section id="experience">
      <h2 className="my-20 text-center text-4xl text-gray-900 dark:text-white">
        {t('experience.title')}
      </h2>
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto w-2/3 text-gray-600 dark:text-neutral-400"
      >
        <p className="mb-6 text-justify">{t('experience.paragraphs.p1')}</p>
        <p className="mb-6 text-justify">{t('experience.paragraphs.p2')}</p>
        <p className="mb-6 text-justify">{t('experience.paragraphs.p3')}</p>
        <p className="mb-6 text-justify">{t('experience.paragraphs.p4')}</p>
        <p className="text-justify">{t('experience.paragraphs.p5')}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <HighlightCard
            tag={t('experience.cards.hitachi.tag')}
            title={t('experience.cards.hitachi.title')}
            bullets={
              t('experience.cards.hitachi.bullets', {
                returnObjects: true,
              }) as string[]
            }
          />
          <HighlightCard
            tag={t('experience.cards.meta.tag')}
            title={t('experience.cards.meta.title')}
            bullets={
              t('experience.cards.meta.bullets', {
                returnObjects: true,
              }) as string[]
            }
          />
          <HighlightCard
            tag={t('experience.cards.santander.tag')}
            title={t('experience.cards.santander.title')}
            bullets={
              t('experience.cards.santander.bullets', {
                returnObjects: true,
              }) as string[]
            }
          />
          <HighlightCard
            tag={t('experience.cards.fintech.tag')}
            title={t('experience.cards.fintech.title')}
            bullets={
              t('experience.cards.fintech.bullets', {
                returnObjects: true,
              }) as string[]
            }
          />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <motion.a
            href={DOCUMENTS.referenceSoftProdukt}
            target="_blank"
            rel="noreferrer"
            variants={buttonHover}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium rounded-full bg-transparent border-2 border-gray-300 dark:border-neutral-700 text-gray-600 dark:text-neutral-300 hover:border-pink-400 hover:text-pink-400 dark:hover:border-pink-200 dark:hover:text-pink-200 transition-colors"
          >
            {t('buttons.reference')}
          </motion.a>
          <motion.a
            href={DOCUMENTS.resume}
            target="_blank"
            rel="noreferrer"
            variants={buttonHover}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium rounded-full bg-transparent border-2 border-gray-300 dark:border-neutral-700 text-gray-600 dark:text-neutral-300 hover:border-pink-400 hover:text-pink-400 dark:hover:border-pink-200 dark:hover:text-pink-200 transition-colors"
          >
            {t('buttons.resume')}
          </motion.a>
        </div>
      </motion.div>
    </Section>
  )
}

export default Experience
