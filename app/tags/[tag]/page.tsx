import { PostCard } from "nextra-theme-blog";
import { getPosts, getTags } from "../../posts/get-posts";
import { Metadata } from "next";

interface TagParams {
  tag: string;
}

interface TagProps {
  params: Promise<TagParams>;
}

export async function generateMetadata(props: TagProps): Promise<Metadata> {
  const params = await props.params;
  return {
    title: `Posts Tagged with "${decodeURIComponent(params.tag)}"`,
  };
}

export async function generateStaticParams() {
  const allTags = await getTags();
  return Array.from(new Set(allTags)).map((tag) => ({ tag }));
}

interface TagPageProps {
  params: Promise<TagParams>;
}

export default async function TagPage(props: TagPageProps) {
  const params = await props.params;
  const metadata = await generateMetadata({ params: props.params });
  const title = typeof metadata.title === "string" ? metadata.title : "";
  const posts = await getPosts();
  return (
    <>
      <h1>{title}</h1>
      {posts
        .filter((post) =>
          post.frontMatter.tags.includes(decodeURIComponent(params.tag))
        )
        .map((post) => (
          <PostCard key={post.route} post={post} />
        ))}
    </>
  );
}
