import {
    Flex,
    Image,
    Heading,
    Link,
    Table,
    Th,
    Td,
    Tr,
    Thead,
    Tbody,
} from "@chakra-ui/react";
import Logo from "../assets/Logo.png";
import axios from "axios";
import { useState, useEffect } from "react";

export const ShowData = () => {
    const [dataTreatment, setDataTreatment] = useState([]);

    const getTreatmentData = async () => {
        try {
            const result = await axios.get(`http://localhost:2000/treatment`);
            setDataTreatment(result?.data);
            // console.log(result?.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTreatmentData();
    }, []);

    const formatPriceToIDR = (price) => {
        const currentTicketPrice = new Intl.NumberFormat("en-ID").format(price);
        return currentTicketPrice;
    };

    return (
        <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"5vh"}
            marginY={"10vh"}
            width={"100vw"}
        >
            {/* This is just the logo and some description about the web-app. */}
            <Image src={Logo} w={"20vw"}></Image>
            <Heading fontSize={"x-large"}>
                Doctor's Prescription & Treatment Application (Show Data)
            </Heading>
            <Flex flexDirection={"column"} width={"80vw"} gap={"24px"}>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Patient ID</Th>
                            <Th>Patient Name</Th>
                            <Th>Date</Th>
                            <Th>Treatment Description</Th>
                            <Th>Medicine Prescription</Th>
                            <Th isNumeric>Cost Of Treament</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {dataTreatment.map((treatmentData, index) => {
                            return (
                                <Tr key={index}>
                                    <Td>{treatmentData.id}</Td>
                                    <Td>{treatmentData.patientID}</Td>
                                    <Td>{treatmentData.patientName}</Td>
                                    <Td>{treatmentData.date}</Td>
                                    <Td>
                                        {treatmentData.treatmentDescription}
                                    </Td>
                                    <Td>
                                        {treatmentData.medicinePrescription}
                                    </Td>
                                    <Td>
                                        Rp.{" "}
                                        {formatPriceToIDR(
                                            treatmentData.costOfTreatment
                                        )}
                                    </Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
                <Link
                    justifySelf={"flex-start"}
                    alignSelf={"flex-start"}
                    padding={"12px"}
                    paddingX={"24px"}
                    href="/"
                    backgroundColor={"rgba(255, 53, 117, 1)"}
                    color={"#fafafa"}
                    borderRadius={"full"}
                    _hover={{
                        backgroundColor: "rgba(255, 53, 117, 0.7)",
                        textDecoration: "none",
                    }}
                >
                    Back
                </Link>
            </Flex>
        </Flex>
    );
};
