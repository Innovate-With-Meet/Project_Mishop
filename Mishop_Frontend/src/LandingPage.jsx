import React from 'react';
import WildFire1 from "./Images/WildFire1.jpg";
import WildFire2 from "./Images/Wildfire2.gif"
export const LandingPage = () => {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <img
                src={WildFire2}
                alt='Wild Fire 2'
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
                    position: 'fixed',
                    bottom: '10%', // Adjusts the distance from the bottom
                    right: '5%', // Adjusts the distance from the left
                    color: 'rgb(109, 93, 59)',
                    fontSize: '3rem',
                    textShadow: '2px 2px 4px rgba(235, 16, 16, 0.7)',
                    backgroundColor: 'rgba(0, 0, 0, 0.84)', // Semi-transparent background
                    padding: '0rem 2rem', // Adds padding around the text
                    borderRadius: '34px', // Rounds the corners of the background
                    mixBlendMode: 'screen' // Optional: Blends the text with the image
                }}
            >
                Project_Mishop For Save Our Forest
            </h1>
        </div>
    );
};