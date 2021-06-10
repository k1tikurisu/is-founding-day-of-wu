import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Footer, Props } from '../components/Layouts/Footer'

export default {
  component: Footer,
  title: 'Footer',
} as Meta

const Template: Story<Props> = (args) => <Footer {...args} />

export const Japanese = Template.bind({})
Japanese.args = {
  isJapan: true,
}

export const English = Template.bind({})
English.args = {
  isJapan: false,
}
