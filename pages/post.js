import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
    <Layout title={router.query.title}>
        <p style={{ width: '80vw' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolores rerum reprehenderit pariatur hic reiciendis, esse ea dicta eligendi suscipit. Tenetur officiis, non magnam quis repellat distinctio ad harum placeat!</p>
    </Layout>
);

export default withRouter(Post)

