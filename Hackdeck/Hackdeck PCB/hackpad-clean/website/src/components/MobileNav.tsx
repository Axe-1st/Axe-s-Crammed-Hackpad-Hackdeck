import { useState } from "react";
import { navLinks } from "../config/navLinks";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 bg-slate-100 border-2 border-slate-500/80 rounded-lg shadow-lg md:hidden"
                aria-label="Toggle menu"
            >
                <div className="w-6 h-5 flex flex-col justify-between">
                    <span
                        className={`block h-0.5 w-full bg-slate-700 transform transition-all duration-200 origin-center ${
                            isOpen ? "rotate-45 translate-y-[9px]" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-full bg-slate-700 transition-all duration-200 ${
                            isOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-full bg-slate-700 transform transition-all duration-200 origin-center ${
                            isOpen ? "-rotate-45 -translate-y-[9px]" : ""
                        }`}
                    />
                </div>
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-56 bg-slate-100 border-r-2 border-slate-500/80 z-50 transform transition-transform duration-200 ease-in-out md:hidden ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <nav className="pt-20 p-6">
                    <ul className="space-y-2">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default MobileNav;
