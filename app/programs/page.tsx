"use client";

import { FloatingCard } from '@/components/antigravity/FloatingCard';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Users, Lightbulb, Calendar, MapPin } from 'lucide-react';

export default function ProgramsPage() {
  const programs = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Economics Fundamentals",
      description: "Interactive workshops covering microeconomics, macroeconomics, and financial markets. Students learn through real-world examples and case studies.",
      schedule: "Every Saturday, 10 AM - 12 PM",
      location: "Community Center / Online",
      level: "Beginner to Intermediate",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Financial Literacy",
      description: "Practical skills in budgeting, saving, investing, and managing personal finances. Includes hands-on activities and financial planning tools.",
      schedule: "Bi-weekly Sundays, 2 PM - 4 PM",
      location: "Local Libraries / Online",
      level: "All Levels",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "College Prep Program",
      description: "Comprehensive support for college-bound students including SAT/ACT prep, essay writing, application guidance, and scholarship search.",
      schedule: "Flexible, Year-round",
      location: "One-on-One / Small Groups",
      level: "High School Students",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Entrepreneurship Workshop",
      description: "Learn to develop business ideas, create business plans, understand startup fundamentals, and pitch to potential investors.",
      schedule: "Monthly Intensive, 4-week program",
      location: "Innovation Hub / Online",
      level: "Intermediate to Advanced",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Mentorship Program",
      description: "Personalized one-on-one mentoring with professionals in business, finance, and economics. Build networks and gain career insights.",
      schedule: "Ongoing, Flexible",
      location: "Virtual / In-person",
      level: "All Levels",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Summer Intensive",
      description: "8-week immersive program combining all our offerings with special workshops, guest speakers, and hands-on projects.",
      schedule: "June - August",
      location: "University Campus",
      level: "All Levels (Application Required)",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="relative pt-32 pb-20">
      {/* Header */}
      <section className="px-6 mb-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 font-[var(--font-syne)]">
              Our <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Free, high-quality educational programs designed to empower students 
              with the knowledge and skills they need to succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="px-6 mb-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {program.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-4 h-4 text-primary-500" />
                    <span>{program.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    <span>{program.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <GraduationCap className="w-4 h-4 text-primary-500" />
                    <span>{program.level}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Apply Now
                </motion.button>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="px-6 bg-gray-50 py-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[var(--font-syne)]">
              How to <span className="gradient-text">Apply</span>
            </h2>
            <p className="text-lg text-gray-600">
              Getting started is easy and completely free
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              { step: "1", title: "Choose Your Program", desc: "Browse our programs and select the one that fits your goals" },
              { step: "2", title: "Fill Application", desc: "Complete our simple online application form (5 minutes)" },
              { step: "3", title: "Get Matched", desc: "We'll review your application and match you with the right program and mentor" },
              { step: "4", title: "Start Learning", desc: "Begin your journey with BRIDGE and unlock your potential" },
            ].map((item, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full text-lg shadow-lg"
            >
              Apply to Programs
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
