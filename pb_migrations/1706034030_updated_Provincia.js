/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ycv2rl3vzyv3lbg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v147r6m5",
    "name": "active",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ycv2rl3vzyv3lbg")

  // remove
  collection.schema.removeField("v147r6m5")

  return dao.saveCollection(collection)
})
