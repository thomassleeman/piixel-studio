"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Bot,
  FileText,
  Calendar,
  LayoutDashboard,
  ShoppingCart,
  ArrowRight,
  Plus,
  Globe,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const modules = [
  {
    name: "Member Portal",
    price: "£25/mo",
    icon: Users,
    color: "bg-blue-100 text-blue-600",
    position: "top-0 left-0",
  },
  {
    name: "AI Assistant",
    price: "£35/mo",
    icon: Bot,
    color: "bg-purple-100 text-purple-600",
    position: "top-0 right-0",
  },
  {
    name: "Smart Forms",
    price: "£20/mo",
    icon: FileText,
    color: "bg-green-100 text-green-600",
    position: "bottom-0 left-0",
  },
  {
    name: "Booking System",
    price: "£40/mo",
    icon: Calendar,
    color: "bg-orange-100 text-orange-600",
    position: "top-1/2 -translate-y-1/2 right-0",
  },
  {
    name: "Client Dashboard",
    price: "£60/mo",
    icon: LayoutDashboard,
    color: "bg-pink-100 text-pink-600",
    position: "bottom-0 right-0",
  },
  {
    name: "eCommerce",
    price: "£50/mo",
    icon: ShoppingCart,
    color: "bg-cyan-100 text-cyan-600",
    position: "top-1/2 -translate-y-1/2 left-0",
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const leftCopyVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const, // easeOut cubic bezier
    },
  },
};

const baseCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: [0.4, 0, 0.2, 1] as const, // easeOut cubic bezier
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

const globePulseVariants: Variants = {
  pulse: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: [0.4, 0, 0.6, 1] as const, // easeInOut cubic bezier
    },
  },
};

const lineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.3,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: [0.4, 0, 0.2, 1] as const, // easeOut cubic bezier
    },
  },
};

const moduleCardVariants = {
  hidden: (custom: { x: number; y: number }) => ({
    opacity: 0,
    scale: 0.8,
    x: -custom.x,
    y: -custom.y,
  }),
  visible: (custom: { x: number; y: number; index: number }) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.6 + custom.index * 0.1,
      ease: [0.4, 0, 0.2, 1] as const, // easeOut cubic bezier
    },
  }),
};

const moduleFloatVariants = {
  float: (index: number) => ({
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: [0.4, 0, 0.6, 1] as const, // easeInOut cubic bezier
      delay: index * 0.2,
    },
  }),
};

