/* eslint-disable react/prop-types */

import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handaleAddToBookmark, handaleMarkAsRead }) => {

    return (
        <div className='mb-20 sp-y-4'>
            <img className='w-full mb-8' src={blog.cover} alt={`cover picture of the title${blog.title}`} />

            <div className='flex justify-between mb-4'>

                <div className='flex mt-3'>
                    <img className='w-14 mb-5' src={blog.author_img} alt="" />
                    <div className='ml-5'>
                        <h3 className='text-xl'>{blog.author}</h3>
                        <p>{blog.posted_date}</p>
                    </div>
                </div>

                <div className='mt-3 flex items-center'>
                    <span>{blog.reading_time}min read</span>
                    <button onClick={() => handaleAddToBookmark(blog)} className='ml-2 text-red-600 text-2xl '><FaBookmark></FaBookmark></button>
                </div>

            </div>

            <h2 className='text-3xl'> {blog.title}</h2>
            <p>
                {
                    blog.hashtags.map((has) => <span key={has.id}><a href="">#{has}</a></span>)
                }
            </p>
            <button onClick={() => handaleMarkAsRead(blog.reading_time)} className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};

// Blog.propTypes = {
//     blog: PropTypes.object.isRequired,
//     handaleAddToBookmark:PropTypes.func
// }
export default Blog;