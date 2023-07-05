import { folder, useControls } from "leva";
import { useEffect } from "react";
import { AudioSourceControlsProps } from "./common";

const LivestreamAudioControls = ({ audio }: AudioSourceControlsProps) => {
  const { streamUrl } = useControls({
    Audio: folder({
      streamUrl: {
        value: "https://icecast.radiofrance.fr/fipelectro-midfi.mp3",
        options: {
          Electro: "https://icecast.radiofrance.fr/fipelectro-midfi.mp3",
          Rock: "https://icecast.radiofrance.fr/fiprock-midfi.mp3",
          Jazz: "https://icecast.radiofrance.fr/fipjazz-midfi.mp3",
          Groove: "https://icecast.radiofrance.fr/fipgroove-midfi.mp3",
          Pop: "https://icecast.radiofrance.fr/fippop-midfi.mp3",
          Metal: "https://icecast.radiofrance.fr/fipmetal-midfi.mp3",
          Hip_Hop: "https://icecast.radiofrance.fr/fiphiphop-midfi.mp3",
          World: "https://icecast.radiofrance.fr/fipworld-midfi.mp3",
          Reggae: "https://icecast.radiofrance.fr/fipreggae-midfi.mp3",
        },
        order: -99,
      },
    }),
  });

  /**
   * Make sure the correct stream is playing
   */
  useEffect(() => {
    audio.pause();
    audio.src = streamUrl;
    const promise = audio.play();
    if (promise !== undefined) {
      promise
        .then(() => console.log(`Playing ${streamUrl}`))
        .catch((error) => {
          // Auto-play was prevented
          console.error(`Error playing ${streamUrl}`);
        });
    }
    return () => {
      audio.pause();
    };
  }, [audio, streamUrl]);

  return <></>;
};

export default LivestreamAudioControls;
