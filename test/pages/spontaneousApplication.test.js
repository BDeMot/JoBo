import { mount } from '@vue/test-utils'
import spontaneousApplication from '@/pages/spontaneousApplication'

const wrapper = mount(spontaneousApplication)

describe('Page "Spontenous Application" test suite : ', () => {
  it('should display an instance of "applicationCard" component', () => {
    expect(wrapper.findComponent({ name: 'ApplicationCard' }).exists()).toBe(
      true
    )
  })
})
