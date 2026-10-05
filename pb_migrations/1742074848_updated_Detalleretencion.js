/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgi6dfrvf1chksf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t89ogq69",
    "name": "tipocobro",
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
    "id": "jiabcyfn",
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
    "id": "rcpxvtm7",
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
    "id": "pzkdkmoh",
    "name": "flujo",
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
  const collection = dao.findCollectionByNameOrId("xgi6dfrvf1chksf")

  // remove
  collection.schema.removeField("t89ogq69")

  // remove
  collection.schema.removeField("jiabcyfn")

  // remove
  collection.schema.removeField("rcpxvtm7")

  // remove
  collection.schema.removeField("pzkdkmoh")

  return dao.saveCollection(collection)
})
