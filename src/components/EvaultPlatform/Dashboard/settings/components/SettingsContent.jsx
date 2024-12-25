import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { FormField } from './FormField';

export const SettingsContent = ({ setting, onBack }) => {
  const [formState, setFormState] = useState({
    // Account
    fullName: '',
    email: '',
    phone: '',
    // Security
    currentPassword: '',
    newPassword: '',
    twoFactor: false,
    // Notifications
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: false,
    // Payment
    paymentMethod: 'card',
    // Accessibility
    fontSize: 'medium',
    highContrast: false,
    reducedMotion: false,
  });

  const handleChange = (field, value) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };

  const renderContent = () => {
    switch (setting.id) {
      case 'account':
        return (
          <>
            <FormField
              label="Full Name"
              type="text"
              value={formState.fullName}
              onChange={value => handleChange('fullName', value)}
              placeholder="Enter your full name"
            />
            <FormField
              label="Email Address"
              type="email"
              value={formState.email}
              onChange={value => handleChange('email', value)}
              placeholder="Enter your email"
            />
            <FormField
              label="Phone Number"
              type="tel"
              value={formState.phone}
              onChange={value => handleChange('phone', value)}
              placeholder="Enter your phone number"
            />
          </>
        );

      case 'security':
        return (
          <>
            <FormField
              label="Current Password"
              type="password"
              value={formState.currentPassword}
              onChange={value => handleChange('currentPassword', value)}
              placeholder="Enter current password"
            />
            <FormField
              label="New Password"
              type="password"
              value={formState.newPassword}
              onChange={value => handleChange('newPassword', value)}
              placeholder="Enter new password"
            />
            <FormField
              label="Two-Factor Authentication"
              type="toggle"
              value={formState.twoFactor}
              onChange={value => handleChange('twoFactor', value)}
            />
          </>
        );

      case 'notifications':
        return (
          <>
            <FormField
              label="Email Notifications"
              type="toggle"
              value={formState.emailNotifications}
              onChange={value => handleChange('emailNotifications', value)}
            />
            <FormField
              label="Push Notifications"
              type="toggle"
              value={formState.pushNotifications}
              onChange={value => handleChange('pushNotifications', value)}
            />
            <FormField
              label="Marketing Emails"
              type="toggle"
              value={formState.marketingEmails}
              onChange={value => handleChange('marketingEmails', value)}
            />
          </>
        );

      case 'payment':
        return (
          <FormField
            label="Default Payment Method"
            type="select"
            value={formState.paymentMethod}
            onChange={value => handleChange('paymentMethod', value)}
            options={[
              { label: 'Credit Card', value: 'card' },
              { label: 'PayPal', value: 'paypal' },
              { label: 'Bank Transfer', value: 'bank' },
            ]}
          />
        );

      case 'accessibility':
        return (
          <>
            <FormField
              label="Font Size"
              type="select"
              value={formState.fontSize}
              onChange={value => handleChange('fontSize', value)}
              options={[
                { label: 'Small', value: 'small' },
                { label: 'Medium', value: 'medium' },
                { label: 'Large', value: 'large' },
              ]}
            />
            <FormField
              label="High Contrast"
              type="toggle"
              value={formState.highContrast}
              onChange={value => handleChange('highContrast', value)}
            />
            <FormField
              label="Reduced Motion"
              type="toggle"
              value={formState.reducedMotion}
              onChange={value => handleChange('reducedMotion', value)}
            />
          </>
        );

      case 'help':
        return (
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Contact Support</h3>
              <p className="text-gray-600">Email: support@evault.com</p>
              <p className="text-gray-600">Phone: 1-800-123-4567</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Documentation</h3>
              <a href="#" className="text-blue-600 hover:underline">View Documentation</a>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Settings
      </button>
      
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-8 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">{setting.title}</h2>
          <p className="text-gray-600 mt-2">{setting.description}</p>
        </div>
        
        <div className="divide-y divide-gray-200">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};