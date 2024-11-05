import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Widget } from '@typeform/embed-react';

interface ContactInfoProps {
  icon: React.ElementType;
  title: string;
  content: string;
  link?: string;
  isButton?: boolean;
}

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 mb-8">
              We'd love to hear from you. Let's discuss how we can help grow
              your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              style={{ height: '650px' }}
            >
              <Widget
                id="IrASjZFk"
                style={{ width: '100%', height: '100%', border: 'none' }}
                className="my-form"
                hidden={{
                  footer: true,
                  typeform: {
                    button: true,
                    toolbar: true
                  }
                }}
                inlineOnMobile
                enableSandbox
              />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <ContactInfo
                icon={Phone}
                title="Phone"
                content="+1 (215) 385-4559"
                link="tel:+2153854559"
              />
              <ContactInfo
                icon={Mail}
                title="Email"
                content="contact@onetapxmedia.com"
                link="mailto:contact@onetapxmedia.com"
              />
              <ContactInfo
                icon={Clock}
                title="Business Hours"
                content="Monday - Friday: 9:00 AM - 6:00 PM"
              />
              <ContactInfo
                icon={MessageCircle}
                title="Live Chat"
                content="Chat with our support team"
                link="#"
                isButton
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <div className="h-[450px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-75.2803,39.8722,-74.9557,40.1379&amp;layer=mapnik&amp;marker=39.9526,-75.1652"
                style={{ 
                  border: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '0.5rem'
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Philadelphia Map"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://www.openstreetmap.org/#map=12/39.9526/-75.1652"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 text-sm"
              >
                View Larger Map
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactInfo: React.FC<ContactInfoProps> = ({ icon: Icon, title, content, link, isButton }) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-primary-600" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {link ? (
        isButton ? (
          <button className="text-primary-600 hover:text-primary-700 font-medium">
            {content}
          </button>
        ) : (
          <a
            href={link}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            {content}
          </a>
        )
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  </div>
);

export default Contact;