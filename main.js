import React from 'react';
const http = require('http');

const Header = function(props){
    return (
        <header></header>
    )
};

const Article = function(props){
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
};

const app = http.createServer(function(request, response){
    const content = <Article title="Welcome" body="Hello, world!"></Article>

    response.writeHead(200);
    // response.end(
    //     <div>
    //         <Header></Header>
    //         {content}
    //     </div>
    // );
    response.end("hello, nodejs server!");
});

app.listen(4000);
