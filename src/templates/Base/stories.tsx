import { Meta, Story } from '@storybook/react/types-6-0';
import { BaseTemplate, BaseTemplateProps } from '.';
import mock from './mock';

export default {
  title: 'BaseTemplate',
  args: mock,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: '',
    },
  },
  component: BaseTemplate,
} as Meta;

export const Template: Story<BaseTemplateProps> = (args) => {
  return (
    <div>
      <BaseTemplate {...args} />
    </div>
  );
};
