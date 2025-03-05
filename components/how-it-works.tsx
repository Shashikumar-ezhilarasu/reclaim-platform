"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search, Upload, Sparkles, Bell } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Report Lost Items",
      description:
        "Provide details about your lost item including name, image, last known location, and optional bounty.",
    },
    {
      icon: <Upload className="h-10 w-10 text-primary" />,
      title: "Report Found Items",
      description:
        "Upload details and location of items you've found to help owners reclaim their belongings.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "AI-Powered Matching",
      description:
        "Our AI matches lost items with found reports using image recognition and text analysis.",
    },
    {
      icon: <Bell className="h-10 w-10 text-primary" />,
      title: "Personalized Alerts",
      description:
        "Receive geo-fencing alerts and notifications when matches are found for your items.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section className="w-full py-12 md:py-24 relative overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      <motion.div
        className="container px-4 md:px-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2 relative">
            <div className="absolute -inset-x-20 -inset-y-32 mx-auto w-96 h-32 bg-primary/30 rounded-full blur-3xl" />
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-600">
              How It Works
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Reclaim transforms lost-and-found into a rewarding community
              effort.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={cardVariants} whileHover="hover">
              <Card className="relative bg-black/40 backdrop-blur-xl border-primary/20 hover:border-primary/40 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-lg" />
                <CardHeader className="pb-2 relative">
                  <motion.div
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    <div className="relative">
                      {step.icon}
                      <div className="absolute inset-0 rounded-full blur-sm bg-primary/30 group-hover:bg-primary/50 transition-colors" />
                    </div>
                  </motion.div>
                  <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-white/70">
                    {step.description}
                  </CardDescription>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
