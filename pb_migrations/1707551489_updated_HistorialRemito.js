/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1gnl04tjvfgi8m2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9gdvnr9s",
    "name": "remito",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1r2tkc39jdy2y57",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1gnl04tjvfgi8m2")

  // remove
  collection.schema.removeField("9gdvnr9s")

  return dao.saveCollection(collection)
})
