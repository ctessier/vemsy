const markdown = require('markdown')
import asyncHandler from '../utils/async.js'

const markdownMiddleware = (req, res, next) => {
  if (typeof req.variables.data !== 'undefined') {
    const rendered = markdown.markdown.toHTML(req.variables.data.toString())
    req.variables.markdown = rendered
  }
  return next()
}

export default asyncHandler(markdownMiddleware)
