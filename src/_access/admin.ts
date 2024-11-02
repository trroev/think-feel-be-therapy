import { type FieldAccess, type TypeWithID } from 'payload'
import { User } from '@/payload-types'

export const AdminAccess: FieldAccess<TypeWithID, User> = ({ req: { user } }) =>
  user?.role === 'admin'
