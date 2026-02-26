"use client";

import { FloatingCard } from '@/components/antigravity/FloatingCard';
import { motion } from 'framer-motion';
import { Heart, DollarSign, Users, Award } from 'lucide-react';

export default function DonatePage() {
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
              Support <span className="gradient-text">BRIDGE</span>
            </h1>
            <p className="text-xl text-gray-600">
              Your donation helps us provide free educational programs to students who need them most
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Calculator */}
      <section className="px-6 mb-20">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[var(--font-syne)]">
              Your <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-lg text-gray-600">
              See what your donation can achieve
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                amount: "$25",
                impact: "Provides workbooks and materials for one student for a month",
                icon: <Users className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
              },
              {
                amount: "$50",
                impact: "Sponsors one student's participation in our summer intensive program",
                icon: <Award className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500",
              },
              {
                amount: "$100",
                impact: "Funds SAT/ACT prep materials for 5 students",
                icon: <DollarSign className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
              },
            ].map((item, index) => (
              <FloatingCard key={index} delay={index * 0.1} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto`}>
                  {item.icon}
                </div>
                <div className="text-4xl font-bold gradient-text mb-3">
                  {item.amount}
                </div>
                <p className="text-gray-600 text-sm">{item.impact}</p>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="px-6 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[var(--font-syne)]">
              Ways to <span className="gradient-text">Give</span>
            </h2>
          </motion.div>

          <FloatingCard className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Quick Donation Options</h3>
            
            <div className="space-y-4">
              {/* PayPal */}
              <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-primary-500 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">PayPal</h4>
                    <p className="text-sm text-gray-600">Secure one-time or recurring donations</p>
                  </div>
                  <motion.a
                    href="https://paypal.me/bridgenonprofit" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-[#0070ba] text-white font-semibold rounded-lg"
                  >
                    Donate via PayPal
                  </motion.a>
                </div>
              </div>

              {/* Venmo */}
              <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-primary-500 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">Venmo</h4>
                    <p className="text-sm text-gray-600">Quick mobile donations: @BRIDGE-nonprofit</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-[#3d95ce] text-white font-semibold rounded-lg"
                  >
                    Open Venmo
                  </motion.button>
                </div>
              </div>

              {/* Zelle */}
              <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-primary-500 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">Zelle</h4>
                    <p className="text-sm text-gray-600">Direct bank transfer: donate@bridge-nonprofit.org</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg"
                  >
                    Send via Zelle
                  </motion.button>
                </div>
              </div>

              {/* Check */}
              <div className="p-4 border-2 border-gray-200 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Mail a Check</h4>
                <p className="text-sm text-gray-600 mb-2">Make checks payable to: BRIDGE</p>
                <p className="text-sm text-gray-500">
                  Mail to: BRIDGE<br />
                  [Your Address]<br />
                  [City, State ZIP]
                </p>
              </div>
            </div>
          </FloatingCard>

          {/* Tax Deductible Notice */}
          <FloatingCard className="bg-blue-50 border-blue-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white flex-shrink-0">
                ℹ️
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Tax Deductible Donations</h4>
                <p className="text-gray-600 text-sm">
                  BRIDGE is a registered 501(c)(3) nonprofit organization. Your donation is tax-deductible 
                  to the extent allowed by law. Tax ID: [Your EIN]
                </p>
              </div>
            </div>
          </FloatingCard>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="px-6 mb-20 bg-gray-50 py-20">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[var(--font-syne)]">
              Other Ways to <span className="gradient-text">Help</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Corporate Matching",
                desc: "Check if your employer matches donations to double your impact",
                icon: <Award />,
              },
              {
                title: "Monthly Giving",
                desc: "Set up recurring donations for sustained support",
                icon: <Heart />,
              },
              {
                title: "In-Kind Donations",
                desc: "Donate laptops, books, or other educational materials",
                icon: <Users />,
              },
            ].map((item, index) => (
              <FloatingCard key={index} delay={index * 0.1} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You CTA */}
      <section className="px-6">
        <div className="container mx-auto max-w-4xl">
          <FloatingCard className="text-center bg-gradient-to-br from-primary-500 to-accent-500 text-white border-none">
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Thank You for Your Support!
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Every donation, no matter the size, makes a real difference in a student's life. 
              Together, we're building bridges to brighter futures.
            </p>
            <p className="text-sm text-white/80">
              Questions about donating? Email us at donate@bridge-nonprofit.org
            </p>
          </FloatingCard>
        </div>
      </section>
    </div>
  );
}
