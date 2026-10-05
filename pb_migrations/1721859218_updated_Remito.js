/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1r2tkc39jdy2y57")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f312iixg",
    "name": "factura",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cl48ewfdrlczc0v",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1r2tkc39jdy2y57")

  // remove
  collection.schema.removeField("f312iixg")

  return dao.saveCollection(collection)
})
