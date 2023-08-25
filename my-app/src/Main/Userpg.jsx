import React from "react";
import {
  ReactMediaRecorder,
  useReactMediaRecorder,
} from "react-media-recorder";

function Userpg() {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  const handlesave = () => {
    if (mediaBlobUrl) {
      localStorage.setItem("record", mediaBlobUrl);
      alert("recording saved to local storage");
    } else {
      alert("no recording available");
    }
  };

  return (
    <div>
      <ReactMediaRecorder
        video
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <video src={mediaBlobUrl} controls autoPlay loop />
            <button onClick={handlesave}> save recording</button>
          </div>
        )}
      />

      <div>
        <p>{status}</p>
        <button onClick={startRecording}>Start Recording</button>
        <button onClick={stopRecording}>Stop Recording</button>
        <audio src={mediaBlobUrl} controls autoPlay loop />

        <button onClick={handlesave}> save recording</button>
      </div>
    </div>
  );
}

export default Userpg;
