"use client";

import Link from "next/link";
import {
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ExternalLink,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "Github" },
];

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href}>
    <motion.span
      className="text-sm text-white/60 hover:text-primary relative group flex items-center gap-2"
      whileHover={{ x: 5 }}
    >
      {children}
      <motion.span
        className="absolute -bottom-px left-0 w-0 h-px bg-gradient-to-r from-primary/0 via-primary to-primary/0 group-hover:w-full"
        transition={{ duration: 0.3 }}
      />
    </motion.span>
  </Link>
);

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black border-t border-white/10">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/5 bg-grid animate-grid-fade" />

        {/* Floating tech icons */}
        {[Sparkles, Shield, Zap].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/5"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: index * 2,
            }}
            style={{
              left: `${20 + index * 30}%`,
              top: "20%",
            }}
          >
            <Icon size={40} />
          </motion.div>
        ))}
      </div>

      <div className="container relative px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="h-6 w-6 text-primary" />
              </motion.div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                Reclaim
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              A blockchain-based lost and found platform that helps you recover
              your lost items through AI and community collaboration.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-medium text-sm mb-4 text-white/80">Platform</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/dashboard">Dashboard</FooterLink>
              </li>
              <li>
                <FooterLink href="/report-lost">Report Lost Item</FooterLink>
              </li>
              <li>
                <FooterLink href="/report-found">Report Found Item</FooterLink>
              </li>
              <li>
                <FooterLink href="/search">Search Items</FooterLink>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-medium text-sm mb-4 text-white/80">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/how-it-works">How It Works</FooterLink>
              </li>
              <li>
                <FooterLink href="/faq">FAQ</FooterLink>
              </li>
              <li>
                <FooterLink href="/blog">Blog</FooterLink>
              </li>
              <li>
                <FooterLink href="/support">Support</FooterLink>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-medium text-sm mb-4 text-white/80">Legal</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/terms">Terms of Service</FooterLink>
              </li>
              <li>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
              </li>
              <li>
                <FooterLink href="/cookies">Cookie Policy</FooterLink>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Reclaim. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={social.href}
                  className="text-white/40 hover:text-primary transition-colors relative group"
                >
                  <social.icon className="h-5 w-5" />
                  <motion.div
                    className="absolute -inset-2 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 -z-10"
                    initial={false}
                    animate={{ scale: [0.95, 1.1, 0.95] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
