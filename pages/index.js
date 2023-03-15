import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Next JS Prerendering</h1>
      <button>
        <Link href={"/users"}>Users</Link>
      </button>
      <button>
        <Link href={"/posts"}>Posts</Link>
      </button>
    </>
  );
}

export default Home;
