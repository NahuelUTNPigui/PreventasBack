/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2hk2qfpfwi9mhm0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vyul5sdd",
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
  const collection = dao.findCollectionByNameOrId("2hk2qfpfwi9mhm0")

  // remove
  collection.schema.removeField("vyul5sdd")

  return dao.saveCollection(collection)
})
