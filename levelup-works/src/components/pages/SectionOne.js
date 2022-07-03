import "../../styles/pages/homepage.css"

export const SectionOne = () => {
    return <>
        <div className="one">
            <div className="one-width">
                <h1 className="title">What we offer</h1>
                <p className="font-styling">The Createive Problem Solving programme is a series of digital creation projects aimed to encourage self-motivation and student agency, designed by New Zealand's leading IT industry experts and schools.</p>
                <h1 className="title">What will students create?</h1>
                <div className="flex">
                    <div className="relative">
                        <img className="blue-square" src="images/pages/homepage/blue-square.png" />
                        <div className="inner-image" >
                            <img className="inner-image-category" src="/images/pages/homepage/animation.png" />
                            <div>Animation</div>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="blue-square" src="images/pages/homepage/blue-square.png" />
                        <div className="inner-image" >
                            <img className="inner-image-category" src="/images/pages/homepage/games.png" />
                            <div>Games</div>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="blue-square" src="images/pages/homepage/blue-square.png" />
                        <div className="inner-image" >
                            <img className="inner-image-category" src="/images/pages/homepage/chatbot.png" />
                            <div>Chatbot</div>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="blue-square" src="images/pages/homepage/blue-square.png" />
                        <div className="inner-image" >
                            <img className="inner-image-category" src="/images/pages/homepage/augmented-reality.png" />
                            <div>AR</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img className="project-img" src="images/pages/homepage/project1.png" />
            </div>
        </div>
    </>
};