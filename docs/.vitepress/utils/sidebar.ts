import fs from 'fs'
import path from 'path'

interface SidebarItem {
  text: string
  link?: string
  items?: SidebarItem[]
}

export function getSidebar() {
  const categoriesPath = path.resolve(__dirname, '../../categories')
  const sidebar: Record<string, SidebarItem[]> = {}

  // Check if categories directory exists
  if (!fs.existsSync(categoriesPath)) {
    return sidebar
  }

  const categories = fs.readdirSync(categoriesPath)

  categories.forEach(category => {
    const categoryPath = path.join(categoriesPath, category)
    if (fs.statSync(categoryPath).isDirectory()) {
      const files = fs.readdirSync(categoryPath)
        .filter(file => file.endsWith('.md'))

      const items = files.map(file => {
        const filePath = path.join(categoryPath, file)
        const content = fs.readFileSync(filePath, 'utf-8')
        const titleMatch = content.match(/^#\s+(.*)$/m)
        const title = titleMatch ? titleMatch[1] : file.replace('.md', '')

        return {
          text: title,
          link: `/categories/${category}/${file.replace('.md', '')}`
        }
      })

      if (items.length > 0) {
        sidebar[`/categories/${category}/`] = [{
          text: category === 'frontend' ? '前端' :
                category === 'backend' ? '后端' :
                category === 'tools' ? '工具' :
                category === 'dedao' ? '得到' :
                category.charAt(0).toUpperCase() + category.slice(1),
          items
        }]
      }
    }
  })

  return sidebar
}