/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ky3brwxsjznvljd")

  collection.name = "Acuentaproveedor"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ky3brwxsjznvljd")

  collection.name = "Acuentaprov"

  return dao.saveCollection(collection)
})
