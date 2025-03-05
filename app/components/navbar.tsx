"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Transform values for width and padding
  const width = useTransform(scrollY, [0, 100], ["100vw", "60%"]);
  const padding = useTransform(scrollY, [0, 100], ["0px", "16px"]);
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  useEffect(() => {
    const updateScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/report-lost", label: "Report Lost" },
    { href: "/report-found", label: "Report Found" },
    { href: "/how-it-works", label: "How It Works" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center z-50 ${
        isScrolled ? "text-primary-foreground" : "text-white"
      }`}
    >
      <motion.nav
        style={{
          width,
          background,
          padding,
        }}
        className={`
          flex items-center justify-between
          h-16 transition-all duration-300 ease-in-out backdrop-blur-sm
          ${isScrolled ? "rounded-full mt-4 px-8" : "px-8 md:px-16"}
          relative
        `}
      >
        {/* Logo */}
        <Link href="/" className="pl-4 text-xl font-bold">
          <span className="text-primary">Reclaim</span>
        </Link>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex gap-6`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Register/Login Button */}
        <div className="hidden md:block">
          <Link href="/login">
            <Button
              variant={isScrolled ? "default" : "secondary"}
              className="transition-colors rounded-full"
            >
              Connect Wallet
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`
            absolute top-full right-0 mt-2 w-48 py-2 bg-background rounded-lg shadow-lg
            transform transition-all duration-300 origin-top-right
            md:hidden
            ${
              isMobileMenuOpen
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0 pointer-events-none"
            }
          `}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <hr className="my-2 border-border" />
          <Link
            href="/login"
            className="block px-4 py-2 hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign In
          </Link>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
