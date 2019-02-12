import Link from 'next/link';



const Index = () => (
    <div>
        <h1>Home</h1>
        <div>Welcome to the page</div>
        <Link href="/about">
            About
        </Link>
    </div>
);

export default Index;