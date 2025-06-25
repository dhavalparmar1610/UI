import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button', 
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Click Me',
    onClick: () => alert('Clicked!'),
    variant: "default",
    size: "md",
    disabled: false,
    isLoading: false,
    Icon: null,
    fullWidth: false,
    className: '',
    iconClassName: '',
  },
};
