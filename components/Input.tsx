export default function Input({ id, placeholder, size, maxLength, type }: { id?: string, placeholder?: string, size: number, maxLength: number, type?: string }) {
  return (
    <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block px-2.5 p-2 mb-1.5' id={id} placeholder={placeholder} size={size} maxLength={maxLength} type={type} />
  )
}
