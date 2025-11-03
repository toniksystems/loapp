import React from 'react';

const SecuritySettings = () => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 mt-4">
            <h3 className="text-base font-semibold text-nimasa-dark-text mb-4">Security Settings</h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-nimasa-dark-text mb-1.5">Current Password</label>
                    <input
                        type="password"
                        className="w-full max-w-lg px-4 py-2 bg-input-bg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                        <label className="block text-sm font-medium text-nimasa-dark-text mb-1.5">New Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 bg-input-bg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-nimasa-dark-text mb-1.5">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 bg-input-bg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-6 flex flex-col items-center gap-3">
                 <button
                    disabled
                    className="w-full max-w-sm bg-nimasa-blue/50 text-white/70 font-bold py-2 rounded-full text-base cursor-not-allowed"
                >
                    Change Password
                </button>
                <a href="#" className="text-sm font-medium text-nimasa-blue hover:underline text-center">
                    Forgot Password? Initiate a secure reset
                </a>
            </div>
        </div>
    );
};

export default SecuritySettings;
