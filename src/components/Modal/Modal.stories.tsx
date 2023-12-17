
import { useState } from "react";
import type { Meta, Story } from "@storybook/react";
import Modal, { ModalProps } from "./Modal";

const meta: Meta<typeof Modal> = {
    title: "Components/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type StoryArgs = Omit<ModalProps, "isOpen" | "onClose">;

const Template: Story<StoryArgs> = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button className="bg-blue-500 text-white px-4 py-2" onClick={handleOpenModal}>
                Open Modal
            </button>
            <Modal isOpen={isOpen} onClose={handleCloseModal} {...args}>
                {args.children}
            </Modal>
        </>
    );
};

export const ExampleModal = Template.bind({});
ExampleModal.args = {
    title: "Example Modal",
    children: <p>This is the content of the modal.</p>,
};
