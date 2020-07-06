import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumb({breadcrumbs}) {
    let urls = useLocation().pathname.split('/');
    return (
        <nav
        className="breadcrumb has-arrow-separator is-centered"
        aria-label="breadcrumbs"
        >
        <ul>
        {breadcrumbs.map((breadcrumb, index, breadcrumbs) => {
            let isLast = breadcrumbs.length == index + 1;
            return (
                <li className={isLast ? "is-active" : undefined} key={index}>
                    <Link
                    to={urls.slice(0, index + 1).join('/')} 
                    aria-current={isLast ? "page" : undefined}>
                        {breadcrumb}
                    </Link>
                </li>
            );
        })}
        </ul>
        </nav>
    );
}

export default Breadcrumb;