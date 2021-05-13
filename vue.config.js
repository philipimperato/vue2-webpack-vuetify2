module.exports = {
  transpileDependencies: [
    'vuetify',
    'feathers-vuex'
  ],
  chainWebpack: config => {
    config.plugin('VuetifyLoaderPlugin').tap(args => [{
      match (originalTag, { kebabTag, camelTag, path, component }) {
        if (camelTag.includes('Common')) {
          return [camelTag, `import ${camelTag} from '@/components/common/${camelTag.substring(6)}.vue'`]
        }
      }
    }])
  }
}
