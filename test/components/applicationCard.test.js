import { mount } from '@vue/test-utils'
import applicationCard from '@/components/applicationCard.vue'

const wrapper = mount(applicationCard, {
  propsData: {
    date: '21/01/86',
    entreprise: 'Mamie Nova',
    poste: 'Dev Fullstack',
  },
})

describe('ApplicationCard test suite: ', () => {
  it('the component display a date', () => {
    expect(wrapper.find('.date').exists()).toBeTruthy()
  })
  it('the component display an entreprise', () => {
    expect(wrapper.find('.entreprise').exists()).toBeTruthy()
  })
  it('the component display a job', () => {
    expect(wrapper.find('.poste').exists()).toBeTruthy()
  })
  it('has a "date" prop', () => {
    expect(wrapper.props().date).toBe('21/01/86')
  })
  it('has a "entreprise" prop', () => {
    expect(wrapper.props().entreprise).toBe('Mamie Nova')
  })
  it('has a "poste" prop', () => {
    expect(wrapper.props().poste).toBe('Dev Fullstack')
  })
})
