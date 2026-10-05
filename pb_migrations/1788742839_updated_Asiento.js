/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2lvdcsj0n6k5iz8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "za9oqu7e",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ymqmg1ow",
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
    "id": "xhjfrber",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2lvdcsj0n6k5iz8")

  // remove
  collection.schema.removeField("za9oqu7e")

  // remove
  collection.schema.removeField("ymqmg1ow")

  // remove
  collection.schema.removeField("xhjfrber")

  return dao.saveCollection(collection)
})
