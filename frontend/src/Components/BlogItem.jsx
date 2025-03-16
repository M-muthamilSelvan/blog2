import React from "react";

const BlogItem = ({ blog, onEdit, onDelete }) => {
    return (
        <div className="blog-item">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p><strong>Author:</strong> {blog.author}</p>
            <button onClick={() => onEdit(blog)}>Edit</button>  {/* Send entire blog */}
            <button onClick={() => onDelete(blog._id)}>Delete</button>
        </div>
    );
};

export default BlogItem;
