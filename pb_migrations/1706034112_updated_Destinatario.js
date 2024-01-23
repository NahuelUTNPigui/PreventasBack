/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hohl6xycaxl2fje")

  // remove
  collection.schema.removeField("n8qh3ce8")

  // remove
  collection.schema.removeField("jnu9td2c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zich9ats",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jgvlulbb",
    "name": "horarios",
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
    "id": "kt6hl3ad",
    "name": "direccion",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jnu9td2c",
    "name": "cliente",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "n93vmko9xuzanug",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("zich9ats")

  // remove
  collection.schema.removeField("jgvlulbb")

  // remove
  collection.schema.removeField("kt6hl3ad")

  return dao.saveCollection(collection)
})
