import BookMark from "../BookMark/BookMark";

/* eslint-disable react/prop-types */
const BookMarks = ({bookmarks}) => {
    return (
        <div className="md:1/3 ml-5 bg-gray-300 rounded-xl mt-5">
            <h1 className="text-2xl text-center mt-5">BookMarks Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>)
            }
        </div>
    );
};

export default BookMarks;