/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("je6rsimlsaelle7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "02n6ijzi",
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
  const collection = dao.findCollectionByNameOrId("je6rsimlsaelle7")

  // remove
  collection.schema.removeField("02n6ijzi")

  return dao.saveCollection(collection)
})
