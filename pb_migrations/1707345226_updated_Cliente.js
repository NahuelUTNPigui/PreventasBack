/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n93vmko9xuzanug")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4juffsgb",
    "name": "formaPago",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "h4y88n2uxlylrqn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n93vmko9xuzanug")

  // remove
  collection.schema.removeField("4juffsgb")

  return dao.saveCollection(collection)
})
