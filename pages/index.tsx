import Frame from '../components/Frame'
import Profile from '../components/Profile'
import useSWR from 'swr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ProfileSelect() {
  const { data, error, isLoading } = useSWR('/api/users', fetcher)

  return (
    <Frame>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='inline-block text-left'>
          <p className='text-xl font-bold dark:text-white'>Select Profile</p>
          <div className='flex items-center justify-center gap-3'>
            {
              isLoading ? <p>Loading...</p> : error ? <p>Error</p> : data.map((data: any) => <Profile name={data.name} photoURL={data.photoURL} isLocked={data.isLocked} />)
            }
            <div className='rounded bg-slate-800 dark:bg-slate-300 h-40 w-28 flex flex-col items-center hover:bg-slate-400 dark:hover:bg-slate-400 text-white dark:text-black'>
              <FontAwesomeIcon icon={faCirclePlus} className='mt-[11px] rounded dark:text-slate-900 h-[90px] w-[90px]' />
              <p className='mt-4 text-[13pt] font-semibold'>Add user</p>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  )
}
