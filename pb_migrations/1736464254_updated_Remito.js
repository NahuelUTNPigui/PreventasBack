/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1r2tkc39jdy2y57")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nhdgou8z",
    "name": "hojaruta",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "gqcichl8w4ocjyx",
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
  collection.schema.removeField("nhdgou8z")

  return dao.saveCollection(collection)
})
