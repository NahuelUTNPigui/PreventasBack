/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nulja87z20e5z8c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iiynwkis",
    "name": "enrevision",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ttgivqbv",
    "name": "fecharevision",
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
  collection.schema.removeField("iiynwkis")

  // remove
  collection.schema.removeField("ttgivqbv")

  return dao.saveCollection(collection)
})
