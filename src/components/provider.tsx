import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { init } from '@amplitude/analytics-node';

import store from "../state";

init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!)

const Providers = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
