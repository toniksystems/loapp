import React from 'react';

const SecuritySettings = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-5 mt-5">
            <h3 className="text-lg font-semibold text-nimasa-dark-text mb-5">Security Settings</h3>
            <div className="space-y-5">
                <div>
                    <label className="block text-base font-medium text-nimasa-dark-text mb-2">Current Password</label>
                    <input
                        type="password"
                        className="w-full max-w-lg px-4 py-2.5 bg-input-bg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                    <div>
                        <label className="block text-base font-medium text-nimasa-dark-text mb-2">New Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2.5 bg-input-bg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
                        />
                    </div>
                    <div>
                        <label className="block text-base font-medium text-nimasa-dark-text mb-2">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2.5 bg-input-bg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-8 flex flex-col items-center gap-4">
                 <button
                    disabled
                    className="w-full max-w-sm bg-nimasa-blue/50 text-white/70 font-bold py-2.5 rounded-full text-lg cursor-not-allowed"
                >
                    Change Password
                </button>
                <a href="#" className="text-base font-medium text-nimasa-blue hover:underline text-center">
                    Forgot Password? Initiate a secure reset
                </a>
            </div>
        </div>
    );
};

export default SecuritySettings;
