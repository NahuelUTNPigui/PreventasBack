/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nulja87z20e5z8c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nxwq9emj",
    "name": "totalpagos",
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
    "id": "ocuy5s6z",
    "name": "totaladicionales",
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
  const collection = dao.findCollectionByNameOrId("nulja87z20e5z8c")

  // remove
  collection.schema.removeField("nxwq9emj")

  // remove
  collection.schema.removeField("ocuy5s6z")

  return dao.saveCollection(collection)
})
