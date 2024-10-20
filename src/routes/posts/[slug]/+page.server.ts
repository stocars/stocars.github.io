import fs from 'fs'
import markdown from 'markdown-it'
import path from 'path'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const postsPath = './md'
  const fileContent = fs.readFileSync(path.join(postsPath, `${params.slug}.md`), {
    encoding: 'utf-8',
  })

  const [meta, content] = fileContent.split('%%%')
  const engine = markdown({
    html: true,
  })

  const classes = {
    'h1': 'text-4xl font-medium',
    'h2': 'text-3xl font-medium',
    'h3': 'text-2xl font-medium',
    'h4': 'text-xl font-medium',
    'h5': 'text-lg font-medium',
    'p': 'font-normal opacity-90',
    'a': 'font-medium text-accent hover:underline',
    'blockquote': 'italic px-3 py-2 border-l-2 border-l-primary-text text-text/70 bg-text/[0.025] rounded-r-lg',
    'code': 'bg-secondary/5 text-sm rounded-md p-1.5 text-accent font-semibold',
    'pre': 'bg-text/[0.02]',
    'img': 'rounded-md mb-5 border border-black/20',
    'li': 'ml-8 list-disc',
    'hr': 'border-text/10',
    'th': 'py-2 px-2 border text-accent border-text/10',
    'td': 'py-2 px-2 border border-text/10',
    'table': 'w-full border border-text/10 rounded-xl'
  }

  let html = engine.render(content)

  for (const tag in classes) {
    html = html.replaceAll(
      `<${tag}${['a', 'img'].includes(tag) ? '' : '>'}`, 
      `<${tag} class="${classes[tag as keyof typeof classes]}"${['a', 'img'].includes(tag) ? '' : '>'}`
    )
  }

  return {
    classes,
    post: {
      content: html,
      meta: JSON.parse(meta),
    },
  }
}