import { type FC } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Divider,
} from '../ui'

interface DisclaimerProps {
  heading: string
  subheading?: string
}

const Disclaimer: FC<DisclaimerProps> = ({ heading, subheading }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:underline">Disclaimer</button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100vh-2rem)] overflow-scroll lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{heading}</DialogTitle>
          <DialogDescription>{subheading}</DialogDescription>
        </DialogHeader>
        <Divider />
        <div className="flex flex-col space-y-2">
          <p>
            Please read this Disclaimer carefully before using the www.rachaelmathiak.com Website
            (the &quot;Website&quot;) operated by Rachael Mathiak Therapy LLC, a(n) Sole
            Proprietorship formed in Michigan (&quot;us&quot;, &quot;we&quot;, &quot;our&quot;) as
            this Disclaimer contains important information regarding limitations of our liability.
            Your access to and use of the Website is conditional upon your acceptance of and
            compliance with this Disclaimer. This Disclaimer applies to everyone, including, but not
            limited to: visitors, users, and others, who wish to access or use the Website.
          </p>
          <p>
            Your access to and use of the Website is conditional upon your acceptance of and
            compliance with this Privacy Policy. This Privacy Policy applies to everyone, including,
            but not limited to: visitors, users, and others, who wish to access or use the Website.
          </p>
          <p>
            By accessing or using the Website, you agree to be bound by this Disclaimer. If you
            disagree with any part of this Disclaimer, then you do not have our permission to access
            or use the Website.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>Changes</h6>
          <Divider />
          <p>
            We reserve the right to amend this policy at any time without any prior notice to you.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>Questions</h6>
          <Divider />
          <p>
            If you have any questions about this Disclaimer, please contact us at
            <a
              href="mailto:therapy@rachaelmathiak.com"
              className="font-semibold text-brandPrimary hover:underline"
            >
              therapy@rachaelmathiak.com
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { Disclaimer }
