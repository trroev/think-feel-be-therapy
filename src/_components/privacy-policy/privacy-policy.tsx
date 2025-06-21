import type { FC } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Divider,
} from '../ui'

interface PrivacyPolicyProps {
  heading: string
  subheading?: string
}

const PrivacyPolicy: FC<PrivacyPolicyProps> = ({ heading, subheading }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:underline" type="button">
          Privacy Policy
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100vh-2rem)] overflow-scroll lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{heading}</DialogTitle>
          <DialogDescription>{subheading}</DialogDescription>
        </DialogHeader>
        <Divider />
        <div className="flex flex-col space-y-2">
          <p>
            We value your privacy very highly. Please read this Privacy Policy
            carefully before using the www.rachaelmathiak.com Website (the
            &quot;Website&quot;) operated by Rachael Mathiak Therapy LLC, a(n)
            Sole Proprietorship formed in Michigan, United States
            (&quot;us,&quot; &quot;we&quot;, &quot;our&quot;) as this Privacy
            Policy contains important information regarding your privacy and how
            we may use the information we collect about you.
          </p>
          <p>
            Your access to and use of the Website is conditional upon your
            acceptance of and compliance with this Privacy Policy. This Privacy
            Policy applies to everyone, including, but not limited to: visitors,
            users, and others, who wish to access or use the Website.
          </p>
          <p>
            By accessing or using the Website, you agree to be bound by this
            Privacy Policy. If you disagree with any part of the Privacy Policy,
            then you do not have our permission to access or use the Website.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>What Information We Collect</h6>
          <Divider />
          <p>
            We collect any and all information that you enter on this Website.
            We collect the following information about you:
          </p>
          <ul>
            <li>
              <strong>Identifying Information: </strong>
              Name, phone number, email address
            </li>
            <li>
              <strong>Characteristics of protected classifications: </strong>
              Age, mental disabilities
            </li>
            <li>
              <strong>Internet or other electronic activity: </strong>
              Information regarding your interaction with our Website
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>With Whom We Share Your Personal Information</h6>
          <Divider />
          <p>
            We do not share your personal information with any third parties.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>Cookies</h6>
          <Divider />
          <p>
            A cookie is a small piece of data sent from a website and stored on
            your device by your browser. Cookies are generally used to allow
            websites to respond to you as an individual, to remember your
            preferences, to test content, and to analyze your interactions with
            Websites or with advertisements. This Website does not collect
            cookies.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>Children&apos;s Privacy</h6>
          <Divider />
          <p>
            This Website is intended for use by a general audience and does not
            offer services to children. Should a child whom we know to be under
            18 send personal information to us, we will use that information
            only to respond to that child to inform him or her that they cannot
            use this Website.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>Third-Party Websites</h6>
          <Divider />
          <p>
            This Website may contain hyperlinks to websites operated by parties
            other than us. We provide such hyperlinks for your reference only.
            We do not control such websites and are not responsible for their
            contents or the privacy or other practices of such websites. It is
            up to you to read and fully understand their Privacy Policies. Our
            inclusion of hyperlinks to such websites does not imply any
            endorsement of the material on such websites or any association with
            their operators.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>Do Not Track</h6>
          <Divider />
          <p>
            Do Not Track is a preference you can set on your browser to inform
            websites that you do not want to be tracked. We do not support Do
            Not Track (&quot;DNT&quot;). You can either enable or disable Do Not
            Track by visiting the Preferences or Settings page of your browser.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>Changes to Our Privacy Policy</h6>
          <Divider />
          <p>
            We reserve the right to amend this Privacy Policy at any time. We
            will notify you of any changes to this Privacy Policy by posting the
            updated Privacy Policy to this website or application.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>Questions</h6>
          <Divider />
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{' '}
            <a
              href="mailto:therapy@rachaelmathiak.com"
              className="font-semibold text-brand-primary hover:underline"
            >
              therapy@rachaelmathiak.com
            </a>
            .
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { PrivacyPolicy }
