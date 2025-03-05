"use client";

import { Card } from "@/components/ui/card";
import {
  Bell,
  Shield,
  Award,
  Zap,
  MapPin,
  Search,
  Cpu,
  Blocks,
  Network,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Bell className="h-8 w-8" />,
    techIcon: <Network className="h-6 w-6" />,
    title: "Alert Signs",
    description:
      "Virtual notifications to nearby users increase the chances of finding your lost items.",
    color: "from-violet-600 to-indigo-400",
    glowColor: "group-hover:shadow-violet-500/50",
    bgGlow: "group-hover:before:bg-violet-500/10",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    techIcon: <Cpu className="h-6 w-6" />,
    title: "AI Matching",
    description:
      "Advanced algorithms ensure accurate and faster item identification and matching.",
    color: "from-cyan-500 to-blue-400",
    glowColor: "group-hover:shadow-cyan-500/50",
    bgGlow: "group-hover:before:bg-cyan-500/10",
  },
  {
    icon: <Award className="h-8 w-8" />,
    techIcon: <Blocks className="h-6 w-6" />,
    title: "Bounty System",
    description:
      "Motivate active participation in the community with secure, blockchain-based rewards.",
    color: "from-amber-500 to-orange-400",
    glowColor: "group-hover:shadow-amber-500/50",
    bgGlow: "group-hover:before:bg-amber-500/10",
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    techIcon: <Network className="h-6 w-6" />,
    title: "Geo-fencing",
    description:
      "Location-based alerts notify users when they're near a reported lost or found item.",
    color: "from-green-500 to-emerald-400",
    glowColor: "group-hover:shadow-green-500/50",
    bgGlow: "group-hover:before:bg-green-500/10",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    techIcon: <Blocks className="h-6 w-6" />,
    title: "Secure Transactions",
    description:
      "Blockchain-based wallet integration ensures transparent and secure bounty payments.",
    color: "from-rose-500 to-pink-400",
    glowColor: "group-hover:shadow-rose-500/50",
    bgGlow: "group-hover:before:bg-rose-500/10",
  },
  {
    icon: <Search className="h-8 w-8" />,
    techIcon: <Cpu className="h-6 w-6" />,
    title: "Smart Search",
    description:
      "Find items even with vague descriptions using our advanced search capabilities.",
    color: "from-purple-500 to-fuchsia-400",
    glowColor: "group-hover:shadow-purple-500/50",
    bgGlow: "group-hover:before:bg-purple-500/10",
  },
];

const FeatureCard = ({ feature }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <motion.div
        className={cn(
          "relative h-full rounded-2xl border border-white/10",
          "before:absolute before:inset-0 before:rounded-2xl before:transition-colors before:duration-500",
          feature.bgGlow
        )}
        animate={{
          rotateX: isHovered ? 10 : 0,
          rotateY: isHovered ? 10 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      >
        <Card className="relative h-full overflow-hidden border-0 bg-black/40 backdrop-blur-xl">
          {/* Animated gradient background */}
          <div
            className={cn(
              "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
              "bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))]",
              feature.color
            )}
            style={{ opacity: 0.1 }}
          />

          <div className="relative p-6">
            {/* Tech icon with floating animation */}
            <motion.div
              className="absolute top-4 right-4 text-white/20"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {feature.techIcon}
            </motion.div>

            {/* Main icon with glow effect */}
            <div className="relative mb-6">
              <div
                className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center",
                  "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br",
                  feature.color
                )}
              >
                <div className="relative text-white z-10">{feature.icon}</div>
                <motion.div
                  className="absolute inset-0 bg-white/30 rounded-2xl"
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
                  "absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl",
                  feature.color
                )}
              />
            </div>

            {/* Text content with hover effects */}
            <motion.h3
              className="text-xl font-semibold text-white mb-3"
              animate={{ x: isHovered ? 10 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {feature.title}
            </motion.h3>
            <motion.p
              className="text-white/60"
              animate={{ x: isHovered ? 10 : 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {feature.description}
            </motion.p>

            {/* Animated border line */}
            <motion.div
              className={cn(
                "absolute bottom-0 left-0 h-1 bg-gradient-to-r",
                feature.color
              )}
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default function Features() {
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-grid-white/5 bg-grid animate-grid-fade" />

        {/* Cyber circuit lines */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.5, 0],
                transition: {
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 2,
                },
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
              Key Features
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-white/60 max-w-2xl mx-auto"
          >
            Innovative solutions that make Reclaim the future of lost and found
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
