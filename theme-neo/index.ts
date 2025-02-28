// import DefaultTheme from 'vitepress/theme'
import DefaultTheme from 'vitepress/theme-without-fonts'
import ArticleInfo from './components/ArticleInfo.vue'
import Layout from './NeoLayout.vue'
import TagsPage from './components/TagsPage.vue'
// import './style.scss'
import './styles/index.scss'

const NeoTheme = {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app, router, siteData }) {
      console.log(app, router, siteData);
      app.component('ArticleInfo', ArticleInfo)
      app.component('TagsPage', TagsPage)
    }
  }
export default NeoTheme;