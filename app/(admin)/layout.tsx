import React from "react";
import './global.css'

export default function RootLayout({children}:{
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <title>Admin Panel</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
        </head>
        <body>
        <nav>
            <div className="logo-name">
                <div className="logo-image">
                    <img src="/foto.jpg" alt=""/>
                </div>
                <span className="logo_name">Blog Site</span>
            </div>

            <div className="menu-items">
                <ul className="nav-links">
                    <li>
                        <a href="/admin/texts">
                            <i className="uil uil-estate"></i>
                            <span className="link-name">Texts</span>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/texts">
                            <i className="uil uil-estate"></i>
                            <span className="link-name">Comments</span>
                        </a>
                    </li>
                </ul>

                <ul className="logout-mode">
                    <li><a href="#">
                        <i className="uil uil-signout"></i>
                        <span className="link-name">Logout</span>
                    </a></li>
                </ul>
            </div>
        </nav>
        {children}
        </body>
        </html>
    )
}


