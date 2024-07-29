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
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci'; // Ensure this import is correct
import Image from "next/image"; // Import Image from next/image

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="flex flex-col" />
                <div>
                    <Image src="/logo.svg" alt="Logo" width={40} height={40} /> {/* Use Image component */}
                </div>
            </SheetTrigger>
            <SheetContent>
                <nav>
                    {links.map((link) => (
                        <Link key={link.name} href={link.path} className="block p-4 text-lg">
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;