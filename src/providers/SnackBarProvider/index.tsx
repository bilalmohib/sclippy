"use client";

import { SnackbarProvider } from "notistack";

interface SnackBarProviderProps {
    children: React.ReactNode;
}

const SnackBarProvider = ({
    children
}: SnackBarProviderProps) => {
    return (
        <SnackbarProvider>
            {children}
        </SnackbarProvider>
    )
}
export default SnackBarProvider;