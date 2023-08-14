import React from "react";


export default function RootLayout({children}:{
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <title>Admin Panel</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
        {children}
        </body>
        </html>
    )
}


