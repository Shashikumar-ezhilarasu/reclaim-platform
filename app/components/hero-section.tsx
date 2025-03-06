"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Shield, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { IMAGES } from "@/lib/constants";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Enhanced parallax effects
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "40%"]);
  const backgroundScale = useTransform(scrollY, [0, 1000], [1.2, 1.4]);
  const backgroundOpacity = useTransform(scrollY, [0, 300], [1, 0.5]);
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.3, 0.75]);

  // Floating icons parallax
  const icon1Y = useTransform(scrollY, [0, 1000], [0, 200]);
  const icon2Y = useTransform(scrollY, [0, 1000], [0, -150]);
  const icon3Y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Enhanced Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          y: backgroundY,
          scale: backgroundScale,
          opacity: backgroundOpacity,
        }}
      >
        <motion.div
          initial={{ scale: 1.3 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={IMAGES.HERO_BG}
            alt="Background"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </motion.div>
      </motion.div>

      {/* Enhanced overlay with dynamic opacity */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 backdrop-blur-[1px]"
        style={{ opacity: overlayOpacity }}
      />

      {/* Enhanced Floating Elements with independent parallax */}
      <motion.div
        className="absolute top-20 right-[20%] w-16 h-16"
        style={{ y: icon1Y }}
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
        style={{ y: icon2Y }}
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
        style={{ y: icon3Y }}
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

      {/* Fixed Content */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-10">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 px-4 py-2 text-base backdrop-blur-md"
                >
                  🔗 Blockchain-Powered
                </Badge>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none relative"
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

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2 backdrop-blur-sm">
          <motion.div
            className="w-1 h-1 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
