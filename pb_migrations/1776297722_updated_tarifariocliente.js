/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("je6rsimlsaelle7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b6awlzkt",
    "name": "programado",
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
  collection.schema.removeField("b6awlzkt")

  return dao.saveCollection(collection)
})
