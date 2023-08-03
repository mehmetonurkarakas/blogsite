import './globals.css'
import type { Metadata } from 'next'
import React from "react";
import {GetServerSideProps} from "next";

export default function RootLayout({children}:{
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
        <title>BlogSite</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
      <body>
      {children}</body>
    </html>
  )
}


