import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {HTTP_SERVER_PORT_PICTURES} from "./constants";

class Q404 extends Component {
    render() {
        return (
            <div id="p404">

                <span id="T404">Error 404</span>

                <div id="msg_404">
                    <p>Sorry, the requested page does not exist.</p>
                </div>
                <Link id="Home_btn" to={'/'}>Go Home</Link>

            </div>
        );
    }
}

export default Q404;