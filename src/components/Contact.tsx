import { fadeInLeft } from '@/animations/variants'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ContactForm } from './ContactForm'
import Section from './layout/Section'

const Contact: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Section id="contact" className="pb-20" noBorder>
      <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible">
        <h2 className="mt-20 mb-4 text-center text-4xl text-gray-900 dark:text-white">
          {t('contact.title')}
        </h2>
        <p className="mb-12 text-center text-base text-gray-600 dark:text-neutral-400">
          {t('contact.subtitle')}
        </p>
        <div className="text-center tracking-tighter">
          <ContactForm />
        </div>
      </motion.div>
    </Section>
  )
}

export default Contact
