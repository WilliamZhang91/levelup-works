export const HelpRequests = ({ tabSelected }) => {
    return <>
        <div style={{display: tabSelected === 3 ? "block" : "none"}}>
            Help Request
        </div>
    </>
}