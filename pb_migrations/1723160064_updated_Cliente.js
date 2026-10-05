/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n93vmko9xuzanug")

  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n93vmko9xuzanug")

  collection.deleteRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
})
