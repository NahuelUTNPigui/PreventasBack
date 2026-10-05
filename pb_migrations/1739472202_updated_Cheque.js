/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zkvhtu1gaujmjav")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "piolyyf7",
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
  const collection = dao.findCollectionByNameOrId("zkvhtu1gaujmjav")

  // remove
  collection.schema.removeField("piolyyf7")

  return dao.saveCollection(collection)
})
