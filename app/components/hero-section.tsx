"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

const DecryptEffect = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [decryptedText, setDecryptedText] = useState("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    const decrypt = () => {
      interval = setInterval(() => {
        setDecryptedText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    decrypt();

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{decryptedText}</span>;
};

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-sm" />
      </div>

      {/* Floating Elements with adjusted opacity */}
      <motion.div
        className="absolute top-20 right-[20%] w-16 h-16"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Search className="w-full h-full text-white/30" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-[15%] w-12 h-12"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Shield className="w-full h-full text-white/20" />
      </motion.div>

      <motion.div
        className="absolute top-40 left-[25%] w-8 h-8"
        animate={{
          y: [0, -15, 0],
          x: [0, 15, 0],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-full h-full text-white/25" />
      </motion.div>

      {/* Centered Content */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                <Badge
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 px-4 py-2 text-base backdrop-blur-md"
                >
                  🔗 Blockchain-Powered
                </Badge>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none"
              >
                <DecryptEffect
                  text="Lost Something?"
                  className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 block"
                />
                <span className="block mt-2">
                  <DecryptEffect
                    text="Reclaim It Back"
                    className="text-white"
                  />
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="max-w-[600px] text-white/80 text-lg md:text-xl leading-relaxed mx-auto"
              >
                A personalized, efficient, and community-driven platform that
                uses AI and blockchain to help you find your lost belongings
                with unprecedented security and reliability.
              </motion.p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Link href="/dashboard">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="gap-2 text-lg px-8 rounded-full bg-white text-black hover:bg-white/90"
                  >
                    Get Started <ArrowRight className="h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/how-it-works">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 rounded-full border-2 border-white text-white hover:bg-white/10"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
