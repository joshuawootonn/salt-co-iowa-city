import React, { FC } from 'react';
import { DocumentNode, useQuery } from '@apollo/client';

export const GraphQLStory: FC<{
    query: DocumentNode;
    component: any;
}> = ({ query, component: Component }) => {
    const { data, loading, error } = useQuery(query);

    if (loading) return <p>...loading</p>;
    if (error) return <p>...error</p>;

    return <Component {...data} />;
};
