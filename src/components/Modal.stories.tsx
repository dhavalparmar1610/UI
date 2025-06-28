import type { Meta, StoryObj } from '@storybook/nextjs';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => alert('Modal closed!'),
    showCloseIcon: true,
    children: (
      <div className="text-black">
        <h2 className="text-lg font-bold mb-2">Modal Title</h2>
        <p className="mb-4">This is the content of the modal.</p>
        <button
          onClick={() => alert('Button inside modal clicked!')}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Click Me
        </button>
      </div>
    ),
  },
};
