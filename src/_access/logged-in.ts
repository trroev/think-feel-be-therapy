import { type FieldAccess, type TypeWithID } from 'payload'

import { type User } from '@/payload-types'

export const LoggedInAccess: FieldAccess<TypeWithID, User> = ({
  req: { user },
}) => Boolean(user)
