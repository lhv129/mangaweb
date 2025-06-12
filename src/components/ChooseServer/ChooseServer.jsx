import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axiosClient from "@apis/axiosClient";
import { useNavigate } from "react-router-dom";

const ChooseServer = ({ selectedServer, setSelectedServer }) => {
        const [servers, setServers] = useState({});
        const [showDropdown, setShowDropdown] = useState(false);
        const navigate = useNavigate();
    
        useEffect(() => {
            const fetchServers = async () => {
                try {
                    const res = await axiosClient.get("/");
                    setServers(res.data.endpoints);
    
                    if (!selectedServer) {
                        const firstServer = Object.keys(res.data.endpoints)[0];
                        setSelectedServer(firstServer);
                        localStorage.setItem("selectedServer", firstServer);
                        navigate("/");
                    }
                } catch (error) {
                    console.error("Lỗi khi tải danh sách server:", error);
                }
            };
    
            fetchServers();
        }, []);
    
        const handleSelectServer = (serverKey) => {
            setSelectedServer(serverKey);
            localStorage.setItem("selectedServer", serverKey);
            window.location.reload(); // reload lại thì mới render lại pages thì mới nhận được selectedServer ở Home
        };

    return (
        <div className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
        >
            <a className="rounded cursor-pointer">
                Máy chủ: {selectedServer?.toUpperCase() || "Đang tải..."}
            </a>
            {showDropdown && (
                <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bg-gray-800 w-full"
                >
                    {Object.keys(servers).map((serverKey) => (
                        <li
                            key={serverKey}
                            className={`p-2 hover:bg-gray-700 cursor-pointer ${selectedServer === serverKey ? "font-bold" : ""
                                }`}
                            onClick={() => handleSelectServer(serverKey)}
                        >
                            {serverKey.toUpperCase()}
                        </li>
                    ))}
                </motion.ul>
            )}
        </div>
    );
};

export default ChooseServer;