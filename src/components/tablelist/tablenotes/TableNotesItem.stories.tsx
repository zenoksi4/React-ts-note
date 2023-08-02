import { ComponentMeta, ComponentStory } from "@storybook/react";
import Table from "../Table";
import TableNotes from "./TableNotes";
import TableNotesItem from "./TableNotesItem";
import "../../../App.css";
import { Provider } from "react-redux";
import store from "../../../store";

export default {
    title: 'TableNotesItems',   
    component: TableNotesItem,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {

    },
  } as ComponentMeta<typeof TableNotesItem>;

  const Template: ComponentStory<typeof TableNotesItem> = (args) => {
    return(
        <Provider store={store}>
            <div className="container">
                <Table>
                    <TableNotes>
                        <TableNotesItem {...args} isSb={true}/>
                    </TableNotes>
                </Table>
            </div>
        </Provider>
    )
}

    export const Active = Template.bind({});    
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
    Active.args = {
        isArchive: false,
        note: {
            id: Math.random().toString(),
            title: 'note1',
            created: new Date().toLocaleDateString('uk'),
            category: 'Task',
            content: 'notes1 03.09.2022,02.09.2022 dww'
        }
  };

  export const Archive = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Archive.args = {
    isArchive: true,
    note: {
        id: Math.random().toString(),
        title: 'note1',
        created: new Date().toLocaleDateString('uk'),
        category: 'Task',
        content: 'notes1 03.09.2022,02.09.2022 dww'
    }
  };