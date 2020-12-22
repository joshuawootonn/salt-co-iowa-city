import React, { useEffect, useState } from 'react';

const useOrchestration = (aaaa: boolean, delay = 2000) => {
    const [isOrchestrated, setIsOrchestration] = useState(true);

    useEffect(() => {
        if (aaaa) {
            setTimeout(() => {
                setIsOrchestration(false);
            }, delay);
        }
    }, [aaaa]);

    return isOrchestrated;
};

export default useOrchestration;
