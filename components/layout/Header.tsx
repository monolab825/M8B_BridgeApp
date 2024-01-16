'use client';
import Image from "next/image";
import Link from 'next/link';

import Logo from "@/public/logo.svg";

const LogoPart = () => {
	return (
		<div className="mt-3">
			<Link href="/">
				<Image src={Logo} alt="logo"></Image>
			</Link>
		</div>
	)
}

const NavButtons = () => {
	return (
		<div className="mt-3">
			<button type="button" className="bg-transparent text-gray-50 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">History</button>
			<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Connect Wallet</button>
		</div>
	)
}

const Navbar = () => {
  return (
    <div className="lg:flex md:flex sm:flex justify-between px-8 py-4 md:px-6 xl:px-12">
			<LogoPart></LogoPart>
			<NavButtons></NavButtons>
    </div>
  );
};

export default Navbar;
