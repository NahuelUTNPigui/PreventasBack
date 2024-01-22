/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2hk2qfpfwi9mhm0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3f0gdf9j",
    "name": "provincia",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ycv2rl3vzyv3lbg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2hk2qfpfwi9mhm0")

  // remove
  collection.schema.removeField("3f0gdf9j")

  return dao.saveCollection(collection)
})
