import BlogBanner from "./BlogBanner";
import BlogsList from "./BlogsList";

const BlogPage = () => {
    return (
        <div>
            <BlogBanner />

            <BlogsList className="mt-36 mb-40 px-40" />
        </div>
    )
}
export default BlogPage;