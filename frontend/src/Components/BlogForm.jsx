import React, { useState } from "react";


const BlogForm = ({ onCreate }) => {
    const [formData, setFormData] = useState({ title: "", content: "", author: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedData = {
            title: formData.title.trim(),
            content: formData.content.trim(),
            author: formData.author.trim(),
        };

        if (!trimmedData.title || !trimmedData.content || !trimmedData.author) {
            alert("All fields are required!");
            return;
        }

        onCreate(trimmedData);
        setFormData({ title: "", content: "", author: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
            <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} required />
            <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
            <button type="submit">Add</button>
        </form>
    );
};

export default BlogForm;
