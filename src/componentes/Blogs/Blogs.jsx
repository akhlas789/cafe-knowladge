/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
// import propTypes from 'prop-types'

const Blogs = ({ handaleAddToBookmark, handaleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3 mx-auto">
            <h1 className="text-3xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                    blog={blog}
                    handaleAddToBookmark={handaleAddToBookmark}
                    key={blog.id}
                    handaleMarkAsRead={handaleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

// Blogs.propTypes = {
//     handaleAddToBookmark:propTypes.func
// }

export default Blogs;