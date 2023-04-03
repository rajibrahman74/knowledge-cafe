import React from "react";

// blog components
const Blogs = (props) => {
  // destructuring the object
  const { poster, author_image, title, author_name, publish_date, read_time } =
    props.blog;

  // get the handleBookmarked from props
  const handleBookmarked = props.handleBookmarked;

  // get the handleReadTime from props
  const handleReadTime = props.handleReadTime;

  return (
    <div>
      <div className="pb-12">
        <hr />
      </div>
      <img className="w-full h-80 rounded-md" src={poster} alt="" />
      <div className="flex justify-between">
        <div className="flex gap-3 items-center py-5">
          <img className="w-12 h-12 rounded-full" src={author_image} alt="" />
          <span>
            <h3 className="text-xl font-bold">{author_name}</h3>
            <p className="text-base text-[#11111199]">{publish_date}</p>
          </span>
        </div>
        <div className="flex items-center text-lg gap-1 text-[#11111199]">
          <p>{read_time} min read</p>
          <button onClick={() => handleBookmarked(props.blog)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <button
        onClick={() => handleReadTime(props.blog)}
        className="text-[#6047EC] underline text-xl font-semibold pt-4 pb-8"
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blogs;