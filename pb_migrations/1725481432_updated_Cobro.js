/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zuv79mpmo12qd4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sh3xpefs",
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
  const collection = dao.findCollectionByNameOrId("3zuv79mpmo12qd4")

  // remove
  collection.schema.removeField("sh3xpefs")

  return dao.saveCollection(collection)
})
