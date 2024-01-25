/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("04wfb4ofl0e6jn7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "owctnsny",
    "name": "active",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("04wfb4ofl0e6jn7")

  // remove
  collection.schema.removeField("owctnsny")

  return dao.saveCollection(collection)
})
