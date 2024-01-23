/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2hk2qfpfwi9mhm0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1hsv5pxk",
    "name": "color",
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
  const collection = dao.findCollectionByNameOrId("2hk2qfpfwi9mhm0")

  // remove
  collection.schema.removeField("1hsv5pxk")

  return dao.saveCollection(collection)
})
