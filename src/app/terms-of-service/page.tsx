"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  Users,
  Gavel,
} from "lucide-react";

export default function TermsOfServicePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-16 md:pt-24">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using
              AutoForce Nepal's services and website.
            </p>
            <div className="mt-6 text-sm opacity-90">
              Last updated: May 31, 2025
            </div>
          </div>
        </div>
      </div>

      {/* Terms Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg">
              <div className="bg-red-600 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fair Terms
              </h3>
              <p className="text-gray-700">
                Our terms are designed to be fair and transparent, protecting
                both our customers and our business.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg">
              <div className="bg-yellow-500 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Clear Guidelines
              </h3>
              <p className="text-gray-700">
                We provide clear guidelines on how to use our services and what
                is expected from our users.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg">
              <div className="bg-green-600 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                User Rights
              </h3>
              <p className="text-gray-700">
                Your rights as a user are clearly defined and protected under
                these terms of service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 bg-gray-50">
        <div
          className={`max-w-4xl mx-auto px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service ("Terms") govern your use of the
                  AutoForce Nepal website and services. By accessing our website
                  or using our services, you agree to be bound by these Terms.
                  If you do not agree to these Terms, please do not use our
                  services.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using our website or services, you
                  acknowledge that you have read, understood, and agree to be
                  bound by these Terms and our Privacy Policy. These Terms apply
                  to all visitors, users, and others who access or use our
                  services.
                </p>
              </div>

              {/* Use of Services */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Use of Our Services
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Permitted Use
                    </h3>
                    <p className="text-gray-700 mb-3">
                      You may use our services for lawful purposes only. You
                      agree to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>
                        Provide accurate and complete information when requested
                      </li>
                      <li>
                        Use our services in compliance with applicable laws and
                        regulations
                      </li>
                      <li>
                        Respect the intellectual property rights of AutoForce
                        Nepal and third parties
                      </li>
                      <li>
                        Not interfere with or disrupt our services or servers
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Prohibited Activities
                    </h3>
                    <p className="text-gray-700 mb-3">You agree not to:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>
                        Use our services for any illegal or unauthorized purpose
                      </li>
                      <li>Transmit viruses, malware, or other harmful code</li>
                      <li>
                        Attempt to gain unauthorized access to our systems
                      </li>
                      <li>Violate the security of our services</li>
                      <li>Impersonate another person or entity</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Product Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Product Information and Availability
                </h2>
                <p className="text-gray-700 mb-4">
                  We strive to provide accurate product information on our
                  website. However:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Product specifications may change without notice</li>
                  <li>
                    Availability is subject to stock and market conditions
                  </li>
                  <li>
                    Prices are subject to change and confirmation at time of
                    order
                  </li>
                  <li>
                    We reserve the right to limit quantities or refuse service
                  </li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Intellectual Property Rights
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The content, features, and functionality of our website are
                  owned by AutoForce Nepal and are protected by international
                  copyright, trademark, and other intellectual property laws.
                  You may not reproduce, distribute, modify, or create
                  derivative works without our express written permission.
                </p>
              </div>

              {/* Disclaimers */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Disclaimers
                </h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="font-semibold text-gray-900">
                      Important Notice
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Our services are provided "as is" and "as available" without
                  warranties of any kind. We disclaim all warranties, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>
                    Warranties of merchantability and fitness for a particular
                    purpose
                  </li>
                  <li>
                    Warranties regarding accuracy, reliability, or completeness
                    of information
                  </li>
                  <li>
                    Warranties that our services will be uninterrupted or
                    error-free
                  </li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Limitation of Liability
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To the maximum extent permitted by law, AutoForce Nepal shall
                  not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including but not limited
                  to loss of profits, data, or business interruption, arising
                  out of or related to your use of our services.
                </p>
              </div>

              {/* Indemnification */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Indemnification
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless AutoForce
                  Nepal and its officers, directors, employees, and agents from
                  any claims, damages, losses, or expenses arising out of your
                  use of our services or violation of these Terms.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Governing Law
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance
                  with the laws of Nepal. Any disputes arising under these Terms
                  shall be subject to the exclusive jurisdiction of the courts
                  of Nepal.
                </p>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Termination
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may terminate or suspend your access to our services
                  immediately, without prior notice or liability, for any
                  reason, including breach of these Terms. Upon termination,
                  your right to use our services will cease immediately.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Changes to These Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We
                  will notify you of any changes by posting the new Terms on
                  this page and updating the "Last updated" date. Your continued
                  use of our services after any changes constitutes acceptance
                  of the new Terms.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">
                      Legal Department: legal@autoforcenepal.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Gavel className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">
                      We will respond to legal inquiries within 5 business days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Our legal team is available to clarify any questions you may have
            about our terms of service.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-red-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Contact Legal Team
          </Link>
        </div>
      </section>
    </div>
  );
}
