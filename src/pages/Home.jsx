import { Users } from "../components/Users";

const Home = () => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="title">Welcome to Users Events App main page!</h1>

          <Users />
        </div>
      </section>
    </main>
  );
};

export default Home;
