import * as user from './blog/user'
import * as tag from './blog/tag'
import * as article from './blog/article'

export default {
  // 用户
  user_query: user.query,
  user_login: user.login,
  user_regist: user.regist,

  // 标签
  tag_addTag: tag.addTag,
  tag_query: tag.query,
  tag_delete: tag.deleteTag,

  // 文章
  articel_addArticle: article.addArticle,
  articel_articleList: article.query,
  article_delete: article.deleteArticle,
  article_update: article.update,
  article_findOne: article.getArticle
}
