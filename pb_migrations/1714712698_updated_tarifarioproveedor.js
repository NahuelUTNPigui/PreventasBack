/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kvv5u99mndmzp6l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q7uebikg",
    "name": "unidad",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "911j68co7qrcwj8",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kvv5u99mndmzp6l")

  // remove
  collection.schema.removeField("q7uebikg")

  return dao.saveCollection(collection)
})
