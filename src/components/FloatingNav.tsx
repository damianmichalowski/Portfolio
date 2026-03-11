import { FloatingDock } from '@/components/ui/floating-dock'
import {
  IconCode,
  IconHome,
  IconInfoSquare,
  IconPhone,
  IconPresentation,
  IconStack2,
} from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface NavLink {
  title: string
  icon: JSX.Element
  href: string
}

export const FloatingNav: React.FC = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const navLinks: NavLink[] = [
    {
      title: t('nav.hero'),
      icon: (
        <IconHome className="h-full w-full text-gray-700 dark:text-neutral-300" />
      ),
      href: '#hero',
    },
    {
      title: t('nav.about'),
      icon: (
        <IconInfoSquare className="h-full w-full text-gray-700 dark:text-neutral-300" />
      ),
      href: '#about',
    },
    {
      title: t('nav.experience'),
      icon: (
        <IconCode className="h-full w-full text-gray-700 dark:text-neutral-300" />
      ),
      href: '#experience',
    },
    {
      title: t('nav.projects'),
      icon: (
        <IconPresentation className="h-full w-full text-gray-700 dark:text-neutral-300" />
      ),
      href: '#projects',
    },
    {
      title: t('nav.technologies'),
      icon: (
        <IconStack2 className="h-full w-full text-gray-700 dark:text-neutral-300" />
      ),
      href: '#technologies',
    },
    {
      title: t('nav.contact'),
      icon: (
        <IconPhone className="h-full w-full text-gray-700 dark:text-neutral-300" />
      ),
      href: '#contact',
    },
  ]

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY
      setIsVisible(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`transition-opacity duration-300 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <FloatingDock
        desktopClassName="fixed left-2 top-1/2 -translate-y-1/2 z-50"
        mobileClassName="fixed bottom-8 right-8 z-50"
        items={navLinks}
      />
    </div>
  )
}
