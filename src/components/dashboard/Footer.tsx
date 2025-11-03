import { Copyright } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-6 py-3">
            <div className="flex items-center justify-center gap-2 text-nimasa-dark-text font-medium text-xs">
                <Copyright size={14} />
                <span>2025 NIMASA - All Rights Reserved</span>
            </div>
        </footer>
    );
};

export default Footer;
