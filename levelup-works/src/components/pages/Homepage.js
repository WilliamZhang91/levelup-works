import "../../styles/pages/homepage.css";
import { SectionOne } from "./SectionOne";
import { SectionTwo } from "./SectionTwo";
import { SectionThree } from "./SectionThree";
import { SectionFour } from "./SectionFour";

export const Homepage = () => {

    return <>
        <div>
            <div className="relative">
                <img className="hero-img" src="/images/pages/homepage/hero.png" alt="hero-image" />
                <img className="hero-img-resize" src="/images/pages/homepage/hero-zoomed.png" alt="hero-zoomed-image" />
                <img className="hero-img-mobile" src="/images/pages/homepage/hero-mobile.png" alt="hero-zoomed-image" />
                <div className="inner-text">

                </div>
            </div>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </div>
    </>
};
