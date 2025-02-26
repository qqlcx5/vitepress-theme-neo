import DefaultTheme from 'vitepress/theme'
import ArticleInfo from './components/ArticleInfo.vue'
import './style.scss'
import './tailwind.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ArticleInfo', ArticleInfo)
  }
}