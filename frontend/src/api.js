const API_URL = "http://localhost:4000/api/blogs";

// Fetch all blogs
export const getBlogs = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch blogs");
        return await response.json();
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
};

// Create a new blog
export const createBlog = async (blogData) => {
    try {
        const response = await fetch(`${API_URL}/submit`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blogData),
        });
        return await response.json();
    } catch (error) {
        console.error("Error creating blog:", error);
    }
};

// Update blog
export const updateBlog = async (id, updatedData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, { 
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData),
        });
        if (!response.ok) throw new Error("Failed to update blog");
        return await response.json();
    } catch (error) {
        console.error("Error updating blog:", error);
    }
};

// Delete blog
export const deleteBlog = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, { 
            method: "DELETE",
        });
        if (!response.ok) throw new Error("Failed to delete blog");
        return await response.json();
    } catch (error) {
        console.error("Error deleting blog:", error);
    }
};
