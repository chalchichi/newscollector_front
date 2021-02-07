import React from 'react'
import queryString from "query-string";
export default class Message extends React.Component {
    
    render () {
        const query = queryString.parse(window.location.search)
        if(query.username==null)
        {
            return (
                <div>
                    <a href = "http://localhost:8080/oauth2/authorization/google">login</a>
                </div>        
            );
        }
        else
        {
            console.log(window.location.search);
        return (
            <div>
                <h1>{query.username}</h1>;
                <img src={query.picture} alt="Mypicture"></img>
            </div>        
        )

        }
        
    }
}