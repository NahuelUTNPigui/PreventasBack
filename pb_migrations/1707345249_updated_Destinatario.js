/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hohl6xycaxl2fje")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l5rvjmhe",
    "name": "localidad",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "2hk2qfpfwi9mhm0",
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
  collection.schema.removeField("l5rvjmhe")

  return dao.saveCollection(collection)
})
