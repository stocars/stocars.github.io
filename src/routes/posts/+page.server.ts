import fs from 'fs'
import path from 'path'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const postsPath = './md'
  const posts = fs.readdirSync(postsPath)
    .filter((file) => file.endsWith('.md'))
    .map((filename) => {
      const [slug] = filename.split('.')
      const fileContent = fs.readFileSync(path.join(postsPath, filename), {
        encoding: 'utf-8',
      })

      const meta = JSON.parse(fileContent.split('%%%').at(0) as string)

      return {
        slug,
        meta,
      }
    })
    .sort((a, b) => {
      const toDate = (date: string) => {
        const [day, month, year] = date.split('-');
        return new Date(+year, +month - 1, +day)
      }

      return toDate(a.meta.date) > toDate(b.meta.date) ? -1 : 1
    })

  return {
    posts,
  }
}
