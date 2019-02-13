// allows us direct access to html document

import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render(){
        return (
            <html>
                <Head>
                    <meta name="description" content="A site for my programming portfolio" />
                    <meta name="description" content="A site for my programming portfolio" />
                    <meta charset="utf-8"/>
                    <meta name="robots" content="noindex, nofollow" />
                    <meta name="viewport" content="width=device-width" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Crimson+Text|Open+Sans|Roboto+Mono" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style jsx>{`
                    body {
                        font-family: 'Roboto Mono', monospace;
                    }
                    h1 {
                        font-family: 'Open Sans', sans-serif;
                    }
                    h2 {
                        font-family: 'Crimson Text', serif;
                    }
                `}</style>
            </html>
        )
    }
}