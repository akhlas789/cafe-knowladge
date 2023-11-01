import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3 mx-auto">
            <h1 className="text-3xl">Blogs: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;