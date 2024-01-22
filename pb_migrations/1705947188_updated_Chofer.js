/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("04wfb4ofl0e6jn7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qmrlbnnw",
    "name": "proveedor",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ktuzvvkcsbsch5x",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("04wfb4ofl0e6jn7")

  // remove
  collection.schema.removeField("qmrlbnnw")

  return dao.saveCollection(collection)
})
