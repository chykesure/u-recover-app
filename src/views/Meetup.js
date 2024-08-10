import React from 'react';
import '../components/Meetup.css';

const counselors = [
    {
        name: "Wade Warren",
        title: "Therapist",
        image: "../images/cou1.png"
    },
    {
        name: "Jenny Wilson",
        title: "Human Right Activist",
        image: "../images/cou2.png"
    },
    {
        name: "Albert Flores",
        title: "Marriage Coach",
        image: "../images/cou3.png"
    },
    {
        name: "Hannah Linus",
        title: "Motivational Speaker",
        image: "../images/cou4.png"
    }
];

const Meetup = () => {
    return (
        <div className="meetup-container">
            <h1>Meet Our Counsellors</h1>
            <div className="underline"></div>
            <div className="counselors">
                {counselors.map((counselor, index) => (
                    <div className="counselor" key={index}>
                        <img src={counselor.image} alt={counselor.name} />
                        <h2>{counselor.name}</h2>
                        <p>{counselor.title}</p>
                    </div>
                ))}
            </div>
            <button className="view-more">View More</button>
        </div>
    );
};

export default Meetup;
