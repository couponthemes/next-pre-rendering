import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <>
      <div style={{ position: "relative", height: "160px", width: "300px", margin:"30px auto"}}>
        <Image
          src={"https://www.netnode.ch/sites/default/files/2022-08/nextjs.png"}
          fill
          style={{ objectFit: "contain" }}
          alt="next images"
        ></Image>
      </div>
      <button>
        <Link href={"/users"}>Users</Link>
      </button>
      <button>
        <Link href={"/posts"}>Posts</Link>
      </button>
      <button>
        <Link href={"/products"}>Products</Link>
      </button>
    </>
  );
}

export default Home;
