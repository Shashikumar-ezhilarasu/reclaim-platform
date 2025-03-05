"use client";

import { Card } from "@/components/ui/card";
import {
  Search,
  Upload,
  Sparkles,
  Bell,
  Shield,
  ArrowRight,
  Cpu,
  Zap,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: <Search className="h-8 w-8" />,
    secondaryIcon: <Cpu className="h-6 w-6" />,
    title: "Report Lost Items",
    description:
      "Provide details about your lost item including name, image, last known location, and optional bounty.",
    color: "from-blue-500 to-cyan-400",
    glowColor: "group-hover:shadow-blue-500/50",
    bgGlow: "group-hover:before:bg-blue-500/10",
    delay: 0.2,
  },
  {
    icon: <Upload className="h-8 w-8" />,
    secondaryIcon: <Zap className="h-6 w-6" />,
    title: "Report Found Items",
    description:
      "Upload details and location of items you've found to help owners reclaim their belongings.",
    color: "from-purple-500 to-pink-500",
    glowColor: "group-hover:shadow-purple-500/50",
    bgGlow: "group-hover:before:bg-purple-500/10",
    delay: 0.4,
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    secondaryIcon: <Cpu className="h-6 w-6" />,
    title: "AI-Powered Matching",
    description:
      "Our AI matches lost items with found reports using image recognition and text analysis.",
    color: "from-green-500 to-emerald-400",
    glowColor: "group-hover:shadow-green-500/50",
    bgGlow: "group-hover:before:bg-green-500/10",
    delay: 0.6,
  },
  {
    icon: <Bell className="h-8 w-8" />,
    secondaryIcon: <Zap className="h-6 w-6" />,
    title: "Personalized Alerts",
    description:
      "Receive geo-fencing alerts and notifications when matches are found for your items.",
    color: "from-yellow-500 to-orange-500",
    glowColor: "group-hover:shadow-yellow-500/50",
    bgGlow: "group-hover:before:bg-yellow-500/10",
    delay: 0.8,
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Secure Transactions",
    description:
      "Blockchain-based wallet integration ensures secure bounty payments between owners and finders.",
    color: "from-red-500 to-rose-400",
    glowColor: "group-hover:shadow-red-500/50",
    delay: 1,
  },
];

const FloatingCard = ({ step, index }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: step.delay }}
      viewport={{ once: true }}
      className="group perspective"
    >
      <motion.div
        className={cn(
          "relative h-full rounded-xl border border-white/10",
          "before:absolute before:inset-0 before:rounded-xl before:transition-colors before:duration-500",
          step.bgGlow
        )}
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? 5 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <Card className="relative h-full overflow-hidden border-0 bg-black/40 backdrop-blur-xl">
          {/* Animated gradient background */}
          <div
            className={cn(
              "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
              "bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))]",
              step.color
            )}
            style={{ opacity: 0.1 }}
          />

          {/* Content */}
          <div className="relative p-6 z-10">
            {/* Floating secondary icon */}
            <motion.div
              className="absolute top-4 right-4 text-white/20"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {step.secondaryIcon}
            </motion.div>

            {/* Main icon with glow effect */}
            <div className="relative mb-6">
              <div
                className={cn(
                  "w-16 h-16 rounded-xl flex items-center justify-center",
                  "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br",
                  step.color
                )}
              >
                <div className="relative text-white z-10">{step.icon}</div>
                <motion.div
                  className="absolute inset-0 bg-white/30 rounded-xl"
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <motion.div
                className={cn(
                  "absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl",
                  step.color
                )}
              />
            </div>

            {/* Text content with hover effects */}
            <motion.h3
              className="text-xl font-semibold text-white mb-3"
              animate={{
                x: isHovered ? 10 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              {step.title}
            </motion.h3>
            <motion.p
              className="text-white/60"
              animate={{
                x: isHovered ? 10 : 0,
              }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {step.description}
            </motion.p>

            {/* Animated border line */}
            <motion.div
              className={cn(
                "absolute bottom-0 left-0 h-1 bg-gradient-to-r",
                step.color
              )}
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: step.delay }}
            />
          </div>

          {/* Corner accent */}
          <div
            className={cn(
              "absolute -top-2 -right-2 w-16 h-16 rotate-45 bg-gradient-to-br opacity-50",
              step.color
            )}
          />
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 md:py-32 overflow-hidden bg-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-grid-white/5 bg-grid animate-grid-fade" />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              animate={{
                y: [0, -1000],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: "100%",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="container relative px-4 md:px-6"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold inline-block"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
              How It Works
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-white/60 max-w-2xl mx-auto"
          >
            Experience the future of lost-and-found with our innovative
            technology
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 relative">
          {steps.map((step, index) => (
            <FloatingCard key={index} step={step} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
