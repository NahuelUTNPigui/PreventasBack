/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ktuzvvkcsbsch5x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3kj7mpgb",
    "name": "saldo",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ktuzvvkcsbsch5x")

  // remove
  collection.schema.removeField("3kj7mpgb")

  return dao.saveCollection(collection)
})
