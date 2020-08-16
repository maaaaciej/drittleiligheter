import React from "react";
import "./about.styles.scss";

const About = () => {
  return (
    <div className="about">
      <h2 className="about-title">Om Drittleiligheter</h2>
      <div className="about-body">
        <p>
          Jeg lagde denne nettsiden som en platform for å kunne dele
          erfaringer/advare andre sårbare, unge folk, slik at de slipper å
          flytte til en drittleilighet, slik jeg, og veldig mange andre
          dessverre har gjort.
        </p>
        <p>
          Dette er en førsteversjon, så alt er naturligvis ikke på plass enda.
          Jobber nå med et sorteringssystem, for å enkelt kunne differensiere
          mellom ulike byer, samt en egen oversikt over utleiere, og folks
          erfaringer med disse.
        </p>
        <p>
          Dersom du er utleier og mener noe som er publisert her ikke stemmer,
          ta gjerne kontakt, da alle saker er forskjellige utifra øynene som
          ser, men vær forberedt på at jeg heller sterkt mot leietakernes side.
        </p>
        <p>
          Ta også gjerne kontakt dersom det er noe du skulle ønske var
          implementert på siden, noe som ikke fungerer som det skal, eller rett
          og slett for en hyggelig prat!
        </p>
        <p>
          Jeg kan nåes på ostromaciej@gmail.com, eventuelt med en melding på{" "}
          <a href="https://github.com/maaaaciej">GitHub</a>!
        </p>
      </div>
    </div>
  );
};

export default About;
