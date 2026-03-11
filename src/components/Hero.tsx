import { motion, Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { IMAGES } from '../constants'
import HeroButtons from './HeroButtons'
import Section from './layout/Section'

const variants = (delay: number): Variants => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
})

const imageVariants: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: 0 },
  },
}

const Hero: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Section id="hero">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/3 order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="flex justify-center px-8 lg:px-0">
            <motion.img
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="rounded-full w-4/6 flex-1"
              src={IMAGES.hero}
              alt="Damian Michałowski"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3 order-2 lg:order-1">
          <div className="flex flex-col items-start lg:items-start pr-16">
            <motion.h1
              variants={variants(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg-mt-16 lg:text-8xl text-black dark:text-white"
            >
              Damian Michałowski
            </motion.h1>
            <motion.span
              variants={variants(0.2)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-pink-300 dark:via-slate-500 dark:to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              {t('hero.role')}
            </motion.span>
            <motion.p
              variants={variants(0.4)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl pt-6 font-light tracking-tighter text-justify text-gray-700 dark:text-neutral-300"
            >
              {t('hero.intro')}
            </motion.p>
            <motion.p
              variants={variants(0.4)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl pb-6 font-light tracking-tighter text-justify text-gray-700 dark:text-neutral-300"
            >
              {t('hero.workFocus')}
            </motion.p>
            <motion.div
              variants={variants(0.6)}
              initial="hidden"
              animate="visible"
            >
              <HeroButtons />
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hero
