import type { Meta, StoryObj } from '@storybook/nextjs';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
  title: 'Components/Page',
  component: Page,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {},
};
