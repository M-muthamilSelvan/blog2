import React, { useEffect, useState } from "react";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import EditBlog from "./components/EditBlog";
import { getBlogs, createBlog, updateBlog, deleteBlog } from "./api";

const App = () => {
    const [blogs, setBlogs] = useState([]);
    const [editingBlog, setEditingBlog] = useState(null); // Store selected blog

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        const data = await getBlogs();
        setBlogs(data);
    };

    const handleCreate = async (blogData) => {
        await createBlog(blogData);
        fetchBlogs();
    };

    const handleUpdate = async (updatedBlog) => {
        await updateBlog(updatedBlog._id, updatedBlog);
        setEditingBlog(null); // Close edit mode after update
        fetchBlogs();
    };

    const handleDelete = async (id) => {
        await deleteBlog(id);
        fetchBlogs();
    };

    return (
        <div>
            <h1> My Blog Posts</h1>
            
            
            {editingBlog ? (
                <EditBlog blogEdit={editingBlog} onUpdate={handleUpdate} />
            ) : (
                <BlogForm onCreate={handleCreate} />
            )}

            <BlogList blogs={blogs} onEdit={setEditingBlog} onDelete={handleDelete} />
        </div>
    );
};

export default App;
