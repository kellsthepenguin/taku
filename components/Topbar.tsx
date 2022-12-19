export default function Topbar() {
  return (
    <nav className='mx-2 my-2 rounded-md flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-5 bg-white sm:items-baseline'>
      <div className='mb-2 sm:mb-0'>
        <a href='/home' className='text-2xl no-underline text-grey-darkest hover:text-blue-dark'>
          <img src='/taku.svg' width={70} height={35}/>
        </a>
        </div>
      <div>
        <a href='/one' className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2'>
          One
        </a>
        <a href='/two' className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2'>
          Two
        </a>
        <a href='/three' className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2'>
          Three
        </a>
      </div>
    </nav>
  )
}
