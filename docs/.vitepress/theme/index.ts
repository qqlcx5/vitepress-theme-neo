import DefaultTheme from 'vitepress/theme'
import ArticleInfo from './components/ArticleInfo.vue'
import './style.scss'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ArticleInfo', ArticleInfo)
  }
}