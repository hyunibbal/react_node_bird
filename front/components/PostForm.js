import React from "react";
import { Button, Form, Input } from "antd";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "지금맨",
      },
      content: "첫 번째 게시글",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrT7OEKF4Ypa5bipljMxreuZKSebLc7Kbxg&usqp=CAU",
    },
  ],
};

const PostForm = () => {
  return (
    <Form encType="multipart/form-data" style={{ margin: "10px 0 20px" }}>
      <Input.TextArea
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {dummy.imagePaths.map((value, index) => {
          return (
            <div key={value} style={{ display: "inline-block" }}>
              <img
                src={"http://localhost:3000" + value}
                style={{ width: "200px" }}
                alt={value}
              />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default PostForm;
