import { type FC } from 'react'

import { Card, CardContent } from '../ui'

interface TestimonialCardProps {
  client?: string
  quote: string
  year?: string
}

const TestimonialCard: FC<TestimonialCardProps> = ({ client, quote, year }) => {
  return (
    <Card>
      <CardContent className="flex items-center justify-center p-6">
        <div className="flex flex-col space-y-2">
          <p className="line-clamp-[8] text-sm sm:text-base">&quot;{quote}&quot;</p>
          {client && year && (
            <p className="text-sm sm:text-base">
              — <span className="font-semibold">{client},</span> {year}
            </p>
          )}
          {client && !year && <p className="text-sm font-semibold sm:text-base">-{client}</p>}
        </div>
      </CardContent>
    </Card>
  )
}

export { TestimonialCard }
