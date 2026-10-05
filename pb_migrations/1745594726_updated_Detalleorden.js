/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y0w76eaw518zur3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "preztpcs",
    "name": "orden",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ghfoqghrzyup5k3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y0w76eaw518zur3")

  // remove
  collection.schema.removeField("preztpcs")

  return dao.saveCollection(collection)
})