const moduleHoverVariants = {
  hover: {
    scale: 1.1,
    y: -5,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Calculate module positions for different screen sizes
  const getModulePosition = (
    index: number,
    screenSize: "mobile" | "tablet" | "desktop"
  ) => {
    const angle = (index / modules.length) * 2 * Math.PI - Math.PI / 2;
    const radius =
      screenSize === "mobile" ? 120 : screenSize === "tablet" ? 160 : 200;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column: Copy */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            variants={leftCopyVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                From £45/month
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Build Your Website.{" "}
                <span className="text-primary">Add What You Need.</span>{" "}
                <span className="text-muted-foreground">When You Need It.</span>
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl mx-auto lg:mx-0 max-w-xl">
                Subscribe to a professional website for{" "}
                <strong className="text-foreground">£45/month</strong>. Add
                booking systems, member portals, AI chatbots, and more — only
                pay for what you need.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("pricing")}
                className="text-base group"
              >
                See Pricing
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("how-it-works")}
                className="text-base"
              >
                How It Works
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Modular Visualization */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            {/* Base Website - Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                {/* Connection lines - hidden on small screens */}
                <div className="absolute inset-0 hidden md:block">
                  {modules.map((module, index) => {
                    const desktopPos = getModulePosition(index, "desktop");

                    return (
                      <svg
                        key={index}
                        className="absolute top-0 left-0 w-full h-full pointer-events-none"
                        style={{ overflow: "visible" }}
                      >
                        <motion.line
                          x1="0"
                          y1="0"
                          x2={desktopPos.x}
                          y2={desktopPos.y}
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          className="text-border"
                          variants={lineVariants}
                          initial="hidden"
                          animate="visible"
                        />
                      </svg>
                    );
                  })}
                </div>

                {/* Base Card */}
                <motion.div
                  className="bg-card border-4 border-primary rounded-2xl shadow-2xl p-4 sm:p-6 w-32 h-32 sm:w-40 sm:h-40 flex flex-col items-center justify-center"
                  variants={baseCardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <motion.div
                    className="bg-primary/10 rounded-full p-2 sm:p-3 mb-2"
                    variants={globePulseVariants}
                    animate="pulse"
                  >
                    <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xs sm:text-sm font-bold text-center mb-1">
                    Base Website
                  </h3>
                  <Badge className="text-xs px-2 py-0.5">£45/mo</Badge>
                </motion.div>
              </div>
            </div>

            {/* Module Cards - Orbiting around base with responsive radius */}
            {modules.map((module, index) => {
              const Icon = module.icon;
              const mobilePos = getModulePosition(index, "mobile");
              const tabletPos = getModulePosition(index, "tablet");
              const desktopPos = getModulePosition(index, "desktop");

              return (
                <div
                  key={module.name}
                  className="absolute top-1/2 left-1/2"
                >
                  {/* Mobile positioning */}
                  <motion.div
                    className="sm:hidden"
                    style={{
                      transform: `translate(calc(-50% + ${mobilePos.x}px), calc(-50% + ${mobilePos.y}px))`,
                    }}
                    custom={{ x: mobilePos.x, y: mobilePos.y, index }}
                    variants={moduleCardVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div
                      className="bg-card border-2 border-border rounded-xl shadow-lg p-2 w-24 hover:shadow-xl transition-shadow"
                      custom={index}
                      variants={moduleFloatVariants}
                      animate="float"
                      whileHover={moduleHoverVariants.hover}
                    >
                      <div
                        className={`${module.color} rounded-lg p-1.5 mb-1 inline-flex`}
                      >
                        <Icon className="h-3 w-3" />
                      </div>
                      <h4 className="font-semibold text-xs leading-tight mb-0.5">
                        {module.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {module.price}
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Tablet positioning */}
                  <motion.div
                    className="hidden sm:block lg:hidden"
                    style={{
                      transform: `translate(calc(-50% + ${tabletPos.x}px), calc(-50% + ${tabletPos.y}px))`,
                    }}
                    custom={{ x: tabletPos.x, y: tabletPos.y, index }}
                    variants={moduleCardVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div
                      className="bg-card border-2 border-border rounded-xl shadow-lg p-3 w-32 hover:shadow-xl transition-shadow"
                      custom={index}
                      variants={moduleFloatVariants}
                      animate="float"
                      whileHover={moduleHoverVariants.hover}
                    >
                      <div
                        className={`${module.color} rounded-lg p-2 mb-2 inline-flex`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <h4 className="font-semibold text-xs mb-1">
                        {module.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-1">
                        {module.price}
                      </p>
                      <Plus className="h-3 w-3 text-muted-foreground" />
                    </motion.div>
                  </motion.div>

                  {/* Desktop positioning */}
                  <motion.div
                    className="hidden lg:block"
                    style={{
                      transform: `translate(calc(-50% + ${desktopPos.x}px), calc(-50% + ${desktopPos.y}px))`,
                    }}
                    custom={{ x: desktopPos.x, y: desktopPos.y, index }}
                    variants={moduleCardVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div
                      className="bg-card border-2 border-border rounded-xl shadow-lg p-4 w-40 hover:shadow-xl transition-shadow"
                      custom={index}
                      variants={moduleFloatVariants}
                      animate="float"
                      whileHover={moduleHoverVariants.hover}
                    >
                      <div
                        className={`${module.color} rounded-lg p-3 mb-3 inline-flex`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="font-semibold text-sm mb-1">
                        {module.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {module.price}
                      </p>
                      <Plus className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
