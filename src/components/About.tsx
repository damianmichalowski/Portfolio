import { fadeInLeft, fadeInRight } from '@/animations/variants'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { IMAGES } from '../constants'
import HighlightCard from './HighlightCard'
import Section from './layout/Section'

const About: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Section id="about">
      <h2 className="my-20 text-center text-4xl text-gray-900 dark:text-white">
        {t('about.title')}
      </h2>
      <p className="-mt-14 mb-12 text-center text-base text-gray-600 dark:text-neutral-400">
        {t('about.subtitle')}
      </p>
      <div className="grid gap-10 lg:grid-cols-3">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:col-span-1"
        >
          <div className="flex items-center justify-center lg:justify-end">
            <img
              className="w-full rounded-xl"
              src={IMAGES.about}
              alt={t('about.imageAlt')}
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:col-span-2"
        >
          <div className="mx-auto w-full max-w-xl lg:max-w-none">
            <div className="grid gap-4 sm:grid-cols-2">
              <HighlightCard
                tag={t('about.highlights.ui.tag')}
                title={t('about.highlights.ui.title')}
                bullets={
                  t('about.highlights.ui.bullets', {
                    returnObjects: true,
                  }) as string[]
                }
              />
              <HighlightCard
                tag={t('about.highlights.workflow.tag')}
                title={t('about.highlights.workflow.title')}
                bullets={
                  t('about.highlights.workflow.bullets', {
                    returnObjects: true,
                  }) as string[]
                }
              />
              <div className="sm:col-span-2">
                <HighlightCard
                  tag={t('about.highlights.curiosity.tag')}
                  title={t('about.highlights.curiosity.title')}
                  bullets={
                    t('about.highlights.curiosity.bullets', {
                      returnObjects: true,
                    }) as string[]
                  }
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto mt-10 w-full text-gray-600 dark:text-neutral-400 lg:w-2/3"
      >
        <p className="mb-6 text-justify">{t('about.paragraphs.p1')}</p>
        <p className="mb-6 text-justify">{t('about.paragraphs.p2')}</p>
        <p className="mb-6 text-justify">{t('about.paragraphs.p3')}</p>
        <p className="mb-6 text-justify">{t('about.paragraphs.p4')}</p>
        <p className="text-justify">{t('about.paragraphs.p5')}</p>
      </motion.div>
    </Section>
  )
}

export default About
