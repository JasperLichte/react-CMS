import { useState, useEffect } from "react";

const useMeasure = (ref: React.RefObject<HTMLElement>): DOMRect|null => {
    const [size, setSize] = useState<DOMRect|null>(null);

    useEffect(() => {
        if (ref && ref.current) {
            setSize(ref.current.getBoundingClientRect());
        }
    }, [ref]);

    return size;
}

export default useMeasure;
