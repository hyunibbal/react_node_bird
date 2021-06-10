import React from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "지금맨",
      },
      postId: 1,
      content: "첫 번째 게시글",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrT7OEKF4Ypa5bipljMxreuZKSebLc7Kbxg&usqp=CAU",
    },
  ],
};

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map((post) => {
        return <PostCard key={post.postId} post={post} />;
      })}
    </div>
  );
};

export default Home;
