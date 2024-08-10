import React from 'react';
import '../components/Latestblog.css';

const blogs = [
    {
        title: "My Depression Experience in 2020",
        author: "Hannah Linus",
        image: "../images/Thubnail.png"
    },
    {
        title: "My Depression Experience in 2020",
        author: "Hannah Linus",
        image: "../images/Thubnail.png"
    },
    {
        title: "My Depression Experience in 2020",
        author: "Hannah Linus",
        image: "../images/Thubnail.png"
    },
    {
        title: "My Depression Experience in 2020",
        author: "Hannah Linus",
        image: "../images/Thubnail.png"
    },
    {
        title: "My Depression Experience in 2020",
        author: "Hannah Linus",
        image: "../images/Thubnail.png"
    },
    {
        title: "My Depression Experience in 2020",
        author: "Hannah Linus",
        image: "../images/Thubnail.png"
    },
    {
        title: "My Depression Experience in 2020",
        author: "Hannah Linus",
        image: "../images/Thubnail.png"
    },
    {
        title: "My Depression Experience in 2020",
        author: "Hannah Linus",
        image: "../images/Thubnail.png"
    }
];

const LatestBlog = () => {
    return (
        <div className="latest-blog-container">
            <h1>Latest Blog</h1>
            <p>Keep yourself motivated with our inspiring blogs</p>
            <div className="blogs">
                {blogs.map((blog, index) => (
                    <div className="blog" key={index}>
                        <img src={blog.image} alt={blog.title} />
                        <h2>{blog.title}</h2>
                        <p>By {blog.author}</p>
                    </div>
                ))}
            </div>
            <button className="view-more">View More</button>
        </div>
    );
};

export default LatestBlog;
