import BookMark from "../BookMark/BookMark";

/* eslint-disable react/prop-types */
const BookMarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:1/3 ml-5 bg-gray-300 rounded-xl mt-5">
            <div>
                <h3 className="text-3xl">Reding Time: {readingTime}</h3>
            </div>
            <h1 className="text-2xl text-center mt-5">BookMarks Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <BookMark key={idx} bookmark={bookmark}></BookMark>)
            }

        </div>
    );
};

export default BookMarks;