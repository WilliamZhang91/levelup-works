import "../../styles/template/template.css"

export const ProjectFilters = ({ filters }) => {

    let categoryArray = ["course", "subscription", "subjectMatter1"];
    let course = [];
    let subscription = [];
    let subject = [];

    const type = (() => {
        for (let i = 0; i < categoryArray.length; i++) {
            filters.data && filters.data.map(el => {
                course.push(el.course)
                subscription.push(el.subscription)
                subject.push(el.subjectMatter1)
            });
        };
    })();

    let courseType = [...new Set(course)];
    let subscriptionType = [...new Set(subscription)];
    let subjectType = [...new Set(subject)];

    return <>
        <div style={{ margin: "35px 50px 35px 0", width: "75%" }}>
            <div>
                <div style={{textDecoration: "underline", margin: "0 0 12px 0"}}>SUBSCRIPTION</div>
                {subscriptionType.map((el, i) => {
                    return <>
                        <div key={i}>
                            <input type="checkbox" name="subscription"></input>
                            <label style={{margin: "0 0 0 10px"}}>{el.charAt(0).toUpperCase() + el.slice(1)}</label>
                        </div>
                    </>
                })}
            </div>
            <div>
                <div style={{textDecoration: "underline", margin: "15px 0 12px 0"}}>ACTIVITY</div>
                {courseType.map((el, i) => {
                    return <>
                        <div key={i}>
                            <input type="checkbox" name="activity"></input>
                            <label>
                                <span style={{margin: "0 0 0 10px"}}>{el.charAt(0).toUpperCase() + el.slice(1)}</span>
                            </label>
                        </div>
                    </>
                })}
            </div>
            <div>
                <div style={{textDecoration: "underline", margin: "20px 0 12px 0"}}>SUBJECT</div>
                {subjectType.map((el, i) => {
                    return <>
                        <div key={i}>
                            <input type="checkbox" name="subject"></input>
                            <label style={{margin: "0 0 0 10px"}}>{el.charAt(0).toUpperCase() + el.slice(1)}</label>
                        </div>
                    </>
                })}
            </div>
        </div>
    </>
}