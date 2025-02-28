// import DefaultTheme from 'vitepress/theme'
import DefaultTheme from 'vitepress/theme-without-fonts'
import ArticleInfo from './components/ArticleInfo.vue'
import Layout from './NeoLayout.vue'
// import './style.scss'
import './styles/index.scss'

const Neotheme = {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app, router, siteData }) {
      console.log(app, router, siteData);
      app.component('ArticleInfo', ArticleInfo)
    }
  }
export default Neotheme;