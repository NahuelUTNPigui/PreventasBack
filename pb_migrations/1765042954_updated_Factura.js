/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cl48ewfdrlczc0v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "da2mqiln",
    "name": "esperacliente",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pwjcfhjf",
    "name": "fechacliente",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cl48ewfdrlczc0v")

  // remove
  collection.schema.removeField("da2mqiln")

  // remove
  collection.schema.removeField("pwjcfhjf")

  return dao.saveCollection(collection)
})
