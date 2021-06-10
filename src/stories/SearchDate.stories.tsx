import React from 'react'
import { Story, Meta } from '@storybook/react'
import { SearchDate, Props } from '../components/SearchDate'

export default {
  component: SearchDate,
  title: 'Main',
} as Meta

const Template: Story<Props> = (args) => <SearchDate {...args} />

export const Japanese = Template.bind({})
Japanese.args = {
  isJapan: true,
}

export const English = Template.bind({})
English.args = {
  isJapan: false,
}
