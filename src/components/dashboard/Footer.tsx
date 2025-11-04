import { Copyright } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-6 py-4">
            <div className="flex items-center justify-center gap-2 text-nimasa-dark-text font-medium text-sm">
                <Copyright size={16} />
                <span>2025 NIMASA - All Rights Reserved</span>
            </div>
        </footer>
    );
};

export default Footer;
