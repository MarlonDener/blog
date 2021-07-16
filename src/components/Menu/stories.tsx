import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu, MenuProps } from '.';

export default {
  title: 'Menu',
  component: Menu,
} as Meta;

export const Template: Story<MenuProps> = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
