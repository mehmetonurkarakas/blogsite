import './globals.css'
import type { Metadata } from 'next'
import React from "react";
import {GetServerSideProps} from "next";

export default function RootLayout({children}:{
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      {children}</body>
    </html>
  )
}


