/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("99kqu0vxib506et")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "umhne45u",
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
  const collection = dao.findCollectionByNameOrId("99kqu0vxib506et")

  // remove
  collection.schema.removeField("umhne45u")

  return dao.saveCollection(collection)
})
