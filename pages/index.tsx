import Frame from '../components/Frame'
import Profile from '../components/Profile'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Login() {
  const { data, error, isLoading } = useSWR('/api/users', fetcher)

  return (
    <Frame>
      <div className='text-center mt-24'>
        <div className='inline-block text-left'>
          <p className='mb-2 text-xl font-semibold dark:text-white'>Select Profile</p>
          <div className='flex items-center justify-center gap-3'>
            {
              isLoading ? <p>Loading...</p> : error ? <p>Error</p> : data.map((data: any) => <Profile name={data.name} photoURL={data.photoURL} isLocked={data.isLocked} />)
            }
          </div>
        </div>
      </div>
    </Frame>
  )
}
