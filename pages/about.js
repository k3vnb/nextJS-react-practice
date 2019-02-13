import Layout from "../components/Layout";
import { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from './_error';


export default class About extends Component {
    static async getInitialProps(){
        const res = await fetch('https://api.github.com/users/lemurriot');
        const statusCode = res.status > 200 ? res.status : false;
        const data = await res.json();
        
        return { user: data, statusCode };
    }

    render(){
        const { user, statusCode } = this.props;
        if (statusCode){
            return <Error statusCode={statusCode} />
        }
        return (
            <Layout title="About">
                <img src={user.avatar_url} alt="Kevin" height="150px" />
                <p>{user.bio}</p>
                <div>A Javascript Programmer</div>
                <img src="/static/javascript-logo.png" alt="javascript logo" height="200px"/>
            </Layout>
        );
    } 
}
