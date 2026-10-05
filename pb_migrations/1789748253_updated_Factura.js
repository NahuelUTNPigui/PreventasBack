/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cl48ewfdrlczc0v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "11jy2wp8",
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
  const collection = dao.findCollectionByNameOrId("cl48ewfdrlczc0v")

  // remove
  collection.schema.removeField("11jy2wp8")

  return dao.saveCollection(collection)
})
