'use client'

import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import { Provider } from "react-redux";
import store from "@/store/store";
import "./globals.css";
import {Toaster} from "react-hot-toast";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Provider store={store}>
            <div className="flex min-h-screen w-screen flex-col bg-gray-50">
                <Navbar />
                <main>{children}</main>
            </div>
            <Toaster/>
        </Provider>
        </body>
        </html>
    );
}
