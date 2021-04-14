import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id and the id is the name of file
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
// exemple to fetch a api route
// export async function getAllPostIds() {
//   // Instead of the file system,
//   // fetch post data from an external API endpoint
//   const res = await fetch('..')
//   const posts = await res.json()
//   return posts.map(post => {
//     return {
//       params: {
//         id: post.id
//       }
//     }
//   })
// }
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  // exemplo de um retorno de array:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        // retira o .md no retorno dos nomes de cada arquivo
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}
// ABOUT DYNAMIC ROUTES
// after install remark 
// - make the function async, because the await that we have on the remark function
// - add the processedContent into function 
// - add contentHtml to object of return 
export async function getPostData(id) {
  //seta o nome do arquivo e recoloca o .md como extensao
  const fullPath = path.join(postsDirectory, `${id}.md`)
  // converte arquivo em utf8
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml 
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}