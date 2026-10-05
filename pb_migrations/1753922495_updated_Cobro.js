/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zuv79mpmo12qd4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "10cl1utk",
    "name": "completo",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "twfcrfac",
    "name": "partes",
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
  const collection = dao.findCollectionByNameOrId("3zuv79mpmo12qd4")

  // remove
  collection.schema.removeField("10cl1utk")

  // remove
  collection.schema.removeField("twfcrfac")

  return dao.saveCollection(collection)
})
