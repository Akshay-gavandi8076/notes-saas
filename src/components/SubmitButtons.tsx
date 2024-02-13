'use client'

import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'
import { Loader2, Trash } from 'lucide-react'

export const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button
          disabled
          className='w-fit cursor-pointer'
        >
          <Loader2 className='mr-2 w-4 animate-spin' /> Please wait
        </Button>
      ) : (
        <Button
          className='w-fit cursor-pointer'
          type='submit'
        >
          Save Now
        </Button>
      )}
    </>
  )
}

export const StripeSubscriptionCreationButton = () => {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button
          disabled
          className='w-full cursor-pointer'
        >
          <Loader2 className='mr-2 w-4 animate-spin' /> Please wait
        </Button>
      ) : (
        <Button
          className='w-full cursor-pointer'
          type='submit'
        >
          Create Subscription
        </Button>
      )}
    </>
  )
}

export const StripePortal = () => {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button
          disabled
          className='w-fit cursor-pointer'
        >
          <Loader2 className='mr-2 w-4 animate-spin' /> Please wait
        </Button>
      ) : (
        <Button
          className='w-fit cursor-pointer'
          type='submit'
        >
          View payment details
        </Button>
      )}
    </>
  )
}

export const TrashDelete = () => {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button
          className='cursor-pointer'
          variant={'destructive'}
          size='icon'
          disabled
        >
          <Loader2 className='h-4 w-4 animate-spin' />
        </Button>
      ) : (
        <Button
          className='cursor-pointer'
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
