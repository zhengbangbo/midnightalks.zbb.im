/**
 * 测试各种不同的 parser 库，尝试找到最合适的那个
 *
 *  https://rss.lizhi.fm/rss/14275.xml
 *
 * - [x] rss-to-json  -> ok
 * - [ ] rss-parser
 * - [ ] feedparser
 * - [ ] htmlparser2
 * - [ ] fast-xml-parser
 */
import { default as rss2json } from 'rss-to-json'

export async function PodcastData() {
  try {
    const CORS_PROXY = 'https://cors-anywhere.zbb.workers.dev/'
    const url = 'https://rss.lizhi.fm/rss/14275.xml'
    return await rss2json(CORS_PROXY + encodeURIComponent(url))
  }
  catch (e) {
    console.error(e)
  }
}

