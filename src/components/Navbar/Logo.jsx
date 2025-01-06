import viteLogo from '../../assets/vite.svg'

export default function Logo() {
    return (
        <a href="/" className='flex items-center ml-6'>
            <img src={viteLogo} alt="Logo" className='mr-1'/>
            <h2 className='text-2xl font-bold'>Vite</h2>
        </a>
    )
}