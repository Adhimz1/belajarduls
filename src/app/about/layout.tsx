import React from 'react';

export default function AboutLayout ({children} : {children: React.ReactNode}){
    return (
        <>
        <nav className="fixed right-0 top-12 z-10 h-screen w-60 bg-purple-500">
            <ul className="text-white p-5" >
                <li>Home</li>
                <li>About</li>
                <li>Profile</li>
            </ul>
        </nav>
        <div>{children}</div>
        </>
    );
}