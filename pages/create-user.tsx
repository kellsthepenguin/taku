import Frame from '../components/Frame'
import Input from '../components/Input'
import PrimaryButton from '../components/PrimaryButton'

export default function CreateUser() {
  return (
    <Frame>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-white'>
        <div className='p-40 rounded-md bg-slate-200 dark:bg-slate-800'>
          <label htmlFor='name' className='font-semibold'>Full Name</label>
          <Input id='name' placeholder='John Doe' size={16} maxLength={64} />
          <label htmlFor='name' className='font-semibold'>PIN</label>
          <Input id='name' type='password' placeholder='exAmP1e' size={16} maxLength={32} />
          <PrimaryButton>Register</PrimaryButton>
        </div>
      </div>
    </Frame>
  )
}