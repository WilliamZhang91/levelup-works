import "../../styles/pages/homepage.css";

export const SectionTwo = () => {
    return <>
        <div className="two">
            <h1 className="title" style={{ margin: "50px auto" }}>Teaching kids programming and digital skills is <span style={{ fontStyle: "italic" }}>More</span> than just writing code</h1>
            <div className="flex" style={{ justifyContent: "space-around" }}>
                <div className="relative">
                    <img className="kids-img" src="images/pages/homepage/kids1.png" />
                    <div className="inner-image2">
                        <img className="kids-inner-image2" src="/images/pages/homepage/kids1-overlay.png"/>
                        <div>Promoting Creativity & Individuality</div>
                    </div>
                </div>
                <div className="relative">
                    <img className="kids-img" src="images/pages/homepage/kids2.png" />
                    <div className="inner-image2">
                        <img className="kids-inner-image2" src="/images/pages/homepage/kids2-overlay.png"/>
                        <div>Critical Thinking and Problem Solving</div>
                    </div>
                </div>
                <div className="relative">
                    <img className="kids-img" src="images/pages/homepage/kids3.png" />
                    <div className="inner-image2">
                        <img className="kids-inner-image2" src="/images/pages/homepage/kids3-overlay.png"/>
                        <div>Communication & Collaboration</div>
                    </div>
                </div>
                <div className="relative">
                    <img className="kids-img" src="images/pages/homepage/kids4.png" />
                    <div className="inner-image2">
                        <img className="kids-inner-image2" src="/images/pages/homepage/kids4-overlay.png"/>
                        <div>Technological Development & Future Focus</div>
                    </div>
                </div>
            </div>
            <div style={{ margin: "50px auto" }}>
                <h1 className="title">How our programme helps teachers and schools</h1>
                <div className="flex" style={{ justifyContent: "space-around" }}>
                    <button className="button">LEARNING PATHWAYS</button>
                    <button className="button">DIGITAL TECHNOLOGIES</button>
                    <button className="button">KEY COMPETENCIES</button>
                    <button className="button">IR4.0</button>
                </div>
            </div>
        </div>
    </>
};