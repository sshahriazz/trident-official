import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { takeCareData } from 'content/component/care'

function Icon({ id, open }: { id: number, open: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

const TakeCareLeftSection = () => {
    const [open, setOpen] = useState(1);

    const handleOpen = (value: number): void => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <>
            <h1 className="text-3xl md:text-[40px] font-semibold leading-10">
                We will take care of your everything
            </h1>
            <hr className="border-1 border-gray-300 mt-10" />
            {takeCareData.map((item) => (
                <Accordion key={item.id} open={open === item.id} icon={<Icon id={item.id} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(item.id)} className="border-b">
                        {item.title}
                    </AccordionHeader>
                    <AccordionBody>
                        {item.description}
                    </AccordionBody>
                </Accordion>
            ))
            }
        </ >
    )
}

export default TakeCareLeftSection