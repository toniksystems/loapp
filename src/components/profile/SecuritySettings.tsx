import React from 'react';

const SecuritySettings = () => {
    return (
        <div className="bg-white rounded-3xl shadow-md p-6 md:p-8 mt-8">
            <h3 className="text-2xl md:text-3xl font-medium text-nimasa-dark-text mb-8">Security Settings</h3>
            <div className="space-y-6">
                <div>
                    <label className="block text-lg font-medium text-nimasa-dark-text mb-2">Current Password</label>
                    <input
                        type="password"
                        className="w-full max-w-lg px-6 py-4 bg-input-bg rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    <div>
                        <label className="block text-lg font-medium text-nimasa-dark-text mb-2">New Password</label>
                        <input
                            type="password"
                            className="w-full px-6 py-4 bg-input-bg rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-nimasa-dark-text mb-2">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full px-6 py-4 bg-input-bg rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-12 flex flex-col items-center gap-4">
                 <button
                    disabled
                    className="w-full max-w-sm bg-nimasa-blue/50 text-white/70 font-bold py-4 rounded-full text-lg cursor-not-allowed"
                >
                    Change Password
                </button>
                <a href="#" className="text-base md:text-lg font-medium text-nimasa-blue hover:underline text-center">
                    Forgot Password? Initiate a secure reset
                </a>
            </div>
        </div>
    );
};

export default SecuritySettings;
