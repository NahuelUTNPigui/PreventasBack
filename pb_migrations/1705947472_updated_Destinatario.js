/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hohl6xycaxl2fje")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n8qh3ce8",
    "name": "idCliente",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hohl6xycaxl2fje")

  // remove
  collection.schema.removeField("n8qh3ce8")

  return dao.saveCollection(collection)
})
