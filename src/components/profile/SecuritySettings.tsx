import React from 'react';

const SecuritySettings = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
            <h3 className="text-2xl font-semibold text-nimasa-dark-text mb-8">Security Settings</h3>
            <div className="space-y-8">
                <div>
                    <label className="block text-xl font-medium text-nimasa-dark-text mb-2.5">Current Password</label>
                    <input
                        type="password"
                        className="w-full max-w-xl px-6 py-4 bg-input-bg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    <div>
                        <label className="block text-xl font-medium text-nimasa-dark-text mb-2.5">New Password</label>
                        <input
                            type="password"
                            className="w-full px-6 py-4 bg-input-bg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
                        />
                    </div>
                    <div>
                        <label className="block text-xl font-medium text-nimasa-dark-text mb-2.5">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full px-6 py-4 bg-input-bg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-12 flex flex-col items-center gap-6">
                 <button
                    disabled
                    className="w-full max-w-md bg-nimasa-blue/50 text-white/70 font-bold py-4 rounded-full text-2xl cursor-not-allowed"
                >
                    Change Password
                </button>
                <a href="#" className="text-xl font-medium text-nimasa-blue hover:underline text-center">
                    Forgot Password? Initiate a secure reset
                </a>
            </div>
        </div>
    );
};

export default SecuritySettings;
