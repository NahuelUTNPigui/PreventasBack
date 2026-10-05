/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gqcichl8w4ocjyx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "okdqts2w",
    "name": "fechaentrega",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gqcichl8w4ocjyx")

  // remove
  collection.schema.removeField("okdqts2w")

  return dao.saveCollection(collection)
})
