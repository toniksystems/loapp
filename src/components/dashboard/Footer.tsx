import { Copyright } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-10 py-6">
            <div className="flex items-center justify-center gap-3 text-nimasa-dark-text font-medium text-lg">
                <Copyright size={20} />
                <span>2025 NIMASA - All Rights Reserved</span>
            </div>
        </footer>
    );
};

export default Footer;
