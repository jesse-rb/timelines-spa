import { useContext } from "react";
import { TimeZoneContext } from "./Contexts";

function ChildComponent() {
    const timeZone = useContext(TimeZoneContext)

    return <>
        <p>Timezone is: {timeZone}</p>
    </>
}

export default ChildComponent
