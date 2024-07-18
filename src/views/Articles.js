import React from 'react';
import '../components/Articles.css';

const articles = [
    {
        title: "Overcoming Suicidal Thoughts",
        content: "Lorem ipsum dolor sit amet Arcu lacus habitasse pellentesque mi. Scelerisque elit volutpat fhh posuere justo non tincidunt tincidunt.",
        image: "../images/Frame.png"
    },
    {
        title: "Overcoming Suicidal Thoughts",
        content: "Lorem ipsum dolor sit amet Arcu lacus habitasse pellentesque mi. Scelerisque elit volutpat fhh posuere justo non tincidunt tincidunt.",
        image: "../images/Frame.png"
    },
    {
        title: "Overcoming Suicidal Thoughts",
        content: "Lorem ipsum dolor sit amet Arcu lacus habitasse pellentesque mi. Scelerisque elit volutpat fhh posuere justo non tincidunt tincidunt.",
        image: "../images/Frame.png"
    },
    {
        title: "Overcoming Suicidal Thoughts",
        content: "Lorem ipsum dolor sit amet Arcu lacus habitasse pellentesque mi. Scelerisque elit volutpat fhh posuere justo non tincidunt tincidunt.",
        image: "../images/Frame.png"
    }
];

const Articles = () => {
    return (
        <div className="articles-container">
            <h1>Our Latest Articles</h1>
            <p>Read our articles that covers diverse spheres of life</p>
            <div className="articles">
                {articles.map((article, index) => (
                    <div className="article" key={index}>
                        <img src={article.image} alt={article.title} />
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                    </div>
                ))}
            </div>
            <button className="view-more">View More</button>
        </div>
    );
};

export default Articles;
