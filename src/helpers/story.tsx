import React, { FC, useEffect, useState } from 'react';
import { DocumentNode, useQuery } from '@apollo/client';
import axios from 'axios';

const useBlockData = (domain: string) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(
                `https://salt-co-iowa-city.vercel.app/api/${domain}?isPreview=true`
            )
            .then((result) => setData(result.data))
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

export const BlockStory: FC<{
    domain: string;
    component: any;
}> = ({ domain, component: Component }) => {
    const { data, loading, error } = useBlockData(domain);

    if (loading) return <p>...loading</p>;
    if (error) return <p>...error</p>;

    return <Component {...data} />;
};
