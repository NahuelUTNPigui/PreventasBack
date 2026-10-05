/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n93vmko9xuzanug")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "za5p1tsh",
    "name": "responsableinscripto",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n93vmko9xuzanug")

  // remove
  collection.schema.removeField("za5p1tsh")

  return dao.saveCollection(collection)
})
