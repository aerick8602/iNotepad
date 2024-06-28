import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import './Loader.css';

const Loader = ({ loading, color = "#1A7499", size = 50 }) => {
    return (
        loading && (
            <div className="loader-overlay">
                <div className="loader-container">
                    <FadeLoader color={color} loading={loading} size={size} />
                </div>
            </div>
        )
    );
};

export default Loader;
