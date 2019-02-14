import Layout from '../components/Layout';
import Link from 'next/link';

export default ({ url }) => (
    <Layout title={url.query.title}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolores rerum reprehenderit pariatur hic reiciendis, esse ea dicta eligendi suscipit. Tenetur officiis, non magnam quis repellat distinctio ad harum placeat!</p>
    </Layout>
)

