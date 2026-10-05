/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1r2tkc39jdy2y57")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ygbfyiiy",
    "name": "etiqueta",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1r2tkc39jdy2y57")

  // remove
  collection.schema.removeField("ygbfyiiy")

  return dao.saveCollection(collection)
})
