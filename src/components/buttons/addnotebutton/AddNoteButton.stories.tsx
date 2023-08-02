import { ComponentMeta, ComponentStory } from "@storybook/react";
import AddNoteButton from "./AddNoteButton";
import "../../../App.css";

export default {
    title: 'AddNoteButton',
    component: AddNoteButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
  } as ComponentMeta<typeof AddNoteButton>;

  const Template: ComponentStory<typeof AddNoteButton> = (args) =>  <div className="container"><AddNoteButton {...args} /> </div>;

  export const Primary = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Primary.args = {
    children: "button"
  };