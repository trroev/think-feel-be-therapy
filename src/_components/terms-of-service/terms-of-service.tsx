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

interface TermsOfServiceProps {
  heading: string
  subheading?: string
}

const TermsOfService: FC<TermsOfServiceProps> = ({ heading, subheading }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:underline" type="button">
          Terms of Service
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
            Please read this Terms of Service (&quot;Terms&quot;, &quot;Terms of
            Service&quot;) carefully before using the www.rachaelmathiak.com
            website (the &quot;Website&quot;) operated by Rachael Mathiak
            Therapy LLC, a(n) Sole Proprietorship formed in Michigan, United
            States (&quot;us&quot;, &quot;we&quot;, &quot;our&quot;) as this
            Terms of Service contains important information regarding
            limitations of our liability. Your access to and use of this Website
            is conditional upon your acceptance of and compliance with these
            Terms. These Terms apply to everyone, including but not limited to
            visitors, users and others, who wish to access and use the Website.
          </p>
          <p>
            By accessing or using the Website, you agree to be bound by these
            Terms. If you disagree with any part of the Terms, then you do not
            have our permission to access or use the Website.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>Prohibited Uses</h6>
          <Divider />
          <p>
            You agree that you will use this Website in accordance with all
            applicable laws, rules, regulations and these Terms at all times.
            The following is a non-exhaustive list of prohibited uses of this
            Website. You agree that you will not perform any of the following
            prohibited uses:
          </p>
          <ul>
            <li>
              Impersonating or attempting to impersonate Rachael Mathiak Therapy
              LLC or its employees, representatives, subsidiaries or divisions
            </li>
            <li>
              Misrepresenting your identity or affiliation with any person or
              entity
            </li>
            <li>
              Sending or attempting to send any advertising or promotional
              material, including but not limited to spam, junk mail, chain mail
              or any similar material
            </li>
            <li>
              Engaging in any conduct that restricts or inhibits any
              person&apos;s use or enjoyment of the Website, or which, as
              determined in our sole discretion, may harm us or the users of
              this Website or expose us or other users to liability
            </li>
            <li>
              Using the Website in any manner that could disable, overburden,
              damage or impair the Website or interfere with another
              party&apos;s use of the Website
            </li>
            <li>
              Using any robot, spider or other similar automatic technology,
              process or means to access or use the Website for any purpose,
              including monitoring or copying any of the material on this
              Website
            </li>
            <li>
              Using any manual process or means to monitor or copy any of the
              material on this Website or for any other unauthorized purpose
            </li>
            <li>
              Using any device, software, means or routine that interferes with
              the proper working of the Website, including but not limited to
              viruses, trojan horses, worms, logic bombs or other such materials
            </li>
            <li>
              Attempting to gain unauthorized access to, interfering with,
              damaging or disrupting any parts of the Website, the server(s) on
              which the Website is stored, or any server, computer or database
              connected to the Website
            </li>
            <li>
              Attempting to attack or attacking the Website via a
              denial-of-service attack or a distributed denial-of-service attack
            </li>
            <li>
              Otherwise attempting to interfere with the proper working of the
              Website
            </li>
            <li>
              Using the Website in any way that violates any applicable federal,
              state or local laws, rules or regulations
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>No Warranty on Website</h6>
          <Divider />
          <p className="uppercase">
            THIS WEBSITE IS PROVIDED “AS IS,” NO WARRANTY, EXPRESS OR IMPLIED
            (INCLUDING ANY IMPLIED WARRANTY OF MERCHANTABILITY, OF SATISFACTORY
            QUALITY OR FITNESS FOR A PARTICULAR PURPOSE OR USE) SHALL APPLY TO
            THIS WEBSITE, WHETHER ARISING BY LAW, COURSE OF DEALING, COURSE OF
            PERFORMANCE, USAGE OF TRADE OR OTHERWISE.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>Availability, Errors & Inaccuracies</h6>
          <Divider />
          <p>
            We assume no liability for the availability, errors or inaccuracies
            of the information, products or services provided on this Website.
            We may experience delays in updating information on this Website and
            in our advertising on other websites. The information, products and
            services found on the Website may contain errors or inaccuracies or
            may not be complete or current. Products or services may be
            incorrectly priced or unavailable. We expressly reserve the right to
            correct any pricing errors on our Website. The inclusion or offering
            of any product or service on this Website does not constitute an
            endorsement or recommendation of such product or service by us.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>Damages and Limitation of Liability</h6>
          <Divider />
          <p className="uppercase">
            IN NO EVENT SHALL RACHAEL MATHIAK THERAPY LLC BE LIABLE FOR ANY
            DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL OR CONSEQUENTIAL
            DAMAGES ARISING OUT OF, RELATING TO OR IN ANY WAY CONNECTED WITH
            YOUR ACCESS TO, DISPLAY OF OR USE OF THIS WEBSITE OR WITH THE DELAY
            OR INABILITY TO ACCESS, DISPLAY OR USE THIS WEBSITE, INCLUDING BUT
            NOT LIMITED TO YOUR RELIANCE UPON OPINIONS OR INFORMATION APPEARING
            ON THIS WEBSITE; ANY COMPUTER VIRUSES, INFORMATION, SOFTWARE, LINKED
            WEBSITES OPERATED BY THIRD PARTIES, PRODUCTS OR SERVICES OBTAINED
            THROUGH THIS WEBSITE, WHETHER BASED ON A THEORY OF NEGLIGENCE,
            CONTRACT, TORT, STRICT LIABILITY, CONSUMER PROTECTION STATUTES OR
            OTHERWISE, EVEN IF RACHAEL MATHIAK THERAPY LLC HAS BEEN ADVISED OF
            THE POSSIBILITY OF SUCH DAMAGES.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>Links to Third Party Websites</h6>
          <Divider />
          <p>
            This Website may contain hyperlinks to websites operated by third
            parties and not by us. We provide such hyperlinks for your reference
            only. We do not control such websites and are not responsible for
            their contents or the privacy or other practices of such websites.
            Further, it is your responsibility to take precautions to ensure
            that whatever links you click on or software that you download,
            whether from this Website or other websites or applications, is free
            of such items as viruses, worms, trojan horses, defects and other
            items of a destructive nature. Our inclusion of hyperlinks to such
            websites does not imply any endorsement of the material on such
            websites or any association with their operators.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>
            Intellectual Property and DMCA Notice and Procedure for Intellectual
            Property Infringement Claims
          </h6>
          <Divider />
          <p>
            All contents of this Website are ©2023 Rachael Mathiak Therapy LLC
            or third parties. All rights reserved. Unless specified otherwise,
            this Website and all content and other materials on this Website
            including but not limited to all logos, designs, text, graphics,
            pictures, information, data, software, sound files and arrangement
            thereof (collectively, &quot;Content&quot;) are the proprietary
            property of Rachael Mathiak Therapy LLC and are either registered
            trademarks, trademarks or otherwise protected intellectual property
            of Rachael Mathiak Therapy LLC or third parties in the United States
            and/or other countries.
          </p>
          <p>
            If you are aware of a potential infringement of our intellectual
            property, please contact Rachael Mathiak at
            therapy@rachaelmathiak.com.
          </p>
          <p>
            We respect the intellectual property rights of others. It is our
            policy to respond to any claim that Content posted on the Website
            infringes on the copyright, trademark or other intellectual property
            rights of any person or entity.
          </p>
          <p>
            If you believe in good faith that the Content infringes on your
            intellectual property rights, you or your agent may send us a
            written notice of such infringement titled “Infringement of
            Intellectual Property Rights - DMCA.” Your notice to us must include
            the following information:
          </p>
          <ul>
            <li>
              An electronic or physical signature of the person authorized to
              act on behalf of the owner of the intellectual property
              right&apos;s interest
            </li>
            <li>
              A description of the work that you claim has been infringed,
              including the URL (i.e., web page address) of the location where
              the work exists or a copy of the work
            </li>
            <li>Your name, email, address and telephone number</li>
            <li>
              A statement by you that you have a good faith belief that the
              disputed use is not authorized by the owner of the work, its agent
              or the law
            </li>
          </ul>
          <p>
            Please note that we will not process your complaint if it is not
            properly filled out or is incomplete. You may be held accountable
            for damages, including but not limited to costs and attorneys&apos;
            fees for any misrepresentation or bad faith claims regarding the
            infringement of your intellectual property rights by the Content on
            this Website.
          </p>
          <p>You may submit your claim to us by contacting us at:</p>
          <div className="pl-10 font-medium">
            <p>Rachael Mathiak Therapy LLC</p>
            <p>Attn: Rachael Mathiak</p>
            <p>therapy@rachaelmathiak.com</p>
            <p>616-330-5822</p>
            <p>3280 Beltline Court NE</p>
            <p>Ste 100-200</p>
            <p>Grand Rapids, MI 49525</p>
            <p>UNITED STATES</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>Industry or Trade Code of Conduct</h6>
          <Divider />
          <p>
            We subscribe to the NASW, which can be found at the following link:
          </p>
          <a
            href="https://www.socialworkers.org/About/Ethics/Code-of-Ethics/Code-of-Ethics-English"
            target="_blank"
            className="font-semibold text-brandPrimary hover:underline" rel="noreferrer"
          >
            NASW Code of Ethics
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>Governing Law, Severability, Dispute Resolution and Venue</h6>
          <Divider />
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of the state of Michigan, United States, without regard to its
            conflict of laws provisions. THESE TERMS SHALL NOT BE GOVERNED BY
            THE UNITED NATIONS CONVENTION ON CONTRACTS FOR THE SALE OF
            INTERNATIONAL GOODS, THE UNIFORM COMMERCIAL CODE, NOR INCOTERMS.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of that right or provision. If any
            provision of these Terms is held to be invalid or unenforceable by a
            court, the remaining provisions of these Terms will remain in
            effect. These Terms constitute the entire agreement between you and
            us regarding our Website, and supersede and replace any prior
            agreements we might have had with you regarding the Website.
          </p>
          <p>
            Any controversy or claim arising out of or relating to these Terms
            including but not limited to the interpretation or breach thereof
            shall be resolved in a court of competent jurisdiction in Kent
            County, Michigan.
          </p>
          <p>
            YOU AND RACHAEL MATHIAK THERAPY LLC AGREE THAT EACH MAY BRING CLAIMS
            AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS
            A PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>Changes to Terms of Service</h6>
          <Divider />
          <p>
            We reserve the right to make changes to these Terms of Service at
            any time. We will not provide you with any notice when we make
            changes to this Terms of Service.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h6>Questions</h6>
          <Divider />
          <p>
            If you have any questions about these Terms, please contact us at{' '}
            <a
              href="mailto:therapy@rachaelmathiak.com"
              target="_blank"
              className="font-semibold text-brandPrimary hover:underline" rel="noreferrer"
            >
              therapy@rachaelmathiak.com
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { TermsOfService }
