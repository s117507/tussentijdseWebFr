import { useState } from "react"



interface CounterProps {
    counter: number;
    index: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

const Tank = ({ counter, index, onIncrease, onDecrease }: CounterProps) => {
    let color = 'green';
    if (counter <= 70) {
        color = 'green';
    }if (counter <= 40) {
        color = 'orange'
    } else if (counter <= 0) {
        color = 'red';
    }
    return(
        <>
        </>
    )
}

const Tanks = () => {
    const increaseCounter = () => {
        setCounters(counters.map((counter, i) => counter + 1 ));
    }

    const decreaseCounter = () => {
        setCounters(counters.map((counter, i) => counter - 1 ));
    }

    return (
        <>
        </>
    )

}

export default function Page3() {
    return(
        <Tanks />
    )
}