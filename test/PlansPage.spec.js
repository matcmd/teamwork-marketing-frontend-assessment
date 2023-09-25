import { mount } from '@vue/test-utils'
import PlansPage from '@/components/PlansPage.vue'

describe('PlansPage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PlansPage)
    expect(wrapper.vm).toBeTruthy()
  })
})
