'use client'

import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'
import { Loader2, Trash } from 'lucide-react'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button
          disabled
          className='w-fit'
        >
          <Loader2 className='mr-2 w-4 animate-spin' /> Please wait
        </Button>
      ) : (
        <Button
          className='w-fit'
          type='submit'
        >
          Save Now
        </Button>
      )}
    </>
  )
}

export function StripeSubscriptionCreationButton() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button
          disabled
          className='w-full'
        >
          <Loader2 className='mr-2 w-4 animate-spin' /> Please wait
        </Button>
      ) : (
        <Button
          className='w-full'
          type='submit'
        >
          Create Subscription
        </Button>
      )}
    </>
  )
}

export function StripePortal() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button
          disabled
          className='w-fit'
        >
          <Loader2 className='mr-2 w-4 animate-spin' /> Please wait
        </Button>
      ) : (
        <Button
          className='w-fit'
          type='submit'
        >
          View payment details
        </Button>
      )}
    </>
  )
}

export function TrashDelete() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button
          variant={'destructive'}
          size='icon'
          disabled
        >
          <Loader2 className='h-4 w-4 animate-spin' />
        </Button>
      ) : (
        <Button
          variant={'destructive'}
          size='icon'
          type='submit'
        >
          <Trash className='h-4 w-4' />
        </Button>
      )}
    </>
  )
}
