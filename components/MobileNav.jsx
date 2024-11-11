// "use client";

// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';
// import { CiMenuFries } from 'react-icons/ci'; // Ensure this import is correct

// const links = [
//     { name: "home", path: "/" },
//     { name: "services", path: "/services" },
//     { name: "resume", path: "/resume" },
//     { name: "work", path: "/work" },
//     { name: "contact", path: "/contact" },
// ];

// const MobileNav = () => {
//     const pathname = usePathname();
//     return (
//         <Sheet>
//             <SheetTrigger className="flex items-center p-2">
//                 <CiMenuFries className="text-2xl" />
//             </SheetTrigger>
//             <SheetContent className="flex flex-col items-center space-y-4 mt-4">
//                 <Link href="/">
//                     <img src="/logo.svg" alt="Logo" className="h-10" />
//                 </Link>
//                 {links.map((link) => (
//                     <Link key={link.name} href={link.path}>
//                         <a className={`text-xl ${pathname === link.path ? 'text-green-500' : 'text-white'}`}>
//                             {link.name}
//                         </a>
//                     </Link>
//                 ))}
//             </SheetContent>
//         </Sheet>
//     );
// };

// export default MobileNav;
"use client";

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci'; // Ensure this import is correct
import Image from "next/image";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex items-center p-2">
                <CiMenuFries className="text-2xl" />
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col items-center space-y-4 mt-4 bg-gray-800 text-white w-64 h-full p-4">
                <Link href="/" legacyBehavior>
                    <a onClick={handleLinkClick}>
                        <Image src="/logo.svg" alt="Logo" width={100} height={40} className="mb-4" />
                    </a>
                </Link>
                {links.map((link) => (
                    <Link key={link.name} href={link.path} legacyBehavior>
                        <a onClick={handleLinkClick} className={`text-xl transition-all duration-200 ${pathname === link.path ? 'text-green-500' : 'text-white'} hover:text-2xl hover:shadow-lg hover:shadow-white`}>
                            {link.name}
                        </a>
                    </Link>
                ))}
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
