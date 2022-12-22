import Frame from '../components/Frame'
import Profile from '../components/Profile'

export default function Login() {
  return (
    <Frame>
      <div className='text-center mt-24'>
        <div className='inline-block text-left'>
          <p className='mb-2 text-xl font-semibold dark:text-white'>Select Profile</p>
          <div className='flex items-center justify-center gap-3'>
            <Profile photoURL='https://opgg-static.akamaized.net/meta/images/lol/champion/Teemo.png' name='teemo' />
            <Profile photoURL='https://opgg-static.akamaized.net/meta/images/lol/champion/Tristana.png' name='tristana' />
          </div>
        </div>
      </div>
    </Frame>
  )
}
