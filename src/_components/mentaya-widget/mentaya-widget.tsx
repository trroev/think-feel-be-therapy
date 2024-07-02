import { type FC } from 'react'

import { cn } from '@/_lib'

interface MentayaWidgetProps {
  fullWidth?: boolean
}

const MentayaWidget: FC<MentayaWidgetProps> = ({ fullWidth }) => {
  return (
    <section className="container flex justify-center py-12">
      <div className={cn('flex min-h-96 max-w-2xl flex-1', fullWidth && 'max-w-full')}>
        <iframe
          className="size-full rounded-2xl border border-border"
          src="https://app.mentaya.com/public/practices/Un8Ea7GcAm8XcFNL0C5X/eligibility/widget"
          title="Check Mentaya eligibility"
        />
      </div>
    </section>
  )
}

export { MentayaWidget }
