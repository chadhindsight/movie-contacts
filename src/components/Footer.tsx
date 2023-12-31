import React from 'react';

const Footer = () => {
    const currYear = new Date().getFullYear();

    return (

        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currYear} <a href="https://chadhindsight.github.io" className="hover:underline">Chadhindsight™</a>. All Rights Reserved.
            </span>
        </footer>

    );
};

export default Footer;