export const ProgressTracker = ({tabSelected}) => {
    console.log(tabSelected)
    return <>
        <div style={{display: tabSelected === 1 ? "block" : "none"}}>
            Progress Tracker
        </div>
    </>
}