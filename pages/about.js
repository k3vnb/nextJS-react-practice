import Link from 'next/link';
import Layout from "../components/Layout";


export default () => (
    <Layout title="About">
        <Link href="/">
            Home
        </Link>
        <div>A Javascript Programmer</div>
        <img src="/static/javascript-logo.png" alt="javascript logo" height="200px"/>
    </Layout>
)