/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lynb78wmk8ksvie")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fpaz9kmy",
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
  const collection = dao.findCollectionByNameOrId("lynb78wmk8ksvie")

  // remove
  collection.schema.removeField("fpaz9kmy")

  return dao.saveCollection(collection)
})
