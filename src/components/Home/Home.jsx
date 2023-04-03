import React, { useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import SideCard from "../SideCard/SideCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// home components
const Home = () => {
  const [blogs, setBlogs] = useState([]);

  // control the bookmarked state
  const [datas, setDatas] = useState([]);

  // total read time state
  const [totalReadTime, setTotalReadTime] = useState(0);

  // useEffect using for load json data from public folder
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // // Handle bookmarked function
  const handleBookmarked = (blog) => {
    // Check if the blog has already been bookmarked
    const alreadyBookmarked = datas.some((data) => data.id === blog.id);

    if (alreadyBookmarked) {
      // Show an toast biscut🙂 if the blog has already been bookmarked
      toast.error("You Have Already Bookmarked This Blog");

      const newDatas = [...datas, blog];
      setDatas(newDatas);
    } else {
      // Add the blog to the datas array
      const newDatas = [...datas, blog];
      setDatas(newDatas);
    }
  };

  // handleReadTime function
  const handleReadTime = (blog) => {
    const newTotalReadTime = totalReadTime + blog.read_time;
    setTotalReadTime(newTotalReadTime);
  };

  return (
    <React.Fragment>
      <div className="max-w-[1270px] mx-auto my-5 flex flex-col gap-4 md:flex-row">
        <article className="flex flex-col gap-2 p-5 shadow-xl md:w-3/4 rounded-md">
          {blogs.map((blog) => (
            <Blogs
              key={blog.id}
              blog={blog}
              handleBookmarked={handleBookmarked}
              handleReadTime={handleReadTime}
            />
          ))}
        </article>
        <article className="p-7 md:w-1/4">
          <SideCard datas={datas} totalReadTime={totalReadTime}></SideCard>
        </article>
      </div>
    </React.Fragment>
  );
};

export default Home;