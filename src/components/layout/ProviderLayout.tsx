"use client";

import { OnlineStatusProvider } from "@hooks/useOnlineStatus";
import store from "@store/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import Layout from "./Layout";

type Props = {
    children: ReactNode;
};

const ProviderLayout: FC<Props> = ({ children }) => {
    return (
        <OnlineStatusProvider>
            <Provider store={store}>
                <Layout>{children}</Layout>
            </Provider>
        </OnlineStatusProvider>
    );
};

export default ProviderLayout;