import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../components/Homepage.css'; // Adjust the path as necessary

const HomePage = () => {
    return (
        <div className="home-page">
            <Carousel showThumbs={false}
                showStatus={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay
                interval={3000}>
                <div className="image-container">
                    <div className="image-overlay"></div>
                    <img src="../images/gp.png" alt="Main" />
                    <div className="text-columns">
                        <div className="container no-background">
                            <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                            <p>Romans 8:38-39 - "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."</p>
                        </div>
                        <div className="container no-background">
                            <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                            <p>Romans 8:38-39 - "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."</p>
                        </div>
                        <div className="container no-background">
                            <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                            <p>Romans 8:38-39 - "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."</p>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <div className="image-overlay"></div>
                    <img src="../images/gp.png" alt="Main" />
                    <div className="text-columns">
                        <div className="container no-background">
                            <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                            <p>Matthew 11:28-30 - "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light."</p>
                        </div>
                        <div className="container no-background">
                            <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                            <p>Matthew 11:28-30 - "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light."</p>
                        </div>
                        <div className="container no-background">
                            <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                            <p>Matthew 11:28-30 - "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light."</p>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <div className="image-overlay"></div>
                    <img src="../images/gp.png" alt="Main" />
                    <div className="text-columns">
                        <div className="container no-background">
                            <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                            <p>Isaiah 41:10 - "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."</p>
                        </div>
                        <div className="container no-background">
                            <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                            <p>Isaiah 41:10 - "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."</p>
                        </div>
                        <div className="container no-background">
                            <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                            <p>Isaiah 41:10 - "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."</p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default HomePage;
