import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Shield, Sparkles, Zap } from "lucide-react";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import StatsSection from "./components/stats-section";
import CTASection from "./components/cta-section";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section */}
        <StatsSection />

        {/* How It Works */}
        <HowItWorks />

        {/* Features */}
        <Features />

        {/* Testimonials */}
        <Testimonials />

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  );
}
