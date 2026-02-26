"use client";

import { FloatingCard } from '@/components/antigravity/FloatingCard';
import { motion } from 'framer-motion';
import { Heart, Target, Award, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="relative pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 font-[var(--font-syne)]">
              About <span className="gradient-text">BRIDGE</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're a student-led nonprofit on a mission to break down barriers 
              to quality education. Through free programs in economics and financial 
              literacy, we're empowering the next generation of leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 mb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <FloatingCard delay={0.1}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide accessible, high-quality education in economics and financial 
                literacy to students from underserved communities, fostering resilience, 
                growth, and opportunity for all.
              </p>
            </FloatingCard>

            <FloatingCard delay={0.2}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                A world where every student, regardless of background, has the knowledge 
                and resources to make informed financial decisions and pursue their dreams 
                with confidence.
              </p>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 mb-20 bg-gray-50 py-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-syne)]">
              Our <span className="gradient-text">Story</span>
            </h2>
          </motion.div>

          <FloatingCard>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                BRIDGE was founded in 2022 by a group of college students who recognized 
                a critical gap in educational resources for underserved communities. Having 
                witnessed firsthand how lack of financial literacy and economic education 
                limits opportunities, we set out to make a difference.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                What started as weekend tutoring sessions for local high school students 
                has grown into a comprehensive program serving hundreds of students across 
                multiple communities. Our volunteer tutors, all current or former students 
                themselves, bring passion and relatability to every session.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, BRIDGE stands as a testament to what's possible when passionate 
                students come together to create change. We're not just teaching economics 
                – we're building bridges to brighter futures.
              </p>
            </div>
          </FloatingCard>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[var(--font-syne)]">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Accessibility",
                desc: "Education should be free and available to everyone",
                color: "from-red-500 to-pink-500",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community",
                desc: "We grow stronger by lifting each other up",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence",
                desc: "Quality education that makes a real impact",
                color: "from-purple-500 to-indigo-500",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Empowerment",
                desc: "Give students the tools to shape their futures",
                color: "from-orange-500 to-yellow-500",
              },
            ].map((value, index) => (
              <FloatingCard key={index} delay={index * 0.1} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="px-6">
        <div className="container mx-auto max-w-4xl">
          <FloatingCard className="text-center bg-gradient-to-br from-primary-500 to-accent-500 text-white border-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              We're always looking for passionate students and professionals to help us grow
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary-500 font-semibold rounded-full text-lg shadow-lg"
            >
              Get Involved
            </motion.button>
          </FloatingCard>
        </div>
      </section>
    </div>
  );
}
