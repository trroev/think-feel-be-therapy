'use client'

import dynamic from 'next/dynamic'
import { type RegisteredComponent } from '@builder.io/sdk-react'

export const BuilderComponents: RegisteredComponent[] = [
  {
    component: dynamic(() => import('@/components').then((mod) => mod.FAQ), {
      ssr: false,
    }),
    name: 'FAQs',
    inputs: [
      {
        name: 'items',
        type: 'list',
        subFields: [
          // {
          //   name: 'value',
          //   type: 'string',
          //   required: true,
          // },
          {
            name: 'question',
            type: 'longText',
            required: true,
          },
          {
            name: 'answer',
            type: 'longText',
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
  {
    component: dynamic(() => import('@/components').then((mod) => mod.Button), {
      ssr: false,
    }),
    name: 'Button',
    inputs: [
      {
        name: 'variant',
        type: 'string',
        defaultValue: 'default',
        enum: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      },
      {
        name: 'size',
        type: 'string',
        defaultValue: 'default',
        enum: ['default', 'sm', 'lg', 'icon'],
      },
      {
        name: 'buttonText',
        type: 'string',
        required: true,
      },
    ],
  },
]
