import { normalizePages } from 'nextra/normalize-pages'
import { getPageMap } from 'nextra/page-map'
 
export async function getPosts() {
  const pageMap = await getPageMap('/posts')
  
  if (!pageMap || pageMap.length === 0) {
    return []
  }
  
  const normalized = normalizePages({
    list: pageMap,
    route: '/posts'
  })
  
  const { directories = [] } = normalized || {}
  
  return directories
    .filter(post => post.name !== 'index')
    .sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime())
}
 
export async function getTags() {
  const posts = await getPosts()
  const tags = posts.flatMap(post => post.frontMatter.tags)
  return tags
}