import React from 'react';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled/macro';
import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";
import Todos from "./components/Todos";



const queryClient = new QueryClient();

const App: React.FC = () => (
    <QueryClientProvider client={queryClient}>
        <Todos/>
    </QueryClientProvider>
)
export default App;

