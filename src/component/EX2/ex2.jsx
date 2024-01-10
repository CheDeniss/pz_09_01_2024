import React, {Component} from 'react';
import Ex2pib from "./ex2-pib";
import Ex2Brthd from "./ex2-brthd.jsx";
import Ex2Portr from "./ex2-portr.jsx";
import Ex2Bio from "./ex2-bio.jsx";

class Ex2 extends Component {
    render() {
        return (
            <div style={{background: "lightskyblue", width: "600px"}}>
                <Ex2pib
                    name="Stephen King"/>
                <Ex2Brthd
                    birthdate="21.09.1947"/>
                <Ex2Portr
                    portraitUrl="https://cdn.britannica.com/20/217720-050-857D712B/American-novelist-Stephen-King-2004.jpg"/>
                <Ex2Bio
                    biography="Stephen King (born September 21, 1947, Portland, Maine, U.S.) American novelist and short-story writer whose books are credited with reviving the genre of horror fiction in the late 20th century.

King graduated from the University of Maine in 1970 with a bachelor’s degree in English. While writing short stories, he supported himself by teaching and working as a janitor, among other jobs. His first published novel, Carrie, about a tormented teenage girl gifted with telekinetic powers, appeared in 1974 (films 1976 and 2013) and was an immediate popular success."/>


            </div>
        );
    }
}

export default Ex2;