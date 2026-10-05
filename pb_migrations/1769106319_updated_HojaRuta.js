/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gqcichl8w4ocjyx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gqxjh16y",
    "name": "primeravuelta",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gqcichl8w4ocjyx")

  // remove
  collection.schema.removeField("gqxjh16y")

  return dao.saveCollection(collection)
})
