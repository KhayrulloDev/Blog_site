// import Link from "next/link";
// import { Button } from "./ui/button";
// import Nav from "./Nav";
// import MobileNav from "./MobileNav";

// const Header = () => {
//     return (
//         <header className="py-8 xl:py-12 text-white">
//             <div className="container mx-auto flex justify-between items-center">
//                 {/* Logo */}
//                 <Link href="/">
//                     <h1 className="text-4xl font-semibold">
//                         <img src="/logo.svg" alt=""/>
//                     </h1>
//                 </Link>

//                 {/* Desktop nav */}
//                 <div className="hidden xl:flex items-center gap-8 justify-end">
//                     <Nav />
//                     <Link href="/contact">
//                         <Button style={{ background: "green" }}>Hire me</Button>
//                     </Link>
//                 </div>

//                 {/* Mobile nav */}
//                 <div className="xl:hidden flex items-center">
//                     <MobileNav />
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;


import Link from "next/link";
import Image from "next/image"; // Import Image from next/image
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        <Image src="/logo.svg" alt="Logo" width={40} height={40} /> {/* Use Image component */}
                    </h1>
                </Link>

                {/* Desktop nav */}
                <div className="items-center gap-8 container mx-auto flex justify-end">
                    <Nav />
                    <Link href="/contact">
                        <Button style={{
                            background: "green",
                        }}>Hire me</Button>
                    </Link>
                </div>

                {/* Mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;

