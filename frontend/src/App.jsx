import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import DataGrid from "./components/DataGrid";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <main id="main">
        <SearchForm />
        <DataGrid />
      </main>
    </>
  );
}

export default App;
