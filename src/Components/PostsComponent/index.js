import { useEffect, useState } from "react";

const Post = ({ post }) => {
  return <li>{` ${post.userId}  -  ${post.title}`}</li>;
};

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    //Define the side effect inside
    const getPosts = async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((response) => {
          setPosts(response);
        })
        .catch((error) => console.log(error));
    };
    // Call it
    getPosts();
    // return it for unmounting
    return getPosts;
  }, []);

  useEffect(() => {
    if (userId && posts) {
      var filtered = posts.filter(
        (item) => item.userId.toString() === userId.toString()
      );
      setUserPosts(filtered);
    }
  }, [userId, posts]);

  return (
    <div>
      <input
        style={{ margin: 20 }}
        type="number"
        min={1}
        value={userId}
        max={10}
        placeholder="User ID"
        onChange={(e) => setUserId(e.target.value)}
      />
      <ul>
        {userPosts &&
          userPosts.map((item, index) => <Post key={index} post={item} />)}
      </ul>
    </div>
  );
};

export default PostsComponent;
