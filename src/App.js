import "aframe";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import sky from "./img/mayur-more-epbkAB3ysGU-unsplash (1).jpg";
import mountain from "./models/mountain.glb";
// import Rocket from './Rocket';

function App() {
  const loader = new GLTFLoader();
  loader.load(mountain, (d) => {
    const entity = document.getElementById("mountain");
    entity.object3D.add(d.scene);
  });

  return (
    <a-scene>
      <a-assets>
        <img id="sky" src={sky} alt="背景" />
      </a-assets>

      <a-sky
        coler="#fff"
        material="src: #sky"
        rotation="0 0 0"
      >

        </a-sky>
      <a-entity id="mountain" position="0 0 0" ></a-entity>
      {/* <Rocket x={0} y={50} z={-80}/> */}
    </a-scene>
  );
}

export default App;
