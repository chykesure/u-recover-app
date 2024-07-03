import React from 'react';
import '../components/Homepage.css'; // Adjust the path as necessary

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="images">
                <div className="image-container">
                    <img src="../images/pers1.png" alt="First" />
                    <div className="container">
                        <h2>Container 1</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Magnis enim eget tempor dolor fringilla sit urna nisl. Est sed feugiat nulla placerat pulvinar diam hendrerit tristique integer 1.</p>
                    </div>
                </div>
                <div className="image-container large-image">
                    <img src="../images/pers2.png" alt="Second" />
                    <div className="container">
                        <h2>Container 2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Magnis enim eget tempor dolor fringilla sit urna nisl. Est sed feugiat nulla placerat pulvinar diam hendrerit tristique integer 2.</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src="../images/pers3.png" alt="Third" />
                    <div className="container">
                        <h2>Container 3</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Magnis enim eget tempor dolor fringilla sit urna nisl. Est sed feugiat nulla placerat pulvinar diam hendrerit tristique integer 3.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
