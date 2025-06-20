import { postdata } from "./postData";
import PostCard from "./Postcard";
const Blogpost = () => {
    console.log(postdata)
    return (
        <div>
            <h1>Blog Post</h1>
            {postdata.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Blogpost;