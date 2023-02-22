import { Users } from "../components/Users";

const Home = () => {
  return (
    <main>
      <section className="section">
        <div className="container home">
          <h1 className="home__title">
            Welcome to Users Events App main page!
          </h1>

          <Users />
          <div className="home__wrap"></div>
        </div>
      </section>
    </main>
  );
};

export default Home;
