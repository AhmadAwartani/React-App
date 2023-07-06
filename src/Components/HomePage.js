import Admin from "./Admin";
import DrinksList from "./DrinksList";
import Footer from "./Footer";
import Header from "./Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <DrinksList />
      {/* <Admin /> */}
      <Footer />
    </>
  );
}
