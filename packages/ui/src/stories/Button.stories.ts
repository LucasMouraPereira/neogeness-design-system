import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from '../button'

const meta: Meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
}

export default meta

type ButtonStory = StoryObj<typeof Button>

export const Primary: ButtonStory = {
  args: {
    children: 'Click me!',
  },
}

// export const Secondary: ButtonStory = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: ButtonStory = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: ButtonStory = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
