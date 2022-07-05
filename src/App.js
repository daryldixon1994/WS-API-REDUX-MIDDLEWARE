import "./App.css";
import Counter from "./starter/components/Counter";
// import MoviesList from "./movieApp/components/MoviesList";
// import NavBar from "./movieApp/components/NavBar";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Counter />
                {/* <NavBar />
                <MoviesList /> */}
            </header>
        </div>
    );
}

export default App;
