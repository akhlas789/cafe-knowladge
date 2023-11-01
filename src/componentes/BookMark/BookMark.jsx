/* eslint-disable react/prop-types */

const BookMark = ({bookmark}) => {
    return (
        <div className="bg-slate-200 p-4 m-4 rounded-xl mt-5">
            <h3 className="text-xl ml-2">{bookmark.title}</h3>

        </div>
    );
};

export default BookMark;