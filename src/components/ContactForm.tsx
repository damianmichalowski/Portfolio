import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import emailjs from '@emailjs/browser'
import confetti from 'canvas-confetti'
import { Loader2 } from 'lucide-react'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

interface FormErrors {
  user_name?: string
  user_lastname?: string
  user_email?: string
  user_phone?: string
  user_message?: string
}

interface ContactFormProps {
  onClose?: () => void
  removeBackground?: boolean
}

interface LabelInputContainerProps {
  children: React.ReactNode
  className?: string
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onClose,
  removeBackground = false,
}) => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const form = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    let isFormValid = true

    if (!form.current?.user_name.value) {
      newErrors.user_name = t('contactForm.errors.firstNameRequired')
      isFormValid = false
    }

    if (!form.current?.user_lastname.value) {
      newErrors.user_lastname = t('contactForm.errors.lastNameRequired')
      isFormValid = false
    }

    if (!form.current?.user_email.value) {
      newErrors.user_email = t('contactForm.errors.emailRequired')
      isFormValid = false
    } else if (!/\S+@\S+\.\S+/.test(form.current.user_email.value)) {
      newErrors.user_email = t('contactForm.errors.emailInvalid')
      isFormValid = false
    }

    if (!form.current?.user_phone.value) {
      newErrors.user_phone = t('contactForm.errors.phoneRequired')
      isFormValid = false
    }

    if (!form.current?.user_message.value) {
      newErrors.user_message = t('contactForm.errors.messageRequired')
      isFormValid = false
    }

    setErrors(newErrors)
    return isFormValid
  }

  const handleConfetti = (): void => {
    const button = document.querySelector('button[type="submit"]')
    if (button) {
      const rect = button.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2
      confetti({
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        spread: 70,
        scalar: 1.2,
        particleCount: 100,
        startVelocity: 30,
      })
    }
  }

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)

    try {
      if (form.current) {
        await emailjs.sendForm(
          import.meta.env.VITE_SERVICE_ID!,
          import.meta.env.VITE_TEMPLATE_ID!,
          form.current,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEY!,
          }
        )

        handleConfetti()
        toast({
          title: t('toast.contactSuccessTitle'),
          description: t('toast.contactSuccessDescription'),
        })
        onClose?.()
        form.current.reset()
      }
    } catch (error) {
      toast({
        title: t('toast.contactErrorTitle'),
        description: t('toast.contactErrorDescription'),
      })
      console.error('FAILED...', error)
    } finally {
      setIsLoading(false)
    }
  }

  const LabelInputContainer: React.FC<LabelInputContainerProps> = ({
    children,
    className,
  }) => (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  )

  return (
    <div
      className={cn(
        'max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8',
        !removeBackground &&
          'shadow-input bg-gray-100/80 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800'
      )}
    >
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label
              htmlFor="firstname"
              className="text-gray-700 dark:text-neutral-300"
            >
              {t('contactForm.firstName')}
            </Label>
            <Input
              id="firstname"
              name="user_name"
              placeholder={t('contactForm.placeholders.firstName')}
              type="text"
              className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-gray-900 dark:text-neutral-100"
            />
            {errors.user_name && (
              <span className="text-red-500 text-sm">{errors.user_name}</span>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label
              htmlFor="lastname"
              className="text-gray-700 dark:text-neutral-300"
            >
              {t('contactForm.lastName')}
            </Label>
            <Input
              id="lastname"
              name="user_lastname"
              placeholder={t('contactForm.placeholders.lastName')}
              type="text"
              className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-gray-900 dark:text-neutral-100"
            />
            {errors.user_lastname && (
              <span className="text-red-500 text-sm">
                {errors.user_lastname}
              </span>
            )}
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label
            htmlFor="email"
            className="text-gray-700 dark:text-neutral-300"
          >
            {t('contactForm.email')}
          </Label>
          <Input
            id="email"
            name="user_email"
            placeholder={t('contactForm.placeholders.email')}
            type="email"
            className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-gray-900 dark:text-neutral-100"
          />
          {errors.user_email && (
            <span className="text-red-500 text-sm">{errors.user_email}</span>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label
            htmlFor="phone"
            className="text-gray-700 dark:text-neutral-300"
          >
            {t('contactForm.phone')}
          </Label>
          <Input
            id="phone"
            name="user_phone"
            placeholder={t('contactForm.placeholders.phone')}
            type="text"
            className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-gray-900 dark:text-neutral-100"
          />
          {errors.user_phone && (
            <span className="text-red-500 text-sm">{errors.user_phone}</span>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label
            htmlFor="message"
            className="text-gray-700 dark:text-neutral-300"
          >
            {t('contactForm.message')}
          </Label>
          <Textarea
            id="message"
            name="user_message"
            placeholder={t('contactForm.placeholders.message')}
            className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-gray-900 dark:text-neutral-100 min-h-[120px] focus-visible:ring-neutral-300 dark:focus-visible:ring-neutral-600"
          />
          {errors.user_message && (
            <span className="text-red-500 text-sm">{errors.user_message}</span>
          )}
        </LabelInputContainer>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full relative inline-flex h-12 overflow-hidden rounded-md p-[1px] text-sm font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-white dark:bg-slate-950 px-6 py-3 text-sm font-medium text-gray-900 dark:text-white shadow-lg backdrop-blur-3xl">
            <span className="relative flex items-center z-10">
              {isLoading ? t('contactForm.sending') : t('contactForm.submit')}
              {isLoading && <Loader2 className="ml-2 animate-spin" />}
            </span>
          </span>
        </Button>
      </form>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
    </>
  )
}
