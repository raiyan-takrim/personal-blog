export default function Header({ children }: { children: React.ReactNode }) {
    return (
        <header className='shadow-lg shadow-[rgba(38,39,53,0.15)] py-4 fixed top-0 inset-x-0 bg-background z-50'>
            {children}
        </header>
    )
}
