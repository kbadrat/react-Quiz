import { useEffect, useState, createContext } from "react";

const TIMER_ANSWER = 10000;
const TIMER_ANSWERED = 1000;
const TIMER_RESULT = 2000;

export const ProgressContext = createContext();

export default function ProgressProvider({ children }) {
    const [timeAndType, setTimeAndType] = useState({
        type: "",
        time: TIMER_ANSWER,
        remainingTime : TIMER_ANSWER
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeAndType((prev) => ({ ...prev, remainingTime: prev.remainingTime - 10 }));
        }, 10);

        return () => {
            clearInterval(interval);
        }

    }, []);

    return (
        <ProgressContext.Provider
            value={{
                timeAndType,
                setTimeAndType,
                TIMER_ANSWER,
                TIMER_ANSWERED,
                TIMER_RESULT,
            }}>
            {children}
        </ProgressContext.Provider>
    );
}

