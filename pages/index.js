import Layout from "../components/Layout";
const questions = require('./../questions.json');
const question = (questions) => {
    let date = new Date();
    let day = date.getDate();
    console.log(day);
}


const Index = () => (
    <Layout title="Home">
        <div>{JSON.stringify(questions.level1[0].task)}</div>
        <div>See a solution: {JSON.stringify(questions.level1[0].solutionLink)}</div>
        <iframe height="400px" width="100%" src="https://repl.it/@lemurriot/SeriousPeruDoom-1?lite=true" scrolling="no" frameBorder="no" allowtransparency="true" allowFullScreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
    </Layout>
);

export default Index;