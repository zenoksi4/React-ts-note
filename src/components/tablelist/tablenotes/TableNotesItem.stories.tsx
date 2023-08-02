import { ComponentMeta, ComponentStory } from "@storybook/react";
import Table from "../Table";
import TableNotes from "./TableNotes";
import TableNotesItem from "./TableNotesItem";
import "../../../App.css";

export default {
    title: 'TableNotesItem',
    component: TableNotesItem,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {

    },
  } as ComponentMeta<typeof TableNotesItem>;

  const Template: ComponentStory<typeof TableNotesItem> = (args) => {
    return(
        <div className="container">
            <Table>
                <TableNotes>
                    <TableNotesItem {...args} />
                </TableNotes>
            </Table>
        </div>
    )
}

  export const Primary = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Primary.args = {
    isArchive: false,
    note: {
        id: Math.random().toString(),
        title: 'note1',
        created: new Date().toLocaleDateString('uk'),
        category: 'Task',
        content: 'notes1 03.09.2022,02.09.2022 dww'
    }
  };