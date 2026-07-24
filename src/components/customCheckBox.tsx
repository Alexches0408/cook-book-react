import { Checkbox } from "@headlessui/react";
import CheckBoxIcon from "@/assets/icons/checkbox-icon.svg?react";

interface CustomCheckBoxProps {
    checked:boolean,
    onChange: ()=>void
}

const CustomCheckBox = ({checked, onChange}:CustomCheckBoxProps) => {
    return(
        <Checkbox
            checked={checked}
            onChange={onChange}
            className="group flex h-4.5 w-4.5 items-center justify-center border border-gre1 data-checked:border-0"
        >
            <CheckBoxIcon 
                className="hidden group-data-checked:block"
            />
        </Checkbox>
    )
};

export default CustomCheckBox;