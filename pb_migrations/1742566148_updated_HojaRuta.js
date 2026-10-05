/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gqcichl8w4ocjyx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "glktntal",
    "name": "pago",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "nulja87z20e5z8c",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gqcichl8w4ocjyx")

  // remove
  collection.schema.removeField("glktntal")

  return dao.saveCollection(collection)
})
