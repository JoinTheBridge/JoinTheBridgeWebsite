"use client";

import { FloatingCard } from '@/components/antigravity/FloatingCard';
import { motion } from 'framer-motion';
import { Users, Heart, Briefcase, Share2, DollarSign, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function GetInvolvedPage() {
  const opportunities = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "Volunteer Tutor",
      description: "Share your knowledge in economics, finance, or related subjects. Commit to just 2 hours per week.",
      commitment: "2-4 hours/week",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Mentor a Student",
      description: "Guide students through college applications, career planning, and professional development.",
      commitment: "1 hour/week",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Guest Speaker",
      description: "Share your professional experience and inspire the next generation with your journey.",
      commitment: "One-time or recurring",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Share2 className="w-10 h-10" />,
      title: "Social Media Ambassador",
      description: "Help spread the word about BRIDGE and our impact on social media platforms.",
      commitment: "Flexible",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Fundraising Committee",
      description: "Help organize events and campaigns to raise funds for program expansion.",
      commitment: "5-10 hours/month",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Operations Support",
      description: "Assist with administration, logistics, communications, and program coordination.",
      commitment: "Flexible",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="relative pt-32 pb-20">
      {/* Header */}
      <section className="px-6 mb-20">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 font-[var(--font-syne)]">
              Get <span className="gradient-text">Involved</span>
            </h1>
            <p className="text-xl text-gray-600">
              Join our mission to empower students through education. There are many ways to make a difference!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="px-6 mb-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opp, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <div className={`w-16 h-16 bg-gradient-to-br ${opp.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {opp.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {opp.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {opp.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <span className="font-medium">Time Commitment:</span>
                  <span>{opp.commitment}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Apply Now
                </motion.button>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="px-6 mb-20 bg-gray-50 py-20">
        <div className="container mx-auto max-w-5xl">
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
              Getting started is quick and easy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Choose Role", desc: "Select the volunteer opportunity that fits your skills and schedule" },
              { step: "2", title: "Fill Form", desc: "Complete our quick online application (takes 5 minutes)" },
              { step: "3", title: "Interview", desc: "Brief conversation to learn more and answer your questions" },
              { step: "4", title: "Start Helping", desc: "Get onboarded, trained, and begin making an impact!" },
            ].map((item, index) => (
              <FloatingCard key={index} delay={index * 0.1} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[var(--font-syne)]">
              Volunteer <span className="gradient-text">Stories</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Tutor, 2 years",
                quote: "Volunteering with BRIDGE has been incredibly rewarding. Seeing students light up when they understand a concept makes every session worthwhile.",
              },
              {
                name: "Priya Patel",
                role: "Mentor, 1 year",
                quote: "I love being able to give back and help students navigate challenges I once faced. It's amazing to watch them grow and succeed.",
              },
            ].map((testimonial, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6">
        <div className="container mx-auto max-w-4xl">
          <FloatingCard className="text-center bg-gradient-to-br from-primary-500 to-accent-500 text-white border-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join our community of passionate volunteers today
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary-500 font-semibold rounded-full text-lg shadow-lg"
            >
              Start Your Application
            </motion.button>
            <p className="mt-6 text-sm text-white/80">
              Questions? Email us at volunteer@bridge-nonprofit.org
            </p>
          </FloatingCard>
        </div>
      </section>
    </div>
  );
}
