import "../style.css";
import ButtonSweep from "../Components/Boilerplate/ButtonSweep/buttonsweep.jsx";
import IntroductionHeader from "../Components/Introduction/introductionheader.jsx";
import IntroductionDescription from "../Components/Introduction/introductiondescription.jsx";
import { Animation } from "../Components/NavigationBar/navigationbar.jsx";

export const Introduction = () =>
{
    return (
        <div className="introduction">
            <IntroductionHeader/>
            <IntroductionDescription/>
            <ButtonSweep Content="Contact Me!" LinkURL="Contact" Function={() => { Animation("contact") }}/>
        </div>
    );
}





