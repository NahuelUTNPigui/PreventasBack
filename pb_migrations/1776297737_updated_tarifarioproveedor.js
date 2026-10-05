/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kvv5u99mndmzp6l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wbyapgiu",
    "name": "programado",
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
  collection.schema.removeField("wbyapgiu")

  return dao.saveCollection(collection)
})
