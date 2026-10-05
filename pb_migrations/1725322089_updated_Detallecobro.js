/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8q0p7k8u7xn1131")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jrfyvi3g",
    "name": "cobro",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "3zuv79mpmo12qd4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8q0p7k8u7xn1131")

  // remove
  collection.schema.removeField("jrfyvi3g")

  return dao.saveCollection(collection)
})
