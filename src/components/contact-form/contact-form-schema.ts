import { z } from 'zod'

const ContactFormSchema = z.object({
  fullName: z.string().min(1, {
    message: 'Please enter your full name',
  }),
  pronouns: z.string().optional(),
  email: z
    .string()
    .email({
      message: 'Please enter a valid email address',
    })
    .min(1, {
      message: 'Please enter your email address',
    }),
  phoneNumber: z.string().min(1, {
    message: 'Please enter your phone number',
  }),
  age: z.string().optional(),
  state: z.string().optional(),
  reason: z.string().optional(),
  anythingElse: z.string().optional(),
  outOfNetworkTerm: z
    .boolean()
    .refine((value) => value === true, {
      message: 'Please agree to the terms',
    })
    .default(false),
  mentayaTerm: z
    .boolean()
    .refine((value) => value === true, {
      message: 'Please agree to the terms',
    })
    .default(false),
  feesTerm: z
    .boolean()
    .refine((value) => value === true, {
      message: 'Please agree to the terms',
    })
    .default(false),
  cancellationTerm: z
    .boolean()
    .refine((value) => value === true, {
      message: 'Please agree to the terms',
    })
    .default(false),
  acknowledgementTerm: z
    .boolean()
    .refine((value) => value === true, {
      message: 'Please agree to the terms',
    })
    .default(false),
})

type ContactFormValues = z.infer<typeof ContactFormSchema>

export { ContactFormSchema, type ContactFormValues }
