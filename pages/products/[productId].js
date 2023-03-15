import Link from "next/link";
import { useRouter } from "next/router";

function Product({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h3>Loading. . . </h3>;
  }
  return (
    <>
      <h3>
        {product.id} . {product.title}
      </h3>
      <p>Description: {product.description}</p>
      <p>
        {" "}
        <b>Price:</b> {product.price}
      </p>
      <button>
        <Link href={"/products"}>Back To Products</Link>
      </button>
    </>
  );
}

export default Product;

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
        params: { productId: "1" },
      },
      {
        params: { productId: "2" },
      },
    ],
    // paths: postPaths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  //   console.log(context);
  const res = await fetch(`http://localhost:4000/products/${params.productId}`);
  const data = await res.json();
  //   console.log(data);

  if (!data.id) {
    console.log("not found data ", data);
    return {
      notFound: true,
    };
  }

  console.log(`generating / regenerating page for /product/${params.productId}`);
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}
