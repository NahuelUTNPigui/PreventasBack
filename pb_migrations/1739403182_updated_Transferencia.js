/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2eof30gylfjbcvj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wufeo1b7",
    "name": "cliente",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "n93vmko9xuzanug",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u9uzwnjr",
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
  const collection = dao.findCollectionByNameOrId("2eof30gylfjbcvj")

  // remove
  collection.schema.removeField("wufeo1b7")

  // remove
  collection.schema.removeField("u9uzwnjr")

  return dao.saveCollection(collection)
})
