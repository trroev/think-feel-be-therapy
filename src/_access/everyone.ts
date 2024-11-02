import { type FieldAccess, type TypeWithID } from 'payload'
import { type User } from '@/payload-types'

export const EveryoneAccess: FieldAccess<TypeWithID, User> = () => true
