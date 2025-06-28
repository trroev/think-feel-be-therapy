'use client'

import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'
import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
} from 'react'
import { cn } from '@/lib'
import { ChevronDown } from '../svg'

const AccordionRoot = Root

const AccordionItem = forwardRef<
  ComponentRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => (
  <Item className={cn('border-b', className)} ref={ref} {...props} />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = forwardRef<
  ComponentRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => (
  <Header className="flex text-base md:text-lg">
    <Trigger
      className={cn(
        'flex flex-1 items-center justify-between py-4 text-left font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      <ChevronDown className="size-4 shrink-0 transition-transform duration-200" />
    </Trigger>
  </Header>
))
AccordionTrigger.displayName = Trigger.displayName

const AccordionContent = forwardRef<
  ComponentRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Content
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    ref={ref}
    {...props}
  >
    <div className={cn('pt-0 pb-4', className)}>{children}</div>
  </Content>
))
AccordionContent.displayName = Content.displayName

export { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent }
