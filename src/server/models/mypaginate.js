function paginate (query, options, callback) {
  query = query || {}
  const projection = {},
      findOptions = {}
    let docsPromise = [];
  const mQuery = this.find(query, projection, findOptions)
}

module.exports = function (schema) {
  schema.statics.paginate = paginate
}

module.exports.paginate = paginate
