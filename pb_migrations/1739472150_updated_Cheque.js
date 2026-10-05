/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zkvhtu1gaujmjav")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uykr8zfg",
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
  const collection = dao.findCollectionByNameOrId("zkvhtu1gaujmjav")

  // remove
  collection.schema.removeField("uykr8zfg")

  return dao.saveCollection(collection)
})
