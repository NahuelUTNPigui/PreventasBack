/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgi6dfrvf1chksf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yqyfwuvl",
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
  const collection = dao.findCollectionByNameOrId("xgi6dfrvf1chksf")

  // remove
  collection.schema.removeField("yqyfwuvl")

  return dao.saveCollection(collection)
})
