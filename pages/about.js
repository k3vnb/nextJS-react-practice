import Link from 'next/link';
import Layout from "../components/Layout";
import { Component } from "react";
import fetch from "isomorphic-unfetch";


export default class About extends Component {
    // state = {
    //     user: null
    // }
    static async getInitialProps(){
        const res = await fetch('https://api.github.com/users/lemurriot');
        const data = await res.json();
        
        return { user: data };
    }

    // componentDidMount(){
    //     fetch('https://api.github.com/users/lemurriot').then(res => res.json())
    //     .then(data => {
    //         this.setState({
    //             user: data
    //         });
    //     })
    // }

    render(){
        return (
            <Layout title="About">
                {JSON.stringify(this.props.user)}
                <Link href="/">
                    Home
                </Link>
                <div>A Javascript Programmer</div>
                <img src="/static/javascript-logo.png" alt="javascript logo" height="200px"/>
            </Layout>
        );
    } 
}
