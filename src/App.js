import { useState } from 'react';
import './App.css';
import one from './img/1.jpg';
import two from './img/2.jpg';
import three from './img/3.jpg';
import four from './img/4.jpg';
import five from './img/5.jpg';
import six from './img/6.jpg';
import seven from './img/7.jpg';


const images = [one, two, three, four, five, six, seven];

const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor='images-loaded'>Loading images...</label>
      <progress id='images-loaded' max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
)

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = () => {
    setCurrentImage((currentImage) => {
      return currentImage < (images.length - 1) ? currentImage + 1 : 0;
    });
  }

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1)
  }

  return (
    <section>
      <header>
        <h1>Jolly</h1>
        <h2>A photography project <br /> by Maz & Chasseur</h2>
      </header>
      <figure>
        {numLoaded < images.length && <Loading calculatedWidth={(numLoaded / images.length) * 100} />}
        <figcaption>{currentImage + 1} / {images.length}</figcaption>
        {images.map((imageURL, index) => (
          <img key={imageURL} src={imageURL} alt="Chasseur" onClick={handleClick} onLoad={handleImageLoad} className={currentImage === index ? "display" : "hide"} />
        ))}
      </figure>
    </section>
  );
}

export default App;
