import BlogCard from "./BlogCard";
import { blogs_list_data } from "./data";

interface BlogsListProps {
    className?: string;
}

const BlogsList = ({
    className
}: BlogsListProps) => {
    return (
        <div className={`flex flex-col gap-12 ${className}`}>
            {blogs_list_data.map((blog, index) => {
                return (
                    <BlogCard key={index} data={blog} />
                )
            })}
        </div>
    )
}
export default BlogsList;