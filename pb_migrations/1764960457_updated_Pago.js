/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nulja87z20e5z8c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fb6klvnp",
    "name": "enliquidacion",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fdmwc6jo",
    "name": "fechaliquidacion",
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
  const collection = dao.findCollectionByNameOrId("nulja87z20e5z8c")

  // remove
  collection.schema.removeField("fb6klvnp")

  // remove
  collection.schema.removeField("fdmwc6jo")

  return dao.saveCollection(collection)
})
