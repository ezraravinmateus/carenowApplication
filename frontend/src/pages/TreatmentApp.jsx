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
} from "@chakra-ui/react";
import Logo from "../assets/Logo.png";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const registerSchema = Yup.object().shape({
    patient_name: Yup.string().required("Name is required"),
    patient_id: Yup.string().required("Patient ID is required"),
    date: Yup.date().required("Date is required"),
    treatment_description: Yup.string().required(
        "Treatment description is required."
    ),
    medicine_prescription: Yup.string().required(
        "Medicine prescription is required."
    ),
    cost: Yup.number().required("Cost is required"),
});

export const TreatmentApp = () => {
    const handleSubmit = async (data) => {
        try {
            console.log(data);
            const result = await axios.post(`http://localhost:3000/treatment`, {
                patientName: data.patient_name,
                patientID: data.patient_id,
                date: data.date,
                treatmentDescription: data.treatment_description,
                medicinePrescription: data.medicine_prescription,
                costOfTreatment: data.cost,
            });
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"5vh"}
            marginY={"10vh"}
        >
            {/* This is just the logo and some description about the web-app. */}
            <Image src={Logo} w={"20vw"}></Image>
            <Heading fontSize={"x-large"}>
                Doctor's Prescription & Treatment Application
            </Heading>

            {/* This is the form input for the doctor's to input few things :  */}
            {/* 
                1. Patient Name -> Full Name (ex : Ezra Ravin Mateus)
                2. Patient ID -> Brand ID, Branch ID, Patient Number ID -> (HEAL-B001-001) 
                3. Date -> DD-MM-YYYY 
                4. Treatment Description -> Input text area to tell what the current treatment is for treating the patients 
                5. Medications Prescribed -> Dropdown
                (
                    ex : 
                    - Prescribed paracetamol (pain-killer) to alleviate muscle inflammations and to reduce pain for patient's inflammation
                    - Prescribed aspirin to heal ligaments as anti inflammatory 
                ) 
                6. Cost of Treatment -> Rp. 200,000.00 (Input as 200000)
            */}
            <Formik
                initialValues={{
                    patient_name: "",
                    patient_id: "",
                    date: "",
                    treatment_description: "",
                    cost: "",
                }}
                validationSchema={registerSchema}
                onSubmit={(values, action) => {
                    console.log(values);
                    handleSubmit(values);
                    action.resetForm();
                }}
            >
                {() => {
                    return (
                        <Form>
                            <VStack spacing={"12px"} width={"30vw"}>
                                <FormControl>
                                    <FormLabel>Patient Name</FormLabel>
                                    <Input
                                        focusBorderColor="rgba(255, 53, 117, 0.5)"
                                        as={Field}
                                        borderRadius={"full"}
                                        name="patient_name"
                                        type="text"
                                        placeholder="Input Patient Name"
                                    />
                                    <ErrorMessage
                                        name="patient_name"
                                        component="div"
                                        style={{ color: "red" }}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Patient ID</FormLabel>
                                    <Input
                                        focusBorderColor="rgba(255, 53, 117, 0.5)"
                                        as={Field}
                                        borderRadius={"full"}
                                        name="patient_id"
                                        type="text"
                                        placeholder="Input Patient ID"
                                    />
                                    <ErrorMessage
                                        name="patient_id"
                                        component="div"
                                        style={{ color: "red" }}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Date</FormLabel>
                                    <Input
                                        focusBorderColor="rgba(255, 53, 117, 0.5)"
                                        as={Field}
                                        borderRadius={"full"}
                                        name="date"
                                        type="date"
                                        placeholder="Input Date"
                                    />
                                    <ErrorMessage
                                        name="date"
                                        component="div"
                                        style={{ color: "red" }}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Treatment Description</FormLabel>
                                    <Input
                                        focusBorderColor="rgba(255, 53, 117, 0.5)"
                                        as={Field}
                                        borderRadius={"full"}
                                        name="treatment_description"
                                        type="text"
                                        placeholder="Input Treatment Description"
                                    />
                                    <ErrorMessage
                                        name="treatment_description"
                                        component="div"
                                        style={{ color: "red" }}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Medicine Prescription</FormLabel>
                                    <Input
                                        focusBorderColor="rgba(255, 53, 117, 0.5)"
                                        as={Field}
                                        borderRadius={"full"}
                                        name="medicine_prescription"
                                        type="text"
                                        placeholder="Input Treatment Description"
                                    />
                                    <ErrorMessage
                                        name="medicine_prescription"
                                        component="div"
                                        style={{ color: "red" }}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Cost Of Treatment</FormLabel>
                                    <Input
                                        focusBorderColor="rgba(255, 53, 117, 0.5)"
                                        as={Field}
                                        borderRadius={"full"}
                                        name="cost"
                                        type="text"
                                        placeholder="Input Cost Of Treatment"
                                    />
                                    <ErrorMessage
                                        name="cost"
                                        component="div"
                                        style={{ color: "red" }}
                                    />
                                </FormControl>
                                <Button
                                    marginTop={"24px"}
                                    borderRadius={"full"}
                                    type="submit"
                                    variant="outline"
                                    color={"#ff3575"}
                                    borderColor={"#ff3575"}
                                    _hover={{
                                        backgroundColor:
                                            "rgba(255, 53, 117, 0.1)",
                                    }}
                                    width={"full"}
                                    _active={{
                                        backgroundColor:
                                            "rgba(255, 53, 117, 1)",
                                        color: "#fafafa",
                                    }}
                                >
                                    Submit
                                </Button>
                            </VStack>
                        </Form>
                    );
                }}
            </Formik>
        </Flex>
    );
};
