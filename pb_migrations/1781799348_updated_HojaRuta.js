/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gqcichl8w4ocjyx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nk6ovwuv",
    "name": "importancia",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gqcichl8w4ocjyx")

  // remove
  collection.schema.removeField("nk6ovwuv")

  return dao.saveCollection(collection)
})
