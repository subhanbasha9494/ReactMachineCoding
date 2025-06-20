const PostCard = ({ post }) => {
    return (
        <div className="post-card">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
};

export default PostCard;
