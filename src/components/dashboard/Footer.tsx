import { Copyright } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-8 py-5">
            <div className="flex items-center justify-center gap-2 text-nimasa-dark-text font-bold text-base">
                <Copyright size={20} />
                <span>2025 NIMASA - All Rights Reserved</span>
            </div>
        </footer>
    );
};

export default Footer;
