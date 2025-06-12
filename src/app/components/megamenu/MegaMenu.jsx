"use client"

import React, { useRef, useState, useEffect } from 'react'
import MenuItem from './MenuItem';
import Link from 'next/link';
import SearchBar from '../searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAlignJustify,
    faBook,
    faCartShopping,
    faEnvelope,
    faHeadset,
    faHome,
    faSignIn,
    faSignOut,
    faTools,
    faUser,
    faTimes,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import PhoneVerification from '../PhoneVerification/PhoneVerification';
import { useRouter } from 'next/navigation';

const menuData = [
    {
        label: 'Air Conditioners',
        href: '/air-conditioners',
        children: [
            {
                heading: 'Top Ac Brands',
                submenu: [
                    { label: 'LG', href: '#' },
                    { label: 'Lloyd', href: '#' },
                    { label: 'Voltas', href: '#' },
                    { label: 'Samsung', href: '#' },
                    { label: 'Hitachi', href: '#' },
                    { label: 'Carrier', href: '#' },
                    { label: 'Daikin', href: '#' },
                    { label: 'O General', href: '#' },
                    { label: 'Blue Star', href: '#' },
                    { label: 'Whirlpool', href: '#' },
                    { label: 'Panasonic', href: '#' },
                    { label: 'Onida', href: '#' },
                    { label: 'Haier', href: '#' },
                    { label: 'Godrej', href: '#' },
                ],
            },
        ],
    },
    {
        label: 'Spare Parts',
        href: '/spare-parts',
        children: [
            {
                heading: 'AC Spare Parts',
                submenu: [
                    { label: 'Outdoor Units', href: '#' },
                    { label: 'Indoor Units', href: '#' },
                    { label: 'Motor', href: '#' },
                    { label: 'Compressor', href: '#' },
                    { label: 'Copper Tube', href: '#' },
                    { label: 'Insulation Tube', href: '#' },
                    { label: 'Gas', href: '#' },
                    { label: 'Capacitor', href: '#' },
                    { label: 'Cooling coils And Condensers', href: '#' },
                    { label: 'Fan Blade', href: '#' },
                    { label: 'Blower', href: '#' },
                    { label: 'Window Grill', href: '#' },
                ],
            }
        ]
    },
    {
        label: 'RO Service',
        href: '/ro-water-purifier',
    },
    {
        label: 'AC Service',
        href: '/ac',
        children: [
            {
                heading: 'Top AC Services',
                submenu: [
                    { label: 'Voltas', href: '#' },
                    { label: 'Hitachi', href: '#' },
                    { label: 'LG', href: '#' },
                    { label: 'O General', href: '#' },
                    { label: 'Daikin', href: '#' },
                    { label: 'Blue Star', href: '#' },
                    { label: 'Godrej', href: '#' },
                    { label: 'Samsung', href: '#' },
                    { label: 'Carrier', href: '#' },
                    { label: 'Lloyd', href: '#' },
                    { label: 'Panasonic', href: '#' },
                    { label: 'Onida', href: '#' },
                    { label: 'Portable', href: '#' },
                    { label: 'Duct', href: '#' },
                    { label: 'Central AC', href: '#' },
                    { label: 'Smart AC', href: '#' },
                    { label: 'Floor Mounted', href: '#' },
                    { label: 'Solar Hybrid', href: '#' },
                ],
            },
        ]
    },
    {
        label: 'Refrigerator Service',
        href: '/refrigerator-repair',
    },
];

