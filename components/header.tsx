// "use client"

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { ModeToggle } from "@/components/mode-toggle"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Menu, Search, MapPin, User } from "lucide-react"
// import { useState } from "react"
// import { usePathname } from "next/navigation"
// import { cn } from "@/lib/utils"

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false)
//   const pathname = usePathname()

//   const routes = [
//     { href: "/", label: "Home" },
//     { href: "/dashboard", label: "Dashboard" },
//     { href: "/report-lost", label: "Report Lost" },
//     { href: "/report-found", label: "Report Found" },
//     { href: "/how-it-works", label: "How It Works" },
//   ]

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center justify-between">
//         <div className="flex items-center gap-2">
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild>
//               <Button variant="outline" size="icon" className="md:hidden">
//                 <Menu className="h-5 w-5" />
//                 <span className="sr-only">Toggle menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left">
//               <div className="flex flex-col gap-4 mt-8">
//                 {routes.map((route) => (
//                   <Link
//                     key={route.href}
//                     href={route.href}
//                     onClick={() => setIsOpen(false)}
//                     className={cn(
//                       "text-lg font-medium transition-colors hover:text-primary",
//                       pathname === route.href ? "text-primary" : "text-muted-foreground",
//                     )}
//                   >
//                     {route.label}
//                   </Link>
//                 ))}
//               </div>
//             </SheetContent>
//           </Sheet>
//           <Link href="/" className="flex items-center gap-2">
//             <MapPin className="h-6 w-6 text-primary" />
//             <span className="font-bold text-xl">Reclaim</span>
//           </Link>
//         </div>
//         <nav className="hidden md:flex items-center gap-6">
//           {routes.map((route) => (
//             <Link
//               key={route.href}
//               href={route.href}
//               className={cn(
//                 "text-sm font-medium transition-colors hover:text-primary",
//                 pathname === route.href ? "text-primary" : "text-muted-foreground",
//               )}
//             >
//               {route.label}
//             </Link>
//           ))}
//         </nav>
//         <div className="flex items-center gap-2">
//           <Link href="/search">
//             <Button variant="ghost" size="icon">
//               <Search className="h-5 w-5" />
//               <span className="sr-only">Search</span>
//             </Button>
//           </Link>
//           <Link href="/profile">
//             <Button variant="ghost" size="icon">
//               <User className="h-5 w-5" />
//               <span className="sr-only">Profile</span>
//             </Button>
//           </Link>
//           <ModeToggle />
//           <Link href="/connect-wallet" className="hidden md:block">
//             <Button>Connect Wallet</Button>
//           </Link>
//         </div>
//       </div>
//     </header>
//   )
// }
