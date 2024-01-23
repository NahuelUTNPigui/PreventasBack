/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ktuzvvkcsbsch5x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xe58q2zs",
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
  const collection = dao.findCollectionByNameOrId("ktuzvvkcsbsch5x")

  // remove
  collection.schema.removeField("xe58q2zs")

  return dao.saveCollection(collection)
})
