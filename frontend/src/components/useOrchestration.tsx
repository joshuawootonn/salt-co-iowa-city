import React, { useEffect, useState } from 'react';

const useOrchestration = (delay = 2000) => {
    const [isOrchestrated, setIsOrchestration] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsOrchestration(false);
        }, delay);
    }, []);

    return isOrchestrated;
};

export default useOrchestration;
