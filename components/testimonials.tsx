"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Star, Sparkles, CheckCircle } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "I lost my laptop at the airport and thought it was gone forever. Thanks to Reclaim, someone found it and I got it back within 24 hours!",
    name: "Sarah Johnson",
    role: "Marketing Manager",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    color: "from-blue-500 to-cyan-400",
    verified: true,
  },
  {
    quote:
      "The bounty system motivated me to return a lost wallet I found. It feels good to help others and get rewarded for honesty.",
    name: "Michael Chen",
    role: "College Student",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    color: "from-purple-500 to-pink-500",
    verified: true,
  },
  {
    quote:
      "As a frequent traveler, I've lost items before. Reclaim's geo-fencing alerts helped me recover my expensive headphones at a coffee shop.",
    name: "Emily Rodriguez",
    role: "Travel Blogger",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    color: "from-amber-500 to-orange-400",
    verified: true,
  },
];

const TestimonialCard = ({ testimonial, index }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        className="relative rounded-2xl"
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? 5 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      >
        <Card className="relative h-full overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl">
          {/* Animated gradient background */}
          <div
            className={cn(
              "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
              "bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))]",
              testimonial.color
            )}
            style={{ opacity: 0.1 }}
          />

          {/* Quote Icon */}
          <motion.div
            className="absolute -top-4 -right-4 text-white/10"
            animate={{
              rotate: isHovered ? [0, 15, 0] : 0,
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Quote size={80} />
          </motion.div>

          <div className="relative p-6 z-10">
            {/* Rating Stars with Animation */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                </motion.div>
              ))}
            </div>

            {/* Quote Text */}
            <motion.p
              className="text-white/80 text-lg mb-6 relative"
              animate={{ x: isHovered ? 10 : 0 }}
              transition={{ duration: 0.2 }}
            >
              "{testimonial.quote}"
            </motion.p>

            {/* User Info */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="h-12 w-12 border-2 border-white/10">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback className="bg-gradient-to-br from-white/10 to-white/5">
                    {testimonial.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {testimonial.verified && (
                  <motion.div
                    className="absolute -right-1 -bottom-1 bg-green-500 rounded-full p-0.5"
                    whileHover={{ scale: 1.2 }}
                  >
                    <CheckCircle className="h-4 w-4 text-white" />
                  </motion.div>
                )}
              </div>
              <div>
                <motion.p
                  className="font-semibold text-white flex items-center gap-2"
                  animate={{ x: isHovered ? 10 : 0 }}
                >
                  {testimonial.name}
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <Sparkles className="h-4 w-4 text-yellow-500" />
                    </motion.span>
                  )}
                </motion.p>
                <motion.p
                  className="text-sm text-white/60"
                  animate={{ x: isHovered ? 10 : 0 }}
                >
                  {testimonial.role}
                </motion.p>
              </div>
            </div>

            {/* Animated border line */}
            <motion.div
              className={cn(
                "absolute bottom-0 left-0 h-1 bg-gradient-to-r",
                testimonial.color
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

export default function Testimonials() {
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

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
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
              Success Stories
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-white/60 max-w-2xl mx-auto"
          >
            See how Reclaim has helped people recover their lost belongings
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
