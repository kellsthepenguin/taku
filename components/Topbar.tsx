import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'

export default function Topbar() {
  const [isDarkMode, setDarkMode] = useState(false)
  const firstUpdate = useRef(true)

  useEffect(() => {
    if (localStorage.isDarkMode === 'true') {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }

    if (typeof window !== 'undefined') {
      if (isDarkMode) {
        document.documentElement.classList.add('dark')
        localStorage.isDarkMode = 'true'
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.isDarkMode = 'false'
      }
    }
  }, [isDarkMode])

  return (
    <nav className='mx-2 my-2 rounded-md flex text-center flex-row justify-between py-4 px-5 bg-white dark:bg-slate-900 items-baseline dark:text-white font-semibold'>
      <div className='mb-2 sm:mb-0'>
        <a href='/home' className='text-2xl no-underline'>
          <img src='/taku.svg' width={70} height={35}/>
        </a>
        </div>
      <div>
        <a onClick={() => setDarkMode(!isDarkMode)} className='text-lg no-underline ml-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2.5'>
          {isDarkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        </a>
      </div>
    </nav>
  )
}
