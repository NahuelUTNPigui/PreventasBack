/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cl48ewfdrlczc0v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mpnlsfpw",
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
  const collection = dao.findCollectionByNameOrId("cl48ewfdrlczc0v")

  // remove
  collection.schema.removeField("mpnlsfpw")

  return dao.saveCollection(collection)
})
