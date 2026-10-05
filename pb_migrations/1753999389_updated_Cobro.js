/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zuv79mpmo12qd4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jai0zhae",
    "name": "totaldescuentos",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rl3ylyhd",
    "name": "acuenta",
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
  collection.schema.removeField("jai0zhae")

  // remove
  collection.schema.removeField("rl3ylyhd")

  return dao.saveCollection(collection)
})
