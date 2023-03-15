import Link from "next/link";

function ProductList({ products }) {
  return (
    <>
      <h1>List of Products</h1>
      <h2>{}</h2>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`/products/${product.id}`}>
              <h3>
                {product.id} . {product.title} {product.price}
              </h3>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ProductList;

export async function getStaticProps() {
  console.log("Generating / Regenerating Products Data");
  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
