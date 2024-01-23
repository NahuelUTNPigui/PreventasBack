/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ktuzvvkcsbsch5x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bkrurnwh",
    "name": "CUIT",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bhgdrdlw",
    "name": "razonSocial",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i4imobav",
    "name": "observacion",
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
  const collection = dao.findCollectionByNameOrId("ktuzvvkcsbsch5x")

  // remove
  collection.schema.removeField("bkrurnwh")

  // remove
  collection.schema.removeField("bhgdrdlw")

  // remove
  collection.schema.removeField("i4imobav")

  return dao.saveCollection(collection)
})
