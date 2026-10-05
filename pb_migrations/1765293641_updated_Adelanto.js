/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzq77qtejvqgmsx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cn49h5ms",
    "name": "tipo",
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
    "id": "msamtbe2",
    "name": "efectivo",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yl4zgy1z4cdfvl7",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tsosz0ku",
    "name": "transferencia",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "2eof30gylfjbcvj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6hqrvdht",
    "name": "cheque",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "zkvhtu1gaujmjav",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzq77qtejvqgmsx")

  // remove
  collection.schema.removeField("cn49h5ms")

  // remove
  collection.schema.removeField("msamtbe2")

  // remove
  collection.schema.removeField("tsosz0ku")

  // remove
  collection.schema.removeField("6hqrvdht")

  return dao.saveCollection(collection)
})
