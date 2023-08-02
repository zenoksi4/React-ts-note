import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import store from "../../store";
import Modal from "./Modal";
import ModalAddNote from "./ModalAddNote/ModalAddNote";
import ModalEditNote from "./ModalEditNote/ModalEditNote";
import ModalFormWrapper from "./ModalFormWrapper";
import { useEffect, useState } from "react";

export default {
    title: 'Modal',
    component: Modal,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        setActive: () => {},


    },
  } as ComponentMeta<typeof Modal>;


  const Template: ComponentStory<typeof Modal> = (args) => {

    const [isModalLoaded, setIsModalLoaded] = useState(false);

    useEffect(() => {
        import('./Modal').then(() => {
          setIsModalLoaded(true);
        });
      }, []);

    return(
            <Provider store={store}>
                <div id="modal"></div>
                <div className="container" >

                    {isModalLoaded && <Modal {...args}></Modal>}
                </div>

            </Provider>
    )
}

  export const Default = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Default.args = {
    active: false,
    children: <ModalFormWrapper/>,
  };


  export const AddForm = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  AddForm.args = {
    children: <ModalAddNote active setActive={() => {}}></ModalAddNote>,
  };

  export const EditForm = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  EditForm.args = {
    children: <ModalEditNote active={true} setActive={() => {}} note = {{
        id: Math.random().toString(),
        title: 'note1',
        created: new Date().toLocaleDateString('uk'),
        category: 'Task',
        content: 'notes1 03.09.2022,02.09.2022 dww'
    }}></ModalEditNote>,

  };