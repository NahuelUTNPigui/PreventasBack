/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kvv5u99mndmzp6l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jhs02va0",
    "name": "oculto",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kvv5u99mndmzp6l")

  // remove
  collection.schema.removeField("jhs02va0")

  return dao.saveCollection(collection)
})
