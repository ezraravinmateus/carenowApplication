import { render } from "preact";
import { App } from "./app.jsx";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

render(
    <ChakraProvider>
        <App />
    </ChakraProvider>,
    document.getElementById("app")
);
