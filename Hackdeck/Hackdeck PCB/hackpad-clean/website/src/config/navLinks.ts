export interface NavLink {
    href: string;
    label: string;
}

export const navLinks: NavLink[] = [
    { href: "/guide", label: "DIY Guide" },
    { href: "/add-components", label: "Adding more parts!" },
    { href: "/resources", label: "Resources & Tips" },
    { href: "/parts", label: "Approved Parts / Kit Contents" },
    { href: "/submitting", label: "Submit your project!" },
    { href: "/faq", label: "FAQ" },
];
