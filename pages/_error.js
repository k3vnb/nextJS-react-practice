import Layout from '../components/Layout';

export default ({ statusCode }) => (
    <Layout title="Error!!">
        {statusCode ? `Could not load user data: Status Code ${statusCode}` : `Sorry, that page isn't here`}
    </Layout>
)