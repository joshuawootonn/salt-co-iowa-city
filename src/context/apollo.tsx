import { ApolloClient, ApolloProvider } from '@apollo/client';

import React, { FC } from 'react';
import { withApolloClient } from '../../apollo/client';

const ApolloContext: FC<{ apollo: ApolloClient<any> }> = ({
    children,
    apollo,
}) => <ApolloProvider client={apollo}>{children}</ApolloProvider>;

export default withApolloClient(ApolloContext);
