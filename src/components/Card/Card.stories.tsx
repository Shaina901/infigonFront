import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicCard: Story = {
  args: {
    // Define your default props for the Card component
    title: "Card Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

export const FeaturedCard: Story = {
  args: {
    // Different set of props for a featured Card
    title: "Featured Card",
    content: "This card is featured with additional information.",
    featured: true,
  },
};

export const CustomImageCard: Story = {
  args: {
    // Customize the Card with an image
    title: "Image Card",
    content: "A card with a custom image.",
    imageUrl: "https://th.bing.com/th/id/OIP.pG5yB3LvKbmdl3cCA_gLXAHaHz?w=166&h=180&c=7&r=0&o=5&pid=1.7",
  },
};
