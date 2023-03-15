function User({ user }) {
  return (
    <div
      style={{
        background: "#f1f1f1",
        width: "80%",
        margin: "auto",
        paddingTop: "1px",
        borderRadius:"6px"
      }}
      key={user.id}
    >
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <hr />
    </div>
  );
}

export default User;
