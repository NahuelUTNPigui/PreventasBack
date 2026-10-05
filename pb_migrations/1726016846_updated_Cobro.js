/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zuv79mpmo12qd4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hbclnsuk",
    "name": "numero",
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
  const collection = dao.findCollectionByNameOrId("3zuv79mpmo12qd4")

  // remove
  collection.schema.removeField("hbclnsuk")

  return dao.saveCollection(collection)
})
