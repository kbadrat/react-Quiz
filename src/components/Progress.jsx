import { useContext } from "react";
import { ProgressContext } from './ProgressContext.jsx';

const Progress = () => {
    const {timeAndType} = useContext(ProgressContext);
    

    return (
        <progress
            className={timeAndType.type}
            value={timeAndType.remainingTime}
            max={timeAndType.time}>
        </progress>
    );
}

export default Progress;