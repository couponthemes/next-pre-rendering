import Link from "next/link";
import User from "../components/user";

function UserList({ users }) {
  // console.log(users);
  return (
    <>
      <h1>User List</h1>
      <Link href={'/'}>Home</Link>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
