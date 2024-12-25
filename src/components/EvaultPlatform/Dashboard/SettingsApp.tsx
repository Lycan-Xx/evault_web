import React, { useState } from 'react';
import { SettingsGrid } from './settings/components/SettingsGrid';
import { SettingsContent } from './settings/components/SettingsContent';

function SettingsApp() {
	const [selectedSetting, setSelectedSetting] = useState(null);

	const handleSettingSelect = (setting) => {
		setSelectedSetting(setting);
	};

	const handleBack = () => {
		setSelectedSetting(null);
	};

	return (
		<div className="min-h-screen bg-gray-50 py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{selectedSetting ? (
					<SettingsContent setting={selectedSetting} onBack={handleBack} />
				) : (
					<>
						<h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
						<SettingsGrid onSettingSelect={handleSettingSelect} />
					</>
				)}
			</div>
		</div>
	);
}

export default SettingsApp;