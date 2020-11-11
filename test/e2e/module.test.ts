import { setupTest, expectModuleToBeCalledWith } from '@nuxt/test-utils'

const projectId = 'j1o4tmjp'
const dataset = 'production'

describe('module with default options', () => {
  setupTest({
    testDir: __dirname,
    fixture: '../../example',
    config: {
      sanity: {
        projectId,
      },
    },
  })
  test('should inject core plugin with correct options', () => {
    expectModuleToBeCalledWith('addPlugin', {
      src: expect.stringContaining('plugin.js'),
      fileName: 'sanity/plugin.js',
      options: {
        client: true,
        additionalClients: JSON.stringify({ another: {} }),
        components: {
          contentHelper: true,
          imageHelper: true,
        },
        sanityConfig: JSON.stringify({
          useCdn: false,
          projectId,
          dataset,
          withCredentials: false,
        }),
      },
    })
  }, 50000)
})
