import Link from 'next/link';


export default () => (
    <div>
        <h1>About</h1>
        <Link href="/">
            Home
        </Link>
        <div>A Javascript Programmer</div>
        <img src="/static/javascript-logo.png" alt="javascript logo" height="200px"/>
    </div>
)