import React, { useEffect, useState } from "react";
import audio from "../assets/images/audio.png";
import video from "../assets/images/video.png";
import more from "../assets/images/more.png";
import camoff from "../assets/images/camoff.jpg"
import offvideo from "../assets/images/offvideo.png"
import offaudio from "../assets/images/offaudio.png"
import { Container, Row, Col, Button } from "react-bootstrap";
import { Twilio, createLocalVideoTrack, TrackPublication, Participant, Track, connect, createLocalTracks, LocalParticipant } from 'twilio-video'

function Buttonvid() {
  const [state, setState] = useState(true);

  const buttonHandler = () => {
    setState((current) => !current);
    console.log(state);
  };

  const [states, setStates] = useState(true);

  const buttonHandlers = () => {
    setStates((current) => !current);
    console.log(states);
  };

  const [isVideoActive, setIsVideoActive] = useState(true)

  const getVideo = async() => {

      setIsVideoActive((current) => !current);
      const tracks = await createLocalTracks();
      const box = document.getElementById("box");
      const LocalVideoTrack = tracks.find(track => track.kind === 'video');
      box.innerHTML = ""
      box.appendChild(LocalVideoTrack.attach());
  }

  const stopVideo = async() => {
    console.log("tutup");
    setIsVideoActive((current) => !current);

    const box = document.getElementById("box");
    const tracks = await createLocalTracks();
    const LocalVideoTrack = tracks.find(track => track.kind === 'video');
    LocalVideoTrack.stop()

    console.log(tracks);
    
    box.innerHTML = '<img src="' + camoff + '" width="100%" />'
  }

  console.log(isVideoActive);

  

  useEffect(()=> {
    if(isVideoActive){
      getVideo()
    }
  }, [])


  // async function start() {
  //   const startButton = document.getElementById("start")
  //   if (startButton.value === "on") {
  //       startButton.value = "off"
  //       startButton.innerHTML = '<img src="' + video + '" width="23px"/>'
  //       const tracks = await createLocalTracks();
  //       const box = document.getElementById("box");
  //       const LocalVideoTrack = tracks.find(track => track.kind === 'video');
  //       box.innerHTML = ""
  //       box.appendChild(LocalVideoTrack.attach());
  //   } else {
  //       startButton.value = "on"
  //       const tracks = await createLocalTracks();
  //       const box = document.getElementById("box");
  //       box.innerHTML = '<img src="' + camoff + '" width="100%" />'
  //       startButton.innerHTML = '<img src="' + offvideo + '" width="23px"/>'
  //       tracks.stop()
  //   }
  // }

// start()


  return (
    <Container style={{ position: "absolute", top: 380, left: 280 }}>
      <Row>
        <Col className="bg-white rounded-4 p-3 d-flex" sm={3}>
          <Button
            className="btn me-2 border-0"
            onClick={buttonHandler}
            style={
              
              { backgroundColor: "#DDE7FF" }
                
            }
          >
            {state ? 
            <img
              src={audio}
              width={23}
              height={20}
              style={{ objectFit: "contain" }}
              alt=""
            /> :
            <img
              src={offaudio}
              width={23}
              height={20}
              style={{ objectFit: "contain" }}
              alt=""
            />}
          </Button>


          <Button
              className="btn me-2 border-0"
              onClick={ 
                isVideoActive ? stopVideo : getVideo
              }
              style={
                { backgroundColor: "#DDE7FF" }
              }
          >

          {isVideoActive ? 
            <img
              src={video}
              width={23}
              height={20}
              style={{ objectFit: "contain" }}
              alt=""
            /> :
            <img
              src={offvideo}
              width={23}
              height={20}
              style={{ objectFit: "contain" }}
              alt=""
            />}
          </Button>

          <Button
            className="btn border-0"
            style={{ backgroundColor: "#F1F5F9" }}
          >
            <img
              src={more}
              width={23}
              style={{ objectFit: "contain" }}
              alt=""
            />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Buttonvid;
