import { PropsWithChildren } from "react";
import { StoreProvider } from "./StoreProvider";
import { RouterProvider } from "./RouterProvider";

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  );
};
