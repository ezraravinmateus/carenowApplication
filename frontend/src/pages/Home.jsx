import {
    Flex,
    Image,
    Heading,
    Text,
    Stack,
    VStack,
    HStack,
    Input,
    Button,
    Textarea,
    FormControl,
    FormLabel,
    Link,
} from "@chakra-ui/react";
import Logo from "../assets/Logo.png";

export const Home = () => {
    return (
        <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"5vh"}
            height={"100vh"}
            width={"100vw"}
        >
            {/* This is just the logo and some description about the web-app. */}
            <Image src={Logo} w={"20vw"}></Image>
            <Heading fontSize={"x-large"}>
                Welcome to CareNow Web App for Doctors
            </Heading>
            <Flex gap={"2vw"}>
                {/* <Link
                    padding={"12px"}
                    paddingX={"24px"}
                    href="/application"
                    backgroundColor={"rgba(255, 53, 117, 1)"}
                    color={"#fafafa"}
                    borderRadius={"full"}
                    _hover={{
                        backgroundColor: "rgba(255, 53, 117, 0.7)",
                    }}
                >
                    Enter Application
                </Link> */}
                {/* <Link
                    padding={"12px"}
                    paddingX={"24px"}
                    href="/test-multiselect"
                    backgroundColor={"rgba(255, 53, 117, 1)"}
                    color={"#fafafa"}
                    borderRadius={"full"}
                    _hover={{
                        backgroundColor: "rgba(255, 53, 117, 0.7)",
                    }}
                >
                    Test MultiSelect
                </Link> */}
                <Link
                    padding={"12px"}
                    paddingX={"24px"}
                    href="/multiselect-application"
                    backgroundColor={"rgba(255, 53, 117, 1)"}
                    color={"#fafafa"}
                    borderRadius={"full"}
                    _hover={{
                        backgroundColor: "rgba(255, 53, 117, 0.7)",
                    }}
                >
                    Enter Application
                </Link>
                <Link
                    padding={"12px"}
                    paddingX={"24px"}
                    href="/show-data"
                    backgroundColor={"rgba(255, 53, 117, 1)"}
                    color={"#fafafa"}
                    borderRadius={"full"}
                    _hover={{
                        backgroundColor: "rgba(255, 53, 117, 0.7)",
                    }}
                >
                    Show Data
                </Link>
            </Flex>
        </Flex>
    );
};
