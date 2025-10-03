import React from "react";

type SupportButtonProps = {
    label?: string;
    onClick?: () => void;
};

const SupportButton: React.FC<SupportButtonProps> = ({ label = "Soutenir", onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium shadow transition active:scale-95"
        >
            {label}
        </button>
    );
};

export default SupportButton;