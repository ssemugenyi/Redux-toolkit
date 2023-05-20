import React from "react";
import PostAuthor from "./PostAuthors";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostExcerpt = ({ post }) => {
  return (
    <article>
      <h3 style={{ textTransform: "capitalize" }}>{post.title}</h3>
      <p>{post.body.substring(0, 100)}...</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostExcerpt;
