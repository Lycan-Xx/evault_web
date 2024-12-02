import React from 'react';

const PrivacyPolicy = () => {
    return (
    <div className="min-h-screen bg-gray-300 p-6 md:p-12 font-mono">
      <h1 className="text-6xl font-bold text-blue-900 mt-[5rem]">Privacy Policy of eVault</h1>
      <p className="text-black leading-loose mb-12 mt-8">
        At eVault, safeguarding your privacy is a priority. This policy outlines how we collect, use, store, and protect your personal information in accordance with the Nigerian Data Protection Regulation (NDPR) and ICPCC.
      </p>
      
      <h2 className="text-2xl font-bold text-orange-500 mt-6 mb-2">1. Information Collection</h2>
      <p className="text-black leading-loose mb-4">
        We collect personal information when you register, use our services, or interact with our platform, including:
      </p>
      <ul className="text-black leading-loose mb-4 list-disc list-inside">
        <li>Personal Identification: Name, phone number, email address, BVN, NIN.</li>
        <li>Transaction Data: Payment method details, financial transactions, and history.</li>
        <li>Device & Usage Data: IP address, device type, and browser information.</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-orange-500 mt-6 mb-2">2. How We Use Your Data</h2>
      <p className="text-black leading-loose mb-4">
        We use your data for:
      </p>
      <ul className="text-black leading-loose mb-4 list-disc list-inside">
        <li>Service Provision: To offer, process, and manage your transactions on eVault.</li>
        <li>User Authentication: To securely verify your identity for BVN and NIN registration.</li>
        <li>Improvement & Development: To enhance our platform and provide personalized experiences.</li>
        <li>Legal Compliance: To fulfill obligations under Nigerian law and prevent fraud.</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-orange-500 mt-6 mb-2">3. Data Sharing</h2>
      <p className="text-black leading-loose mb-4">
        We may share your information with:
      </p>
      <ul className="text-black leading-loose mb-4 list-disc list-inside">
        <li>Third-Party Service Providers: For transaction processing, authentication, and fraud detection.</li>
        <li>Legal Authorities: To comply with regulatory requirements and protect against fraud.</li>
      </ul>
      <p className="text-black leading-loose mb-4">
        We do not sell your personal information to third parties.
      </p>
      
      <h2 className="text-2xl font-bold text-orange-500 mt-6 mb-2">4. Data Security</h2>
      <p className="text-black leading-loose mb-4">
        eVault employs state-of-the-art encryption, secure storage systems, and restricted access protocols to ensure your data is protected from unauthorized access, loss, or alteration.
      </p>
      
      <h2 className="text-2xl font-bold text-orange-500 mt-6 mb-2">5. Data Retention</h2>
      <p className="text-black leading-loose mb-4">
        Your personal data will be retained for as long as necessary to:
      </p>
      <ul className="text-black leading-loose mb-4 list-disc list-inside">
        <li>Provide services you request.</li>
        <li>Comply with legal obligations.</li>
        <li>Resolve disputes and enforce agreements.</li>
      </ul>
      <p className="text-black leading-loose mb-4">
        You can request deletion of your data at any time, subject to applicable retention periods.
      </p>




      <h2 className="text-2xl font-bold text-orange-500 mt-6 mb-2">6. Your Rights</h2>
      <p className="text-black leading-loose mb-4">
        Under the Nigerian Data Protection Regulation, you have the following rights:
      </p>
      <ul className="text-black leading-loose mb-4 list-disc list-inside">
        <li>Access: Request access to the personal data we hold.</li>
        <li>Rectification: Request correction or updates to your data.</li>
        <li>Erasure: Request the deletion of your data, subject to legal retention periods.</li>
        <li>Portability: Request a copy of your data in a machine-readable format.</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-orange-500 mt-6 mb-2">7. Cookies & Tracking Technologies</h2>
      <p className="text-black leading-loose mb-4">
        We use cookies to track your activity on our platform and enhance your experience. You can manage cookie settings via your browser.
      </p>
      
      <h2 className="text-2xl font-bold text-orange-500 mt-6 mb-2">8. Changes to This Policy</h2>
      <p className="text-black leading-loose mb-4">
        We may update this policy from time to time to reflect changes in the law or our data practices. Any changes will be communicated via the platform, with the updated policy date.
      </p>
      
      <h2 className="text-2xl font-bold text-orange-500 mt-6 mb-2">9. Contact Us</h2>
      <p className="text-black leading-loose mb-4">
        If you have questions about this policy or wish to exercise your rights, please contact us at:
      </p>
      <ul className="text-black leading-loose mb-4 list-disc list-inside">
        <li>Email: <a href="mailto:get2evault247@gmail.com" className="text-blue-700 hover:underline">get2evault247@gmail.com</a></li>
        <li>Phone: +234 8140332887</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
