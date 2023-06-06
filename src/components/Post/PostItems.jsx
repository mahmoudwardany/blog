import { Link } from "react-router-dom";

const PostItem = ({post,username,userId}) => {
  const profileLink= userId?`/profile/${userId}`:`/profile/${post?.user._id}`
    return (
      <div className="post-item">
      <div className="post-item-image-wrapper">
        <img src={post.image.url} alt="" className="post-itme-image" />
      </div>
      <div className="post-item-info-wrapper">
        <div className="post-item-info">
          <div className="post-item-author">
            <strong>Author: </strong>
            <Link to={profileLink} className="link-underline-opacity-0 mb-2"><span>
              {post?.user?.username} {username}
              {post.user.isAdmin?<span className="mx-2 bg-danger p-1 rounded-3 text-white mb-2">Admin</span>:""}
              </span></Link>
          </div>
          <div className="post-itme-date">
            {new Date(post?.createdAt).toDateString()}
          </div>
        </div>
        <div className="post-item-details">
          <h4 className="post-item-title">{post?.title}</h4>
          <Link className="post-item-category" to={`/posts/categories/${post?.category}`}>{post.category}</Link>
        </div>
        <p className="post-item-description">
          {post?.description}
        </p>
        <Link className="post-item-link" to={`/posts/details/${post._id}`}>
          Read More...
        </Link>
      </div>
    </div>
      );
}
 
export default PostItem;