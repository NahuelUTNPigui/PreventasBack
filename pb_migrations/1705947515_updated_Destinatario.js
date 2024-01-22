/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hohl6xycaxl2fje")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jnu9td2c",
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
  const collection = dao.findCollectionByNameOrId("hohl6xycaxl2fje")

  // remove
  collection.schema.removeField("jnu9td2c")

  return dao.saveCollection(collection)
})
