import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'

interface LanguageToggleProps {
  className?: string
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className }) => {
  const { i18n, t } = useTranslation()
  const isPl = i18n.language?.toLowerCase().startsWith('pl')

  const toggleLanguage = (): void => {
    void i18n.changeLanguage(isPl ? 'en' : 'pl')
  }

  return (
    <button
      type="button"
      role="switch"
      aria-label="Language"
      aria-checked={isPl}
      onClick={toggleLanguage}
      className={cn(
        'relative inline-flex h-6 select-none items-center rounded-full border-2 border-black bg-gray-300 p-0.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] dark:border-white dark:bg-gradient-to-r dark:from-pink-600 dark:to-pink-900',
        className
      )}
    >
      <span className="relative grid h-full w-full grid-cols-2 items-center text-[11px] font-medium leading-none tracking-wide">
        <span
          aria-hidden="true"
          className={cn(
            'absolute inset-y-0 left-0 z-0 w-1/2 rounded-full bg-black transition-transform duration-200 ease-out dark:bg-white',
            isPl ? 'translate-x-full' : 'translate-x-0'
          )}
        />

        <span
          className={cn(
            'relative z-10 px-2.5 text-center transition-colors',
            !isPl ? 'text-white dark:text-black' : 'text-gray-900 dark:text-white'
          )}
        >
          {t('language.en')}
        </span>
        <span
          className={cn(
            'relative z-10 px-2.5 text-center transition-colors',
            isPl ? 'text-white dark:text-black' : 'text-gray-900 dark:text-white'
          )}
        >
          {t('language.pl')}
        </span>
      </span>
    </button>
  )
}

export default LanguageToggle
