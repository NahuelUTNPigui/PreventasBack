/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2eof30gylfjbcvj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yliwuoqn",
    "name": "unidad",
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
  const collection = dao.findCollectionByNameOrId("2eof30gylfjbcvj")

  // remove
  collection.schema.removeField("yliwuoqn")

  return dao.saveCollection(collection)
})
