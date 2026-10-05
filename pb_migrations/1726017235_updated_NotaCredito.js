/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sqfgplsdtb38k6w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kzv5ente",
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
  const collection = dao.findCollectionByNameOrId("sqfgplsdtb38k6w")

  // remove
  collection.schema.removeField("kzv5ente")

  return dao.saveCollection(collection)
})
