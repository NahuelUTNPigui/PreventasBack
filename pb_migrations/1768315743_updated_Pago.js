/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nulja87z20e5z8c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gzblqilu",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nulja87z20e5z8c")

  // remove
  collection.schema.removeField("gzblqilu")

  return dao.saveCollection(collection)
})
