import { html } from 'lit';
import '../src/test-app.js';

export default {
  title: 'TestApp',
  component: 'test-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <test-app
      style="--test-app-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </test-app>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
