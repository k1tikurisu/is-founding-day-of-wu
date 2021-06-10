import React from 'react'
import { Story, Meta } from '@storybook/react'
import { NotFound } from '../pages/NotFound'

export default {
  component: NotFound,
  title: 'NotFound',
} as Meta

const Template: Story = () => <NotFound />

export const Error = Template.bind({})
