import { PropsWithChildren } from 'react'

export default function PrimaryButton({ children }: PropsWithChildren) {
  return (
    <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-[19px] py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>{children}</button>
  )
}