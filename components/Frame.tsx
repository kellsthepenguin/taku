import { PropsWithChildren } from 'react'
import Topbar from '../components/Topbar'

export default function Frame({ children }: PropsWithChildren) {
  return (
    <div className='absolute flex flex-col h-[100%] w-[100%]'>
      <Topbar />
      <div className='rounded-md bg-white dark:bg-slate-900 mx-2 mb-2 flex-1'>
        {children}
      </div>
    </div>
  )
}
