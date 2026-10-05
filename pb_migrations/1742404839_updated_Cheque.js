/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zkvhtu1gaujmjav")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6ldhpg5t",
    "name": "rechazado",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zkvhtu1gaujmjav")

  // remove
  collection.schema.removeField("6ldhpg5t")

  return dao.saveCollection(collection)
})
