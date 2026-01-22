import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-[170px] pb-[100px] px-6 container mx-auto max-w-4xl text-elleo-dark min-h-screen">
            <h1 className="font-serif text-4xl md:text-5xl mb-8">Privacy Policy</h1>

            <div className="font-sans text-gray-600 space-y-6 leading-relaxed">
                <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2 className="text-xl font-bold text-elleo-dark mb-3">1. Introduction</h2>
                    <p>
                        Elleo Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit our website or contact us.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-elleo-dark mb-3">2. Information We Collect</h2>
                    <p>We may collect personal information that you provide to us voluntarily, such as when you use our "Get in Touch" form. This includes:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Any other details you provide in your message</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-elleo-dark mb-3">3. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Respond to your inquiries and provide customer support.</li>
                        <li>Improve our website and services.</li>
                        <li>Send you updates or information if you have opted in to receive them.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-elleo-dark mb-3">4. Information Sharing</h2>
                    <p>
                        We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-elleo-dark mb-3">5. Data Security</h2>
                    <p>
                        We implement reasonable security measures to maintain the safety of your personal information. However, please be aware that no method of transmission over the Internet is 100% secure.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-elleo-dark mb-3">6. Cookies</h2>
                    <p>
                        Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings, though this may affect the functionality of the site.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-elleo-dark mb-3">7. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@elleo.com.au" className="text-elleo-light hover:underline">info@elleo.com.au</a>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
