import React, { useState, useEffect } from "react";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import ChooseServer from "@components/chooseServer/chooseServer";
import Categories from "@/components/Categories/Categories"; // thể loại truyện theo server ( mỗi server lại có thể loại khác nhau )

const ClientHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedServer, setSelectedServer] = useState(
        localStorage.getItem("selectedServer") || null
    );

    return (
        <header className="w-full bg-gray-900 shadow-md">
            <div className="container mx-auto flex items-center justify-between py-3 text-white">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="/logo_think_diff_us.png" alt="Logo" className="w-20 mr-3 hidden md:block" />
                    <span className="text-2xl font-semibold tracking-wide">MangaSocial</span>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden text-center lg:flex space-x-6 text-lg">
                    <a href="#" className="hover:text-gray-400">Thể loại</a>
                    <ChooseServer selectedServer={selectedServer} setSelectedServer={setSelectedServer} />
                    <a href="#" className="hover:text-gray-400">Về chúng tôi</a>
                    <a href="#" className="hover:text-gray-400">Chính sách</a>
                </nav>

                {/* Search & Login (Desktop) */}
                <div className="hidden lg:flex items-center space-x-4">
                    <div className="relative flex items-center bg-gray-800 px-3 py-2 rounded border border-gray-600">
                        <FaSearch className="text-white mr-2" />
                        <input type="text" placeholder="Tìm kiếm..." className="bg-transparent text-white focus:outline-none" />
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded">
                        Đăng nhập
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center space-x-4">
                    <button className="text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-8 6h8" />
                        </svg>
                    </button>
                    <FaRegUserCircle className="text-3xl" />
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="container mx-auto lg:hidden bg-gray-800 text-white px-6 py-4 space-y-3">
                    <a href="#" className="block w-full text-left hover:text-gray-400">Thể loại</a>
                    <ChooseServer selectedServer={selectedServer} setSelectedServer={setSelectedServer} />
                    <a href="#" className="block w-full text-left hover:text-gray-400">Về chúng tôi</a>
                    <a href="#" className="block w-full text-left hover:text-gray-400">Chính sách</a>
                </div>
            )}
        </header>
    );
};

export default ClientHeader;