/** biome-ignore-all lint/correctness/noUnusedVariables: <> */
import type { CheckboxField, TextField } from 'payload'

import { formatSlugHook } from './formatSlug'

type Overrides = {
  slugOverrides?: Partial<TextField>
  checkboxOverrides?: Partial<CheckboxField>
}

type Slug = (
  fieldToUse?: string,
  overrides?: Overrides
) => [TextField, CheckboxField]

export const slugField: Slug = (fieldToUse = 'title', overrides = {}) => {
  const { slugOverrides, checkboxOverrides } = overrides

  const checkBoxField: CheckboxField = {
    name: 'slugLock',
    type: 'checkbox',
    defaultValue: true,
    admin: {
      hidden: true,
      position: 'sidebar',
    },
    ...checkboxOverrides,
  }

  const {
    name,
    type,
    hasMany,
    minRows,
    maxRows,
    validate,
    hooks: hookOverrides,
    admin: adminOverrides,
    ...restOfOverrides
  } = slugOverrides || {}

  const slug: TextField = {
    name: 'slug',
    type: 'text',
    hasMany: false,
    index: true,
    label: 'Slug',
    hooks: {
      ...(hookOverrides || {}),
      // Kept this in for hook or API based updates
      beforeValidate: [formatSlugHook(fieldToUse)],
    },
    admin: {
      position: 'sidebar',
      ...(adminOverrides || {}),
      components: {
        Field: {
          path: '@/fields/slug/SlugComponent#SlugComponent',
          clientProps: {
            fieldToUse,
            checkboxFieldPath: checkBoxField.name,
          },
        },
      },
    },
    ...restOfOverrides,
  }

  return [slug, checkBoxField]
}
