import './index.css';
import React from 'react';

export default function ExperienceCard({children}) {
    const [isActive, setActive] = React.useState("");

    React.useEffect(() => {
        setActive("active");
    }, [])

    return (
        <div className={`ExperienceCard ${isActive}`}>
            {children}
        </div>
    )
}