import { useUser } from "../context/UserContext";

const Layout = ({ children }) => {
  const { user, login, logout } = useUser();
  return (
    <div>
      <header
        style={{
          width: "20rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <h3>Sensores app</h3>
        {user && <p>{user.displayName}</p>}
        <button onClick={user ? logout : login}>
          {user ? "logout" : "login"}
        </button>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
