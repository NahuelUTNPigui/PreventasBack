/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("je6rsimlsaelle7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m0qntf6v",
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
  const collection = dao.findCollectionByNameOrId("je6rsimlsaelle7")

  // remove
  collection.schema.removeField("m0qntf6v")

  return dao.saveCollection(collection)
})
