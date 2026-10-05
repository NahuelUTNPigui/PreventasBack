/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("911j68co7qrcwj8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ancjznas",
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
  const collection = dao.findCollectionByNameOrId("911j68co7qrcwj8")

  // remove
  collection.schema.removeField("ancjznas")

  return dao.saveCollection(collection)
})
