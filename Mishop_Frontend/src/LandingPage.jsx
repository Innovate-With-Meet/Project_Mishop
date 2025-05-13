import React from 'react';
import WildFire1 from "./Images/WildFire1.jpg";

export const LandingPage = () => {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <img
                src={WildFire1}
                alt='Wild Fire 1'
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: "100vh",
                    width: "100vw",
                    objectFit: "cover",
                    zIndex: -1
                }}
            />
            <h1
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'rgb(240, 168, 14)',
                    fontSize: '3rem',
                    textShadow: '2px 2px 4px rgba(235, 16, 16, 0.7)',
                    backgroundColor: 'rgba(0, 0, 0, 0.84)', // Semi-transparent background
                    padding: '1rem 2rem', // Adds padding around the text
                    borderRadius: '8px', // Rounds the corners of the background
                    mixBlendMode: 'screen' // Optional: Blends the text with the image
                }}
            >
                Project_Mishop For Wild Fire
            </h1>
        </div>
    );
};