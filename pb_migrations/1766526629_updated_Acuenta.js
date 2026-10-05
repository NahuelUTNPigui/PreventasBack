/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rnrk4u7ti9qispq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gjv0ikyi",
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
  const collection = dao.findCollectionByNameOrId("rnrk4u7ti9qispq")

  // remove
  collection.schema.removeField("gjv0ikyi")

  return dao.saveCollection(collection)
})
