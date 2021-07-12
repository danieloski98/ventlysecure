import "react-native-gesture-handler";
import React from "react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

// components
import NavigationContainer from "./src/navigation";

export const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <NavigationContainer />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
