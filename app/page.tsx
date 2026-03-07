"use client";

import { FloatingCard } from '@/components/antigravity/FloatingCard';
import { GlowingOrb } from '@/components/antigravity/GlowingOrb';
import { motion } from 'framer-motion';
import { BookOpen, Target, Users, TrendingUp, Heart, Award } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const programs = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Economics Education",
      description: "Free workshops teaching fundamental economic principles and financial literacy to students in low-income communities.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "College Prep",
      description: "SAT/ACT tutoring, college application guidance, and scholarship assistance to help students achieve their dreams.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentorship Program",
      description: "One-on-one mentoring connecting students with professionals in business, economics, and finance fields.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { number: '500+', label: 'Students Served', icon: <Users /> },
    { number: '1,200+', label: 'Hours Taught', icon: <BookOpen /> },
    { number: '15+', label: 'Communities', icon: <Heart /> },
    { number: '95%', label: 'Success Rate', icon: <Award /> },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Glowing Orbs Background */}
      <GlowingOrb color="blue" size={400} initialX={10} initialY={20} />
      <GlowingOrb color="orange" size={350} initialX={85} initialY={60} />
      <GlowingOrb color="cyan" size={300} initialX={50} initialY={80} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-7xl md:text-9xl font-bold mb-6">
                <span className="font-[var(--font-syne)] bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  BRIDGE
                </span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-600 mb-4 font-medium"
            >
              Build Resilience in Development, Growth, and Education
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto"
            >
              Empowering students through free educational programs in economics and financial literacy. 
              Breaking barriers, one student at a time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/get-involved">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-2xl transition-all"
                >
                  Get Involved Today
                </motion.button>
              </Link>
              <Link href="/programs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-500 font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all border-2 border-primary-500"
                >
                  Explore Programs
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section className="relative py-24 px-6 bg-white/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 font-[var(--font-syne)]">
              Our <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to empower students with knowledge, 
              skills, and confidence for a brighter future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-6 text-primary-500 font-semibold flex items-center gap-2"
                >
                  Learn More →
                </motion.button>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 font-[var(--font-syne)]">
              Our <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-xl text-gray-600">
              Making a real difference in communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <FloatingCard key={index} delay={0.7 + index * 0.1} className="text-center">
                <div className="flex justify-center mb-4 text-primary-500">
                  {stat.icon}
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-5xl font-bold gradient-text mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-primary-500 to-accent-500">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-[var(--font-syne)]">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join us in empowering the next generation. Whether you volunteer, 
              donate, or spread the word – every action counts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-500 font-semibold rounded-full text-lg shadow-2xl"
                >
                  Volunteer With Us
                </motion.button>
              </Link>
              <Link href="/donate">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent text-white font-semibold rounded-full text-lg border-2 border-white hover:bg-white/10 transition-all"
                >
                  Support Our Mission
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
