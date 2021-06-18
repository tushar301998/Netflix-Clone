import './App.css';
import Banner from './Banner';
import Header from './Header';
import requests from './request'
import Row from './Row'


function App() {
  return (
    <div className="App">
     <Header />
     <Banner />
     <Row 
     isLargeRow = {true}
     title = "NETFLIX ORIGINALS"
     fetchUrl = {requests.fetchNetFlixOriginals}
     />
     <Row 
     title= "Trending Now"
     fetchUrl = {requests.fetchTreding}
     />
     <Row 
     title= "Top Rated"
     fetchUrl = {requests.fetchTopRated}
     />
     <Row 
     title= "Action Movie"
     fetchUrl = {requests.fetchActionMovies}
     />
     <Row 
     title= "Horrer Movie"
     fetchUrl = {requests.fetchHorroMovies}
     />
      <Row 
     title= "Comedy Movie"
     fetchUrl = {requests.fetchComedyMovies}
     />
     <Row 
     title= "Romance Movie"
     fetchUrl = {requests.fetchRomanticMovies}
     />
     <Row 
     title= "Documentaries"
     fetchUrl = {requests.fetchDocumentaries}
     />
    </div>
  );
}

export default App;
