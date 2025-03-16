import React from "react";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs, onEdit, onDelete }) => {
    return (
        <ul className="blog-container">
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <li key={blog._id} className="blog-card">
                        <BlogItem blog={blog} onEdit={onEdit} onDelete={onDelete} />
                    </li>
                ))
            ) : (
                <p>No blogs available.</p>
            )}
        </ul>
    );
};

export default BlogList;
