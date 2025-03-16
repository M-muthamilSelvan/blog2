import React, { useEffect, useState } from "react";

const EditBlog = ({ blogEdit, onUpdate }) => {
    const [formData, setFormData] = useState({ title: "", content: "", author: "" });

    useEffect(() => {
        if (blogEdit) {
            setFormData(blogEdit); 
        }
    }, [blogEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Blog</h2>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            <textarea name="content" value={formData.content} onChange={handleChange} required />
            <input type="text" name="author" value={formData.author} onChange={handleChange} required />
            <button type="submit">Update Blog</button>
        </form>
    );
};

export default EditBlog;
