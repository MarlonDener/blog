import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu, MenuProps } from '.';
import mock from './mock';

export default {
  title: 'Menu',
  component: Menu,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Template: Story<MenuProps> = (args) => {
  return (
    <div style={{ maxWidth: '60rem', margin: '5rem auto' }}>
      <Menu {...args} />

      <p>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived
      </p>
    </div>
  );
};
