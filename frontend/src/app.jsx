import { Home } from "./pages/Home";
import { TreatmentApp } from "./pages/TreatmentApp";

import { Route, Routes, BrowserRouter } from "react-router-dom";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { TestMultiselect } from "./pages/TestMultiselect";
import { TreatmentAppMultiSelect } from "./pages/TreatmentAppMultiSelect";

export const App = () => {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/application" element={<TreatmentApp />} />
                    <Route
                        path="/test-multiselect"
                        element={<TestMultiselect />}
                    />
                    <Route
                        path="/multiselect-application"
                        element={<TreatmentAppMultiSelect />}
                    />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
};
