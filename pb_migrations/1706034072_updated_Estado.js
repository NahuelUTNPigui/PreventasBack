/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rn5oogr7yhg1dog")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "diy9vfmv",
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
  const collection = dao.findCollectionByNameOrId("rn5oogr7yhg1dog")

  // remove
  collection.schema.removeField("diy9vfmv")

  return dao.saveCollection(collection)
})
