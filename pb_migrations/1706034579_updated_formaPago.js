/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h4y88n2uxlylrqn")

  collection.name = "FormaPago"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h4y88n2uxlylrqn")

  collection.name = "formaPago"

  return dao.saveCollection(collection)
})
