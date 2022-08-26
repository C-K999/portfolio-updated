import React from "react";
import food from "../images/skyline.png";
import Resume from "../r-ver1.pdf";

function Experiences() {
  return (
    <article id="experiences" class="experiences">
      <section>
        <h2>Experiences</h2>
        <p>
          I had experience with a variety of menial office tasks during my high
          school days as a volunteer at a senior housing facility, and I had
          experience with conducting interviews related to entrepreneurship and
          start up businesses from a university course.
        </p>
      </section>
      <section>
        <img src={food} alt="food" />
        <p>
          Aside from that, I've also had prior job experiences working at a
          local pizza restaraunt during my college days. Additionally, I worked
          in Customer Support in an Amazon Locker Room Office for half a year
          before I took a year learn news skills to better myself. Nonetheless,
          in addition to having a well-rounded set of skills, I have quite the
          experience in dealing with all sorts of customers.
        </p>
        <a href={Resume}>Resume</a>
      </section>
    </article>
  );
}

export default Experiences;
