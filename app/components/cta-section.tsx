"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Search, Shield, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-grid-white/5 bg-grid animate-grid-fade" />

        {/* Animated circuit lines */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
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

        {/* Floating icons */}
        <div className="absolute inset-0 overflow-hidden">
          {[Shield, Search, Zap, Sparkles].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute text-primary/20"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                y: [0, -50, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
              style={{
                left: `${20 + index * 20}%`,
                top: `${50 + (index % 2) * 20}%`,
              }}
            >
              <Icon size={40} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container relative px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-8 text-center"
        >
          <div className="space-y-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="px-4 py-1.5 text-sm rounded-full border border-primary/20 bg-primary/10 text-primary backdrop-blur-sm">
                Join the Future of Lost & Found
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-6xl font-bold tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
                Ready to Reclaim Your Belongings?
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-white/60 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Join our community and experience the future of lost and found.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/report-lost">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="relative group px-8 bg-primary hover:bg-primary/90"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Report Lost Item
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </Button>
              </motion.div>
            </Link>
            <Link href="/report-found">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 border-2 border-primary/20 text-white hover:bg-primary/10 backdrop-blur-sm"
                >
                  <span className="flex items-center gap-2">
                    Report Found Item
                    <Sparkles className="h-4 w-4" />
                  </span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
