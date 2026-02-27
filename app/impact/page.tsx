"use client";

import { FloatingCard } from '@/components/antigravity/FloatingCard';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, TrendingUp, MapPin, Heart } from 'lucide-react';

export default function ImpactPage() {
  const stats = [
    { icon: <Users />, number: '500+', label: 'Students Served', color: 'from-blue-500 to-cyan-500' },
    { icon: <BookOpen />, number: '1,200+', label: 'Hours of Teaching', color: 'from-purple-500 to-pink-500' },
    { icon: <MapPin />, number: '15+', label: 'Communities Reached', color: 'from-green-500 to-emerald-500' },
    { icon: <Award />, number: '95%', label: 'Student Success Rate', color: 'from-orange-500 to-red-500' },
    { icon: <Heart />, number: '50+', label: 'Active Volunteers', color: 'from-indigo-500 to-blue-500' },
    { icon: <TrendingUp />, number: '$2M+', label: 'Scholarships Secured', color: 'from-pink-500 to-rose-500' },
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
              Our <span className="gradient-text">Impact</span>
            </h1>
            <p className="text-xl text-gray-600">
              See the real difference we're making in communities across the country
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="px-6 mb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <FloatingCard key={index} delay={index * 0.1} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto`}>
                  {stat.icon}
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
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

      {/* Success Stories */}
      <section className="px-6 mb-20 bg-gray-50 py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[var(--font-syne)]">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from real students
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah J.",
                role: "High School Senior",
                story: "BRIDGE's economics program helped me understand financial concepts I never knew existed. Now I'm heading to college with a scholarship and confidence in managing my finances!",
                outcome: "Full scholarship to state university",
              },
              {
                name: "Marcus L.",
                role: "College Freshman",
                story: "The mentorship program connected me with a finance professional who guided me through internship applications. I landed my dream internship at a major firm!",
                outcome: "Investment banking internship",
              },
              {
                name: "Emily R.",
                role: "High School Junior",
                story: "I came from a low-income background and never thought college was possible. BRIDGE showed me how to plan financially and navigate the application process.",
                outcome: "Accepted to 5 universities",
              },
              {
                name: "David K.",
                role: "Recent Graduate",
                story: "Starting as a student in BRIDGE's programs, I'm now a volunteer tutor giving back. The cycle of knowledge and opportunity continues!",
                outcome: "Now a BRIDGE volunteer",
              },
            ].map((story, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-2xl mb-4">
                    {story.name[0]}
                  </div>
                  <h3 className="text-xl font-bold">{story.name}</h3>
                  <p className="text-sm text-gray-500">{story.role}</p>
                </div>
                <p className="text-gray-600 mb-4 italic">"{story.story}"</p>
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-primary-500 font-semibold">✓ {story.outcome}</span>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6">
        <div className="container mx-auto max-w-4xl">
          <FloatingCard className="text-center bg-gradient-to-br from-primary-500 to-accent-500 text-white border-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be Part of Our Impact
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Your support helps us reach more students and create more success stories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-500 font-semibold rounded-full text-lg shadow-lg"
              >
                Volunteer
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-full text-lg border-2 border-white hover:bg-white/10"
              >
                Donate
              </motion.button>
            </div>
          </FloatingCard>
        </div>
      </section>
    </div>
  );
}
