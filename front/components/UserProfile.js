import React from "react";
import { Avatar, Card } from "antd";

const dummy = {
  nickname: "지금맨",
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};

const UserProfile = () => {
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
          {dummy.Post.length}
        </div>,
        <div key="twit">
          팔로잉
          <br />
          {dummy.Followings.length}
        </div>,
        <div key="twit">
          팔로워
          <br />
          {dummy.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
        title={dummy.nickname}
      />
    </Card>
  );
};

export default UserProfile;
