import { Text, Heading, Flex } from "@chakra-ui/react";
import { MultiSelect } from "chakra-multiselect";
import Select from "react-select";

import { useState } from "react";

export const TestMultiselect = () => {
    const options = [
        {
            value: "paracetamol",
            label: "Paracetamol",
        },
        {
            value: "aspirin",
            label: "Aspirin",
        },
        {
            value: "dulcolax",
            label: "Dulcolax",
        },
    ];
    const [value, setValue] = useState([]);
    const handleChange = (selectedOption) => {
        console.log(selectedOption);
    };
    return (
        <Flex
            height={"100vh"}
            width={"100vw"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Select options={options} onChange={handleChange} isMulti />
            {/* <MultiSelect
                borderRadius={"full"}
                borderColor={"rgba(255, 53, 117, 1)"}
                color={"rgba(255, 53, 117, 1)"}
                options={options}
                value={value}
                label="Choose an Item"
                onChange={setValue}
            /> */}
            {/* {console.log(value)} */}
        </Flex>
    );
};
