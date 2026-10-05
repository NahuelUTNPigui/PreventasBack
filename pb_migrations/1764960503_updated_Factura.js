/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cl48ewfdrlczc0v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j6dsjotb",
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
    "id": "tmch3foc",
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
  const collection = dao.findCollectionByNameOrId("cl48ewfdrlczc0v")

  // remove
  collection.schema.removeField("j6dsjotb")

  // remove
  collection.schema.removeField("tmch3foc")

  return dao.saveCollection(collection)
})
