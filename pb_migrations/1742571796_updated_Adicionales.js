/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c9jvy3975zpjxut")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ilumt0st",
    "name": "tipo",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c9jvy3975zpjxut")

  // remove
  collection.schema.removeField("ilumt0st")

  return dao.saveCollection(collection)
})
