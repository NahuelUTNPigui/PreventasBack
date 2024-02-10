/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1gnl04tjvfgi8m2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sdtmahxp",
    "name": "operacion",
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
  const collection = dao.findCollectionByNameOrId("1gnl04tjvfgi8m2")

  // remove
  collection.schema.removeField("sdtmahxp")

  return dao.saveCollection(collection)
})
