import './index.css';
import {useEffect, useState} from 'react';

const Experiences = () => {

    const [isActive, setActive] = useState(false)

    useEffect(() => {
        setActive(true);
    },[])

    return (
        <div className="Experiences">
            <div className="Experiences__title">
                <h2>Where I've Worked</h2>
            </div>
            <div className={!isActive ? "Experiences__all" : "Experiences__all active"}>
                <div className="Experiences__content">
                    <h2>Deck Officier</h2>
                    <p className="experiences__date">
                        May 2021 - May 2022
                    </p>
                    <p className="experiences__paragraph_1">
                    I worked for Corsica Ferries as Deck Officer, traveling between Italy and France.
                    </p>
                    <p className="experiences__paragraph_2">
                    The environment of this work experience was fantastic and stressful at the same time, where my problem solving skills came in handy in carrying out tasks with unexpected problems to be solved.
                    </p>
                    <p className="experiences__paragraph_3">
                    In this work experience I had the opportunity to be the leader of a team by teaching the trade and assigning tasks to a group of interns; I also learned to relate directly with the port authorities, becoming more confident and responsible about my work.
                    </p>
                </div>
                <div className="Experiences__content">
                    <h2>Photographer and Videomaker</h2>
                    <p className="experiences__date">
                        September 2017 - May 2021
                    </p>
                    <p className="experiences__paragraph_1">
                    I worked in a Wedding Photography Studio in Palermo as a photo editor and Videomaker where I learned the ability to work in a team to achieve a shared goal; in problem solving.
                    </p>
                    <p className="experiences__paragraph_2">
                    I improved my creativity through the use of physical and digital tools such as Adobe Photoshop, Adobe Illustrator and Adobe Indesign, keeping up with time.
                    </p>
                </div>
                <div className="Experiences__content">
                    <h2>Sound Technician</h2>
                    <p className="experiences__date">
                    October 2013 - April 2015
                    </p>
                    <p className="experiences__paragraph_1">
                    Became very proficent dealing with a wide variety of customer service issues using problem solving techniques; from last minutes audio changes, re-arranging the scheduled lineup and filling in dead air time, just to name a few.
                    </p>
                    <p className="experiences__paragraph_2">
                    Always strived to providing the customer with the experience and ambiance they wish Working as a sound technician with Roxy Studio was the foundation to becoming a quick and effective decision maker, while maintaining excellent service throughout the audio process.
                    </p>
                    <p className="experiences__paragraph_3">
                    Learned how to properly organize the equiptment and being a dependable self-motivated.  
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Experiences;