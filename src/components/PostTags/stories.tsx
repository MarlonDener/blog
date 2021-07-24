import { Meta, Story } from '@storybook/react/types-6-0';
import { PostTags, PostTagsProps } from '.';
import mock from './mock';

export default {
  title: 'PostTags',
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
  component: PostTags,
} as Meta;

export const Template: Story<PostTagsProps> = (args) => {
  return (
    <div style={{ padding: '0 1.5rem' }}>
      <PostTags {...args} />
    </div>
  );
};

export const NoTags: Story<PostTagsProps> = (args) => {
  return (
    <div style={{ padding: '0 1.5rem' }}>
      <PostTags {...args} tags={undefined} />
    </div>
  );
};
