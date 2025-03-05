"use client";

import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const stats = [
  {
    value: "95%",
    label: "Recovery Rate",
    icon: "⚡",
    color: "from-blue-500 to-cyan-400",
  },
  {
    value: "10K+",
    label: "Active Users",
    icon: "👥",
    color: "from-purple-500 to-pink-500",
  },
  {
    value: "5K+",
    label: "Items Returned",
    icon: "🎯",
    color: "from-green-500 to-emerald-400",
  },
  {
    value: "$50K+",
    label: "Bounties Paid",
    icon: "💎",
    color: "from-yellow-500 to-orange-500",
  },
];

const CountingNumber = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));

  return (
    <span ref={ref} className="tabular-nums">
      {isInView ? (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <motion.span
            initial={{ counter: 0 }}
            animate={{ counter: numericValue }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {value}
          </motion.span>
        </motion.span>
      ) : (
        "0"
      )}
    </span>
  );
};

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 overflow-hidden bg-black"
    >
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid animate-grid-fade" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="container relative px-4 md:px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative group overflow-hidden bg-black/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500">
                {/* Gradient Orb */}
                <div
                  className={`absolute -right-10 -top-10 w-20 h-20 rounded-full bg-gradient-to-br ${stat.color} blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                />

                <div className="relative p-6 md:p-8">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color}">
                    <CountingNumber value={stat.value} />
                  </div>
                  <div className="mt-2 text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>

                  {/* Hover effect line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color}"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
