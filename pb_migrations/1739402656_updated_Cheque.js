/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zkvhtu1gaujmjav")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z5snar5d",
    "name": "propio",
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
  collection.schema.removeField("z5snar5d")

  return dao.saveCollection(collection)
})
