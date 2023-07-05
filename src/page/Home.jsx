import loadable from "@loadable/component";
import { useClassifier, useWebcam } from 'react-tensorflow';
import {css} from '../layout/css';
import { Perf } from "r3f-perf";

const AudioPlayer = loadable(() => import("../audio/AudioPlayer"));

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [ videoRef, webcamTensor ] = useWebcam({ height: 224, width: 224 });

  return (
    <div style={css.main}>
      <video 
        style={css.video}
        ref={videoRef} 
      /> 
      <AudioPlayer >
        <Perf  
          position="bottom-right"
          antialias={true}
          colorBliend={true}
          style={{
            backgroundColor: 'transparent',
            left: 0,
          }}
        />
      </AudioPlayer>
    </div>
  );
};
export default Home;