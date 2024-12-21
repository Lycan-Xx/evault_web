import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const TermsAndConditions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-300 p-6 md:p-12 font-mono relative">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-[7rem] left-6 bg-red-700 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-800 transition-colors z-50"
      >
        <FaArrowLeft /> Back to Home
      </button>

      <h1 className="text-6xl font-bold text-black mt-[5rem]">
        Terms and Conditions for eVault
      </h1>
  
      <h2 className="text-2xl font-bold text-black mt-8 mb-6">1. Introduction</h2>
      <p className="text-black leading-loose mb-4">
        These Terms and Conditions ("Terms") govern your use of eVault's platform (Web and application) and services. By accessing or using eVault, you agree to comply with these Terms, as well as any applicable laws and regulations. If you do not agree, you must refrain from using our services.
      </p>
      
      <h2 className="text-2xl font-bold text-black mt-6 mb-2">2. Registration and Account Setup</h2>
      <ul className="text-black leading-loose mb-4 list-disc list-inside">
        <li>To use eVault’s services, you must create an account by providing accurate and complete information.</li>
        <li>You are responsible for maintaining the confidentiality of your account information, including your password and PIN.</li>
        <li>You agree to notify eVault immediately if you suspect unauthorized use of your account.</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-black mt-6 mb-2">3. Use of Services</h2>
      <p className="text-black leading-loose mb-4">
        eVault provides digital financial services, including payments, transaction processing, biometric verification, and financial management tools. You agree to use these services solely for lawful and personal purposes. Prohibited activities include fraud, illegal transactions, and misuse of platform features.
      </p>
      
      <h2 className="text-2xl font-bold text-black mt-6 mb-2">4. Third-Party Services</h2>
      <p className="text-black leading-loose mb-4">
        eVault may integrate third-party services, including payment processors, merchants, and financial institutions. These third parties are responsible for their services, and eVault is not liable for issues arising from their use. By using eVault, you consent to the sharing of necessary data with these third-party providers for transaction processing.
      </p>
      
      <h2 className="text-2xl font-bold text-black mt-6 mb-2">5. Privacy and Data Protection</h2>
      <p className="text-black leading-loose mb-4">
        eVault collects, stores, and processes your personal data in accordance with Nigerian data protection laws, including the ICPCC. We respect your privacy and are committed to safeguarding your information.
      </p>
      <ul className="text-black leading-loose mb-4 list-disc list-inside">
        <li>Data Collection: We collect personal details, payment data, and usage information to provide and improve our services.</li>
        <li>Data Usage: Your data will be used to facilitate transactions, enhance your experience, and comply with legal requirements.</li>
        <li>Your Rights: You have the right to access, update, and request the deletion of your personal data as specified in the ICPCC.</li>
        <li>Data Security: We implement stringent security measures to protect your data from unauthorized access, alteration, and loss.</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-black mt-6 mb-2">6. Payment Processing</h2>
      <p className="text-black leading-loose mb-4">
        eVault processes payments through trusted third-party payment providers. You agree to pay all applicable transaction fees. eVault is not responsible for errors or delays in payment processing, and any payment disputes must be resolved directly with the payment processor.
      </p>
      
      <h2 className="text-2xl font-bold text-black mt-6 mb-2">7. Security and Fraud Prevention</h2>
      <p className="text-black leading-loose mb-4">
        We employ advanced security measures to protect your transactions and personal data, including encryption and fraud detection tools. However, you are responsible for securing your account information. If you suspect fraudulent activity, you must notify eVault immediately.
      </p>
      <ul className="text-black leading-loose mb-4 list-disc list-inside">
        <li>Suspension of Account: eVault reserves the right to suspend or terminate accounts in cases of suspected fraud, illegal activity, or violation of these Terms.</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-black mt-6 mb-2">8. Limitation of Liability</h2>
      <p className="text-black leading-loose mb-4">
        eVault is not liable for any direct, indirect, incidental, or consequential damages arising from:
      </p>
      <ul className="text-black leading-loose mb-4 list-disc list-inside">
        <li>Service interruptions or downtime.</li>
        <li>Use or inability to use the platform.</li>
        <li>Loss of data or financial transactions.</li>
      </ul>
      <p className="text-black leading-loose mb-4">
        Your sole remedy for any dissatisfaction with eVault services is to discontinue using the platform.
      </p>
      
      <h2 className="text-2xl font-bold text-black mt-6 mb-2">9. Changes to Terms</h2>
      <p className="text-black leading-loose mb-4">
        eVault reserves the right to modify these Terms at any time. You will be notified of significant changes, and continued use of our services after such changes constitutes your acceptance of the revised Terms.
      </p>
      
      <h2 className="text-2xl font-bold text-black mt-6 mb-2">10. Governing Law and Dispute Resolution</h2>
      <p className="text-black leading-loose mb-4">
        These Terms are governed by Nigerian law. Any disputes will be resolved through arbitration in Nigeria. The arbitration decision will be final and binding.
      </p>
      
      <h2 className="text-2xl font-bold text-black mt-6 mb-2">11. Contact Information</h2>
      <p className="text-black leading-loose mb-4">
        For any questions or concerns regarding these Terms, please contact us at:
      </p>
      <ul className="text-black leading-loose mb-4 list-disc list-inside">
        <li>Email: <a href="mailto:get2evault247@gmail.com" className="text-blue-700 hover:underline">get2evault247@gmail.com</a></li>
        <li>No. 29 Atiku Abubakar Mall, Numan Road, Yola, Adamawa State</li>
		<li>Phone: <a href="tel:+2348140332887" className="text-blue-700 hover:underline">+234 8140332887</a></li>
		</ul>
    </div>
  );
};

export default TermsAndConditions;
