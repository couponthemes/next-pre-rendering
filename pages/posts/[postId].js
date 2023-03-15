import Link from "next/link";
import { useRouter } from "next/router";

function Post({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h3>Loading. . . </h3>;
  }
  return (
    <>
      <h3>
        {post.id} . {post.title}
      </h3>
      <p>{post.body}</p>
      <button>
        <Link href={"/posts"}>Back To Posts</Link>
      </button>
      
    </>
  );
}

export default Post;

export async function getStaticPaths() {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await res.json();

  //   const postPaths = data.map((post) => {
  //     return {
  //       params: { postId: `${post.id}` },
  //     };
  //   });
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    // paths: postPaths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  //   console.log(context);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();
  //   console.log(data);

  if (!data.id) {
    console.log("not found data ", data);
    return {
      notFound: true,
    };
  }

  console.log(`generating page for post/post/${params.postId}`);
  return {
    props: {
      post: data,
    },
  };
}
