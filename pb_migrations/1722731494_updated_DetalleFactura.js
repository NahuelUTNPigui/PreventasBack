/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jj17h46tp26yfb1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "evldnkh1",
    "name": "descripcion",
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
  const collection = dao.findCollectionByNameOrId("jj17h46tp26yfb1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "evldnkh1",
    "name": "descipcion",
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
})
