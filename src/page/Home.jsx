import {useEffect} from "react";
import loadable from "@loadable/component";
import { useClassifier, useWebcam } from 'react-tensorflow';
import {css} from '../layout/css';
import { Perf } from "r3f-perf";

const AudioPlayer = loadable(() => import("../audio/AudioPlayer"));

const mode = import.meta.env.VITE_APP_MODE;
const audioSource = import.meta.env.VITE_AUDIO_SOURCE;

function toggleFullScreen(elem) {
    // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
};

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [ videoRef, webcamTensor ] = useWebcam({ height: 224, width: 224 });
  
  useEffect(() => {
    toggleFullScreen(document.body);
  },[]);

  return (
    <div style={css.main}>
      <video 
        style={css.video}
        ref={videoRef} 
      /> 
      <AudioPlayer 
        startMode={mode} 
        audioSource={audioSource}
      >
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