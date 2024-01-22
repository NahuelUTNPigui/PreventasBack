/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("whppq2fqfk11qm6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n9li2yuz",
    "name": "proveedor",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ktuzvvkcsbsch5x",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("whppq2fqfk11qm6")

  // remove
  collection.schema.removeField("n9li2yuz")

  return dao.saveCollection(collection)
})
