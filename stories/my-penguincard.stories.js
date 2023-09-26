import { html } from 'lit';
import '../src/my-penguincard.js';

export default {
  title: 'MyPenguincard',
  component: 'my-penguincard',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <my-penguincard
      style="--my-penguincard-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </my-penguincard>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