function MegaMenu() {
    // State management
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [user, setUser] = useState({ name: '', email: '' });
    
    // Refs
    const userMenuRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const router = useRouter();

    // Initialize component
    useEffect(() => {
        setIsMounted(true);
        checkAuthStatus();
    }, []);

    // Check authentication status
    const checkAuthStatus = () => {
        const token = localStorage.getItem("userToken");
        const name = localStorage.getItem("name");
        const email = localStorage.getItem("email");
        
        setUser({ name: name || '', email: email || '' });
        setIsLoggedIn(!!token);
    };

    // Handle clicks outside menus
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isUserMenuOpen || isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isUserMenuOpen, isMobileMenuOpen]);

    // Handle user icon click
    const handleUserIconClick = () => {
        if (!isLoggedIn) {
            setShowLoginModal(true);
        } else {
            setIsUserMenuOpen(!isUserMenuOpen);
        }
    };

    // Handle login
    const handleLogin = () => {
        setShowLoginModal(true);
        setIsUserMenuOpen(false);
        setIsMobileMenuOpen(false);
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        setUser({ name: '', email: '' });
        setIsUserMenuOpen(false);
        setIsMobileMenuOpen(false);
        window.location.reload();
    };

    // Handle profile click
    const handleProfileClick = () => {
        // Add your profile navigation logic here
        console.log("Navigate to profile");
        setIsUserMenuOpen(false);
        setIsMobileMenuOpen(false);
        router.push('/profile');
    };

    // Handle orders click
    const handleOrdersClick = async () => {
        try {
            setIsUserMenuOpen(false);
            setIsMobileMenuOpen(false);
            
            const userPhone = localStorage.getItem("userPhone");
            if (!userPhone) {
                console.error("User phone not found");
                return;
            }

            const response = await fetch("https://waterpurifierservicecenter.in/customer/ro_customer/all_complaints.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user_no: userPhone }),
            });

            const data = await response.json();
            localStorage.setItem("all_cmpl", JSON.stringify(data.complainDetails));
            router.push('/booking');
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    // Handle support click
    const handleSupportClick = () => {
        console.log("Navigate to support");
        setIsUserMenuOpen(false);
        setIsMobileMenuOpen(false);
        router.push('/help-center');
    };

    // Handle mobile menu toggle
    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsUserMenuOpen(false);
    };

    // User menu component
    const UserMenu = ({ className = "" }) => (
        <div className={`bg-white shadow-lg rounded-lg border border-gray-200 py-2 min-w-[200px] ${className}`}>
            {isLoggedIn ? (
                <>
                    {/* User Info */}
                    {user.name && user.email && (
                        <div
                            className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                            onClick={handleProfileClick}
                        >
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-gray-800 flex items-center">
                                    <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-600 w-4 h-4" />
                                    {user.name}
                                </span>
                                <span className="text-xs text-gray-500 flex items-center mt-1">
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-600 w-4 h-4" />
                                    {user.email}
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Menu Items */}
                    <div
                        className="px-4 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 flex items-center"
                        onClick={handleOrdersClick}
                    >
                        <FontAwesomeIcon icon={faCartShopping} className="mr-3 text-gray-600 w-4 h-4" />
                        <span className="text-sm text-gray-700">Orders</span>
                    </div>
                    
                    <div
                        className="px-4 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 flex items-center"
                        onClick={handleSupportClick}
                    >
                        <FontAwesomeIcon icon={faHeadset} className="mr-3 text-gray-600 w-4 h-4" />
                        <span className="text-sm text-gray-700">Support</span>
                    </div>
                    
                    <div
                        className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-red-600 flex items-center"
                        onClick={handleLogout}
                    >
                        <FontAwesomeIcon icon={faSignOut} className="mr-3 w-4 h-4" />
                        <span className="text-sm">Logout</span>
                    </div>
                </>
            ) : (
                <div
                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-blue-600 flex items-center"
                    onClick={handleLogin}
                >
                    <FontAwesomeIcon icon={faSignIn} className="mr-3 w-4 h-4" />
                    <span className="text-sm">Login</span>
                </div>
            )}
        </div>
    );

    if (!isMounted) {
        return null; // Prevent hydration mismatch
    }

    return (
        <>
            <div className="nav__container bg-white sticky top-0 z-50 shadow-sm">
                <nav className="flex items-center justify-between px-4 md:px-0 py-2 max-w-7xl mx-auto">
                    {/* Logo */}
                    <Link href="/" title="Home Services" className="flex-shrink-0">
                        <img
                            src="https://www.accareindia.com/images/logos/accareindia_logo.svg"
                            alt="AC Care India logo"
                            title="AC Care India"
                            className="h-12 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex gap-6 flex-1 justify-center">
                        {menuData.map(({ label, href, children }, index) => (
                            <MenuItem key={index} label={label} href={href} children={children} />
                        ))}
                    </ul>

                    {/* Desktop Right Section */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* User Menu */}
                        <div className="relative" ref={userMenuRef}>
                            <button
                                onClick={handleUserIconClick}
                                className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                title="User Profile"
                                aria-label="User menu"
                            >
                                <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                            </button>

                            {isUserMenuOpen && (
                                <div className="absolute top-12 right-0 z-50">
                                    <UserMenu />
                                </div>
                            )}
                        </div>

                        {/* Phone Number */}
                        <div className="flex items-center bg-blue-600 rounded-xl gap-1 px-0.5">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <img
                                    src="/assets/images/Call (2).webp"
                                    alt="Call For Services"
                                    className="w-8 h-8 object-contain"
                                    title="For calling contact +91 9311587715"
                                />
                            </div>
                            <a
                                href="tel:+91-9311587715"
                                className="text-gray-800 hover:text-white transition-colors font-medium"
                                title="Call for services"
                            >
                                +91-9311587715
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden" ref={mobileMenuRef}>
                        <button
                            onClick={handleMobileMenuToggle}
                            className="w-10 h-10 rounded-lg bg-gray-50 text-blue-600 hover:bg-gray-100 transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Toggle mobile menu"
                        >
                            <FontAwesomeIcon 
                                icon={isMobileMenuOpen ? faTimes : faAlignJustify} 
                                className="w-5 h-5" 
                            />
                        </button>

                        {/* Mobile Menu Dropdown */}
                        {isMobileMenuOpen && (
                            <div className="absolute top-16 right-4 left-4 bg-white shadow-xl rounded-lg border border-gray-200 py-4 z-50 max-h-96 overflow-y-auto">
                                {/* Mobile Navigation Links */}
                                {/* <div className="px-4 pb-4 border-b border-gray-200">
                                    <h3 className="text-sm font-semibold text-gray-600 mb-3">Services</h3>
                                    {menuData.map(({ label, href }, index) => (
                                        <Link
                                            key={index}
                                            href={href}
                                            className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded px-2 transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </div> */}

                                {/* Mobile User Menu */}
                                <div className="px-4 pt-4">
                                    <UserMenu />
                                </div>

                                {/* Mobile Phone */}
                                <div className="px-4 pt-4 bg-blue-600 text-white border-t border-gray-200 mt-4">
                                    <a
                                        href="tel:+91-9311587715"
                                        className="flex items-center gap-3 py-2 rounded px-2  text-white"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                                        <span className="font-medium">+91-9311587715</span>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>

            {/* Login Modal */}
            <PhoneVerification 
                setShowModal={setShowLoginModal} 
                showModal={showLoginModal} 
            />
        </>
    );
}

export default MegaMenu;