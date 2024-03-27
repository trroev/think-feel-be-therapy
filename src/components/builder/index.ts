'use client'

import dynamic from 'next/dynamic'
import { RegisteredComponent } from '@builder.io/sdk-react'

export const BuilderComponents: RegisteredComponent[] = [
  {
    component: dynamic(() => import('@/components').then((mod) => mod.Accordion), {
      ssr: false,
    }),
    name: 'Accordion',
    inputs: [
      {
        name: 'items',
        type: 'list',
        subFields: [
          {
            name: 'value',
            type: 'string',
            required: true,
          },
          {
            name: 'trigger',
            type: 'string',
            required: true,
          },
          {
            name: 'content',
            type: 'string',
            required: true,
          },
        ],
      },
      {
        name: 'type',
        type: 'string',
        defaultValue: 'multiple',
        enum: ['single', 'multiple'],
      },
    ],
  },
]
