import App from './App.vue'
import Preview from './Preview.vue'

panel.plugin('oblik/link-field', {
  fields: {
    linkfield: App
  },
  components: {
    'k-linkfield-field-preview': Preview
  }
})
