interface ProfileProps {
  photoURL: string
  name: string
}

export default function Profile({ photoURL, name }: ProfileProps) {
  return (
    <div className='rounded bg-slate-300 dark:bg-slate-800 h-40 w-28 flex flex-col items-center hover:bg-slate-400 dark:hover:bg-slate-700'>
      <img src={photoURL} height={90} width={90} className='mt-[11px] rounded' />
      <p className='mt-4 text-[13pt] font-semibold'>{name}</p>
    </div>
  )
}