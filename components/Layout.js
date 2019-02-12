import Link from 'next/link';

export default ({ children, title }) => (
    <div>
        <h1>{title}</h1>
        
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/hireme"><a>Hire Me</a></Link>
        
        
        <footer>footer</footer>
    </div>
)
