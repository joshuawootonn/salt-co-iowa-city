import React, { FC, useEffect, useState } from 'react';
import { DocumentNode, useQuery } from '@apollo/client';

const useService = (aaa: () => Promise<any>) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        aaa()
            .then((result) => setData(result))
            .catch((e) => setError(e))
            .finally(() => setLoading(false));
    }, []);

    return { loading, error, data };
};

export const QueryStory: FC<{
    query: DocumentNode;
    component: any;
}> = ({ query, component: Component }) => {
    console.log(typeof query);

    const { data, loading, error } = useQuery(query);

    if (loading) return <p>...loading</p>;
    if (error) return <p>...error</p>;

    return <Component {...data} />;
};

export const ServiceStory: FC<{
    service: () => Promise<any>;
    component: any;
}> = ({ service, component: Component }) => {
    const { data, loading, error } = useService(service);

    if (loading) return <p>...loading</p>;
    if (error) return <p>...error</p>;

    return <Component {...data} />;
};
