/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("99kqu0vxib506et")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ya5lzzci",
    "name": "observacion",
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
  const collection = dao.findCollectionByNameOrId("99kqu0vxib506et")

  // remove
  collection.schema.removeField("ya5lzzci")

  return dao.saveCollection(collection)
})
