import React from "react";
import Link from "@material-ui/core/Link";
import '../css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return (
        <footer class="panel-footer">
            <div class="container">
                <Link href="/aboutus" class="btn btn-primary btn-xs">About Us</Link>
            </div>
        </footer>);
}

export default Footer;