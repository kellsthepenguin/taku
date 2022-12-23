import Frame from '../components/Frame'
import Profile from '../components/Profile'
import useSWR from 'swr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Login() {
  const { data, error, isLoading } = useSWR('/api/users', fetcher)

  return (
    <Frame>
      <div className='text-center mt-24'>
        <div className='inline-block text-left'>
          <p className='mb-2 text-xl font-bold dark:text-white'>Select Profile</p>
          <div className='flex items-center justify-center gap-3'>
            {
              isLoading ? <p>Loading...</p> : error ? <p>Error</p> : data.map((data: any) => <Profile name={data.name} photoURL={data.photoURL} isLocked={data.isLocked} />)
            }
            <Profile name='Add user' photoURL='/circle-plus-solid.svg' isLocked={false} className='bg-slate-800 dark:bg-slate-300 hover:bg-slate-700 dark:hover:bg-slate-400 text-white dark:text-black' imgClassName='invert' />
          </div>
        </div>
      </div>
    </Frame>
  )
}
