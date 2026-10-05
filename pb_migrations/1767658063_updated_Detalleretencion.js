/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgi6dfrvf1chksf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fr2g6fka",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgi6dfrvf1chksf")

  // remove
  collection.schema.removeField("fr2g6fka")

  return dao.saveCollection(collection)
})
