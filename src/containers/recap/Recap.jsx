import React from "react";
import "./recap.css";
import VideoPlayer from "../../components/video player/VideoPlayer";
import { Register } from "../../components";

export default function Recap() {
  return (
    <div className="recap_container">
      <h1 className="recap_card_detail_title">Previous Warhacks</h1>
      <div
        style={{ border: "1px solid #8D7365", width: "230px", height: "0px" }}
      ></div>
      <VideoPlayer
        link={
          "https://player.vimeo.com/video/902819559?title=0&byline=0&pip=0&playsinline=0&portrait=0&badge=0&autopause=0player_id=0&amp;app_id=58479"
        }
        title={"Warhacks 2023 Recap"}
        className="recap_video"
      />
      <p className="recap_card_detail_text">
        Warhacks 2023 was a great success! View the article below from Vanier
        News to learn more about the event and their winners.{" "}
      </p>
      <Register
        text="Read the Article"
        background="rgb(194, 204, 214)"
        color="black"
        margin="16px 0"
        href="https://www.vaniercollege.qc.ca/newsroom/vanier-students-win-first-and-second-place-at-the-2023-warhacks-concordia-hackathon/"
      />
    </div>
  );
}
