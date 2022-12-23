import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ProfileProps {
  photoURL: string
  name: string
  isLocked: boolean
  className?: string
  imgClassName?: string
}

export default function Profile({ photoURL, name, isLocked, className, imgClassName }: ProfileProps) {
  return (
    <div className={className + ' rounded bg-slate-300 dark:bg-slate-800 h-40 w-28 flex flex-col items-center hover:bg-slate-400 dark:hover:bg-slate-700 dark:text-white'}>
      <img src={photoURL} height={90} width={90} className={'mt-[11px] rounded ' + imgClassName} />
      <p className='mt-4 text-[13pt] font-semibold'>{name} {isLocked && <FontAwesomeIcon icon={faLock} />}</p>
    </div>
  )
}
