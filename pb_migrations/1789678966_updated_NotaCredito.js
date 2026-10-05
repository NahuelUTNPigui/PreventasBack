/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sqfgplsdtb38k6w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j41wva3e",
    "name": "eliminado",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sqfgplsdtb38k6w")

  // remove
  collection.schema.removeField("j41wva3e")

  return dao.saveCollection(collection)
})
